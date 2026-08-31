// FanDNA sports manifest. The share string, the genome home strands, the strand hooks,
// and (later) the cross-sport hint all read from THIS list, never hardcoded. Flip a sport's
// `live` flag to turn it on. Any live sport can be taken first; the shared core is the
// one-time prerequisite, not any particular sport.
//
// `group` ties each sport to a family on the genome home (the two branches). FAMILIES sets
// the order the branches appear in and each branch's label + glyph. Adding a league is one
// row in SPORTS with its `group`; it drops into the right branch automatically, no other
// change needed. `sport` is the plain-language discipline shown on the genome-home cards
// (e.g. "IPL · CRICKET") so an abbreviation is never opaque.
const SPORTS = [
  { code: "PL",  name: "Premier League", live: true,  hook: "Which club are you?",     sport: "Football",          group: "global" },
  { code: "NFL", name: "NFL",            live: true,  hook: "Which franchise are you?", sport: "American Football",  group: "american" },
  { code: "MLB", name: "MLB",            live: true,  hook: "Which ballclub are you?",  sport: "Baseball",           group: "american" },
  { code: "NBA", name: "NBA",            live: false, hook: "Which team are you?",      sport: "Basketball",         group: "american" },
  { code: "NHL", name: "NHL",            live: false, hook: "Which NHL team are you?",  sport: "Ice Hockey",         group: "american" },
  { code: "CFB", name: "College Football", live: true, hook: "Which program are you?",  sport: "American Football",  group: "american" },
  { code: "BL",  name: "Bundesliga",    live: true,  hook: "Which club are you?",      sport: "Football",           group: "global" },
  { code: "LL",  name: "La Liga",       live: true,  hook: "Which club are you?",      sport: "Football",           group: "global" },
  { code: "L1",  name: "Ligue 1",       live: true,  hook: "Which club are you?",      sport: "Football",           group: "global" },
  { code: "SA",  name: "Serie A",       live: true,  hook: "Which club are you?",      sport: "Football",           group: "global" },
  { code: "F1",  name: "Formula 1",     live: true,  hook: "Which team are you?",      sport: "Motor Racing",       group: "world" },
  { code: "AFL", name: "AFL",           live: true,  hook: "Which club are you?",      sport: "Australian Rules",   group: "world" },
  { code: "IPL", name: "IPL",           live: true , hook: "Which franchise are you?", sport: "Cricket",            group: "world" },
  { code: "TOP14", name: "Top 14",      live: false, hook: "Which club are you?",      sport: "Rugby",              group: "world" },
  { code: "EL",  name: "EuroLeague",    live: false, hook: "Which club are you?",      sport: "Basketball",         group: "world" },
];

// The two branches on the genome home, in display order. `glyph` picks the header mark.
const FAMILIES = [
  { id: "global",   label: "Football",         glyph: "soccerball" },
  { id: "american", label: "American Sports", glyph: "star" },
  { id: "world",    label: "World",           glyph: "globe" },
];

function liveSports(){ return SPORTS.filter(s=>s.live); }
function sportName(code){ return (SPORTS.find(s=>s.code===code)||{}).name || code; }

export { SPORTS, FAMILIES, liveSports, sportName };
