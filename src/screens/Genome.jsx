// FanDNA - Genome home screen (Riff A). The new front door, manifest-driven: one "strand"
// row per sport. Adding a future sport is a manifest line plus its data; this file needs no
// changes for that. Order-agnostic: any live sport can be taken first (the shared core is the
// one-time prerequisite, never a specific sport).
//
// Riff A layout:
//   - The seven-band core strip (CoreStrip) is the identity hero up top: YOUR core, the same
//     bars across every sport. Shown once. It carries a quiet share footer (tap-to-copy plus a
//     small Share link), not a loud button.
//   - Each sport is a plain strand row (crest, name, Type for completed; the untaken live sport
//     is the bright primary CTA). The bars are NOT repeated per row; the team identity is the
//     per-row difference.
//   - A faint double-helix and a backbone line thread the strands.
//   - State-aware first run: with no genome yet, the hero collapses and the screen leads with
//     the live sport as Start.
//
// All copy here is user-facing, so: no em dashes.

import { useState } from "react";
import { ClubMark } from "../components/ClubMark";
import { CoreStrip } from "../components/CoreStrip";

export function GenomeHome({
  sports,            // manifest list: [{code,name,live,hook}, ...]
  genome,            // saved results map: { PL: { club: "LI" }, ... }
  sportData,         // { PL:{teams,archetypes,teamTextColors,...}, NFL:{...} }
  coreSequenced,     // has the shared core already been answered once?
  coreCount,         // number of core questions (added to the first sport taken)
  moduleCounts,      // per-sport module question counts: { PL: 14, ... }
  shareString,       // genome sequence string, e.g. "FanDNA: PL-LI . NFL-?"
  coreProfile,       // the user's 7-dim core; drives the hero strip
  onOpenResult,      // (code) => void
  onStartSport,      // (code) => void
}){
  const [copied,setCopied]=useState(false);

  function copyShare(){
    const txt = `${shareString}. Find yours: fandna.vercel.app`;
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(txt).then(()=>{
        setCopied(true);
        setTimeout(()=>setCopied(false),1800);
      }).catch(()=>{ window.prompt("Copy your genome:", txt); });
    } else {
      window.prompt("Copy your genome:", txt);
    }
  }
  function shareLink(){
    const txt = `${shareString}. Find yours: fandna.vercel.app`;
    if(navigator.share){ navigator.share({text:txt}).catch(()=>{}); }
    else { copyShare(); }
  }

  return(
    <div style={{animation:"popIn .45s cubic-bezier(.2,.8,.3,1) both",position:"relative",overflow:"hidden"}}>

      {/* Faint double-helix behind the wordmark: lab-readout texture, not decoration. */}
      <svg viewBox="0 0 300 120" preserveAspectRatio="xMidYMin meet"
        style={{position:"absolute",top:6,left:"50%",transform:"translateX(-50%)",width:300,height:120,opacity:0.07,zIndex:0,pointerEvents:"none"}} aria-hidden="true">
        <path d="M70,0 C110,30 110,60 70,90 C30,120 30,150 70,180" fill="none" stroke="#9898b8" strokeWidth="2"/>
        <path d="M230,0 C190,30 190,60 230,90 C270,120 270,150 230,180" fill="none" stroke="#9898b8" strokeWidth="2"/>
        <line x1="78" y1="14" x2="222" y2="14" stroke="#9898b8" strokeWidth="1.5"/>
        <line x1="92" y1="40" x2="208" y2="40" stroke="#9898b8" strokeWidth="1.5"/>
        <line x1="92" y1="64" x2="208" y2="64" stroke="#9898b8" strokeWidth="1.5"/>
        <line x1="78" y1="90" x2="222" y2="90" stroke="#9898b8" strokeWidth="1.5"/>
      </svg>

      {/* Wordmark + line */}
      <div style={{textAlign:"center",marginBottom:22,position:"relative",zIndex:1}}>
        <div style={{
          fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:300,
          fontSize:"clamp(44px,12vw,66px)",color:"#e8e4de",letterSpacing:"-.02em",lineHeight:1,
        }}>
          Fan<span style={{color:"#9898b8"}}>DNA</span>
        </div>
        <div style={{
          marginTop:10,fontSize:11,color:"#7878a0",letterSpacing:"0.35em",
          textTransform:"uppercase",fontFamily:"'DM Mono',monospace",
        }}>Your fandom, sequenced</div>
      </div>

      {/* Tagline (the pitch) */}
      <p style={{
        textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",
        fontSize:"clamp(16px,3.8vw,20px)",color:"#9898b8",lineHeight:1.55,
        margin:"0 auto 16px",maxWidth:430,position:"relative",zIndex:1,
      }}>
        Your personality already chose your team. Every sport, the same you. We just read it back.
      </p>

      {/* First-run: no genome yet, lead with Start (the strip stays collapsed / absent). */}
      {!coreSequenced&&(
        <p style={{textAlign:"center",fontSize:11,color:"#8888a8",letterSpacing:"0.08em",fontFamily:"'DM Mono',monospace",margin:"0 0 26px"}}>
          No trivia, no homework. Just you.
        </p>
      )}

      {/* Identity hero: the user's core strip, shown ONCE, with a quiet share footer. */}
      {coreSequenced&&(
        <div style={{position:"relative",zIndex:1,border:"1px solid #222230",borderRadius:12,padding:"15px 14px 13px",marginBottom:22,background:"#14141c"}}>
          <CoreStrip dims={coreProfile}/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:14,paddingTop:11,borderTop:"1px solid #222230",gap:10}}>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:12,color:"#c9c5cf",letterSpacing:"0.03em",wordBreak:"break-word"}}>{shareString}</span>
            <span style={{display:"flex",gap:14,flexShrink:0}}>
              <span onClick={copyShare} style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#7878a0",letterSpacing:"0.1em",textTransform:"uppercase",cursor:"pointer"}}>{copied?"Copied":"Copy"}</span>
              <span onClick={shareLink} style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#7878a0",letterSpacing:"0.1em",textTransform:"uppercase",cursor:"pointer"}}>Share</span>
            </span>
          </div>
        </div>
      )}

      {/* Strands, one per manifest sport, threaded onto a genome backbone */}
      <div style={{position:"relative",paddingLeft:22,marginBottom:26}}>
        <div style={{position:"absolute",left:4,top:10,bottom:10,width:1,background:"#2e2e42"}}/>

        {sports.map((s,idx)=>{
          const r = genome[s.code];
          const done = !!(r&&r.club);
          const mod = moduleCounts[s.code]||0;
          const last = idx===sports.length-1;

          // ---- Completed strand (plain: crest, name, Type, view) ----
          if(done){
            const SD = sportData[s.code]||{};
            const t = (SD.teams&&SD.teams[r.club])||{};
            const accent = (SD.teamTextColors&&SD.teamTextColors[r.club])||t.color||"#9898b8";
            return(
              <div key={s.code} style={{position:"relative",marginBottom:last?0:14}}>
                <div style={{position:"absolute",left:-18,top:"50%",transform:"translateY(-50%)",width:8,height:8,borderRadius:"50%",background:(t.color||"#9898b8"),boxShadow:`0 0 6px ${t.color||"#9898b8"}88`}}/>
                <button onClick={()=>onOpenResult(s.code)}
                  style={{
                    textAlign:"left",cursor:"pointer",width:"100%",
                    background:`linear-gradient(120deg, ${t.color}14 0%, transparent 55%)`,
                    border:"1px solid #222230",borderLeft:`3px solid ${t.color||"#9898b8"}`,
                    borderRadius:"0 10px 10px 0",padding:"13px 15px",transition:"all .15s ease",
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="#3a3a50";e.currentTarget.style.borderLeftColor=(t.color||"#9898b8");}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="#222230";e.currentTarget.style.borderLeftColor=(t.color||"#9898b8");}}
                >
                  <div style={{display:"flex",alignItems:"center",gap:12}}>
                    <ClubMark team={t} size={46}/>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:10,color:"#888",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:2}}>{s.name}</div>
                      <div style={{fontSize:"clamp(18px,4.6vw,22px)",color:"#e8e4de",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400,lineHeight:1.1}}>{t.name}</div>
                      <div style={{fontSize:13,color:accent,fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif",marginTop:2}}>{(SD.archetypes&&SD.archetypes[r.club])||""}</div>
                    </div>
                    <span style={{border:`1px solid ${accent}66`,borderRadius:5,padding:"5px 12px",color:accent,fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0}}>view</span>
                  </div>
                </button>
              </div>
            );
          }

          // ---- Live but untaken strand (the bright primary CTA) ----
          if(s.live){
            const count = coreSequenced ? mod : (coreCount+mod);
            return(
              <div key={s.code} style={{position:"relative",marginBottom:last?0:14}}>
                <div style={{position:"absolute",left:-17,top:"50%",transform:"translateY(-50%)",width:9,height:9,borderRadius:"50%",background:"#8a8ac0",boxShadow:"0 0 8px #8a8ac0"}}/>
                <button onClick={()=>onStartSport(s.code)}
                  style={{
                    textAlign:"left",cursor:"pointer",width:"100%",background:"#1b1b2a",
                    border:"1px dashed #6a6a90",borderRadius:10,padding:"13px 15px",
                    animation:"strandPulse 2.4s ease-in-out infinite",
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="#9090b8";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="#6a6a90";}}
                >
                  <div style={{display:"flex",alignItems:"center",gap:12}}>
                    <div style={{width:42,height:42,borderRadius:"50%",flexShrink:0,border:"1px dashed #6a6a90",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,color:"#9898c8",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>?</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:10,color:"#9a9ac4",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:2}}>{s.name}</div>
                      <div style={{fontSize:"clamp(17px,4.3vw,20px)",color:"#eceaf4",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400,lineHeight:1.2}}>{s.hook||"Which one are you?"}</div>
                      <div style={{fontSize:11,color:"#9a9ac4",fontFamily:"'DM Mono',monospace",letterSpacing:"0.05em",marginTop:3}}>{count} questions</div>
                    </div>
                    <span style={{background:"#7a7aa8",borderRadius:5,padding:"6px 13px",color:"#16161e",fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0,fontWeight:500}}>start</span>
                  </div>
                </button>
              </div>
            );
          }

          // ---- Coming soon strand (live:false) ----
          return(
            <div key={s.code} style={{position:"relative",marginBottom:last?0:14}}>
              <div style={{position:"absolute",left:-16,top:"50%",transform:"translateY(-50%)",width:7,height:7,borderRadius:"50%",background:"#2a2a3a"}}/>
              <div style={{
                display:"flex",alignItems:"center",gap:12,background:"transparent",
                border:"1px solid #1a1a26",borderRadius:10,padding:"13px 15px",opacity:0.55,
              }}>
                <div style={{width:42,height:42,borderRadius:"50%",flexShrink:0,border:"1px solid #2a2a3a",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,color:"#4a4a6a",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>?</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:10,color:"#666",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:3}}>{s.name}</div>
                  <div style={{fontSize:"clamp(15px,3.6vw,17px)",color:"#888",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>Coming soon</div>
                </div>
                <span style={{fontSize:10,color:"#444",letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0}}>soon</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Support + feedback footer */}
      <div style={{paddingTop:20,borderTop:"1px solid #1e1e2e",textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="https://buymeacoffee.com/fandna" target="_blank" rel="noopener noreferrer"
            style={{color:"#9898b8",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"color .15s"}}
            onMouseEnter={e=>e.currentTarget.style.color="#d0ccc6"}
            onMouseLeave={e=>e.currentTarget.style.color="#9898b8"}
          >🍺 Buy me a pint</a>
          <a href="https://forms.gle/kAV9KGGUxdcA1dYv6" target="_blank" rel="noopener noreferrer"
            style={{color:"#9898b8",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"color .15s"}}
            onMouseEnter={e=>e.currentTarget.style.color="#d0ccc6"}
            onMouseLeave={e=>e.currentTarget.style.color="#9898b8"}
          >Feedback or a bug?</a>
        </div>
        <p style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#5f5f78",lineHeight:1.6,margin:"16px auto 0",maxWidth:360,letterSpacing:"0.02em"}}>FanDNA is an independent project. Not affiliated with, endorsed by, or associated with any club, league, or governing body.</p>
      </div>

    </div>
  );
}
