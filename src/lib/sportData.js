// FanDNA - one place that maps a sport code to its data module. The app, the share card,
// and the genome home all read SPORT_DATA[code] instead of importing a single sport directly,
// so turning on a new sport is a data file plus one line here (and its manifest entry).
import * as PL from "../data/pl";
import * as NFL from "../data/nfl";
import * as MLB from "../data/mlb";
import * as NBAbase from "../data/nba";
import * as NBAspine from "../data/nba-spine";
import * as BL from "../data/bundesliga";
import * as LL from "../data/laliga";
import * as L1 from "../data/ligue1";
import * as SA from "../data/seriea";
import * as CFB from "../data/cfb";
import * as NHL from "../data/nhl";
import * as F1base from "../data/f1";
import * as F1spine from "../data/f1-spine";
import * as AFL from "../data/afl";

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

const SPORT_DATA = { PL, NFL, MLB, NBA, BL, LL, L1, SA, CFB, NHL, F1, AFL };

export { SPORT_DATA };
