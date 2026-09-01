// FanDNA - CoreStrip: the seven-band gel readout of the USER's core (coreProfile),
// shown identically on the genome home (hero) and inside the result card. The bars are
// the constant "same you" across every sport; the matched team only changes the club, not
// these bars. Default view shows the three-letter codes (matching the share card, which is
// a flat image and cannot reveal). Tapping the strip swaps the codes for the full dimension
// names, a thin bar, and the score out of ten. On first appearance the bands sequence into
// place (a quiet "we are reading you" settle). All copy here is user-facing, so: no em dashes.
//
// When an onRetake handler is supplied (the home hero), a small retake disc sits beside the
// expand chevron. Tapping it opens a two-step confirm in place; confirming re-answers the 24
// core questions and recomputes every taken league. It is never shown where onRetake is absent
// (e.g. the compact result-screen strip), so display-only surfaces stay unchanged.

import { useState, useEffect } from "react";
import { DIM_ORDER, DIM_LABELS, DIM_COLORS, DIM_CODES } from "../data/core";
import { standing, standingWord } from "../lib/genomeRead";

// The caller hands us the RAW core (unchanged everywhere, including the share/save link, which
// still encodes raw). standing() turns it into where this person sits against everyone else,
// which is the only claim a band can honestly make: a raw 4.7 in chaos is not "low chaos", it is
// higher than two thirds of people, because nobody can score above 5.4 on that trait at all.
export function CoreStrip({ dims, compact=false, onRetake }){
  const d = standing(dims) || {};
  const [open,setOpen]=useState(false);
  const [shown,setShown]=useState(false);
  const [confirm,setConfirm]=useState(false);   // two-step guard on the retake

  // Trigger the settle animation once, just after mount (each time the strip first appears).
  useEffect(()=>{ const t=setTimeout(()=>setShown(true),200); return ()=>clearTimeout(t); },[]);

  const H = compact?84:96, P=6, B=10, travel=H-2*P-B, BOTTOM=H-B-2;
  const clamp = (s)=> Math.max(0, Math.min(10, s||0));
  const topFor = (s)=> P + (1 - clamp(s)/10) * travel;

  return (
    <div>
      <div role="button" tabIndex={0} aria-expanded={open}
        aria-label={open?"Hide where you stand on each trait":"Show where you stand on each trait"}
        onClick={()=>setOpen(o=>!o)}
        onKeyDown={(e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); setOpen(o=>!o); } }}
        style={{cursor:"pointer"}}>

        {/* Label + (optional) retake disc + chevron-disc affordance */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#9696b4",letterSpacing:"0.28em",textTransform:"uppercase"}}>Your core</span>
          <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
            {onRetake&&(
              <button type="button" aria-label="Retake your core questions"
                onClick={(e)=>{ e.stopPropagation(); setConfirm(c=>!c); }}
                style={{width:44,height:44,borderRadius:"50%",border:"none",background:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0,flexShrink:0}}>
                <span style={{width:30,height:30,borderRadius:"50%",border:`1px solid ${confirm?"#6a5f8a":"#3f3f55"}`,background:confirm?"rgba(120,104,168,0.14)":"none",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#b0a8cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                </svg>
                </span>
              </button>
            )}
            <div aria-hidden="true" style={{width:30,height:30,borderRadius:"50%",border:"1px solid #3f3f55",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <svg width="12" height="12" viewBox="0 0 12 12" style={{transform:open?"rotate(180deg)":"none",transition:"transform .22s ease"}}>
                <path d="M2.5 4.5 L6 8 L9.5 4.5" fill="none" stroke="#9696b4" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
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
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:14,color:"#8888a6",marginBottom:10}}>How much of each trait you carry, next to everyone else.</div>
            {DIM_ORDER.map(dk=>{
              const col=DIM_COLORS[dk], v=clamp(d[dk]);
              return (
                <div key={dk} style={{display:"flex",alignItems:"center",gap:9,padding:"4px 0"}}>
                  <span style={{width:9,height:9,borderRadius:2,flexShrink:0,background:col}}/>
                  <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:14,color:"#d8d4ce",flexShrink:0,width:118}}>{DIM_LABELS[dk]}</span>
                  <span style={{flex:1,height:4,background:"#1c1c28",borderRadius:2,overflow:"hidden"}}>
                    <span style={{display:"block",height:"100%",width:`${Math.round(v*10)}%`,background:col,borderRadius:2}}/>
                  </span>
                  <span style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"#9a9ab4",width:56,textAlign:"right",flexShrink:0}}>{standingWord(v)}</span>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Retake confirm (sibling of the clickable strip so its taps never toggle the reveal) */}
      {onRetake&&confirm&&(
        <div style={{marginTop:12,paddingTop:12,borderTop:"1px solid #242433"}}>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:14,color:"#b8b4c4",lineHeight:1.5,marginBottom:10}}>Re-answer all 24 core questions? Every league recomputes against your new answers.</div>
          <div style={{display:"flex",gap:22,alignItems:"center"}}>
            <button type="button" onClick={()=>{setConfirm(false);onRetake&&onRetake();}}
              style={{color:"#d4a44e",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",background:"none",border:"none",cursor:"pointer",padding:"2px 0"}}>Retake</button>
            <button type="button" onClick={()=>setConfirm(false)}
              style={{color:"#7f7f9f",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",background:"none",border:"none",cursor:"pointer",padding:"2px 0"}}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
