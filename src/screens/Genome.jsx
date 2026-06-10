// FanDNA - Genome home screen (Phase 3, the WC-end tease / launch landing page).
//
// The new front door. Driven ENTIRELY by the sports manifest: it maps over SPORTS and
// renders one "strand" row per sport. Adding a future sport is just a manifest line plus
// its data; this file needs no changes for that. Order-agnostic: any live sport can be
// taken first (the shared core is the one-time prerequisite, never a specific sport).
//
// Per sport, a strand renders in one of three states:
//   completed      -> a saved result exists (club colour, badge, name, Type, gel echo). Tappable -> result.
//   live, untaken  -> live but not taken (dashed strand, hook, count, empty gel scaffold). Tappable -> quiz.
//   coming soon    -> live:false. Named, dimmed, not tappable.
//
// All copy here is user-facing, so: no em dashes.

import { useState } from "react";
import { BadgeImg } from "../components/quiz";
import { DIM_ORDER, DIM_COLORS } from "../data/pl";

// Mini gel echo: the seven core-sequence bands from the share card, shrunk for a strand row.
function GelEcho({ dims }){
  const d = dims || {};
  const H = 30, P = 3, BANDH = 4, TRAVEL = H - 2*P - BANDH;
  return (
    <div style={{display:"flex",gap:3,marginTop:11}}>
      {DIM_ORDER.map((dk)=>{
        const score = d[dk]||0;
        const top = P + (1 - score/10) * TRAVEL;
        return (
          <div key={dk} style={{position:"relative",flex:1,height:H,background:"#1e1e2a",border:"1px solid #2a2a3a",borderRadius:3,overflow:"hidden"}}>
            <div style={{position:"absolute",left:1,right:1,top,height:BANDH,borderRadius:2,background:DIM_COLORS[dk]}}/>
          </div>
        );
      })}
    </div>
  );
}

// Empty gel scaffold: the same seven lanes, blank, on an untaken strand. Previews the payoff.
function GelScaffold(){
  return (
    <div style={{display:"flex",gap:3,marginTop:11,opacity:0.45}}>
      {[0,1,2,3,4,5,6].map((i)=>(
        <div key={i} style={{flex:1,height:30,background:"#191926",border:"1px dashed #2a2a3a",borderRadius:3}}/>
      ))}
    </div>
  );
}

