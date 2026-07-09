// FanDNA - one place that maps a sport code to its data module. The app, the share card,
// and the genome home all read SPORT_DATA[code] instead of importing a single sport directly,
// so turning on a new sport is a data file plus one line here (and its manifest entry).
import * as PL from "../data/pl";
import * as NFL from "../data/nfl";
import * as MLB from "../data/mlb";
import * as NBA from "../data/nba";
import * as NHL from "../data/nhl";
import * as CFB from "../data/cfb";
import * as BL from "../data/bundesliga";
import * as LL from "../data/laliga";
import * as L1 from "../data/ligue1";
import * as SA from "../data/seriea";

const SPORT_DATA = { PL, NFL, MLB, NBA, NHL, CFB, BL, LL, L1, SA };

export { SPORT_DATA };
