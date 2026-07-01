// FanDNA - MatchEvidence: the proof block on the PL result. Two honest pieces.
//  1) Stability: how many of your answers you could change and still land this club.
//     The big number and the cell strip are the SAME fact. A locked cell means changing
//     that answer on its own does not move you off the club; an empty cell could have
//     tipped it. This is the proof, and it calibrates itself: decisive results fill the
//     strip, close ones leave gaps and say so.
//  2) What tipped it: the three answers that pulled most distinctively toward the club.
//     Texture, not proof. They never claim exclusivity, so they can never overclaim it.
// All copy here is user-facing, so: no em dashes. The structural noun (club / franchise /
// ballclub) comes from the per-sport voice; evidence.safe is null for any sport not yet wired,
// and we render nothing in that case.

import { useState, useEffect } from "react";

function verdictLine(safe, total, club){
  if (total > 0 && safe === total)
    return "Every answer holds. Change any single answer, one at a time, and you still land " + club + ".";
  const r = total > 0 ? safe / total : 0;
  if (r >= 0.84) return "Rock solid. Nearly every answer holds. You land " + club + " from almost any version of your answers.";
  if (r >= 0.60) return club + " came out on top. Most of your answers are locked, and a few could have tipped it.";
  return "A close call. " + club + " edged it, and a good share of your answers could have sent you somewhere else.";
}

export function MatchEvidence({ evidence, clubName, color = "#b8567a", noun = "club" }){
  const [shown, setShown] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShown(true), 150); return () => clearTimeout(t); }, []);

  if (!evidence || evidence.safe == null) return null;
  const { safe, total, tips = [] } = evidence;
  const club = clubName || "your club";

  // The cell strip mirrors the real per-answer pattern: locks[i] is true when that answer is
  // locked (no single change moves you off the club). Evidence without a locks array falls back
  // to an even spread of the same count, so the number always reads correctly either way.
  let cells;
  if (Array.isArray(evidence.locks) && evidence.locks.length === total){
    cells = evidence.locks.map(Boolean);
  } else {
    const k = total - safe;
    cells = [];
    for (let i = 0; i < total; i++){
      const pivotal = Math.floor((i + 1) * k / total) > Math.floor(i * k / total);
      cells.push(!pivotal); // true = locked
    }
  }
  const stripColon = (s) => (s || "").replace(/\s*:\s*$/, "");

  return (
    <div style={{marginTop:28}}>

      {/* STABILITY, the proof */}
      <div style={{background:"#1e1e2e",border:"1px solid #2a2a3a",borderRadius:14,padding:"18px 16px"}}>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#8484b0",marginBottom:14}}>How solid is this</div>

        <div style={{display:"flex",alignItems:"baseline",gap:5,lineHeight:1}}>
          <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:60,fontWeight:600,color:"#efe9e3"}}>{safe}</span>
          <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:32,color:"#8484b0"}}>/ {total}</span>
        </div>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#9696b4",marginTop:5}}>answers locked to this {noun}</div>

        {/* the cell strip: this IS the number, counted out */}
        <div style={{marginTop:18,paddingTop:16,borderTop:"1px solid #242433"}}>
          <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:14}}>
            {cells.map((locked, i) => (
              <span key={i} style={{
                width:13,height:13,borderRadius:3,
                background: locked ? color : "#191922",
                border: locked ? ("1px solid " + color) : "1px solid #2c2c3c",
                opacity: shown ? 1 : 0,
                transform: shown ? "scale(1)" : "scale(0.7)",
                transition: `opacity .25s ease ${(i * 0.012).toFixed(2)}s, transform .25s ease ${(i * 0.012).toFixed(2)}s`,
              }}/>
            ))}
          </div>
          <div style={{display:"flex",gap:16,flexWrap:"wrap",fontFamily:"'DM Mono',monospace",fontSize:9,color:"#9696b4"}}>
            <span><i style={{display:"inline-block",width:10,height:10,borderRadius:2,background:color,marginRight:6,verticalAlign:"-1px"}}/>locked, will not change your {noun}</span>
            <span><i style={{display:"inline-block",width:10,height:10,borderRadius:2,background:"#191922",border:"1px solid #2c2c3c",marginRight:6,verticalAlign:"-1px"}}/>could have tipped it</span>
          </div>
        </div>

        <p style={{fontSize:14,color:"#c8c4be",lineHeight:1.55,margin:"14px 0 0"}}>{verdictLine(safe, total, club)}</p>
      </div>

      {/* WHAT TIPPED IT, the texture. When nothing stands out (a genuine broad match), a strong
          line says so on purpose, so the result never reads as bare. */}
      {tips.length > 0 ? (
        <div style={{background:"#1e1e2e",border:"1px solid #2a2a3a",borderRadius:14,padding:"18px 16px",marginTop:16}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#8484b0",marginBottom:4}}>What tipped it</div>
          <p style={{fontSize:12.5,color:"#9696b4",lineHeight:1.45,margin:"0 0 12px"}}>The answers that pulled you hardest toward {club}.</p>
          {tips.map((t, i) => (
            <div key={i} style={{display:"flex",gap:12,padding:"13px 0",borderTop:i===0?"none":"1px solid #242433"}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:color,marginTop:7,flexShrink:0,boxShadow:`0 0 7px ${color}`}}/>
              <div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9.5,letterSpacing:"0.1em",textTransform:"uppercase",color:"#8585b4",marginBottom:5}}>{stripColon(t.question)}</div>
                <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:17,lineHeight:1.3,color:"#e4ddd4"}}>{t.answer}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{background:"#1e1e2e",border:"1px solid #2a2a3a",borderRadius:14,padding:"18px 16px",marginTop:16}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#8484b0",marginBottom:10}}>Why this lands</div>
          <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:19,lineHeight:1.45,color:"#e4ddd4",margin:0}}>This match runs deeper than any one answer. {club} is where your whole core settles, not a {noun} one choice tipped you into. A broad match like this is its own kind of strong.</p>
        </div>
      )}

    </div>
  );
}
