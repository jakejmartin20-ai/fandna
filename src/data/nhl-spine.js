// FanDNA - NHL on the shared cross-sport SPINE (Option B), s42.
//
// NHL answers the 7 canonical archetype questions (spine.js) once, scored here per league.
// NHL is the leanest fit on the spine so far: only TWO archetypes honestly separate its field,
// so only two are scored and the other five stay bespoke.
//
//   S4 (roots)    - CARRY-OVER. NHL's roots slider (nhl_q6) already footprints exactly by
//                   rootedness, so its option->team cells are reused 1:1 (provably lossless).
//   S2 (pressure) - RE-AUTHOR. NHL's clutch-moment question (nhl_q11) is a near-twin of the shared
//                   pressure question; its pours/cold/sharpen/loosen poles carry over as-authored.
//                   nhl_q11 had a fifth option ("stay level") with no equivalent among the four
//                   shared poles, so the six clubs that sat on it (WPG, OTT, MIN, CBJ, SEA, UTA)
//                   carry NO pressure lean here - an honest-zero, true to "stay level". Forcing any
//                   of them into a pole is both untrue and thins Toronto's floor, so they are left
//                   unscored on S2. This LIFTS the fragile Original-Six floor (Toronto held at 1.08%).
//
// NOT scored - kept bespoke:
//   S1 (loyalty)  - NHL is loyalty-saturated (almost every club sits 7-10); the archetype can't
//                   separate the field and forcing it nudges Toronto to the floor. Keeps nhl_q1.
//   S3 (ambition) - no ambition-degree source question; forcing an ambition footprint pushes Toronto
//                   under the reach floor. Keeps nhl_q4.
//   S7 (role)     - no clean source; forcing it thins Montreal. Keeps the bespoke role questions.
//   S5 (wins)     - no "what carried the win" source.
//   S6 (build)    - no build/rebuild source.
//
// Base data (teamDims, the full question bank) stays in nhl.js untouched; this add-on selects the
// unique module and carries the spine tables, mirroring nba-spine.js / f1-spine.js / afl-spine.js.
import { moduleQuestions as nhlModule, scoring as nhlScoring } from "./nhl";

export const MODULE_UNIQUE = ["nhl_q1", "nhl_q2", "nhl_q3", "nhl_q4", "nhl_q5", "nhl_q6"];
export const moduleQuestions = nhlModule.filter(q => MODULE_UNIQUE.includes(q.id));
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, nhlScoring[id]]));

// Spine scoring. S4 reuses the exact NHL roots cells; S2 re-authored to soul (six "stay level" clubs unleaned).
export const spineScoring = {
  S2: {                     // pressure - re-author (from nhl_q11 A-D; "stay level" clubs honest-zeroed)
    A: { TOR: 2, BOS: 2, CHI: 2, NYR: 2, EDM: 2, CGY: 2, VAN: 2, PHI: 2, BUF: 2, WSH: 2, FLA: 2, SJS: 2 },   // it pours out
    B: { DET: 2, NJD: 2, LAK: 2, VGK: 2 },                                                                    // cold and still (the clinical machine clubs)
    C: { MTL: 2, STL: 2, NYI: 2, CAR: 2, DAL: 2, PIT: 2, COL: 2, TBL: 2 },                                    // sharpen and lock in
    D: { NSH: 2, ANA: 2 },                                                                                     // loosen up, freer
    // WPG, OTT, MIN, CBJ, SEA, UTA: no lean (were "stay level")
  },
  S4: nhlScoring.nhl_q6,    // roots    - carry-over (slider, cells 1:1)
  // S1 (loyalty), S3 (ambition), S5 (wins), S6 (build), S7 (role) intentionally not scored - flat / no source.
};

export const spinePhase = {
  S2: "What it comes down to",   // inherits nhl_q11's phase
  S4: "The fine print",          // inherits nhl_q6's phase
};
