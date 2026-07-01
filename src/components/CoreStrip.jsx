// FanDNA - CoreStrip: the seven-band gel readout of the USER's core (coreProfile),
// shown identically on the genome home (hero) and inside the result card. The bars are
// the constant "same you" across every sport; the matched team only changes the club, not
// these bars. Default view shows the three-letter codes (matching the share card, which is
// a flat image and cannot reveal). Tapping the strip swaps the codes for the full dimension
// names, a thin bar, and the score out of ten. On first appearance the bands sequence into
// place (a quiet "we are reading you" settle). All copy here is user-facing, so: no em dashes.

import { useState, useEffect } from "react";
import { DIM_ORDER, DIM_LABELS, DIM_COLORS, DIM_CODES } from "../data/core";

export function CoreStrip({ dims, compact=false }){
  const d = dims || {};
  const [open,setOpen]=useState(false);
  const [shown,setShown]=useState(false);

  // Trigger the settle animation once, just after mount (each time the strip first appears).
  useEffect(()=>{ const t=setTimeout(()=>setShown(true),200); return ()=>clearTimeout(t); },[]);

  const H = compact?84:96, P=6, B=10, travel=H-2*P-B, BOTTOM=H-B-2;
  const clamp = (s)=> Math.max(0, Math.min(10, s||0));
  const topFor = (s)=> P + (1 - clamp(s)/10) * travel;

  return (
    <div role="button" tabIndex={0} aria-expanded={open}
      aria-label={open?"Hide your core dimension scores":"Show your core dimension scores"}
      onClick={()=>setOpen(o=>!o)}
      onKeyDown={(e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); setOpen(o=>!o); } }}
      style={{cursor:"pointer"}}>

      {/* Label + subtle tap cue */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#9696b4",letterSpacing:"0.28em",textTransform:"uppercase"}}>Your core</span>
        <span style={{display:"flex",alignItems:"center",gap:6,opacity:0.6,fontFamily:"'DM Mono',monospace",fontSize:9,color:"#8484b0",letterSpacing:"0.14em",textTransform:"uppercase"}}>
          {open?"tap to close":"tap to read"}
          <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true" style={{transform:open?"rotate(180deg)":"none",transition:"transform .25s ease"}}>
            <path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="#8484b0" strokeWidth="1.3"/>
          </svg>
        </span>
      </div>

      {/* The seven bands */}
      <div style={{display:"flex",gap:5,alignItems:"flex-end"}}>
        {DIM_ORDER.map((dk,i)=>{
          const col=DIM_COLORS[dk];
          const top = shown ? topFor(d[dk]) : BOTTOM;
          return (
            <div key={dk} style={{position:"relative",flex:1,height:H,background:"#1c1c28",border:"1px solid #2a2a3a",borderRadius:3,overflow:"hidden"}}>
              <div style={{
                position:"absolute",left:6,right:6,height:B,borderRadius:3,top,
                opacity:shown?1:0,background:col,boxShadow:`0 0 8px ${col}88`,
                transition:`top .7s cubic-bezier(.2,.8,.3,1) ${(i*0.08).toFixed(2)}s, opacity .5s ease ${(i*0.08).toFixed(2)}s`,
              }}>
                <div style={{position:"absolute",left:1,right:1,top:1,height:3,borderRadius:2,background:"rgba(255,255,255,0.4)"}}/>
              </div>
            </div>
          );
        })}
      </div>

      {/* Codes (default) */}
      {!open&&(
        <div style={{display:"flex",gap:5,marginTop:6,fontFamily:"'DM Mono',monospace",fontSize:9}}>
          {DIM_ORDER.map(dk=>(
            <span key={dk} style={{flex:1,textAlign:"center",color:DIM_COLORS[dk]}}>{DIM_CODES[dk]}</span>
          ))}
        </div>
      )}

      {/* Full names + values (revealed) */}
      {open&&(
        <div style={{marginTop:13,paddingTop:12,borderTop:"1px solid #242433"}}>
          {DIM_ORDER.map(dk=>{
            const col=DIM_COLORS[dk], v=clamp(d[dk]);
            return (
              <div key={dk} style={{display:"flex",alignItems:"center",gap:9,padding:"4px 0"}}>
                <span style={{width:9,height:9,borderRadius:2,flexShrink:0,background:col}}/>
                <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:14,color:"#d8d4ce",flexShrink:0,width:118}}>{DIM_LABELS[dk]}</span>
                <span style={{flex:1,height:4,background:"#1c1c28",borderRadius:2,overflow:"hidden"}}>
                  <span style={{display:"block",height:"100%",width:`${Math.round(v*10)}%`,background:col,borderRadius:2}}/>
                </span>
                <span style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"#9a9ab4",width:30,textAlign:"right",flexShrink:0}}>{v.toFixed(1)}</span>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
