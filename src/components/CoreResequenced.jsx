// FanDNA - CoreResequenced (Beat 2 of the returning-user Core update). After the taker re-answers
// the three regraded questions, we re-read every league they've played against the sharper core and
// show what actually moved - old club struck through, new club in the club's own accent - plus a
// one-line tally of what held. Louder than the quiet "Fit updated" heal banner on purpose: the
// taker asked for this, so the payoff is a full screen, not a footnote.
//
// Display-only: renders the moves the engine already computed (passed in via `result`); it re-scores
// nothing itself. Only leagues the taker has actually played appear; a team moves only if the
// sharper core honestly lands it somewhere else.

import { useEffect, useState } from "react";
import { SPORT_DATA } from "../lib/sportData";
import { SPORTS } from "../lib/manifest";

const WORDS = ["zero","one","two","three","four","five","six","seven","eight","nine","ten",
  "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
const word = (n)=> (n>=0 && n<WORDS.length) ? WORDS[n] : String(n);
const Word = (n)=>{ const w=word(n); return w.charAt(0).toUpperCase()+w.slice(1); };

const leagueName = (code)=>{ const s=SPORTS.find(y=>y.code===code); return s?s.name:code; };
const teamName = (code,club)=>{ const d=SPORT_DATA[code]; const t=d&&d.teams&&d.teams[club]; return (t&&t.name)?t.name:club; };
const accentOf = (code,club)=>{ const d=SPORT_DATA[code]; const c=d&&d.teamTextColors&&d.teamTextColors[club]; return c||"#c9b27a"; };

const KEYFRAMES = `
@keyframes crsRise{0%{opacity:0;transform:translateY(10px);}100%{opacity:1;transform:translateY(0);}}
@keyframes crsRow{0%{opacity:0;transform:translateY(8px);}100%{opacity:1;transform:translateY(0);}}
@media (prefers-reduced-motion: reduce){ .crs-rise,.crs-row{ animation:none !important; opacity:1 !important; transform:none !important; } }
`;

export function CoreResequenced({ result, onContinue }){
  const [shown,setShown]=useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setShown(true),60); return ()=>clearTimeout(t); },[]);

  const moved = (result&&result.moved)||[];
  const held  = (result&&result.held)||[];
  const rise=(d)=>({ animation:`crsRise .5s cubic-bezier(.2,.8,.3,1) ${d}s both` });

  const n = moved.length;
  // Headline: the count of teams that moved, teams-shifted in gold. Zero reads as reassurance.
  const headline = n===0
    ? <span>Your teams all held.</span>
    : n===1
      ? <span>One of your <span style={{color:"#e8c46e"}}>teams shifted.</span></span>
      : <span>{Word(n)} of your <span style={{color:"#e8c46e"}}>teams shifted.</span></span>;

  // Held tally line: "{N} held, {up to two clubs} among them." No possessive, no "your <team>".
  const heldCount = held.length;
  const examples = held.slice(0,2).map(h=>teamName(h.sport,h.club));
  const heldLine = heldCount>0
    ? `${Word(heldCount)} held${examples.length?`, ${examples.join(" and ")} among them.`:"."}`
    : null;

  return (
    <div style={{maxWidth:440,margin:"0 auto",padding:"8px 0 4px"}}>
      <style>{KEYFRAMES}</style>

      <div className="crs-rise" style={{textAlign:"center",...(shown?rise(0.02):{opacity:0})}}>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"#e8c46e",letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:20}}>
          Your core, resequenced
        </div>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(32px,8.5vw,46px)",fontWeight:300,color:"#efe9e3",letterSpacing:"-0.01em",lineHeight:1.08,margin:"0 0 26px"}}>
          {headline}
        </h2>
      </div>

      {/* Moved rows: old struck -> new in the club's accent, with a right-edge accent bar. */}
      {n>0 && (
        <div style={{marginBottom:heldLine?24:30}}>
          {moved.map((m,i)=>{
            const col=accentOf(m.sport,m.to);
            return (
              <div key={m.sport} className="crs-row"
                style={{
                  ...(shown?{animation:`crsRow .45s cubic-bezier(.2,.8,.3,1) ${0.16+i*0.07}s both`}:{opacity:0}),
                  position:"relative",display:"flex",flexDirection:"column",gap:4,
                  padding:"13px 16px 13px 15px",marginBottom:9,
                  background:"rgba(120,120,160,0.045)",border:"1px solid #24243a",borderRadius:9,overflow:"hidden",
                }}>
                <span aria-hidden="true" style={{position:"absolute",top:0,right:0,bottom:0,width:4,background:col,opacity:0.85}}/>
                <span style={{fontFamily:"'DM Mono',monospace",fontSize:9.5,letterSpacing:"0.24em",textTransform:"uppercase",color:"#7a7aa2"}}>
                  {leagueName(m.sport)}
                </span>
                <span style={{display:"flex",alignItems:"baseline",gap:9,flexWrap:"wrap"}}>
                  <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(15px,4vw,18px)",color:"#6a6a80",textDecoration:"line-through",textDecorationColor:"#4a4a5e"}}>
                    {teamName(m.sport,m.from)}
                  </span>
                  <span aria-hidden="true" style={{fontFamily:"'DM Mono',monospace",fontSize:12,color:"#6a6a90"}}>→</span>
                  <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(17px,4.6vw,21px)",fontWeight:500,color:col}}>
                    {teamName(m.sport,m.to)}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Held tally */}
      {heldLine && (
        <div className="crs-rise" style={{textAlign:"center",...(shown?rise(0.2+moved.length*0.05):{opacity:0}),marginBottom:30}}>
          <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:"clamp(15px,4vw,18px)",color:"#9a9ac4",lineHeight:1.5,margin:0}}>
            {heldLine}
          </p>
        </div>
      )}

      {/* Into the genome home. Solid-purple confirm pill (the same primary as Beat 1). */}
      <div className="crs-rise" style={{textAlign:"center",...(shown?rise(0.3+moved.length*0.05):{opacity:0})}}>
        <button type="button" onClick={onContinue}
          style={{
            width:"100%",maxWidth:340,
            background:"#6a5ad0",border:"none",borderRadius:6,padding:"15px 28px",
            color:"#f0eefb",fontFamily:"'DM Mono',monospace",fontSize:12,
            letterSpacing:"0.22em",textTransform:"uppercase",fontWeight:500,
            cursor:"pointer",transition:"background-color .15s",
          }}
          onMouseEnter={e=>e.currentTarget.style.backgroundColor="#7a6ae0"}
          onMouseLeave={e=>e.currentTarget.style.backgroundColor="#6a5ad0"}
        >See what changed</button>
      </div>
    </div>
  );
}
