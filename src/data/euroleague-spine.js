// FanDNA - EuroLeague on the shared cross-sport SPINE (Option B). EuroLeague rides the FULL 7 slots
// (like F1/NBA/IPL), because its enduring identities span all seven core dims with strong separation
// (loyalty, roots, community and process all carry club-to-club signal, not just S6/S7). The module
// (euroleague.js) therefore carries ONLY the 4 spine-orthogonal basketball-culture axes. Every spine
// cell here is authored fresh to the EuroLeague souls dossier + the teamDims grid; teamDims + the
// module come from euroleague.js, the spine tables live here. Mirrors ipl-spine.js / nba-spine.js.
import { moduleQuestions as elModule, scoring as elScoring } from "./euroleague";

export const MODULE_UNIQUE = ["el_q1", "el_q2", "el_q3", "el_q4"];
export const moduleQuestions = elModule.filter(q => MODULE_UNIQUE.includes(q.id));
export const scoring = Object.fromEntries(MODULE_UNIQUE.map(id => [id, elScoring[id]]));

// Spine scoring. All 7 slots authored to the EuroLeague souls; ~2 points per club per cell, sliders
// graduated across the 5 notches. Distributed to reinforce the fingerprint read of each axis while
// spreading clubs across cells (magnet control on the all-7-slot reinforcement).
export const spineScoring = {
  // S1 loyalty. A stay-unconditional / B loyal-not-at-any-cost / C refuse-and-push / D follow-the-people.
  S1: {
    A: { ZAL: 2, HAP: 2, MAC: 2, OLY: 2, PTZ: 2 },
    B: { RMA: 2, BAR: 2, RED: 2, PAN: 2, VIR: 2 },
    C: { EFS: 2, MIL: 2, FEN: 2, BAS: 2, ASV: 2 },
    D: { PRS: 2, DUB: 2, BAY: 2, BES: 2, VAL: 2 },
  },
  // S2 pressure. A pours-out / B cold-and-still / C sharpen-precise / D loosen-and-freer.
  S2: {
    A: { PTZ: 2, OLY: 2, PAN: 2, HAP: 2, FEN: 2 },
    B: { RMA: 2, BAS: 2, MIL: 2, BAY: 2, DUB: 2 },
    C: { EFS: 2, MAC: 2, ASV: 2, VIR: 2, VAL: 2 },
    D: { BES: 2, PRS: 2, BAR: 2, ZAL: 2, RED: 2 },
  },
  // S3 slider. 1 = winning-is-everything ... 5 = the-love-of-it-is-enough.
  S3: {
    "1": { RMA: 3, DUB: 3, OLY: 2, MIL: 2 },
    "2": { PAN: 2, FEN: 2, EFS: 2, PRS: 2, MAC: 2, BAY: 1 },
    "3": { RED: 1, BAY: 1, ASV: 1, BAR: 1, VAL: 1 },
    "4": { BAS: 2, VIR: 1, HAP: 1, VAL: 1 },
    "5": { ZAL: 3, BES: 2, PTZ: 2, VIR: 1, HAP: 1 },
  },
  // S4 slider. 1 = deep-roots-never-left ... 5 = wherever-it-is-happening-next.
  S4: {
    "1": { ZAL: 3, VIR: 3, RMA: 2, PAN: 2, MAC: 2 },
    "2": { BAR: 2, BAS: 2, EFS: 2, PTZ: 2, RED: 2, MIL: 1 },
    "3": { OLY: 1, ASV: 1, HAP: 1, MIL: 1 },
    "4": { VAL: 2, FEN: 2, BES: 2, BAY: 2 },
    "5": { DUB: 3, PRS: 3, BAY: 1 },
  },
  // S5 what-carried-a-win. A one-standout / B the-whole-group / C the-method / D raw-ability.
  S5: {
    A: { RMA: 2, DUB: 2, PRS: 2, MIL: 2, FEN: 2 },
    B: { OLY: 2, VIR: 2, ZAL: 2, HAP: 2, BAR: 2 },
    C: { BAS: 2, EFS: 2, MAC: 2, BAY: 2, VAL: 2 },
    D: { PTZ: 2, BES: 2, RED: 2, ASV: 2, PAN: 2 },
  },
  // S6 way-to-the-top. A tear-down-and-rebuild / B patient-plan / C everything-now / D proven-names-steady.
  S6: {
    A: { PTZ: 2, BES: 2, PRS: 2, ASV: 2, RED: 2 },
    B: { BAS: 2, VAL: 2, ZAL: 2, VIR: 2, BAR: 2 },
    C: { DUB: 2, FEN: 2, PAN: 2, OLY: 2, MIL: 2 },
    D: { RMA: 2, MAC: 2, EFS: 2, BAY: 2, HAP: 2 },
  },
  // S7 role. A the-favourite / B the-underdog / C glad-to-be-in-it-with-my-people / D somewhere-new-unwritten.
  S7: {
    A: { RMA: 2, MAC: 2, PAN: 2, EFS: 2, OLY: 2, MIL: 2 },
    B: { BAS: 2, HAP: 2, BES: 2, VIR: 2, ZAL: 2, ASV: 2 },
    C: { BAR: 2, PTZ: 2, RED: 2, VAL: 2, FEN: 2 },
    D: { DUB: 2, PRS: 2, BAY: 2 },
  },
};

export const spinePhase = {
  S1: "The fine print",       S2: "What it comes down to", S3: "The fine print",
  S4: "What it comes down to", S5: "The fine print",       S6: "The fine print",
  S7: "What it comes down to",
};
