// FanDNA telemetry sender. Called once when a quiz completes and a result is saved.
// Sends ONE anonymous counter ping: sport, club, margin band, where the club sat in
// the taker's core-only ranking, and whether this was a retake. Nothing identifying,
// no answers, no cookies. Fire-and-forget: every path is wrapped so a failed or
// blocked ping can never touch the result flow. Display-only by construction: this
// file reads the engine, it never feeds it.

import { scoreModule } from "./scoring";

// Margin band from the final scores, mirroring the readout verdict bands in App:
// PL margins are integer matrix points (0 tie, 1 close, >=4 clear, else mid);
// fingerprint sports use the pooled thresholds (close < 0.5, clear > 2.2).
function marginBand(sport, scores, club) {
  try {
    const sorted = Object.entries(scores || {}).sort((a, b) => b[1] - a[1]);
    if (sorted.length < 2 || sorted[0][0] !== club) return "mid";
    const gap = sorted[0][1] - sorted[1][1];
    if (sport === "PL") {
      const g = Math.round(gap);
      if (g === 0) return "tie";
      if (g === 1) return "close";
      if (g >= 4) return "clear";
      return "mid";
    }
    if (gap < 0.5) return "close";
    if (gap > 2.2) return "clear";
    return "mid";
  } catch (e) { return "mid"; }
}

// Where the landed club sits when the SAME live engine runs on the core alone
// (empty module sheet). Rank 1 means the core alone already had it first.
// 0 means the rank could not be computed; the receiver files that under "unknown".
function coreOnlyRank(sport, coreProfile, coreAnswers, club) {
  try {
    const { scores } = scoreModule(sport, { coreProfile, coreAnswers, moduleAnswers: {} });
    const mine = scores[club];
    if (mine === undefined) return 0;
    let greater = 0;
    for (const k in scores) { if (scores[k] > mine) greater++; }
    return greater + 1;
  } catch (e) { return 0; }
}

function pingResult({ sport, club, scores, coreProfile, coreAnswers, retake }) {
  try {
    const payload = JSON.stringify({
      s: sport,
      c: club,
      b: marginBand(sport, scores, club),
      r: coreOnlyRank(sport, coreProfile, coreAnswers, club),
      re: retake ? 1 : 0,
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/ping", new Blob([payload], { type: "application/json" }));
    } else {
      fetch("/api/ping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch (e) { /* counting is best-effort, never the taker's problem */ }
}

export { pingResult };
