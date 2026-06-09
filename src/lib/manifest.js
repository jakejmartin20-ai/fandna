// FanDNA — sports manifest. The share string, the genome home strands, and the hint all
// read from THIS list, never hardcoded. Flip a sport's `live` flag to turn it on.
// Phase 2 ships PL only; NFL stays inert until the Phase 5 flip.
const SPORTS = [
  { code: "PL",  name: "Premier League", live: true  },
  { code: "NFL", name: "NFL",            live: false },
];

function liveSports(){ return SPORTS.filter(s=>s.live); }
function sportName(code){ return (SPORTS.find(s=>s.code===code)||{}).name || code; }

export { SPORTS, liveSports, sportName };
