// FanDNA - Ligue 1 on the shared spine (Option B), s42. S6 (build) + S7 (role) re-authored from souls;
// ADD scoring off shared answers (L1's q11/q12 measure spotlight/money). Improves reachability
// (16 -> 17 reached) and eases the magnet. Monaco stays a pre-existing weight-pass item (0.25 -> 0.43%).
import { moduleQuestions as l1Module, scoring as l1Scoring } from "./ligue1";
export const MODULE_UNIQUE = l1Module.map(q => q.id);
export const moduleQuestions = l1Module;
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, l1Scoring[id]]));
export const spineScoring = {
  S6: {
    A: { PFC:2, TRO:2, TOU:2 },
    B: { LIL:2, STR:2, BRE:2, AJA:2, HAC:2, ANG:2, LOR:2, LEM:2, NIC:2 },
    C: { PSG:2, MON:2, REN:2 },
    D: { MAR:2, LYO:2, LEN:2 },
  },
  S7: {
    A: { PSG:2, MAR:2, LYO:2, MON:2, LIL:2 },
    B: { LEN:2, BRE:2, STR:2, NIC:2, REN:2 },
    C: { AJA:2, HAC:2, ANG:2, LOR:2, LEM:2, TOU:2 },
    D: { PFC:2, TRO:2 },
  },
};
export const spinePhase = { S6: "What it comes down to", S7: "What it comes down to" };
