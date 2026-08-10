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
  { code: "NFL", name: "NFL",            live: true, hook: "Which franchise are you?", group: "american" },
  { code: "MLB", name: "MLB",            live: true,  hook: "Which ballclub are you?",  group: "american" },
  { code: "NBA", name: "NBA",            live: false, hook: "Which team are you?",      group: "american" },
  { code: "NHL", name: "NHL",            live: false, hook: "Which NHL team are you?",  group: "american" },
  { code: "CFB", name: "College Football", live: true,  hook: "Which program are you?", group: "american" },
  { code: "BL",  name: "Bundesliga",    live: true,  hook: "Which club are you?",      group: "global" },
  { code: "LL",  name: "La Liga",       live: true,  hook: "Which club are you?",      group: "global" },
  { code: "L1",  name: "Ligue 1",       live: true,  hook: "Which club are you?",      group: "global" },
  { code: "SA",  name: "Serie A",       live: true,  hook: "Which club are you?",      group: "global" },
  { code: "F1",  name: "Formula 1",     live: false, hook: "Which team are you?",       group: "world" },
  { code: "AFL", name: "AFL",           live: false, hook: "Which club are you?",       group: "world" },
  { code: "IPL", name: "IPL",           live: false, hook: "Which franchise are you?",  group: "world" },
];

// The two branches on the genome home, in display order. `glyph` picks the header mark.
const FAMILIES = [
  { id: "global",   label: "Football",         glyph: "globe" },
  { id: "american", label: "American Sports", glyph: "star" },
  { id: "world",    label: "World",           glyph: "world" },
];

function liveSports(){ return SPORTS.filter(s=>s.live); }
function sportName(code){ return (SPORTS.find(s=>s.code===code)||{}).name || code; }

export { SPORTS, FAMILIES, liveSports, sportName };
