// FanDNA per-sport voice (the "register"): the noun, what you wear, the team words, the league
// labels, the result tail, and the cross-match header/escape. ONE source of truth, read by both
// the app (result screen) and the share card, so a sport's voice lives in exactly one place and
// the two can never drift. Adding a sport is one row here. PL/NFL/MLB are unchanged.
const REGISTER = {
  PL:  { noun: "club",      worn: "shirt",  team: "club", teams: "clubs", league: "Premier League", leagueAbbr: "PL",
         tail: "What you support on Saturdays is up to you.",
         xmHeader: "Already have a favourite club?", xmEscape: "I don't support a Premier League club" },
  NFL: { noun: "franchise", worn: "jersey", team: "team", teams: "teams", league: "NFL", leagueAbbr: "NFL",
         tail: "What you support on Sundays is up to you.",
         xmHeader: "Already root for a team?", xmEscape: "I don't follow an NFL team" },
  MLB: { noun: "ballclub",  worn: "cap",    team: "team", teams: "teams", league: "MLB", leagueAbbr: "MLB",
         tail: "What you root for at the ballpark is up to you.",
         xmHeader: "Already have a ballclub?", xmEscape: "I don't have an MLB team" },
  NBA: { noun: "team",      worn: "jersey", team: "team", teams: "teams", league: "NBA", leagueAbbr: "NBA",
         tail: "What you cheer for on gameday is up to you.",
         xmHeader: "Already have a team?", xmEscape: "I don't follow an NBA team" },
};
function regOf(s){ return REGISTER[s] || REGISTER.PL; }

export { REGISTER, regOf };
