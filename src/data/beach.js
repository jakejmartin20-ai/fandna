// FanDNA - PRO BEACH HOCKEY: the completion Easter egg. THE ONE THAT SKIPS THE RIGOR.
//
// A surprise match for takers who finish ALL FIFTEEN leagues (the full 5-5-5 roster: the true
// endgame). Scored off the pure core by nearest-of-six, with NO module, NO reachability floor,
// NO magnet ceiling, and none of the four rigor axes. It exists purely for delight.
//
// QUARANTINE (non-negotiable): NEVER imported by scoring.js, sportData.js, manifest.js, or any
// fixture / replay harness. It is not a league. It must not appear in a sweep, a signature set, or
// the canonical replay. It reads a genome that already exists and returns a joke team. Imported
// ONLY by the egg's own gated component.
//
// The joke is the LEAGUE, not the person. Every read names a real trait the taker holds (why-you),
// then lands it on an absurd, genuinely-defunct beach roller-hockey team, in you-earned-a-
// gloriously-stupid-trophy voice. Warm, never mean. User-facing copy: no em dashes.
//
// Pro Beach Hockey was real: six centrally-owned teams on a sand rink at Huntington Beach,
// ramps behind the nets, a two-point arc, live bands, 1998 to 2000 on ESPN2. Team flavor below
// is drawn from the surviving record (probeachhockey.net, the ESPN retrospective, Wikipedia).

const DIMS = ["loyalty","emotion","ambition","process","community","chaos","rootedness"];

export const BEACH_TEAMS = [
  {
    key: "WEB", name: "Web Warriors", tagline: "The nerds who mean business.",
    dims: { loyalty:6, emotion:4, ambition:9, process:9, community:5, chaos:2, rootedness:6 },
    read: "Fifteen leagues in, and this is what the machine hands you: the Web Warriors. Fitting. You read the manual, run the system, and win quietly while everyone underestimates you. Two titles and a 105 mile-per-hour slapshot later, turns out the nerds were never the punchline. The name was.",
  },
  {
    key: "XPR", name: "Xpress", tagline: "Won it all. Nobody noticed.",
    dims: { loyalty:4, emotion:3, ambition:8, process:7, community:3, chaos:4, rootedness:2 },
    read: "Congratulations, your reward is the Xpress, and nobody will believe you won it. Nobody believed them either, right up until a University of Alaska Anchorage legend named Steve Bogeyevac quietly hung 19 points in 10 games and walked off with the 1999 title. You do your best work unwatched. Their logo was a hand-me-down from a team that folded in a season. Neither of you ever needed the credit.",
  },
  {
    key: "DAWG", name: "Dawg Pac", tagline: "Loud, loyal, robbed at the buzzer.",
    dims: { loyalty:9, emotion:8, ambition:6, process:3, community:10, chaos:7, rootedness:8 },
    read: "Your prize is the Dawg Pac, and their fans are already barking. You lead with loyalty and volume and drag the whole crew into everything, which is exactly how they played: rabid, adored, and robbed a single game short of a ring, the same year their own guy walked off with MVP. Cuba Gooding Jr. coached them once. You're in good, deeply confusing company.",
  },
  {
    key: "SALSA", name: "Salsa", tagline: "All flavor. All crowd. No ring.",
    dims: { loyalty:5, emotion:10, ambition:4, process:2, community:8, chaos:6, rootedness:5 },
    read: "The Salsa never won a single thing and are, by their own accounting, home to one of the most iconic logos in professional sports history. Sit with that. You're cut the same way: all flavor, all crowd, silverware strictly optional. Trophies are for teams with worse fans. You'd lead the league in penalty minutes too, but that stays between us.",
  },
  {
    key: "METAL", name: "Heavy Metal", tagline: "Guitar solos between the saves.",
    dims: { loyalty:4, emotion:7, ambition:6, process:2, community:5, chaos:10, rootedness:3 },
    read: "Somewhere a goalie is ripping a guitar solo mid-game. Meet Heavy Metal, your team, fronted by that exact man, who also happened to be the winningest goalie the league ever had. You can be the loudest thing on the beach and still get it done, apparently. Certified hardest-partying squad in the league. There was a vote.",
  },
  {
    key: "GARG", name: "Gargoyles", tagline: "Goons, actors, and a cult in face paint.",
    dims: { loyalty:3, emotion:8, ambition:3, process:5, community:6, chaos:8, rootedness:6 },
    read: "You get the Gargoyles, and yes, this is a compliment. You're the theatrical oddball with the small devoted cult, and so were they: goons, actors, a set of twins, and fans who wore face paint and leather to a beach. One of them was later murdered in Saw and brought back for the sequels. You'd have loved every second.",
  },
];

// Nearest-of-six on the seven dims. Pass the taker's coreProfile (or standing() percentiles).
// Pure function, no engine dependency, no side effects.
export function matchBeach(profile){
  if (!profile) return null;
  let best = null, bestDist = Infinity;
  for (const team of BEACH_TEAMS){
    let d = 0;
    for (const k of DIMS){ const diff = (profile[k] || 0) - team.dims[k]; d += diff * diff; }
    if (d < bestDist){ bestDist = d; best = team; }
  }
  return best; // { key, name, tagline, dims, read }
}
