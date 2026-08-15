// FanDNA - NBA's shared-spine wiring (Option B, s40). nba.js is UNCHANGED; this small add-on file
// carries NBA's 7 spine-scoring tables and the list of its 6 league-unique module questions.
// Imported by scoring.js (the engine) and sportData.js (so the quiz shows the right 6 + the spine).
//
// S1/S4/S5/S6 are carried over 1:1 from the old module (display-only). S2/S3/S7 are re-authored honest
// keys (pressure / ambition / role). Verified s40: self-land 30/30, weakest reach BKN 0.54% (= the live
// engine), no magnet. Ambition (S3) is flat across the NBA, so NBA also keeps its own q3 as a unique Q.
import { moduleQuestions as nbaModule, scoring as nbaScoring } from "./nba";

// The 6 questions NBA still asks itself (everything that is NOT one of the 7 shared archetypes).
export const MODULE_UNIQUE = ["nba_q1", "nba_q3", "nba_q7", "nba_q10", "nba_q11", "nba_q12"];

// The module the quiz shows + scores for NBA: nba.js's questions filtered to the 6 unique.
export const moduleQuestions = nbaModule.filter(q => MODULE_UNIQUE.includes(q.id));
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, nbaScoring[id]]));

// The 7 shared-spine slots, scored for NBA.
export const spineScoring = {
  S1: nbaScoring.nba_q5,                 // loyalty  - carry-over 1:1
  S2: {A:{LAL:2, DET:2, NYK:2, CLE:2, SAC:2, CHA:2}, B:{CHI:2, SAS:2, DEN:2, UTA:2}, C:{BOS:2, GSW:2, OKC:2, PHI:2, MIL:2, IND:2, MIN:2, MEM:2, POR:2, MIA:2, TOR:2, ORL:2}, D:{ATL:2, WAS:2, BKN:2, LAC:2, PHX:2, DAL:2, HOU:2, NOP:2}},   // pressure - re-author
  S3: {1:{LAL:3, BOS:3, GSW:2, CHI:2, SAS:2, OKC:2, PHI:2, DEN:2, MIL:2, DET:1, NYK:2, CLE:1, BKN:2, LAC:2, PHX:2, MIA:2, DAL:2, HOU:2, TOR:1}, 2:{LAL:2, BOS:2, GSW:3, CHI:3, SAS:3, OKC:3, PHI:3, DEN:3, MIL:3, IND:1, MIN:1, DET:2, MEM:1, UTA:1, POR:1, NYK:3, CLE:2, SAC:1, ATL:1, BKN:3, LAC:3, PHX:3, MIA:3, DAL:3, HOU:3, TOR:2, ORL:1, NOP:1, CHA:1}, 3:{LAL:1, BOS:1, GSW:2, CHI:2, SAS:2, OKC:2, PHI:2, DEN:2, MIL:2, IND:2, MIN:2, DET:3, MEM:2, UTA:2, POR:2, NYK:2, CLE:3, SAC:2, ATL:2, WAS:1, BKN:2, LAC:2, PHX:2, MIA:2, DAL:2, HOU:2, TOR:3, ORL:2, NOP:2, CHA:2}, 4:{GSW:1, CHI:1, SAS:1, OKC:1, PHI:1, DEN:1, MIL:1, IND:3, MIN:3, DET:2, MEM:3, UTA:3, POR:3, NYK:1, CLE:2, SAC:3, ATL:3, WAS:2, BKN:1, LAC:1, PHX:1, MIA:1, DAL:1, HOU:1, TOR:2, ORL:3, NOP:3, CHA:3}, 5:{IND:2, MIN:2, DET:1, MEM:2, UTA:2, POR:2, CLE:1, SAC:2, ATL:2, WAS:3, TOR:1, ORL:2, NOP:2, CHA:2}},   // ambition - re-author (footprint by ambition)
  S4: nbaScoring.nba_q9,                 // roots    - carry-over 1:1 (slider)
  S5: nbaScoring.nba_q2,                 // wins     - carry-over 1:1
  S6: nbaScoring.nba_q4,                 // build    - carry-over 1:1
  S7: {A:{LAL:2, BOS:2, GSW:2, CHI:2, NYK:2, MIA:2}, B:{PHI:2, CLE:2, SAC:2, PHX:2, DAL:2, HOU:2}, C:{SAS:2, DEN:2, MIL:2, IND:2, DET:2, MEM:2, UTA:2, POR:2, WAS:2, TOR:2}, D:{OKC:2, MIN:2, ATL:2, BKN:2, LAC:2, ORL:2, NOP:2, CHA:2}},   // role     - re-author
};

// The module phase each spine slot occupied, preserved for the final-phase tie-break.
export const spinePhase = { S1: "The fine print", S2: "The fine print", S3: "The fine print", S4: "What it comes down to", S5: "The fine print", S6: "The fine print", S7: "What it comes down to" };