export function GenomeHome({
  sports,            // manifest list: [{code,name,live,hook}, ...]
  genome,            // saved results map: { PL: { club: "LI" }, ... }
  sportData,         // { PL:{teams,archetypes,badgeUrls,teamTextColors,teamDims}, NFL:{...} }
  coreSequenced,     // has the shared core already been answered once?
  coreCount,         // number of core questions (added to the first sport taken)
  moduleCounts,      // per-sport module question counts: { PL: 14, ... }
  shareString,       // genome sequence string, e.g. "FanDNA: PL-LI . NFL-?"
  onOpenResult,      // (code) => void
  onStartSport,      // (code) => void
}){
  const [copied,setCopied]=useState(false);

  const anyTaken = sports.some(s=>genome[s.code]&&genome[s.code].club);
  const hasUntakenLive = sports.some(s=>s.live && !(genome[s.code]&&genome[s.code].club));

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

      {/* Shared status line, state-driven (never repeated per strand) */}
      {!coreSequenced&&(
        <p style={{textAlign:"center",fontSize:11,color:"#8888a8",letterSpacing:"0.08em",fontFamily:"'DM Mono',monospace",margin:"0 0 26px"}}>
          No trivia, no homework. Just you.
        </p>
      )}
      {coreSequenced&&hasUntakenLive&&(
        <p style={{textAlign:"center",fontSize:11,color:"#8888a8",letterSpacing:"0.08em",fontFamily:"'DM Mono',monospace",margin:"0 0 26px"}}>
          Core sequenced. Each new sport is a quick module.
        </p>
      )}
      {coreSequenced&&!hasUntakenLive&&(<div style={{height:10}}/>)}

      {/* Strands, one per manifest sport, threaded onto a genome backbone */}
      <div style={{position:"relative",paddingLeft:22,marginBottom:26}}>
        <div style={{position:"absolute",left:4,top:10,bottom:10,width:1,background:"#2e2e42"}}/>

        {sports.map((s,idx)=>{
          const r = genome[s.code];
          const done = !!(r&&r.club);
          const mod = moduleCounts[s.code]||0;
          const last = idx===sports.length-1;

          // ---- Completed strand ----
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
                    <BadgeImg url={SD.badgeUrls&&SD.badgeUrls[r.club]} emoji={t.emoji} size={42}/>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:10,color:"#888",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:2}}>{s.name}</div>
                      <div style={{fontSize:"clamp(18px,4.6vw,22px)",color:"#e8e4de",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400,lineHeight:1.1}}>{t.name}</div>
                      <div style={{fontSize:13,color:accent,fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif",marginTop:2}}>{(SD.archetypes&&SD.archetypes[r.club])||""}</div>
                    </div>
                    <span style={{border:`1px solid ${accent}66`,borderRadius:5,padding:"5px 12px",color:accent,fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0}}>view</span>
                  </div>
                  <GelEcho dims={SD.teamDims&&SD.teamDims[r.club]}/>
                </button>
              </div>
            );
          }

          // ---- Live but untaken strand ----
          if(s.live){
            const count = coreSequenced ? mod : (coreCount+mod);
            return(
              <div key={s.code} style={{position:"relative",marginBottom:last?0:14}}>
                <div style={{position:"absolute",left:-17,top:"50%",transform:"translateY(-50%)",width:8,height:8,borderRadius:"50%",background:"#6a6a90",boxShadow:"0 0 6px #6a6a9099"}}/>
                <button onClick={()=>onStartSport(s.code)}
                  style={{
                    textAlign:"left",cursor:"pointer",width:"100%",background:"transparent",
                    border:"1px dashed #3a3a50",borderRadius:10,padding:"13px 15px",
                    animation:"strandPulse 2.4s ease-in-out infinite",
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="#6a6a90";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="#3a3a50";}}
                >
                  <div style={{display:"flex",alignItems:"center",gap:12}}>
                    <div style={{width:42,height:42,borderRadius:"50%",flexShrink:0,border:"1px dashed #4a4a6a",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,color:"#7878a0",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>?</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:10,color:"#888",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:2}}>{s.name}</div>
                      <div style={{fontSize:"clamp(17px,4.3vw,20px)",color:"#d8d4ce",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400,lineHeight:1.2}}>{s.hook||"Which one are you?"}</div>
                      <div style={{fontSize:11,color:"#888",fontFamily:"'DM Mono',monospace",letterSpacing:"0.05em",marginTop:3}}>{count} questions</div>
                    </div>
                    <span style={{border:"1px solid #6a6a90",borderRadius:5,padding:"5px 12px",color:"#cfcfe0",fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0}}>start</span>
                  </div>
                  <GelScaffold/>
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

      {/* Share the sequence string (only once there is a genome to share) */}
      {anyTaken&&(
        <div style={{background:"#141420",border:"1px solid #222230",borderRadius:8,padding:"16px 18px",marginBottom:24,position:"relative",zIndex:1}}>
          <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:10}}>Your genome</div>
          <div style={{fontSize:"clamp(15px,4vw,18px)",color:"#d8d4ce",fontFamily:"'DM Mono',monospace",letterSpacing:"0.04em",marginBottom:14,wordBreak:"break-word"}}>{shareString}</div>
          <button onClick={copyShare}
            style={{
              display:"inline-flex",alignItems:"center",gap:10,
              background:"#9898b822",border:"1px solid #9898b855",borderRadius:5,
              padding:"10px 18px",color:"#e8e4de",fontSize:11,letterSpacing:"0.15em",
              textTransform:"uppercase",fontFamily:"'DM Mono',monospace",cursor:"pointer",
              transition:"all .15s ease",fontWeight:500,
            }}
            onMouseEnter={e=>{e.currentTarget.style.background="#9898b833";}}
            onMouseLeave={e=>{e.currentTarget.style.background="#9898b822";}}
          >{copied?"Copied":"Copy genome"}</button>
        </div>
      )}

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
      </div>

    </div>
  );
}
