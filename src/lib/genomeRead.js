// FanDNA - genome read generator. Display-only: turns the user's 7-dim core into a named
// "through-line" type plus a personal one-line read for the genome home. Pure function - it
// reads nothing but the coreProfile it is handed and the count of mapped leagues, and it is
// NOT imported by scoring.js, so it cannot move a single match. Population mean/sd per dim are
// baked from a 60k random-answer scoreCore sweep; z-scoring against them is what keeps the read
// personal despite core-compression (raw values would hand almost everyone the same dims). The
// type names + phrase bank are locked editorial. US English.

const DIM_ORDER = ["loyalty","emotion","ambition","process","community","chaos","rootedness"];

// baked population stats (see header). Drives per-dim z-scores.
const MEAN = { loyalty:6.451, emotion:6.552, ambition:6.677, process:5.466, community:6.165, chaos:4.620, rootedness:6.502 };
const SD   = { loyalty:0.271, emotion:0.286, ambition:0.194, process:0.358, community:0.256, chaos:0.181, rootedness:0.264 };

// your strongest trait names you
const TYPE = {
  loyalty:"The Lifer", emotion:"The Believer", ambition:"The Chaser",
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
  chaos:["a pull toward the drama"],
  rootedness:["roots that run deep","home is the whole story"],
};

// low lines (your defining low - the thing you are notably NOT)
const LOW = {
  loyalty:["no debt owed to any badge","you'll walk when it's earned"],
  emotion:["ice in the veins","a cool head when it counts"],
  ambition:["the trophy was never the point"],
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
