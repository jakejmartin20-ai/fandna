// FanDNA - HexBadge: one shape, three contents (see the genome-home design spec).
// The DNA-native badge primitive reused across the collection layer: the earn moment,
// the collection finale, and the share / compare cards all draw their hexes from here.
//   team   = a SOLID hex in the club's colour + its tricode mark (the unit you collect).
//   group  = a STRAND hex: one rung per club in a bucket, each in that club's colour.
//   genome = a HELIX hex: the seven traits as rungs (DIM_COLORS), each weighted by where
//            you stand (standing()). Yours from step one - identity, never earned.
//
// Display-only and null-safe: it imports nothing from scoring.js and cannot move a single
// match. Light and dark kits get a thin outline so their hexes read on the dark background.
// All copy here is user-facing, so: no em dashes.

import { DIM_ORDER, DIM_COLORS } from "../data/core";
import { standing } from "../lib/genomeRead";

// Pointy-top hexagon: vertical is the long axis, so the helix has headroom to wind.
function hexPoints(cx, cy, R){
  const a = R * 0.866;
  return [[cx,cy-R],[cx+a,cy-R/2],[cx+a,cy+R/2],[cx,cy+R],[cx-a,cy+R/2],[cx-a,cy-R/2]]
    .map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
}

// Perceived brightness (0..1). Whites and silvers land high, black lands low.
function lum(hex){
  if(!hex || typeof hex!=="string" || hex.length<7) return 0.4;
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  if(isNaN(r)||isNaN(g)||isNaN(b)) return 0.4;
  return (0.299*r + 0.587*g + 0.114*b) / 255;
}

// The two strands and the rung endpoints for n rungs inside a hex of radius R at (cx,cy).
// The strands pinch where the helix twists edge-on, exactly like the preview.
function helix(cx, cy, R, n){
  const yTop=cy-R*0.62, yBot=cy+R*0.62, A=R*0.34, step=0.82;
  const L=[], Rr=[];
  for(let i=0;i<n;i++){
    const y = n>1 ? yTop + (yBot-yTop)*(i/(n-1)) : cy;
    const c = Math.cos(i*step);
    L.push([cx - A*c, y]);
    Rr.push([cx + A*c, y]);
  }
  const toPath = pts => "M " + pts.map(p=>`${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" L ");
  return { L, Rr, leftPath: toPath(L), rightPath: toPath(Rr) };
}

export function HexBadge({ kind="genome", size=64, color, mark, clubColors, profile, style, title }){
  const S = size, cx = S/2, cy = S/2, R = S/2 - 3, scale = S/66;
  const strandW = Math.max(0.8, 1.4*scale);

  // TEAM: a solid club hex with its tricode. A thin light edge lifts it off the dark on every kit.
  if(kind === "team"){
    if(!color) return null;
    const light = lum(color) > 0.6;
    const txtCol = light ? "#2a2a3a" : "#ffffff";
    const edgeW = Math.max(1, 1.5*scale);
    return (
      <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`} style={style} role="img" aria-label={title || (mark ? `${mark} badge` : "team badge")}>
        <polygon points={hexPoints(cx,cy,R)} fill={color} stroke="#c9c9d6" strokeWidth={edgeW} strokeOpacity="0.55"/>
        {mark &&
          <text x={cx} y={cy} dy="0.35em" textAnchor="middle"
            fontFamily="'DM Mono',monospace" fontWeight="500"
            fontSize={Math.round(S*0.19)} fill={txtCol}>{mark}</text>}
      </svg>
    );
  }

  // GROUP + GENOME both draw the holder hex plus a helix; only the rungs differ.
  let rungs = null;
  if(kind === "group"){
    const cols = (clubColors || []).filter(Boolean);
    if(!cols.length) return null;
    rungs = cols.map(c => ({ c, w: Math.max(1.6, 4*scale), o: 1 }));
  } else { // genome
    if(!profile) return null;
    const st = standing(profile) || {};
    rungs = DIM_ORDER.map(d => {
      const v = Math.max(0, Math.min(10, st[d] || 0));
      return { c: DIM_COLORS[d], w: Math.max(1.4, (2.4 + v/10*2.8)*scale), o: 0.42 + v/10*0.58 };
    });
  }

  const n = rungs.length;
  const { L, Rr, leftPath, rightPath } = helix(cx, cy, R, n);
  const label = title || (kind === "group" ? "group crest" : "genome crest");

  return (
    <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`} style={style} role="img" aria-label={label}>
      <polygon points={hexPoints(cx,cy,R)} fill="#1a1a26" stroke="#3a3a4e" strokeWidth={Math.max(1, scale)}/>
      <path d={leftPath}  fill="none" stroke="#4a4a60" strokeWidth={strandW} strokeLinecap="round"/>
      <path d={rightPath} fill="none" stroke="#4a4a60" strokeWidth={strandW} strokeLinecap="round"/>
      {rungs.map((r,i)=>(
        <line key={i}
          x1={L[i][0].toFixed(1)} y1={L[i][1].toFixed(1)}
          x2={Rr[i][0].toFixed(1)} y2={Rr[i][1].toFixed(1)}
          stroke={r.c} strokeWidth={r.w.toFixed(1)} strokeLinecap="round" opacity={r.o.toFixed(2)}/>
      ))}
    </svg>
  );
}
