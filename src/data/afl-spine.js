// FanDNA - AFL on the shared cross-sport SPINE (Option B), s41.
//
// AFL answers the 7 canonical archetype questions (spine.js) once, scored here per league.
// Three are carry-overs: they reuse the exact option->team cells from the matching AFL question
// (proven lossless). Two - S2 (pressure) and S7 (role) - are re-authored to each club's enduring
// soul. S5 (wins) and S6 (build) are NOT scored for AFL: the win-attribution axis is flat across
// the clubs and AFL has no build question, so forcing them on would thin the field - AFL keeps its
// own q2 (champion team) and q11 (execution style) bespoke instead.
//
// Universalizing S2 collapsed AFL's triple emotion measurement (S2 replaces q4 + q6) and S7 collapsed
// the role echo (S7 replaces q12), and both LIFTED the fragile expansion-club floor (GWS 0.86% -> 1.06%).
//
// Base data (teamDims, the full question bank) stays in afl.js untouched; this add-on selects the
// unique module and carries the spine tables, mirroring nba-spine.js / f1-spine.js.
import { moduleQuestions as aflModule, scoring as aflScoring } from "./afl";

export const MODULE_UNIQUE = ["afl_q1", "afl_q2", "afl_q7", "afl_q8", "afl_q10", "afl_q11"];
export const moduleQuestions = aflModule.filter(q => MODULE_UNIQUE.includes(q.id));
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, aflScoring[id]]));

// Spine scoring. Carry-overs reuse the exact AFL cells; S2 / S7 re-authored to soul.
export const spineScoring = {
  S1: aflScoring.afl_q5,   // loyalty  - carry-over
  S2: {                    // pressure - re-author
    A: { RIC: 2, STK: 2, PTA: 2, FRE: 2, COL: 2 },   // it pours out
    B: { CAR: 2, HAW: 2, SYD: 2, WCE: 2, MEL: 2 },   // cold and still
    C: { GEE: 2, BRL: 2, ADE: 2, NTH: 2, ESS: 2 },   // sharpen and lock in
    D: { GWS: 2, GCS: 2, WBD: 2 },                    // loosen up, freer
  },
  S3: aflScoring.afl_q3,   // ambition - carry-over (slider)
  S4: aflScoring.afl_q9,   // roots    - carry-over (slider)
  S7: {                    // role     - re-author
    A: { CAR: 2, COL: 2, ESS: 2, HAW: 2, GEE: 2, BRL: 2, ADE: 2, WCE: 2 },   // favourite
    B: { NTH: 2, PTA: 2 },                                                   // underdog
    C: { WBD: 2, FRE: 2, STK: 2, SYD: 2, MEL: 2, RIC: 2 },                   // glad to be in it, my people
    D: { GWS: 2, GCS: 2 },                                                   // somewhere new, unwritten
  },
  // S5 (wins) and S6 (build) intentionally not scored for AFL - flat / no source.
};

export const spinePhase = {
  S1: "The fine print",       S2: "The fine print",       S3: "The fine print",
  S4: "What it comes down to", S7: "What it comes down to",
};
