// FanDNA - Genome home screen. The front door, manifest-driven. Your seven-band core strip
// is the identity hero up top (YOUR core, the same bars across every sport, shown once, with a
// quiet tap-to-copy/share footer). Below it the genome BRANCHES: a faint backbone threads down
// into two family panels - "The Global Game" (soccer) and "American Sports" - so leagues group
// by family instead of sitting in one random list. Each family lists its leagues in order;
// a finished league shows its club + Type, the untaken live league is the bright Start CTA,
// and anything not built yet reads "Coming soon".
//
// As a family grows, its panel does NOT stretch the page: it caps at a few rows and scrolls
// inside its own box (a soft fade + thin scrollbar signal there is more below). Adding a
// league is one manifest row with its `group`; this file needs no change for that.
//
// State-aware first run: with no genome yet, the hero and the branch junction collapse and the
// screen leads with the live league as Start. All copy here is user-facing, so: no em dashes.

import { useState } from "react";
import { ClubMark } from "../components/ClubMark";
import { CoreStrip } from "../components/CoreStrip";
import { FAMILIES } from "../lib/manifest";

// Structural palette: one quiet "DNA backbone" color for the tree, so the only saturated
// color on the page comes from the strip and the clubs.
const PERI = "#8a8ac0";   // junction + glow (matches the DNA wordmark + helix)
const RAIL = "#7d7da6";   // the bough into each panel
const PLBL = "#b6b2cc";   // panel label + glyph
const PBG  = "#181820";   // panel fill
const PBD  = "#262633";   // panel border
const COUNT= "#6a6a82";   // the "x of y mapped" count
const MAX_ROWS = 3;       // rows shown before a family panel scrolls inside its box
const ROW_PX = 84;        // approx height of one strand row (card + gap)
const PEEK = 24;          // extra sliver so the next row peeks when scrollable

function FamilyGlyph({ kind }){
  if(kind === "globe"){
    return (
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" style={{flexShrink:0}}>
        <circle cx="8" cy="8" r="6.4" fill="none" stroke={PLBL} strokeWidth="1.2"/>
        <ellipse cx="8" cy="8" rx="2.9" ry="6.4" fill="none" stroke={PLBL} strokeWidth="1"/>
        <line x1="1.6" y1="8" x2="14.4" y2="8" stroke={PLBL} strokeWidth="1"/>
      </svg>
    );
  }
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" style={{flexShrink:0}}>
      <polygon points="8,1 9.705,5.654 14.657,5.837 10.758,8.896 12.115,13.663 8,10.9 3.885,13.663 5.242,8.896 1.343,5.837 6.295,5.654" fill={PLBL}/>
    </svg>
  );
}

