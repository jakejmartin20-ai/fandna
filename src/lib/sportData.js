// FanDNA - one place that maps a sport code to its data module. The app, the share card,
// and the genome home all read SPORT_DATA[code] instead of importing a single sport directly,
// so turning on a new sport is a data file plus one line here (and its manifest entry).
import * as PL from "../data/pl";
import * as NFL from "../data/nfl";
import * as MLB from "../data/mlb";
import * as NBA from "../data/nba";

const SPORT_DATA = { PL, NFL, MLB, NBA };

export { SPORT_DATA };
