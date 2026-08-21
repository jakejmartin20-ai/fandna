// FanDNA - MLB's shared-spine wiring (Option B). mlb.js is UNCHANGED; this small add-on file
// carries MLB's two scored spine tables and the list of its 10 league-unique module questions.
// Imported by scoring.js (the engine) and sportData.js (so the quiz shows the right 10 + the spine).
//
// MLB scores exactly two spine slots, both re-authored from club souls: S6 (build) and S7 (role).
// These are the two DISTINCTIVE archetypes the core seven dims do not already separate. The other
// five are kept bespoke: loyalty / ambition / roots are core-overlap (the fingerprint already
// separates on them), and pressure / what-carried-the-win have no honest MLB source.
// q11 was MLB's own role question, so it is DROPPED to the spine (it echoed S7). q5 (an inert,
// low-signal "wanting it for years" question that overlapped q2) is also dropped. 12 -> 10 unique.
// Verified: self-land 30/30, magnet SEA ~6.5% (< ceiling), no team lost vs live (the pre-existing
// sub-1% teams MIA/LAD/TB/PIT are a separate FP_W weight-pass item; the spine improves them).
import { moduleQuestions as mlbModule, scoring as mlbScoring } from "./mlb";

// The 10 questions MLB still asks itself (everything that is NOT one of the two shared archetypes,
// minus the inert q5).
export const MODULE_UNIQUE = ["mlb_q1", "mlb_q2", "mlb_q3", "mlb_q4", "mlb_q6", "mlb_q7", "mlb_q8", "mlb_q9", "mlb_q10", "mlb_q12"];

// The module the quiz shows + scores for MLB: mlb.js's questions filtered to the 10 unique.
export const moduleQuestions = mlbModule.filter(q => MODULE_UNIQUE.includes(q.id));
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, mlbScoring[id]]));

// The two shared-spine slots, scored for MLB (re-authored from souls; each club in one option, 2 pts).
export const spineScoring = {
  S6: { // build - teardown / patient / everything-now / proven
    A: { MIA:2, CWS:2, WSH:2 },
    B: { TB:2, CLE:2, MIL:2, ATH:2, KC:2, BAL:2, MIN:2, DET:2, PIT:3, AZ:2, COL:2, CHC:2, SEA:2, TOR:2 },
    C: { LAD:3, NYM:2, SD:2, PHI:2, HOU:2, TEX:2 },
    D: { NYY:2, STL:2, ATL:2, SF:2, CIN:2, BOS:2, LAA:2 },
  },
  S7: { // role - favourite / underdog / glad-to-be-in / new
    A: { NYY:2, LAD:2, HOU:2, ATL:2, STL:2, BOS:2, PHI:2 },
    B: { TB:3, ATH:2, MIL:2, CLE:2, KC:2, SD:2, NYM:2, CWS:2 },
    C: { CHC:2, PIT:3, SEA:2, CIN:2, DET:2, BAL:2, MIN:2, COL:2, LAA:2, SF:2, TOR:2, TEX:2 },
    D: { MIA:2, AZ:2, WSH:2 },
  },
};

// The module phase each spine slot occupies, preserved for the final-phase tie-break.
export const spinePhase = { S6: "What it comes down to", S7: "What it comes down to" };
