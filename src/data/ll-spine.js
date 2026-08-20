// FanDNA - La Liga on the shared spine (Option B), s42. S6 (build) + S7 (role) re-authored from club
// souls; they ADD scoring off the shared answers (LL's q11/q12 measure commitment/win-loss, so nothing
// is dropped) and LIFT the fragile floor (Betis 1.10 -> 1.58%). Core-overlapping archetypes rejected.
import { moduleQuestions as llModule, scoring as llScoring } from "./laliga";
export const MODULE_UNIQUE = llModule.map(q => q.id);
export const moduleQuestions = llModule;
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, llScoring[id]]));
export const spineScoring = {
  S6: {
    A: { GET:2, ELC:2, LEV:2 },
    B: { ATH:2, RSO:2, VIL:2, OSA:2, ALA:2, CEL:2, ESP:2, DEP:2, RAC:2 },
    C: { RMA:2, BAR:2, ATM:2 },
    D: { SEV:2, BET:2, VAL:2, MAL:2, RAY:2 },
  },
  S7: {
    A: { RMA:2, BAR:2, ATM:2, ATH:2, SEV:2, VAL:2 },
    B: { RSO:2, VIL:2, BET:2, CEL:2, ALA:2 },
    C: { OSA:2, RAY:2, ESP:2, DEP:2, RAC:2, MAL:2 },
    D: { GET:2, ELC:2, LEV:2 },
  },
};
export const spinePhase = { S6: "What it comes down to", S7: "What it comes down to" };
