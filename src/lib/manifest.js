// FanDNA sports manifest. The share string, the genome home strands, the strand hooks,
// and (later) the cross-sport hint all read from THIS list, never hardcoded. Flip a sport's
// `live` flag to turn it on. Any live sport can be taken first; the shared core is the
// one-time prerequisite, not any particular sport.
const SPORTS = [
  { code: "PL",  name: "Premier League", live: true,  hook: "Which club are you?" },
  { code: "NFL", name: "NFL",            live: false, hook: "Which franchise are you?" },
  { code: "MLB", name: "MLB",            live: false, hook: "Which ballclub are you?" },
];

function liveSports(){ return SPORTS.filter(s=>s.live); }
function sportName(code){ return (SPORTS.find(s=>s.code===code)||{}).name || code; }

export { SPORTS, liveSports, sportName };
