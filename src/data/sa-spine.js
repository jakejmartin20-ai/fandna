// FanDNA - Serie A on the shared spine (Option B), s42. S6 (build) + S7 (role) re-authored from souls;
// ADD scoring off shared answers (SA's q11/q12 measure grievance/emotion). Improves reachability
// (18 -> 19 reached) and eases the magnet. Napoli stays a pre-existing weight-pass item (0.36 -> 0.78%).
import { moduleQuestions as saModule, scoring as saScoring } from "./seriea";
export const MODULE_UNIQUE = saModule.map(q => q.id);
export const moduleQuestions = saModule;
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, saScoring[id]]));
export const spineScoring = {
  S6: {
    A: { COM:2, SAS:2, MON:2 },
    B: { ATA:2, BOL:2, UDI:2, FIO:2, LEC:2, CAG:2, GEN:2, FRO:2, VEN:2 },
    C: { INT:2, JUV:2, MIL:2, NAP:2 },
    D: { ROM:2, LAZ:2, TOR:2, PAR:2 },
  },
  S7: {
    A: { INT:2, JUV:2, MIL:2, NAP:2, ROM:2 },
    B: { ATA:2, BOL:2, FIO:2, LAZ:2, TOR:2 },
    C: { GEN:2, CAG:2, LEC:2, UDI:2, PAR:2 },
    D: { COM:2, SAS:2, MON:2, FRO:2, VEN:2 },
  },
};
export const spinePhase = { S6: "What it comes down to", S7: "What it comes down to" };
