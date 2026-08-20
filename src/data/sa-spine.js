// FanDNA - sa spine add-on, INERT stage (s42). Re-exports the base module unchanged and exports
// NO spineScoring, so sa scores exactly as it does live. Flipping this file (adding spineScoring)
// turns the league onto the spine atomically - both the engine and the quiz read it from here.
import { moduleQuestions as m, scoring as s } from "./seriea";
export const MODULE_UNIQUE = m.map(q => q.id);
export const moduleQuestions = m;
export const scoring = s;
export const spineScoring = undefined;   // INERT: no spine chapter, no spine scoring
export const spinePhase = undefined;
