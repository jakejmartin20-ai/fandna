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
import * as F1 from "../data/f1";
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

const SPORT_DATA = { PL, NFL, MLB, NBA, BL, LL, L1, SA, CFB, NHL, F1, AFL };

export { SPORT_DATA };
