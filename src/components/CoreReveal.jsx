// FanDNA - CoreReveal: the one reveal beat on a first full take. After the core and the
// instincts (all the about-you questions) and before the sport module begins, we pause to
// tell the taker who they are - their core "type" - so the three-part test stops feeling
// hidden and the pivot into the sport is earned. The type + read come from generateRead;
// the seven-band strip is the SAME CoreStrip shown on the genome home (colours + tap to
// expand to high / above / typical), so it stays in lockstep with the rest of the app.
//
// Display-only: reads the coreProfile it is handed, moves no match. The club is NOT shown
// here - that is still the payoff at the very end. onContinue resumes into the sport module.

import { useEffect, useState } from "react";
import { generateRead } from "../lib/genomeRead";
import { CoreStrip } from "./CoreStrip";
import { StageBar } from "./StageBar";

const KEYFRAMES = `
@keyframes crRise{0%{opacity:0;transform:translateY(10px);}100%{opacity:1;transform:translateY(0);}}
@media (prefers-reduced-motion: reduce){ .cr-rise{ animation:none !important; } }
`;

export function CoreReveal({ coreProfile, sportName="your sport", onContinue }){
  const [shown,setShown]=useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setShown(true),60); return ()=>clearTimeout(t); },[]);
  if(!coreProfile) return null;

  const read = generateRead(coreProfile, 1) || { headline:"Your core", read:"" };

  // At the reveal, the about-you stages are done and only the sport remains.
  const stages = [
    { key:"core",  label:"Core",     color:"#7f7fb0", labelColor:"#9a9acc", len:24, frac:1, state:"done" },
    { key:"spine", label:"Instincts",color:"#7f7fb0", labelColor:"#9a9acc", len:7,  frac:1, state:"done" },
    { key:"mod",   label:sportName,  color:"#c9b27a", labelColor:"#c9b27a", len:14, frac:0, state:"upcoming" },
  ];

  const rise = (d)=>({ animation:`crRise .5s cubic-bezier(.2,.8,.3,1) ${d}s both` });

  return (
    <div>
      <style>{KEYFRAMES}</style>

      <StageBar stages={stages}/>

      <div className="cr-rise" style={{textAlign:"center",...(shown?rise(0.02):{opacity:0})}}>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"#8484b0",letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:18}}>
          Your core, sequenced
        </div>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:17,color:"#9696b4",marginBottom:2}}>
          you are
        </div>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(38px,10vw,52px)",fontWeight:300,color:"#efe9e3",letterSpacing:"-0.01em",lineHeight:1.05,margin:"0 0 14px"}}>
          {read.headline}
        </h2>
        {read.read&&(
          <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:"clamp(17px,4.4vw,20px)",color:"#9a9ac4",lineHeight:1.55,margin:"0 auto 28px",maxWidth:400}}>
            {read.read}
          </p>
        )}
      </div>

      {/* The seven-band strip: the same component as the genome home (colours + tap to expand). */}
      <div className="cr-rise" style={shown?rise(0.14):{opacity:0}}>
        <CoreStrip dims={coreProfile}/>
      </div>

      {/* Pivot into the sport */}
      <div className="cr-rise" style={{textAlign:"center",marginTop:30,...(shown?rise(0.24):{opacity:0})}}>
        <div style={{height:1,background:"#242438",margin:"0 auto 22px",maxWidth:320}}/>
        <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:"clamp(16px,4vw,18px)",color:"#9a9ac4",lineHeight:1.55,margin:"0 auto 20px",maxWidth:360}}>
          That's who you are. Now, which {sportName} team are you?
        </p>
        <button type="button" onClick={onContinue}
          style={{
            border:"1px solid #4a4a6a",borderRadius:6,padding:"14px 34px",
            color:"#cfcbe6",fontFamily:"'DM Mono',monospace",fontSize:11,
            letterSpacing:"0.25em",textTransform:"uppercase",
            background:"rgba(120,120,160,0.06)",cursor:"pointer",transition:"border-color .15s, color .15s",
          }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor="#6a6a90";e.currentTarget.style.color="#efe9e3";}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor="#4a4a6a";e.currentTarget.style.color="#cfcbe6";}}
        >Find my team →</button>
      </div>
    </div>
  );
}
