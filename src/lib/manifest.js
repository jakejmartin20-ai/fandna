// FanDNA sports manifest. The share string, the genome home strands, the strand hooks,
// and (later) the cross-sport hint all read from THIS list, never hardcoded. Flip a sport's
// `live` flag to turn it on. Any live sport can be taken first; the shared core is the
// one-time prerequisite, not any particular sport.
//
// `group` ties each sport to a family on the genome home (the two branches). FAMILIES sets
// the order the branches appear in and each branch's label + glyph. Adding a league is one
// row in SPORTS with its `group`; it drops into the right branch automatically, no other
// change needed.
const SPORTS = [
  { code: "PL",  name: "Premier League", live: true,  hook: "Which club are you?",     group: "global" },
  { code: "NFL", name: "NFL",            live: false, hook: "Which franchise are you?", group: "american" },
  { code: "MLB", name: "MLB",            live: false, hook: "Which ballclub are you?",  group: "american" },
  { code: "NBA", name: "NBA",            live: false, hook: "Which team are you?",      group: "american" },
  { code: "BL",  name: "Bundesliga",    live: true,  hook: "Which club are you?",      group: "global" },
  { code: "LL",  name: "La Liga",       live: false, hook: "Which club are you?",      group: "global" },
];

// The two branches on the genome home, in display order. `glyph` picks the header mark.
const FAMILIES = [
  { id: "global",   label: "The Global Game", glyph: "globe" },
  { id: "american", label: "American Sports", glyph: "star" },
];

function liveSports(){ return SPORTS.filter(s=>s.live); }
function sportName(code){ return (SPORTS.find(s=>s.code===code)||{}).name || code; }

export { SPORTS, FAMILIES, liveSports, sportName };
