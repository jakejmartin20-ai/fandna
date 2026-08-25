// FanDNA - IPL on the shared cross-sport SPINE (Option B). IPL rides the FULL 7 slots (like F1/NBA),
// so the spine measures loyalty, pressure, how-much-winning-matters, roots, what-carries-a-win, the
// way-to-the-top and favourite-vs-underdog. The module (ipl.js) carries ONLY the 4 spine-orthogonal
// cricket axes. Every spine cell here is authored fresh to the IPL enduring souls (no carry-over base
// module exists to reuse); teamDims + the module come from ipl.js, the spine tables live here.
//
// Base data (teamDims, the module) stays in ipl.js untouched; this add-on selects the unique module
// (all 4 are unique) and carries the spine tables, mirroring f1-spine.js / nba-spine.js.
import { moduleQuestions as iplModule, scoring as iplScoring } from "./ipl";

export const MODULE_UNIQUE = ["ipl_q1", "ipl_q2", "ipl_q3", "ipl_q4"];
export const moduleQuestions = iplModule.filter(q => MODULE_UNIQUE.includes(q.id));
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, iplScoring[id]]));

// Spine scoring. All 7 slots authored to the IPL souls; 2 points per club per cell (sliders graduated).
export const spineScoring = {
  // S1 loyalty. A stay-unconditional / B loyal-not-at-any-cost / C refuse-and-push / D follow-the-people.
  S1: {
    A: { CSK: 2, RCB: 2 },
    B: { MI: 2, GT: 2, KKR: 2 },
    C: { LSG: 2, RR: 2, DC: 2 },
    D: { SRH: 2, PBKS: 2 },
  },
  // S2 pressure. A pours-out / B cold-and-still / C sharpen-precise / D loosen-and-freer.
  // (RCB trimmed from A at build - PBKS/SRH carry the pours-out cell; RCB magnet fix, s58.)
  S2: {
    A: { PBKS: 2, SRH: 2 },
    B: { MI: 2, GT: 2, CSK: 2 },
    C: { KKR: 2, RR: 2 },
    D: { LSG: 2, DC: 2 },
  },
  // S3 slider. 1 = winning-is-everything ... 5 = the-love-of-it-is-enough.
  S3: {
    "1": { MI: 3, LSG: 3, GT: 2 },
    "2": { MI: 2, LSG: 2, GT: 2, KKR: 2, DC: 1 },
    "3": { KKR: 1, DC: 1, RR: 1, PBKS: 1 },
    "4": { RCB: 2, CSK: 2, SRH: 2 },
    "5": { RCB: 2, CSK: 3, SRH: 2 },
  },
  // S4 slider. 1 = deep-roots-never-left ... 5 = wherever-it-is-happening-next.
  S4: {
    "1": { CSK: 3, MI: 2, RCB: 1 },
    "2": { CSK: 2, MI: 2, RCB: 2, KKR: 2 },
    "3": { KKR: 1, DC: 1, SRH: 1, RR: 1 },
    "4": { PBKS: 2, GT: 2, LSG: 2, DC: 1 },
    "5": { LSG: 3, GT: 2, PBKS: 2 },
  },
  // S5 what-carried-a-win. A one-standout / B the-whole-group / C the-method / D raw-ability.
  S5: {
    A: { RCB: 2, LSG: 2 },
    B: { CSK: 2, GT: 2 },
    C: { MI: 2, KKR: 2, RR: 2 },
    D: { PBKS: 2, DC: 2, SRH: 2 },
  },
  // S6 way-to-the-top. A tear-down-and-rebuild / B patient-plan / C everything-now / D proven-names-steady.
  S6: {
    A: { PBKS: 2, KKR: 2, RR: 2 },
    B: { CSK: 2, GT: 2, MI: 2 },
    C: { LSG: 2, DC: 2 },
    D: { RCB: 2, SRH: 2 },
  },
  // S7 role. A the-favourite / B the-underdog / C glad-to-be-in-it-with-my-people / D somewhere-new-unwritten.
  S7: {
    A: { MI: 2, CSK: 2 },
    B: { SRH: 2, RR: 2, PBKS: 2 },
    C: { RCB: 2, KKR: 2 },
    D: { LSG: 2, GT: 2, DC: 2 },
  },
};

export const spinePhase = {
  S1: "The fine print",       S2: "What it comes down to", S3: "The fine print",
  S4: "What it comes down to", S5: "The fine print",       S6: "The fine print",
  S7: "What it comes down to",
};
