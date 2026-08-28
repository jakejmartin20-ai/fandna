// FanDNA - one place that maps a sport code to its data module. The app, the share card,
// and the genome home all read SPORT_DATA[code] instead of importing a single sport directly,
// so turning on a new sport is a data file plus one line here (and its manifest entry).
import * as PL from "../data/pl";
import * as NFL from "../data/nfl";
import * as MLBbase from "../data/mlb";
import * as MLBspine from "../data/mlb-spine";
import * as NBAbase from "../data/nba";
import * as NBAspine from "../data/nba-spine";
import * as BLbase from "../data/bundesliga";
import * as BLspine from "../data/bl-spine";
import * as LLbase from "../data/laliga";
import * as LLspine from "../data/ll-spine";
import * as L1base from "../data/ligue1";
import * as L1spine from "../data/l1-spine";
import * as SAbase from "../data/seriea";
import * as SAspine from "../data/sa-spine";
import * as CFB from "../data/cfb";
import * as NHLbase from "../data/nhl";
import * as NHLspine from "../data/nhl-spine";
import * as F1base from "../data/f1";
import * as F1spine from "../data/f1-spine";
import * as AFLbase from "../data/afl";
import * as AFLspine from "../data/afl-spine";
import * as IPLbase from "../data/ipl";
import * as IPLspine from "../data/ipl-spine";
import * as TOP14base from "../data/top14";
import * as TOP14spine from "../data/top14-spine";
import * as EUROLEAGUEbase from "../data/euroleague";
import * as EUROLEAGUEspine from "../data/euroleague-spine";

// NBA runs the shared cross-sport spine (Option B): the quiz shows its 6 unique questions (from the
// nba-spine add-on) and carries the spine tables, while every other field still comes from nba.js.
//
// Display re-scene (s40): three of NBA's unique questions used to echo spine slots (roots / wins /
// role), so their WORDING is swapped here to a distinct NBA angle. Option values A-D are unchanged,
// so scoring, self-land and reachability are all identical - only what the taker reads changes.
const NBA_RESCENE = {
  nba_q1: { question: "What pulls me toward a team:", options: [
    { value: "A", label: "Its history. The weight of all that came before." },
    { value: "B", label: "That I found it myself and made it mine." },
    { value: "C", label: "The lights and the noise. I want to be where it all happens." },
    { value: "D", label: "A blank page, and the chance to help write it." },
  ] },
  nba_q11: { question: "With everything on the line, the one I want next to me:", options: [
    { value: "A", label: "The rare talent who can take over on their own." },
    { value: "B", label: "The glue that keeps the whole group together." },
    { value: "C", label: "The mind that always finds the right play." },
    { value: "D", label: "The one who simply outworks everybody." },
  ] },
  nba_q12: { question: "What gets me going:", options: [
    { value: "A", label: "Being the one everyone's gunning for." },
    { value: "B", label: "Chasing down the ones ahead of me." },
    { value: "C", label: "Being written off, then proving it." },
    { value: "D", label: "Being somewhere I never expected to reach." },
  ] },
};
const nbaModuleShown = NBAspine.moduleQuestions.map(q => NBA_RESCENE[q.id] ? { ...q, ...NBA_RESCENE[q.id] } : q);
const NBA = { ...NBAbase, moduleQuestions: nbaModuleShown, spineScoring: NBAspine.spineScoring, spinePhase: NBAspine.spinePhase };

// F1 runs the shared spine (s41): same pattern as NBA. It shows its 7 unique questions and carries
// the spine tables. Display re-scene: q8 (role) and q10 (pressure) echoed spine slots S7 / S2, so
// their WORDING is swapped here to a distinct F1 angle. Option values A-D are unchanged, so scoring,
// self-land and reachability are identical - only what the taker reads changes.
const F1_RESCENE = {
  f1_q8: { question: "The win that would mean the most:", options: [
    { value: "A", label: "Beating a team with far more money and history than mine." },
    { value: "B", label: "Winning the one race the whole world stops to watch." },
    { value: "C", label: "A slow climb up the grid that nobody saw coming." },
    { value: "D", label: "Turning a blank sheet into something that wins." },
  ] },
  f1_q10: { question: "A defeat that was never in your hands, the machinery just wasn't good enough. By the next morning:", options: [
    { value: "A", label: "I give nothing away. Same face as always." },
    { value: "B", label: "I still can't hide it. Everyone around me knows." },
    { value: "C", label: "I've turned it into fuel for the next one." },
    { value: "D", label: "I've already let it go and moved on." },
  ] },
};
// Re-scene only applies once the spine is active; before the flip, F1 shows its questions unchanged.
const f1ModuleShown = F1spine.spineScoring
  ? F1spine.moduleQuestions.map(q => F1_RESCENE[q.id] ? { ...q, ...F1_RESCENE[q.id] } : q)
  : F1spine.moduleQuestions;
