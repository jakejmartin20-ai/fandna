// FanDNA - Bundesliga on the shared cross-sport SPINE (Option B), s42.
// Two distinctive archetypes earn their place: S6 (build) and S7 (role). The core-overlapping
// archetypes (loyalty/ambition/roots) re-measure the fingerprint and were rejected on the reach gate.
// BL's own bl_q11 (favourite/underdog) and bl_q12 (struggling/build) ARE those archetypes, so they
// move onto the spine (dropped from the module -> 10 unique).
import { moduleQuestions as blModule, scoring as blScoring } from "./bundesliga";
export const MODULE_UNIQUE = ["bl_q1","bl_q2","bl_q3","bl_q4","bl_q5","bl_q6","bl_q7","bl_q8","bl_q9","bl_q10"];
export const moduleQuestions = blModule.filter(q => MODULE_UNIQUE.includes(q.id));
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, blScoring[id]]));
export const spineScoring = {
  S6: { // build - tear-down / patient / everything-now / proven
    A: { RBL:2, TSG:2, B04:2 },
    B: { SCF:2, VFB:2, SVW:2, FCA:2, M05:2, ELV:2, SCP:2, BMG:2 },
    C: { BAY:2, SGE:2 },
    D: { S04:2, KOE:2, HSV:2, BVB:2, FCU:2 },
  },
  S7: { // role - favourite / underdog / glad-to-be-in / new
    A: { BAY:2, BVB:2, S04:2, KOE:2, HSV:2, BMG:2, SVW:2 },
    B: { SCF:2, M05:2, FCA:2, VFB:2, SGE:2 },
    C: { FCU:2, ELV:2, SCP:2 },
    D: { RBL:2, TSG:2, B04:2 },
  },
};
export const spinePhase = { S6: "What it comes down to", S7: "What it comes down to" };
