// FanDNA - F1 on the shared cross-sport SPINE (Option B), s41.
//
// F1 answers the 7 canonical archetype questions (spine.js) once, scored here per league.
// Five are carry-overs: they reuse the exact option->team cells from the matching F1 question
// (proven lossless). Two - S2 (pressure) and S7 (role) - are re-authored to F1's enduring soul.
// The quiz then shows F1's 7 league-unique questions (the module below). q8 (role) and q10
// (pressure) echoed S7/S2, so their WORDING is re-scened in sportData.js; option values are
// unchanged, so scoring / self-land / reachability are identical - only the reading changes.
//
// Base data (teamDims, the full question bank) stays in f1.js untouched; this add-on selects
// the unique module and carries the spine tables, mirroring nba-spine.js.
import { moduleQuestions as f1Module, scoring as f1Scoring } from "./f1";

export const MODULE_UNIQUE = ["f1_q2", "f1_q6", "f1_q7", "f1_q8", "f1_q10", "f1_q11", "f1_q12"];
export const moduleQuestions = f1Module.filter(q => MODULE_UNIQUE.includes(q.id));
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, f1Scoring[id]]));

// Spine scoring. Carry-overs reuse the exact F1 cells; S2 / S7 re-authored to soul.
export const spineScoring = {
  S1: f1Scoring.f1_q5,   // loyalty  - carry-over
  S2: {                  // pressure - re-author (RBR on loosen)
    A: { FER: 2, WIL: 2, CAD: 2 },
    B: { MER: 2, HAA: 2 },
    C: { MCL: 2, AST: 2, AUD: 2 },
    D: { ALP: 2, RB: 2, RBR: 2 },
  },
  S3: f1Scoring.f1_q3,   // ambition - carry-over (slider)
  S4: f1Scoring.f1_q9,   // roots    - carry-over (slider)
  S5: f1Scoring.f1_q1,   // wins     - carry-over
  S6: f1Scoring.f1_q4,   // build    - carry-over
  S7: {                  // role     - re-author
    A: { FER: 2, MER: 2, MCL: 2 },
    B: { AST: 2, HAA: 2 },
    C: { WIL: 2, ALP: 2 },
    D: { RBR: 2, RB: 2, AUD: 2, CAD: 2 },
  },
};

export const spinePhase = {
  S1: "The fine print",       S2: "What it comes down to", S3: "The fine print",
  S4: "What it comes down to", S5: "The fine print",       S6: "The fine print",
  S7: "What it comes down to",
};
