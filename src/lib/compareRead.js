// FanDNA - compare read. Turns two genomes (yours + a friend's) into the numbers the compare
// screen renders: each person's core-level archetype, where the two cores align or split, and
// which leagues you share. Pure + display-only: imports nothing from the scoring path.
//
// Two design choices worth noting:
//  - Archetype comes from genomeRead (the same "through-line type" shown on the home screen), so
//    a person is the same type here as everywhere else. We read only its headline.
//  - Band divergence is measured in POPULATION STANDING (genomeRead's standing()), the same space
//    the strips are drawn in, so the outlined column is always the column that visibly diverges.
//    It used to self-standardize each profile (within-profile z): it ranked you against your own
//    other traits, ranked them against theirs, and compared the two rankings. That never compared
//    the two people at all. It called 43.5% of all pairs "all lined up", and the trait it named as
//    "the gulf" was the pair's true widest difference only 11.6% of the time, which is worse than
//    naming a trait at random. Fixed. Do not reintroduce a within-profile z here or anywhere.

import { DIM_ORDER, DIM_LABELS, DIM_COLORS, DIM_CODES } from "../data/core";
import { generateRead, standing } from "./genomeRead";

// The core-level type label ("The Chaser", ...). Null when there is no core.
export function archetypeLabel(profile) {
  const r = profile ? generateRead(profile, 1) : null;
  return r ? r.headline : null;
}

// Per-dim comparison of two cores, in population standing (0 to 10). Both people are measured on
// the SAME ruler, which is the ruler the strips are drawn on, so the outline lands where the eye
// already sees the difference.
export function bandModel(youProfile, themProfile) {
  const sy = standing(youProfile), st = standing(themProfile);
  const bands = DIM_ORDER.map(d => ({
    dim: d,
    label: DIM_LABELS[d],
    code: DIM_CODES[d],
    color: DIM_COLORS[d],
    you: sy[d] || 0,
    them: st[d] || 0,
    gap: Math.abs((sy[d] || 0) - (st[d] || 0)),
    lead: (sy[d] || 0) > (st[d] || 0) ? "you" : ((st[d] || 0) > (sy[d] || 0) ? "them" : "even"),
  }));
  const byGap = [...bands].sort((a, b) => b.gap - a.gap);
  const maxGap = byGap[0] ? byGap[0].gap : 0;

  // Thresholds are in standing points out of 10, re-derived for this space (the old 0.55 / 0.5
  // were within-profile z units and mean nothing here). LINED_UP fires for about 4% of pairs now,
  // and when it fires it is true. SPLIT_FLOOR is 2.5 on purpose: the pole rungs below are 2 points
  // wide, so a gap of 2.5 GUARANTEES the two people land on different rungs and the split sentence
  // can never say the same thing about both of them.
  const SPLIT_FLOOR = 2.5;
  const LINED_UP    = 2.0;
  const allLinedUp  = maxGap < LINED_UP;
  let diverging = byGap.filter(b => b.gap >= Math.max(SPLIT_FLOOR, maxGap * 0.6));
  if (!allLinedUp && diverging.length === 0) diverging = [byGap[0]];  // never leave the label empty

  return {
    bands,
    byGap,
    maxGap,
    allLinedUp,
    topDims: allLinedUp ? [] : diverging.slice(0, 2).map(b => b.dim),
    splitCount: allLinedUp ? 0 : diverging.length,
    // Traits the two of you genuinely share. NOT "seven minus the splits": a trait that merely
    // failed to clear the divergence floor is not a trait you have in common, and calling it one
    // is the same over-claim as counting rows on a chart the engine never counted.
    twinCount: bands.filter(b => b.gap < LINED_UP).length,
  };
}

// Shared vs solo leagues between two result maps.
export function sportSplit(youResults, themResults) {
  const y = youResults || {}, t = themResults || {};
  const all = Array.from(new Set([...Object.keys(y), ...Object.keys(t)]));
  const shared = [], onlyYou = [], onlyThem = [];
  for (const sport of all) {
    const yc = y[sport] && y[sport].club, tc = t[sport] && t[sport].club;
    if (yc && tc) shared.push({ sport, youClub: yc, themClub: tc, same: yc === tc });
    else if (yc) onlyYou.push({ sport, club: yc });
    else if (tc) onlyThem.push({ sport, club: tc });
  }
  return { shared, onlyYou, onlyThem };
}

// The pole phrase describes where a person ACTUALLY SITS on a trait, not which way a gap points.
// Keying off the direction of the gap was the same mistake the club chart made ("it leans into
// ambition far more than you do", said of a club sitting on 3): two people can both be below
// typical on chaos and one of them still leads, and calling that leader "a taste for the chaos"
// is simply false. Five rungs, matching the five words under the strip (high / above / typical /
// below / low), each 2 standing points wide. US English, no em dashes.
export const POLE = {
  loyalty: {
    high:  "loyalty that never switches",     above:   "a badge you would take some pain for",
    mid:   "loyalty with its limits",         below:   "a badge that has to keep earning it",
    low:   "an open mind about the badge",
  },
  emotion: {
    high:  "heart at full volume",            above:   "a result you carry home with you",
    mid:   "feeling kept in proportion",      below:   "a long view that softens the week",
    low:   "a cool, level head",
  },
  ambition: {
    high:  "a hunger for the very top",       above:   "an eye on the trophy",
    mid:   "ambition you can put down",       below:   "a shrug at the trophy cabinet",
    low:   "a peace with less than the summit",
  },
  process: {
    high:  "faith in the plan",               above:   "a preference for a plan",
    mid:   "a plan you would drop for a good idea", below: "a suspicion of the whiteboard",
    low:   "trust in instinct",
  },
  community: {
    high:  "the collective above all",        above:   "the whole thing is better with others",
    mid:   "company you can take or leave",   below:   "a quiet seat at the back",
    low:   "a self-contained streak",
  },
  chaos: {
    high:  "a taste for the chaos",           above:   "a soft spot for the mess",
    mid:   "drama in moderation",             below:   "a preference for the quiet week",
    low:   "a need for order",
  },
  rootedness: {
    high:  "deep roots and a sense of place", above:   "a place you would call home",
    mid:   "roots you could move",            below:   "little pull from the postcode",
    low:   "an at-home-anywhere streak",
  },
};

// The rung a standing value sits on. Same cutoffs as the words under the strip, so the sentence
// and the strip can never disagree.
export function poleRung(v) {
  const x = v || 0;
  if (x >= 8) return "high";
  if (x >= 6) return "above";
  if (x >= 4) return "mid";
  if (x >= 2) return "below";
  return "low";
}

// For a diverging dim, the phrase for THIS side, from where this side actually stands.
export function poleFor(band, side /* "you" | "them" */) {
  const v = side === "you" ? band.you : band.them;
  return POLE[band.dim][poleRung(v)];
}
