// FanDNA - ClubMark: the owned club mark (kit colorway + 3-letter code) that replaces every
// official crest. One component, rendered everywhere a crest used to be (home strands, result
// screen). The share-card canvas draws the same spec in card.js (drawClubMark). It is all shapes
// and text, no remote image, so there is no crest hotlink and no canvas taint on export.
//
// Reads four per-team data fields: color (primary), secondaryColor, kitType, code3.
//   kitType: "solid"   - one color
//            "duo"     - grounded band (the two-color standard for the US leagues)
//            "stripes" - vertical stripes
//            "sash"    - diagonal sash (the soccer-only treatment)
// A pale field (one that would blend into the off-white ring) gets a thin separating outline.

import { useId } from "react";

const RING = "#f7f4ef";

function lum(hex){
  const h = (hex || "#000000").replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const f = v => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function blendsIntoRing(hex){
  const ringL = lum(RING), a = lum(hex);
  const hi = Math.max(a, ringL) + 0.05, lo = Math.min(a, ringL) + 0.05;
  return hi / lo < 2.5;
}

export function ClubMark({ team, size = 80 }){
  const rawId = useId();
  const clip = "cm" + rawId.replace(/[^a-zA-Z0-9]/g, "");
  const C = (team && team.color) || "#555560";
  const S = (team && team.secondaryColor) || "#ffffff";
  const kit = (team && team.kitType) || "solid";
  const code = (team && team.code3) || "";
  const light = blendsIntoRing(C);

  let field;
  if (kit === "duo") {
    field = (<g><rect x="0" y="0" width="100" height="100" fill={C}/><rect x="0" y="60" width="100" height="40" fill={S}/></g>);
  } else if (kit === "sash") {
    field = (<g><rect x="0" y="0" width="100" height="100" fill={C}/><rect x="-10" y="41" width="120" height="18" fill={S} transform="rotate(-30 50 50)"/></g>);
  } else if (kit === "stripes") {
    const n = 6, w = 86 / n, bars = [];
    for (let i = 0; i < n; i++) bars.push(<rect key={i} x={(7 + i * w).toFixed(2)} y="7" width={w.toFixed(2)} height="86" fill={i % 2 ? S : C}/>);
    field = <g>{bars}</g>;
  } else {
    field = <rect x="0" y="0" width="100" height="100" fill={C}/>;
  }

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={code} style={{ display: "block", flexShrink: 0 }}>
      <defs><clipPath id={clip}><circle cx="50" cy="50" r="43"/></clipPath></defs>
      <circle cx="50" cy="50" r="48" fill={RING}/>
      <g clipPath={`url(#${clip})`}>{field}</g>
      {light && <circle cx="50" cy="50" r="43" fill="none" stroke="#8b8b99" strokeWidth="2"/>}
      <rect x="27" y="68" width="46" height="20" rx="10" fill="#15151c" stroke="rgba(247,244,239,0.38)" strokeWidth="1"/>
      <text x="50" y="82.5" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="11.5" letterSpacing="1" fill="#f7f4ef">{code}</text>
    </svg>
  );
}
