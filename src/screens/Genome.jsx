// FanDNA - Genome home screen (Phase 3, the WC-end tease / launch landing page).
//
// This screen is the new front door. It is driven ENTIRELY by the sports manifest:
// it maps over SPORTS and renders one "strand" row per sport. Adding a future sport
// is just a manifest line plus its data - this file needs no changes for that.
//
// Per sport, a strand renders in one of three states:
//   completed      -> a saved result exists for that sport (club colour, badge, name, archetype). Tappable, opens the result.
//   live, untaken  -> the sport is on (live:true) but not yet taken (dotted strand, "?", question count). Tappable, starts the quiz.
//   coming soon    -> the sport is off (live:false). Named, dimmed, not tappable.
//
// All copy here is user-facing, so: no em dashes.

import { useState } from "react";
import { BadgeImg } from "../components/quiz";

export function GenomeHome({
  sports,            // the manifest list: [{code,name,live}, ...]
  genome,            // saved results map: { PL: { club: "LI" }, ... }
  teams,             // pl team data, for completed strands
  archetypes,        // pl archetype labels
  badgeUrls,         // pl crest urls
  teamTextColors,    // pl accent colours
  coreSequenced,     // has the shared core already been answered once?
  coreCount,         // number of core questions (shown on a first-ever run)
  moduleCounts,      // per-sport module question counts: { PL: 14, ... }
  shareString,       // the genome sequence string, e.g. "FanDNA: PL-LI . NFL-?"
  onOpenResult,      // (code) => void  : open a completed sport's result
  onStartSport,      // (code) => void  : start the quiz for a live, untaken sport
}){
  const [copied,setCopied]=useState(false);

  const anyTaken = sports.some(s=>genome[s.code]&&genome[s.code].club);

  function copyShare(){
    const txt = `${shareString} . Find yours: fandna.vercel.app`;
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
    <div style={{animation:"popIn .45s cubic-bezier(.2,.8,.3,1) both"}}>

      {/* Wordmark + line */}
      <div style={{textAlign:"center",marginBottom:34}}>
        <div style={{
          fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:300,
          fontSize:"clamp(40px,11vw,62px)",color:"#e8e4de",letterSpacing:"-.02em",lineHeight:1,
        }}>
          Fan<span style={{color:"#9898b8"}}>DNA</span>
        </div>
        <div style={{
          marginTop:10,fontSize:11,color:"#7878a0",letterSpacing:"0.35em",
          textTransform:"uppercase",fontFamily:"'DM Mono',monospace",
        }}>Your fandom, sequenced</div>
      </div>

      {/* First-visit pitch line (only when nothing has been taken yet) */}
      {!anyTaken&&(
        <p style={{
          textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",
          fontSize:"clamp(15px,3.6vw,19px)",color:"#9898b8",lineHeight:1.6,
          margin:"0 auto 30px",maxWidth:420,
        }}>
          One personality, read once, then mapped onto every sport it belongs to. Start with the Premier League.
        </p>
      )}

      {/* Strands, one per manifest sport */}
      <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:28}}>
        {sports.map((s)=>{
          const r = genome[s.code];
          const done = !!(r&&r.club);
          const mod = moduleCounts[s.code]||0;

          // ---- Completed strand ----
          if(done){
            const t = teams[r.club]||{};
            const accent = teamTextColors[r.club]||t.color||"#9898b8";
            return(
              <button key={s.code} onClick={()=>onOpenResult(s.code)}
                style={{
                  textAlign:"left",cursor:"pointer",
                  display:"flex",alignItems:"center",gap:14,
                  background:`linear-gradient(120deg, ${t.color}14 0%, transparent 55%)`,
                  border:"1px solid #222230",borderLeft:`3px solid ${t.color||"#9898b8"}`,
                  borderRadius:10,padding:"16px 18px",width:"100%",
                  transition:"all .15s ease",
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#3a3a50";e.currentTarget.style.borderLeftColor=(t.color||"#9898b8");}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#222230";e.currentTarget.style.borderLeftColor=(t.color||"#9898b8");}}
              >
                <BadgeImg url={badgeUrls[r.club]} emoji={t.emoji} size={44}/>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:10,color:"#888",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:3}}>{s.name}</div>
                  <div style={{fontSize:"clamp(18px,4.6vw,22px)",color:"#e8e4de",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400,lineHeight:1.1}}>{t.name}</div>
                  <div style={{fontSize:13,color:accent,fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif",marginTop:2}}>{archetypes[r.club]||""}</div>
                </div>
                <span style={{fontSize:10,color:"#666",letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0}}>view</span>
              </button>
            );
          }

          // ---- Live but untaken strand ----
          if(s.live){
            const count = coreSequenced ? mod : (coreCount+mod);
            const sub = coreSequenced
              ? `Your core DNA is already sequenced. ${mod} questions to map your ${s.name} strand.`
              : `${count} questions, no football knowledge needed.`;
            return(
              <button key={s.code} onClick={()=>onStartSport(s.code)}
                style={{
                  textAlign:"left",cursor:"pointer",
                  display:"flex",alignItems:"center",gap:14,
                  background:"transparent",
                  border:"1px dashed #3a3a50",borderRadius:10,padding:"16px 18px",width:"100%",
                  animation:"strandPulse 2.4s ease-in-out infinite",
                  transition:"border-color .15s ease",
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#6a6a90";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#3a3a50";}}
              >
                <div style={{
                  width:44,height:44,borderRadius:"50%",flexShrink:0,
                  border:"1px dashed #4a4a6a",display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:22,color:"#7878a0",fontFamily:"'Cormorant Garamond',Georgia,serif",
                }}>?</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:10,color:"#888",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:4}}>{s.name}</div>
                  <div style={{fontSize:"clamp(16px,4vw,19px)",color:"#d8d4ce",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400,lineHeight:1.3}}>{sub}</div>
                </div>
                <span style={{fontSize:10,color:"#9898b8",letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0}}>start</span>
              </button>
            );
          }

          // ---- Coming soon strand (live:false) ----
          return(
            <div key={s.code}
              style={{
                display:"flex",alignItems:"center",gap:14,
                background:"transparent",
                border:"1px solid #1a1a26",borderRadius:10,padding:"16px 18px",width:"100%",
                opacity:0.55,
              }}>
              <div style={{
                width:44,height:44,borderRadius:"50%",flexShrink:0,
                border:"1px solid #2a2a3a",display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:22,color:"#4a4a6a",fontFamily:"'Cormorant Garamond',Georgia,serif",
              }}>?</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:10,color:"#666",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:4}}>{s.name}</div>
                <div style={{fontSize:"clamp(15px,3.6vw,17px)",color:"#888",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>Coming soon</div>
              </div>
              <span style={{fontSize:10,color:"#444",letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0}}>soon</span>
            </div>
          );
        })}
      </div>

      {/* Share the sequence string (only once there is a genome to share) */}
      {anyTaken&&(
        <div style={{
          background:"#141420",border:"1px solid #222230",borderRadius:8,
          padding:"16px 18px",marginBottom:24,
        }}>
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

      {/* Support + feedback footer (mirrors the result screen) */}
      <div style={{paddingTop:20,borderTop:"1px solid #1e1e2e",textAlign:"center"}}>
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
