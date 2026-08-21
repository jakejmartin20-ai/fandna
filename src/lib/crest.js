// FanDNA - crest logic: when is a bucket whole, and in which colours.
//
// A bucket (manifest family: global / american / world) earns its crest when the taker has a
// result for EVERY league listed in that bucket - the full five, not just the ones live today.
// Because you can only hold a result for a live league, a bucket that still has a hidden or
// coming-soon league simply cannot complete yet (American waits for the NHL / NBA flips, World
// for its build-out). Football (five live leagues) is the one bucket earnable today.
//
// Pure and read-only: this decides completion, gathers the strand colours, and counts progress.
// The earn moment, the home crest tick, and the collection finale all read from here, so they
// always agree. It imports nothing from scoring and cannot move a match.

import { SPORTS, FAMILIES } from "./manifest";
import { SPORT_DATA } from "./sportData";

// Every league in a bucket, in manifest order (live or not).
export function groupSports(groupId){
  return SPORTS.filter(s => s.group === groupId);
}

function hasClub(results, code){
  return !!(results && results[code] && results[code].club);
}

// Whole = a result for every league in the bucket.
export function isGroupComplete(results, groupId){
  const gs = groupSports(groupId);
  if(!gs.length) return false;
  return gs.every(s => hasClub(results, s.code));
}

// The collected clubs' colours for a bucket, in manifest order - one rung per league.
export function groupClubColors(results, groupId){
  return groupSports(groupId).map(s => {
    const r = results && results[s.code];
    const sd = SPORT_DATA[s.code];
    return (r && r.club && sd && sd.teams && sd.teams[r.club] && sd.teams[r.club].color) || null;
  }).filter(Boolean);
}

// Collected / total for a bucket - drives the "N/N" tick and the "N from the crest" nudge later.
export function groupProgress(results, groupId){
  const gs = groupSports(groupId);
  const got = gs.filter(s => hasClub(results, s.code)).length;
  return { got, total: gs.length };
}

// The first bucket that just became whole and has not fired its moment yet, or null.
// One earn per finish: we return a single family so a run can never stack two crest moments.
export function newlyCompletedGroup(results, earnedGroups){
  const earned = new Set(earnedGroups || []);
  for(const f of FAMILIES){
    if(earned.has(f.id)) continue;
    if(isGroupComplete(results, f.id)) return f;   // the family object: { id, label, glyph }
  }
  return null;
}
