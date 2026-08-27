// FanDNA - Top 14 on the shared cross-sport SPINE (Option B), the soccer standard (like BL/LL/L1/SA/MLB).
// It scores S6 (the way to the top) and S7 (the position that suits you), the two slots where the shared
// archetype cells genuinely separate these clubs; S1-S5 are gaps the module handles. teamDims and the
// module live in top14.js; this add-on selects the unique module (all 4 are unique) and carries the two
// spine tables. Mirrors bl-spine.js / ll-spine.js. Two points per club per scored cell.
import { moduleQuestions as top14Module, scoring as top14Scoring } from "./top14";

export const MODULE_UNIQUE = ["top14_q1", "top14_q2", "top14_q3", "top14_q4"];
export const moduleQuestions = top14Module.filter(q => MODULE_UNIQUE.includes(q.id));
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, top14Scoring[id]]));

export const spineScoring = {
  // S6 the way to the top. A tear-down-and-rebuild / B patient-plan / C everything-now / D proven-names.
  S6: {
    A: { UBB: 2, LOU: 2, USM: 2 },
    B: { TLS: 2, LAR: 2, PAU: 2, CAS: 2, ABR: 2 },
    C: { RCT: 2, R92: 2, SFP: 2 },
    D: { ASM: 2, USP: 2, MHR: 2 },
  },
  // S7 the position that suits you. A the-favourite / B the-underdog / C glad-to-be-in-it / D somewhere-new.
  S7: {
    A: { TLS: 2, UBB: 2, RCT: 2, R92: 2, LAR: 2 },
    B: { ASM: 2, USP: 2, CAS: 2 },
    C: { ABR: 2, PAU: 2, USM: 2 },
    D: { SFP: 2, LOU: 2, MHR: 2 },
  },
};

export const spinePhase = { S6: "What it comes down to", S7: "What it comes down to" };