const F1 = { ...F1base, moduleQuestions: f1ModuleShown, spineScoring: F1spine.spineScoring, spinePhase: F1spine.spinePhase };

// AFL runs the shared spine (s41): same pattern as F1 / NBA. It shows its 6 unique questions and
// carries the spine tables (S1/S3/S4 carry-overs + re-authored S2/S7; S5/S6 not scored). No display
// re-scene needed - none of the six kept questions echoes a scored spine slot.
const AFL = { ...AFLbase, moduleQuestions: AFLspine.moduleQuestions, spineScoring: AFLspine.spineScoring, spinePhase: AFLspine.spinePhase };

// NHL runs the shared spine (s42): same pattern as AFL. It shows its 10 unique questions and carries
// two scored spine tables (S4 roots carry-over, S2 pressure re-author). No display re-scene needed -
// none of the 10 kept questions introduces a new echo beyond what NHL already showed pre-spine.
const NHL = { ...NHLbase, moduleQuestions: NHLspine.moduleQuestions, spineScoring: NHLspine.spineScoring, spinePhase: NHLspine.spinePhase };

const BL = { ...BLbase, moduleQuestions: BLspine.moduleQuestions, spineScoring: BLspine.spineScoring, spinePhase: BLspine.spinePhase };
const LL = { ...LLbase, moduleQuestions: LLspine.moduleQuestions, spineScoring: LLspine.spineScoring, spinePhase: LLspine.spinePhase };
const L1 = { ...L1base, moduleQuestions: L1spine.moduleQuestions, spineScoring: L1spine.spineScoring, spinePhase: L1spine.spinePhase };
const SA = { ...SAbase, moduleQuestions: SAspine.moduleQuestions, spineScoring: SAspine.spineScoring, spinePhase: SAspine.spinePhase };
// soccer S6(build)+S7(role) on the spine (s42); BL drops its q11/q12 sources, LL/L1/SA add slots.
// MLB runs the shared spine (s43): shows its 10 unique questions and carries the two scored spine
// tables (S6 build + S7 role, re-authored). Its own role question (q11) is dropped to the spine; no
// display re-scene is needed (nothing left among the 10 echoes a scored slot).
const MLB = { ...MLBbase, moduleQuestions: MLBspine.moduleQuestions, spineScoring: MLBspine.spineScoring, spinePhase: MLBspine.spinePhase };
// IPL runs the shared spine (s58): same pattern as F1 / AFL. It shows its 4 unique questions and
// carries all 7 spine tables. No display re-scene needed - none of the 4 module questions echoes a
// scored spine slot (they are the 4 spine-orthogonal cricket axes). Hidden-first (?ipl preview).
const IPL = { ...IPLbase, moduleQuestions: IPLspine.moduleQuestions, spineScoring: IPLspine.spineScoring, spinePhase: IPLspine.spinePhase };

// Top 14 runs the shared spine (s60): same pattern as the soccer leagues. It shows its 4 unique
// questions and carries the S6/S7 spine tables, while every other field comes from top14.js. The 4
// module questions are the spine-orthogonal axes (talent / circus / belonging / reverence). Hidden-first (?top14).
const TOP14 = { ...TOP14base, moduleQuestions: TOP14spine.moduleQuestions, spineScoring: TOP14spine.spineScoring, spinePhase: TOP14spine.spinePhase };
// EuroLeague runs the shared spine (s62, W5): same pattern as F1 / NBA / IPL, riding all 7 slots. It
// shows its 4 unique spine-orthogonal module questions and carries the spine tables; every other field
// comes from euroleague.js. Hidden-first (?euroleague preview).
const EL = { ...EUROLEAGUEbase, moduleQuestions: EUROLEAGUEspine.moduleQuestions, spineScoring: EUROLEAGUEspine.spineScoring, spinePhase: EUROLEAGUEspine.spinePhase };
const SPORT_DATA = { PL, NFL, MLB, NBA, BL, LL, L1, SA, CFB, NHL, F1, AFL, IPL, TOP14, EL };

export { SPORT_DATA };
