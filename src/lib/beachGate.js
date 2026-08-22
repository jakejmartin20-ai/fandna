// FanDNA - the gate for the Pro Beach Hockey bonus (the one thing that skips the rigor).
//
// TRUE ENDGAME ONLY: this passes solely when the roster is COMPLETE (the full 5-5-5, fifteen
// leagues) AND the taker holds a result for every one of them. It reuses the bucket check, so it
// stays honest as the roster grows: while the World bucket is still being built out, or NHL / NBA
// are still hidden, a bucket simply cannot complete, and the gate cannot pass. The size floor is
// the belt to that suspenders - it will not fire at thirteen rows even if all thirteen were done.
//
// Pure and read-only. It imports nothing from scoring and touches no match. Kept separate from
// crest.js so that file stays byte-identical.

import { SPORTS } from "./manifest";
import { allBucketsComplete } from "./crest";

// The full roster, every league sequenced. The 15 is the 5-5-5 doctrine; allBucketsComplete does
// the real work (a result for every league in every bucket), the floor just guards the count.
export function hasCompletedAll(results){
  return SPORTS.length >= 15 && allBucketsComplete(results);
}
