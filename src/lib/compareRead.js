// FanDNA - compare read. Turns two genomes (yours + a friend's) into the numbers the compare
// screen renders: each person's core-level archetype, where the two cores align or split, and
// which leagues you share. Pure + display-only: imports nothing from the scoring path.
//
// Two design choices worth noting:
//  - Archetype comes from genomeRead (the same "through-line type" shown on the home screen), so
//    a person is the same type here as everywhere else. We read only its headline.
//  - Band divergence self-standardizes each profile (within-profile z), exactly like the live
//    "matched on shape, not raw score" readout. That keeps the compressed core comparable across
//    dims without needing any baked population constant.

import { DIM_ORDER, DIM_LABELS, DIM_COLORS, DIM_CODES } from "../data/core";
import { generateRead } from "./genomeRead";

// The core-level type label ("The Chaser", ...). Null when there is no core.
export function archetypeLabel(profile) {
  const r = profile ? generateRead(profile, 1) : null;
  return r ? r.headline : null;
}

// within-profile z: describe each dim relative to that person's own spread.
function zscores(profile) {
  const v = DIM_ORDER.map(d => +((profile || {})[d]) || 0);
  const m = v.reduce((a, b) => a + b, 0) / v.length;
  const sd = Math.sqrt(v.reduce((a, b) => a + (b - m) * (b - m), 0) / v.length) || 1;
  const z = {};
  DIM_ORDER.forEach((d, i) => { z[d] = (v[i] - m) / sd; });
  return z;
}

// Per-dim comparison of two cores. Returns the seven bands plus which dims diverge most.
export function bandModel(youProfile, themProfile) {
  const zy = zscores(youProfile), zt = zscores(themProfile);
  const bands = DIM_ORDER.map(d => ({
    dim: d,
    label: DIM_LABELS[d],
    code: DIM_CODES[d],
    color: DIM_COLORS[d],
    you: +((youProfile || {})[d]) || 0,
    them: +((themProfile || {})[d]) || 0,
    zy: zy[d], zt: zt[d],
    gap: Math.abs(zy[d] - zt[d]),
    lead: zy[d] > zt[d] ? "you" : (zt[d] > zy[d] ? "them" : "even"),
  }));
  const byGap = [...bands].sort((a, b) => b.gap - a.gap);
  const maxGap = byGap[0] ? byGap[0].gap : 0;
  // A dim "diverges" when its gap is a meaningful share of the widest gap and above a floor.
  const SPLIT_FLOOR = 0.55;
  const diverging = byGap.filter(b => b.gap >= Math.max(SPLIT_FLOOR, maxGap * 0.6));
  const allLinedUp = maxGap < 0.5;
  return {
    bands,
    byGap,
    maxGap,
    allLinedUp,
    topDims: allLinedUp ? [] : diverging.slice(0, 2).map(b => b.dim),
    splitCount: allLinedUp ? 0 : diverging.length,
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

// Two poles per dim, for the plain-language verdict + reasons. High = the trait is strong in you;
// low = the trait is notably not you. US English, no em dashes.
export const POLE = {
  loyalty:    { high: "loyalty that never switches",   low: "an open mind about the badge" },
  emotion:    { high: "heart at full volume",          low: "a cool, level head" },
  ambition:   { high: "a hunger for the very top",     low: "a peace with less than the summit" },
  process:    { high: "faith in the plan",             low: "trust in instinct" },
  community:  { high: "the collective above all",      low: "a self-contained streak" },
  chaos:      { high: "a taste for the chaos",         low: "a need for order" },
  rootedness: { high: "deep roots and a sense of place", low: "an at-home-anywhere streak" },
};

// For a diverging dim, the short pole phrase for whichever side is higher.
export function poleFor(band, side /* "you" | "them" */) {
  const higher = band.lead === side;                 // is THIS side the high one on this dim?
  return higher ? POLE[band.dim].high : POLE[band.dim].low;
}