export function GenomeHome({
  sports,            // manifest list (live-flag resolved): [{code,name,live,hook,group}, ...]
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

  // ---- one strand row (reused inside both family panels) ----
  function Strand({ s, last }){
    const r = genome[s.code];
    const done = !!(r&&r.club);
    const mod = moduleCounts[s.code]||0;
    const mb = last?0:12;

    if(done){
      const SD = sportData[s.code]||{};
      const t = (SD.teams&&SD.teams[r.club])||{};
      const accent = (SD.teamTextColors&&SD.teamTextColors[r.club])||t.color||"#9898b8";
      return(
        <button onClick={()=>onOpenResult(s.code)}
          style={{
            display:"block",textAlign:"left",cursor:"pointer",width:"100%",marginBottom:mb,
            background:`linear-gradient(120deg, ${t.color}14 0%, transparent 55%)`,
            border:"1px solid #242433",borderLeft:`3px solid ${t.color||"#9898b8"}`,
            borderRadius:"6px 10px 10px 6px",padding:"12px 14px",transition:"border-color .15s ease",
          }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor="#3a3a50";e.currentTarget.style.borderLeftColor=(t.color||"#9898b8");}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor="#242433";e.currentTarget.style.borderLeftColor=(t.color||"#9898b8");}}
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
      );
    }

    if(s.live){
      const count = coreSequenced ? mod : (coreCount+mod);
      return(
        <button onClick={()=>onStartSport(s.code)}
          style={{
            display:"block",textAlign:"left",cursor:"pointer",width:"100%",marginBottom:mb,background:"#1b1b2a",
            border:"1px dashed #6a6a90",borderRadius:10,padding:"12px 14px",
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
      );
    }

    return(
      <div style={{
        display:"flex",alignItems:"center",gap:12,background:"transparent",marginBottom:mb,
        border:"1px solid #1f1f2b",borderRadius:10,padding:"12px 14px",opacity:0.55,
      }}>
        <div style={{width:42,height:42,borderRadius:"50%",flexShrink:0,border:"1px solid #2a2a3a",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,color:"#4a4a6a",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>?</div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:10,color:"#666",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:3}}>{s.name}</div>
          <div style={{fontSize:"clamp(15px,3.6vw,17px)",color:"#888",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>Coming soon</div>
        </div>
        <span style={{fontSize:10,color:"#444",letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0}}>soon</span>
      </div>
    );
  }

  // ---- one family panel (header pinned, leagues scroll inside when they overflow) ----
  function FamilyPanel({ fam, last }){
    const list = sports.filter(s=>s.group===fam.id);
    if(list.length===0) return null;
    const doneN = list.filter(s=>{ const r=genome[s.code]; return !!(r&&r.club); }).length;
    const scrolls = list.length>MAX_ROWS;
    const maxH = MAX_ROWS*ROW_PX + PEEK;

    return(
      <div style={{position:"relative",marginBottom:last?0:16}}>
        {/* bough off the backbone into this panel header */}
        <div style={{position:"absolute",left:-15,top:22,width:15,height:2,background:RAIL}}/>
        <div style={{position:"absolute",left:-19,top:18,width:9,height:9,borderRadius:"50%",background:RAIL,boxShadow:`0 0 6px ${RAIL}99`}}/>

        <div style={{position:"relative",background:PBG,border:`1px solid ${PBD}`,borderLeft:`3px solid ${RAIL}`,borderRadius:"0 12px 12px 0",overflow:"hidden"}}>
          {/* header */}
          <div style={{display:"flex",alignItems:"center",gap:9,padding:"13px 15px 11px",borderBottom:`1px solid ${PBD}`}}>
            <FamilyGlyph kind={fam.glyph}/>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:12,color:PLBL,letterSpacing:"0.32em",textTransform:"uppercase",fontWeight:500,flex:1,minWidth:0}}>{fam.label}</span>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:COUNT,letterSpacing:"0.12em",textTransform:"uppercase",flexShrink:0}}>{doneN} of {list.length} mapped</span>
          </div>

          {/* leagues (scrolls inside when there are more than MAX_ROWS) */}
          <div className="fdna-scroll" style={{padding:"13px 13px",maxHeight:scrolls?maxH:"none",overflowY:scrolls?"auto":"visible"}}>
            {list.map((s,i)=>(<Strand key={s.code} s={s} last={i===list.length-1}/>))}
          </div>

          {/* soft fade cue when scrollable */}
          {scrolls&&(
            <div style={{position:"absolute",left:3,right:0,bottom:0,height:30,pointerEvents:"none",background:`linear-gradient(to top, ${PBG} 10%, transparent)`}}/>
          )}
        </div>
      </div>
    );
  }

  return(
    <div style={{animation:"popIn .45s cubic-bezier(.2,.8,.3,1) both",position:"relative",overflow:"hidden"}}>
      <style>{`
        .fdna-scroll::-webkit-scrollbar{width:5px}
        .fdna-scroll::-webkit-scrollbar-track{background:transparent}
        .fdna-scroll::-webkit-scrollbar-thumb{background:#3a3a4e;border-radius:3px}
      `}</style>

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

      {/* First-run: no genome yet, lead with Start (the hero + junction stay collapsed). */}
      {!coreSequenced&&(
        <p style={{textAlign:"center",fontSize:11,color:"#8888a8",letterSpacing:"0.08em",fontFamily:"'DM Mono',monospace",margin:"0 0 26px"}}>
          No trivia, no homework. Just you.
        </p>
      )}

      {/* Identity hero: the user's core strip, shown ONCE, with a quiet share footer. */}
      {coreSequenced&&(
        <div style={{position:"relative",zIndex:1,border:"1px solid #222230",borderRadius:12,padding:"15px 14px 13px",background:"#14141c"}}>
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

      {/* Branch junction off the core (only once there is a core to branch from). */}
      {coreSequenced&&(
        <div style={{position:"relative",height:30,zIndex:1}}>
          <div style={{position:"absolute",left:"50%",top:0,width:2,height:16,marginLeft:-1,background:"#4a4a66"}}/>
          <div style={{position:"absolute",left:"calc(50% - 5px)",top:11,width:10,height:10,borderRadius:"50%",background:PERI,boxShadow:`0 0 9px ${PERI}`}}/>
          <div style={{position:"absolute",left:7,top:15,width:"calc(50% - 7px)",height:2,background:"#3a3a52"}}/>
        </div>
      )}

      {/* The two family branches, threaded onto a faint backbone. */}
      <div style={{position:"relative",paddingLeft:21,marginBottom:26}}>
        <div style={{position:"absolute",left:7,top:0,bottom:14,width:1,background:"#2a2a3c"}}/>
        {FAMILIES.map((fam,i)=>(
          <FamilyPanel key={fam.id} fam={fam} last={i===FAMILIES.length-1}/>
        ))}
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
