// FanDNA - CoreUpdatePrompt (Beat 1 of the returning-user Core update). A genome saved before the
// community+chaos regrade holds pre-regrade answers to three core questions, so on return we do NOT
// silently re-score (that would degrade the read) - we tell the taker their core got sharper and
// offer to re-ask just those three. "Retake the three" starts a 3-question core run; "Keep my
// current results" freezes the existing genome untouched. Display-only: moves no match by itself.
//
// Copy note: the subhead uses a colon, not an em dash (the app copy register bans em dashes); the
// approved mock rendered an em dash there. Flagged in the ship notes.

import { useEffect, useState } from "react";

// The three re-asked questions, in the order the run presents them (meaning, hard time, no plan).
const PREVIEW = [
  "Where your sense of meaning comes from",
  "When you're going through something hard",
  "A day with no plan, everything changing",
];

const KEYFRAMES = `
@keyframes cuRise{0%{opacity:0;transform:translateY(10px);}100%{opacity:1;transform:translateY(0);}}
@media (prefers-reduced-motion: reduce){ .cu-rise{ animation:none !important; opacity:1 !important; transform:none !important; } }
`;

export function CoreUpdatePrompt({ onRetake, onKeep }){
  const [shown,setShown]=useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setShown(true),60); return ()=>clearTimeout(t); },[]);
  const rise=(d)=>({ animation:`cuRise .5s cubic-bezier(.2,.8,.3,1) ${d}s both` });

  return (
    <div style={{maxWidth:440,margin:"0 auto",padding:"8px 0 4px"}}>
      <style>{KEYFRAMES}</style>

      <div className="cu-rise" style={{textAlign:"center",...(shown?rise(0.02):{opacity:0})}}>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"#e8c46e",letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:20}}>
          Core update
        </div>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(32px,8.5vw,46px)",fontWeight:300,color:"#efe9e3",letterSpacing:"-0.01em",lineHeight:1.08,margin:"0 0 16px"}}>
          Your core got sharper.
        </h2>
        <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:"clamp(16px,4.2vw,19px)",color:"#9a9ac4",lineHeight:1.55,margin:"0 auto 30px",maxWidth:380}}>
          We sharpened how two traits read: belonging and spontaneity.
        </p>
      </div>

      {/* The three questions we'll re-ask */}
      <div className="cu-rise" style={{...(shown?rise(0.14):{opacity:0}),border:"1px solid #2a2a40",background:"rgba(120,120,160,0.04)",borderRadius:10,padding:"18px 20px",marginBottom:28}}>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#8484b0",letterSpacing:"0.28em",textTransform:"uppercase",marginBottom:14}}>
          Three quick questions
        </div>
        {PREVIEW.map((t,i)=>(
          <div key={i} style={{display:"flex",alignItems:"flex-start",gap:12,padding:i===0?"0 0 12px":"12px 0",borderTop:i===0?"none":"1px solid #22223400"}}>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"#6a6a90",lineHeight:1.5,flexShrink:0,marginTop:1}}>{i+1}</span>
            <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(15px,4vw,18px)",color:"#cfcbe0",lineHeight:1.45}}>{t}</span>
          </div>
        ))}
      </div>

      {/* CTAs: primary = solid-purple confirm (a genuine decision); secondary = muted outline */}
      <div className="cu-rise" style={{...(shown?rise(0.24):{opacity:0}),display:"flex",flexDirection:"column",gap:12,alignItems:"center"}}>
        <button type="button" onClick={onRetake}
          style={{
            width:"100%",maxWidth:340,
            background:"#6a5ad0",border:"none",borderRadius:6,padding:"15px 28px",
            color:"#f0eefb",fontFamily:"'DM Mono',monospace",fontSize:12,
            letterSpacing:"0.22em",textTransform:"uppercase",fontWeight:500,
            cursor:"pointer",transition:"background-color .15s",
          }}
          onMouseEnter={e=>e.currentTarget.style.backgroundColor="#7a6ae0"}
          onMouseLeave={e=>e.currentTarget.style.backgroundColor="#6a5ad0"}
        >Retake the three</button>

        <button type="button" onClick={onKeep}
          style={{
            width:"100%",maxWidth:340,
            background:"transparent",border:"1px solid #4a4a6a",borderRadius:6,padding:"14px 28px",
            color:"#9898b8",fontFamily:"'DM Mono',monospace",fontSize:11,
            letterSpacing:"0.2em",textTransform:"uppercase",
            cursor:"pointer",transition:"border-color .15s, color .15s",
          }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor="#6a6a90";e.currentTarget.style.color="#c8c8dc";}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor="#4a4a6a";e.currentTarget.style.color="#9898b8";}}
        >Keep my current results</button>
      </div>
    </div>
  );
}
