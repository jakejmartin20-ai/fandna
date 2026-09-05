// FanDNA - genome read generator. Display-only: turns the user's 7-dim core into a named
// "through-line" type plus a personal one-line read for the genome home. Pure function - it
// reads nothing but the coreProfile it is handed and the count of mapped leagues, and it is
// NOT imported by scoring.js, so it cannot move a single match. Population mean/sd per dim are
// baked from a 60k random-answer scoreCore sweep; z-scoring against them is what keeps the read
// personal despite core-compression (raw values would hand almost everyone the same dims). The
// type names + phrase bank are locked editorial. US English.

const DIM_ORDER = ["loyalty","emotion","ambition","process","community","chaos","rootedness"];

// baked population stats (see header). Drives per-dim z-scores.
const MEAN = { loyalty:6.2, emotion:6.2, ambition:6.251, process:5.096, community:5.196, chaos:5.199, rootedness:5.729 };
const SD   = { loyalty:1.736, emotion:1.11, ambition:1.402, process:1.88, community:1.892, chaos:1.943, rootedness:1.745 };

// -- Population standing: the ONLY honest thing a drawn band can mean -------------------------
// The raw core is an AVERAGE of each trait's own answers, so it still bunches toward the middle,
// and the seven traits do not share a mean: your raw 7 in one trait is not a raw 7 in another.
// Drawing raw values side by side draws those between-trait offsets, not the person.
// So every DISPLAY of the core - the gel strip, the share card, the compare strips, the text
// blocks - runs through standing(): where you sit against the same population the read itself
// ranks on. It is monotone in z, so the tallest band is ALWAYS the trait the read names you for.
// Display-only: this file is not imported by scoring.js and cannot move a single match.
// The MATCH uses a different transform (decompressProfile, in scoring.js) because a club has to
// be met in the units it was authored in. Same reading, different ruler. /how owns that.
function erf(x){
  const s = x<0 ? -1 : 1; x = Math.abs(x);
  const t = 1/(1+0.3275911*x);
  const y = 1 - (((((1.061405429*t - 1.453152027)*t) + 1.421413741)*t - 0.284496736)*t + 0.254829592)*t*Math.exp(-x*x);
  return s*y;
}
export function standing(profile){
  const out = {};
  if(!profile) return out;
  for(const d of DIM_ORDER){
    const sd = SD[d] || 1;
    const z  = ((profile[d]||0) - (MEAN[d]||0)) / sd;
    const p  = 0.5 * (1 + erf(z/Math.SQRT2));   // share of the population you sit above
    out[d]   = Math.max(0, Math.min(10, p*10));
  }
  return out;
}
// The word beneath a band. Even fifths of the population, so the ladder is honest by construction.
export function standingWord(v){
  const x = v||0;
  if(x>=8) return "high";
  if(x>=6) return "above";
  if(x>=4) return "typical";
  if(x>=2) return "below";
  return "low";
}

// your strongest trait names you
const TYPE = {
  loyalty:"The Lifer", emotion:"The Diehard", ambition:"The Chaser",
  process:"The Architect", community:"The Ultra", chaos:"The Thrill-Seeker",
  rootedness:"The Native",
};

// high lines (when a trait is among your strongest) - variants so two of a type still differ
const HIGH = {
  loyalty:["loyalty that doesn't bend","you don't switch sides, ever","a badge for life"],
  emotion:["every result felt in the body","you live and die by the score","joy and grief at full volume"],
  ambition:["a hunger for the very top","only the summit will do"],
  process:["faith in the plan over the moment","trust the system, not the spark","the long game, always"],
  community:["it only counts when it's shared","belonging is the whole point"],
  chaos:["a pull toward the drama","you live for the swing","the messier the better"],
  rootedness:["roots that run deep","home is the whole story"],
};

// low lines (your defining low - the thing you are notably NOT)
const LOW = {
  loyalty:["no debt owed to any badge","you'll walk when it's earned"],
  emotion:["ice in the veins","a cool head when it counts"],
  ambition:["the trophy was never the point","you'd take the club over the cup","no itch for the top of the table"],
  process:["instinct over instruction","you go on the gut"],
  community:["you need no one's blessing","alone is fine by you"],
  chaos:["a craving for the steady hand","calm over carnage","spare you the theatrics"],
  rootedness:["at home anywhere","no soil holds you"],
};

const CLOSING_MANY = "One temperament, expressed in every league you map.";
const CLOSING_ONE  = "One league in. Map another and the pattern starts to show.";

const SEC_GATE =  0.4;   // secondary trait shows only if meaningfully above typical
const LOW_GATE = -0.4;   // defining-low shows only if meaningfully below typical

function cap(s){ return s ? s.charAt(0).toUpperCase()+s.slice(1) : s; }

// deterministic variant pick: same profile always lands the same words; neighbors differ.
function pick(arr, profile, salt){
  if(!arr || arr.length<=1) return arr ? arr[0] : "";
  let h = salt>>>0;
  for(const d of DIM_ORDER) h = (Math.imul(h,31) + Math.round((profile[d]||0)*10)) >>> 0;
  return arr[h % arr.length];
}

// Text-native genome visual for shares: each of the 7 dims -> one block character by height,
// drawn off standing() - the SAME transform the gel strip and the share card now use, so the text
// strip and the drawn strip are the same picture in two alphabets. Fixed dim order so a person's
// strip is stable and recognizable. Display-only; not in the scoring graph.
export function coreBlocks(profile){
  const B = "\u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588"; // ▁▂▃▄▅▆▇█
  if(!profile) return "";
  const st = standing(profile);
  return DIM_ORDER.map(d=>{
    const t = Math.max(0, Math.min(1, (st[d]||0)/10));
    return B[Math.round(t*(B.length-1))];
  }).join("");
}

// coreProfile: { loyalty..rootedness }; mappedCount: number of live leagues the user has mapped.
// returns { headline, read, closing } - or null when there is no core yet.
export function generateRead(coreProfile, mappedCount){
  if(!coreProfile) return null;

  const z = {};
  for(const d of DIM_ORDER){
    const sd = SD[d] || 1;
    z[d] = ((coreProfile[d]||0) - (MEAN[d]||0)) / sd;
  }

  const ranked = DIM_ORDER.slice().sort((a,b)=>z[b]-z[a]);
  const primary   = ranked[0];
  const secondary = ranked[1];
  const low       = ranked[ranked.length-1];

  const headline = TYPE[primary];
  const parts = [ pick(HIGH[primary], coreProfile, 1) ];
  if(z[secondary] >  SEC_GATE) parts.push(pick(HIGH[secondary], coreProfile, 2));
  if(z[low]       <  LOW_GATE) parts.push(pick(LOW[low],        coreProfile, 3));

  let body;
  if(parts.length>=3)      body = parts[0]+", "+parts[1]+", and "+parts[2];
  else if(parts.length===2) body = parts[0]+", and "+parts[1];
  else                      body = parts[0];

  const read    = cap(body) + ".";
  const closing = (mappedCount>=2) ? CLOSING_MANY : CLOSING_ONE;

  return { headline, read, closing };
}
