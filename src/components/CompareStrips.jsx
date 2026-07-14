// FanDNA - CompareStrips: two seven-band core readouts stacked (YOU over THEM), with the
// diverging dims outlined in an accent and labelled beneath ("the gulf" / "the split" / "you
// lead"). Same gel look as CoreStrip, but read-only and comparison-aware. The bands are each
// person's core drawn through standing(), exactly what the home + result strips show, so the
// comparison lines up with what both people already saw. Drawing the raw core here was what made
// two strangers look like the same barcode: the widest band-height difference anywhere on the
// whole strip was 0.4 out of 10. Display-only, no em dashes in user-facing copy.

import { DIM_ORDER, DIM_COLORS, DIM_CODES } from "../data/core";
import { standing } from "../lib/genomeRead";

function BandRow({ profile, highlight, accent, H }) {
  const d = standing(profile) || {};
  const P = 6, B = 9, travel = H - 2 * P - B;
  const clamp = (s) => Math.max(0, Math.min(10, s || 0));
  const topFor = (s) => P + (1 - clamp(s) / 10) * travel;
  return (
    <div style={{ display: "flex", gap: 5, alignItems: "flex-end" }}>
      {DIM_ORDER.map((dk) => {
        const col = DIM_COLORS[dk];
        const on = highlight.has(dk);
        return (
          <div key={dk} style={{
            position: "relative", flex: 1, height: H,
            background: "#1c1c28",
            border: on ? `1.5px solid ${accent}` : "1px solid #2a2a3a",
            borderRadius: 3, overflow: "hidden",
            boxShadow: on ? `0 0 0 1px ${accent}44` : "none",
          }}>
            <div style={{
              position: "absolute", left: 6, right: 6, height: B, borderRadius: 3, top: topFor(d[dk]),
              background: col, boxShadow: `0 0 8px ${col}88`,
            }}>
              <div style={{ position: "absolute", left: 1, right: 1, top: 1, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.4)" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function CompareStrips({ you, them, highlightDims = [], highlightLabel = null, note = null, accent = "#d99a3c", H = 74 }) {
  const hi = new Set(highlightDims);
  const mono = { fontFamily: "'DM Mono',monospace" };

  return (
    <div>
      {/* YOU */}
      <div style={{ ...mono, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "#c9a24a", marginBottom: 8 }}>You</div>
      <BandRow profile={you} highlight={hi} accent={accent} H={H} />

      {/* dim codes */}
      <div style={{ display: "flex", gap: 5, marginTop: 6, marginBottom: 14 }}>
        {DIM_ORDER.map((dk) => (
          <span key={dk} style={{ ...mono, flex: 1, textAlign: "center", fontSize: 9, letterSpacing: "0.04em", color: hi.has(dk) ? accent : "#8a8aa2" }}>{DIM_CODES[dk]}</span>
        ))}
      </div>

      {/* THEM */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <span style={{ ...mono, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "#7f9fd0" }}>Them</span>
        {note && <span style={{ ...mono, fontSize: 10, letterSpacing: "0.06em", color: "#6fae86" }}>{note}</span>}
      </div>
      <BandRow profile={them} highlight={hi} accent={accent} H={H} />

      {/* label under the diverging column(s) */}
      {highlightLabel && (
        <div style={{ display: "flex", gap: 5, marginTop: 6 }}>
          {DIM_ORDER.map((dk) => (
            <span key={dk} style={{ ...mono, flex: 1, textAlign: "center", fontSize: 10, letterSpacing: "0.04em", color: accent, minHeight: 14 }}>
              {hi.has(dk) ? (DIM_ORDER.filter(x => hi.has(x))[0] === dk ? highlightLabel : "") : ""}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
