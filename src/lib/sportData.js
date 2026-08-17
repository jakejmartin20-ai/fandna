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
const NBA = { ...NBAbase, moduleQuestions: NBAspine.moduleQuestions, spineScoring: NBAspine.spineScoring, spinePhase: NBAspine.spinePhase };

const SPORT_DATA = { PL, NFL, MLB, NBA, BL, LL, L1, SA, CFB, NHL, F1, AFL };

export { SPORT_DATA };
