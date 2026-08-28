// FanDNA telemetry receiver. One anonymous counter bump per completed result.
// Stores TOTALS ONLY: no identity, no IP, no answers, no cookies. The payload is
// validated against a strict allowlist (live sports, real club keys, known bands)
// so junk requests cannot pollute the counters. If the storage service or its
// keys are missing, this answers OK and does nothing: the app must never care.
// Counter keys (all monthly):
//   t:SPORT:CLUB:BAND:YYYY-MM   result count per club per margin band
//   k:SPORT:BUCKET:YYYY-MM      where the result sat in the taker's core-only ranking
//   re:SPORT:YYYY-MM            retakes (module retaken over an existing result)

const CLUBS = {
  PL: new Set(["AR","AV","BH","BO","BR","CH","CP","CV","EV","FU","HU","IT","LE","LI","LU","MC","MU","NC","NF","SP","SU","WH","WO"]),
  BL: new Set(["B04","BAY","BMG","BVB","ELV","FCA","FCU","HSV","KOE","M05","RBL","S04","SCF","SCP","SGE","SVW","TSG","VFB"]),
  LL: new Set(["ALA","ATH","ATM","BAR","BET","CEL","DEP","ELC","ESP","GET","LEV","MAL","OSA","RAC","RAY","RMA","RSO","SEV","VAL","VIL"]),
  L1: new Set(["AJA","ANG","BRE","HAC","LEM","LEN","LIL","LOR","LYO","MAR","MON","NIC","PFC","PSG","REN","STR","TOU","TRO"]),
  SA: new Set(["ATA","BOL","CAG","COM","FIO","FRO","GEN","INT","JUV","LAZ","LEC","MIL","MON","NAP","PAR","ROM","SAS","TOR","UDI","VEN"]),
  MLB: new Set(["ATH","ATL","AZ","BAL","BOS","CHC","CIN","CLE","COL","CWS","DET","HOU","KC","LAA","LAD","MIA","MIL","MIN","NYM","NYY","PHI","PIT","SD","SEA","SF","STL","TB","TEX","TOR","WSH"]),
  NBA: new Set(["LAL","BOS","GSW","CHI","SAS","OKC","PHI","DEN","MIL","IND","MIN","DET","MEM","UTA","POR","NYK","CLE","SAC","ATL","WAS","BKN","LAC","PHX","MIA","DAL","HOU","TOR","ORL","NOP","CHA"]),
  CFB: new Set(["AIR","ALA","APP","ARK","ARM","AUB","BOI","BYU","CLM","COL","CST","ECU","FLA","FSU","GAT","HAW","IND","IOW","KSU","LSU","MAR","MIA","MIC","MST","MSU","NAV","NDM","NEB","OKL","OKS","OLE","ORE","OSU","PSU","SCA","SMU","STA","TAM","TCU","TEN","TEX","TTU","TUL","UCF","UGA","USC","VAN","VAT","WAS","WAZ","WIS","WVU"]),
  NFL: new Set(["ARI","ATL","BAL","BUF","CAR","CHI","CIN","CLE","DAL","DEN","DET","GB","HOU","IND","JAX","KC","LAC","LAR","LV","MIA","MIN","NE","NO","NYG","NYJ","PHI","PIT","SEA","SF","TB","TEN","WAS"]),
  NHL: new Set(["MTL","TOR","BOS","DET","CHI","NYR","EDM","CGY","VAN","WPG","OTT","PHI","BUF","STL","NYI","MIN","NSH","CBJ","NJD","CAR","DAL","PIT","WSH","COL","LAK","TBL","VGK","FLA","SEA","UTA","ANA","SJS"]),
  F1: new Set(["FER","MER","MCL","RBR","WIL","AST","ALP","HAA","RB","AUD","CAD"]),
  AFL: new Set(["CAR","COL","ESS","GEE","HAW","MEL","NTH","RIC","STK","WBD","ADE","PTA","WCE","FRE","SYD","GWS","BRL","GCS"]),
  IPL: new Set(["CSK","MI","RCB","KKR","DC","SRH","RR","PBKS","GT","LSG"]),
  TOP14: new Set(["TLS","RCT","UBB","LAR","ASM","SFP","R92","ABR","PAU","USP","CAS","MHR","LOU","USM"]),
  EL: new Set(["RMA","BAR","BAS","VAL","OLY","PAN","FEN","EFS","BES","PTZ","RED","MIL","VIR","BAY","ASV","PRS","HAP","MAC","ZAL","DUB"]),
};
const BANDS = new Set(["tie", "close", "mid", "clear"]);

function bucketOf(rank) {
  if (!rank || rank < 1) return "x";
  if (rank <= 4) return String(rank);
  if (rank <= 8) return "5_8";
  return "9p";
}

export default async function handler(req, res) {
  if (req.method !== "POST") { res.status(405).end(); return; }
  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) { b = null; } }
  if (!b || typeof b !== "object") { res.status(400).end(); return; }

  const sport = String(b.s || "");
  const club = String(b.c || "");
  const band = String(b.b || "");
  const rank = Number.isInteger(b.r) ? b.r : 0;
  const retake = b.re === 1 ? 1 : 0;

  if (!CLUBS[sport] || !CLUBS[sport].has(club) || !BANDS.has(band) || rank < 0 || rank > 64) {
    res.status(400).end(); return;
  }

  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) { res.status(200).end(); return; }

  const month = new Date().toISOString().slice(0, 7);
  const cmds = [
    ["INCR", "t:" + sport + ":" + club + ":" + band + ":" + month],
    ["INCR", "k:" + sport + ":" + bucketOf(rank) + ":" + month],
  ];
  if (retake) cmds.push(["INCR", "re:" + sport + ":" + month]);

  try {
    await fetch(url + "/pipeline", {
      method: "POST",
      headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
      body: JSON.stringify(cmds),
    });
  } catch (e) { /* counting is best-effort, never an error the app sees */ }
  res.status(204).end();
}
