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
import { InstinctsLine } from "../components/InstinctsLine";
import { HexBadge } from "../components/HexBadge";
import { BeachHomeCard } from "../components/BeachEgg";
import { FAMILIES } from "../lib/manifest";
import { generateRead, coreBlocks } from "../lib/genomeRead";
import { encodeGenome } from "../lib/compareCode";

// Structural palette: one quiet "DNA backbone" color for the tree, so the only saturated
// color on the page comes from the strip and the clubs.
const PERI = "#8a8ac0";   // junction + glow (matches the DNA wordmark + helix)
const RAIL = "#7d7da6";   // the bough into each panel
const PLBL = "#b6b2cc";   // panel label + glyph
const PBG  = "#181820";   // panel fill
const PBD  = "#262633";   // panel border
const COUNT= "#80809d";   // the "x of y mapped" count
const MAX_ROWS = 2;       // rows shown before a family panel scrolls inside its box (session-28 redesign: 3->2)
const ROW_PX = 84;        // approx height of one strand row (card + gap)
const PEEK = 60;          // half-row sliver so a partial next card is always visible when scrollable (Variant B)

function FamilyGlyph({ kind }){
  const inner = kind === "soccerball" ? (
    <>
      <circle cx="8" cy="8" r="6.4" fill="none" stroke={PLBL} strokeWidth="1.2"/>
      <polygon points="8,5.7 10.19,7.29 9.35,9.86 6.65,9.86 5.81,7.29" fill={PLBL}/>
      <line x1="8" y1="5.7" x2="8" y2="2.2" stroke={PLBL} strokeWidth="1"/>
      <line x1="10.19" y1="7.29" x2="13.3" y2="6.2" stroke={PLBL} strokeWidth="1"/>
      <line x1="9.35" y1="9.86" x2="11.3" y2="12.4" stroke={PLBL} strokeWidth="1"/>
      <line x1="6.65" y1="9.86" x2="4.7" y2="12.4" stroke={PLBL} strokeWidth="1"/>
      <line x1="5.81" y1="7.29" x2="2.7" y2="6.2" stroke={PLBL} strokeWidth="1"/>
    </>
  ) : kind === "globe" ? (
    <>
      <circle cx="8" cy="8" r="6.4" fill="none" stroke={PLBL} strokeWidth="1.2"/>
      <ellipse cx="8" cy="8" rx="2.9" ry="6.4" fill="none" stroke={PLBL} strokeWidth="1"/>
      <line x1="1.6" y1="8" x2="14.4" y2="8" stroke={PLBL} strokeWidth="1"/>
    </>
  ) : (
    <polygon points="8,1 9.705,5.654 14.657,5.837 10.758,8.896 12.115,13.663 8,10.9 3.885,13.663 5.242,8.896 1.343,5.837 6.295,5.654" fill={PLBL}/>
  );
  // Hex-framed (s58): the sport symbol inside the FanDNA crest/badge hexagon, so the home
  // iconography speaks the same genome-badge language as the earned crests. Display-only.
  return (
    <svg width="19" height="19" viewBox="0 0 16 16" aria-hidden="true" style={{flexShrink:0}}>
      <polygon points="8,0.7 14.3,4.35 14.3,11.65 8,15.3 1.7,11.65 1.7,4.35" fill="none" stroke={PERI} strokeWidth="1.05"/>
      <g transform="translate(8,8) scale(0.56) translate(-8,-8)">{inner}</g>
    </svg>
  );
}

// Sizes/positions the always-visible scroll thumb inside a scrolling family panel (display-only).
function sizeThumb(scroll){
  if(!scroll) return;
  const wrap = scroll.parentElement; if(!wrap) return;
  const thumb = wrap.querySelector(".fdna-thumb");
  const track = wrap.querySelector(".fdna-track");
  if(!thumb||!track) return;
  const th = track.clientHeight;
  const denom = scroll.scrollHeight || 1;
  const h = Math.max(20, Math.round((scroll.clientHeight/denom)*th));
  const room = Math.max(0, scroll.scrollHeight-scroll.clientHeight);
  const top = room>0 ? Math.round((scroll.scrollTop/room)*(th-h)) : 0;
  thumb.style.height = h+"px";
  thumb.style.transform = "translateY("+top+"px)";
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
  spineAnswers,      // cached shared-spine answers {S1..S7}; drives the "your instincts" line
  onOpenResult,      // (code) => void
  onStartSport,      // (code) => void
  onReset,           // () => void : wipe all saved results and return to a fresh first run
  onRestore,         // (text) => bool : restore a saved genome from a pasted share link
  onHow,             // () => void : open the "How this works" explainer
  onCompare,         // () => void : share the /c/ compare link (home primary CTA)
  onRetakeCore,      // () => void : re-answer the 24 core questions (fired from the core strip's retake disc)
  onRetakeInstincts, // () => void : re-answer the 7 spine questions (fired from the instincts line's retake disc)
  onOpenCrest,       // (fam) => void : re-open an earned bucket crest from the home tick
  onOpenFinale,      // () => void : re-open the collection-complete finale from the quiet home line
  onOpenBeach,       // () => void : replay the Pro Beach Hockey bonus reveal from its home card
  beachSeen,         // has the bonus reveal already been watched? (alert card vs calm relive card)
  resequenceDelta,   // {moved:[{sport,from,to}],stale:[code]} shown once after a re-sequence, or null
  onDismissDelta,    // () => void : clear the delta banner
}){
  // Human names for the delta banner.
  const leagueName=(code)=>{ const s=sports.find(y=>y.code===code); return s?s.name:code; };
  const clubName=(code,club)=>{ const t=sportData&&sportData[code]&&sportData[code].teams&&sportData[code].teams[club]; return t&&t.name?t.name:club; };
  const [copied,setCopied]=useState(false);
  const [confirmClear,setConfirmClear]=useState(false);  // two-step guard on the destructive reset
  const [restoreOpen,setRestoreOpen]=useState(false);    // cold-home "restore from a link" disclosure
  const [restoreText,setRestoreText]=useState("");
  const [restoreErr,setRestoreErr]=useState(false);

  // Group the genome sequence by family for a decluttered, split share readout (display-only).
  const SHARE = (()=>{
    const raw=(shareString||"").replace(/^\s*FanDNA:\s*/i,"").trim();
    const toks = raw ? raw.split(/\s*·\s*/).filter(Boolean) : [];
    const grpOf=(t)=>{ const x=sports.find(y=>y.code===t.split("-")[0]); return x?x.group:null; };
    let groups = FAMILIES.map(f=>({ fam:f, items: toks.filter(t=>grpOf(t)===f.id) })).filter(g=>g.items.length>0);
    if(groups.length===0 && toks.length) groups=[{ fam:{id:"all",glyph:"globe"}, items:toks }];
    return { groups, seq: groups.flatMap(g=>g.items).join(" · ") };
  })();
  const shareText = SHARE.seq ? ("FanDNA: "+SHARE.seq) : shareString;
  const _seqClean = (SHARE.seq||"").split(/\s*·\s*/).filter(t=>t&&!/-\?$/.test(t)).join(" · ");
  const _blk = (coreProfile && Object.keys(coreProfile).length) ? ("\uD83E\uDDEC "+coreBlocks(coreProfile)) : "";
  const _cmp = "https://playfandna.com/c/"+encodeGenome({coreProfile, results:genome});
  const shareCaption = [_blk, (_seqClean?("FanDNA: "+_seqClean):shareText), "Compare yours: "+_cmp].filter(Boolean).join("\n");

  function copyShare(){
    const txt = _cmp;   // keep-this-link: just the /c/ link, single line, pastes cleanly into Restore
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
    const txt = shareCaption;
    if(navigator.share){ navigator.share({text:txt}).catch(()=>{}); }
    else { copyShare(); }
  }

  // ---- cross-league invitation: reframe the blanked genome string as an earned next step.
  // Reads only from the live-resolved manifest + the saved genome (no new plumbing). Shows when
  // the core is sequenced, at least one live league is done, and at least one live league remains.
  const liveList    = sports.filter(s=>s.live);
  const takenLive   = liveList.filter(s=>{ const r=genome[s.code]; return !!(r&&r.club); });
  const untakenLive = liveList.filter(s=>{ const r=genome[s.code]; return !(r&&r.club); });
  const showInvite  = coreSequenced && takenLive.length>0 && untakenLive.length>0;
  const oneLeft     = untakenLive.length===1;
  const readOut     = coreSequenced ? generateRead(coreProfile, takenLive.length) : null;

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
              <div style={{fontSize:10,color:"#888",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:2}}>{s.name}{s.sport ? " · " + s.sport : ""}</div>
              <div style={{fontSize:"clamp(18px,4.6vw,22px)",color:"#e8e4de",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400,lineHeight:1.1}}>{t.name}</div>
              <div style={{fontSize:13,color:accent,fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif",marginTop:2}}>{(SD.archetypes&&SD.archetypes[r.club])||""}</div>
            </div>
            <span style={{border:`1px solid ${accent}66`,borderRadius:5,padding:"5px 12px",color:accent,fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0}}>view</span>
          </div>
        </button>
      );
    }

    if(s.live){
      return(
        <button onClick={()=>onStartSport(s.code)}
          style={{
            display:"block",textAlign:"left",cursor:"pointer",width:"100%",marginBottom:mb,background:"#16161f",
            border:"1px solid #242433",borderRadius:10,padding:"12px 14px",transition:"border-color .15s ease",
          }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor="#3a3a50";}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor="#242433";}}
        >
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{width:46,height:46,borderRadius:"50%",flexShrink:0,border:"1px dashed #565674",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,color:"#8a8ab0",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>?</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:10,color:"#9a9ac4",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:3}}>{s.name}{s.sport ? " · " + s.sport : ""}</div>
              <div style={{fontSize:"clamp(18px,4.6vw,21px)",color:"#c9b27a",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400,lineHeight:1.1}}>Map it &rarr;</div>
            </div>
          </div>
        </button>
      );
    }

    // Further-out placeholder: a league we intend to build but have not started (World bucket slots).
    // One tier past "Coming soon" - same circular disc as every row in this column, but recessed, an
    // empty inner ring (a reserved slot, not a "?"), and the "Not yet sequenced" / "planned" copy.
    if(s.planned){
      return(
        <div style={{
          display:"flex",alignItems:"center",gap:12,background:"transparent",marginBottom:mb,
          border:"1px solid #1d1d27",borderRadius:10,padding:"12px 14px",
        }}>
          <div style={{width:42,height:42,borderRadius:"50%",flexShrink:0,border:"1px solid #2c2c38",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:15,height:15,borderRadius:"50%",border:"1px solid #3f3f4d"}}/>
          </div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:10,color:"#6f6f80",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:3}}>{s.name}{s.sport ? " · " + s.sport : ""}</div>
            <div style={{fontSize:"clamp(15px,3.6vw,17px)",color:"#83837e",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>Not yet sequenced</div>
          </div>
          <span style={{fontSize:9,color:"#6a6a78",letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0}}>planned</span>
        </div>
      );
    }

    return(
      <div style={{
        display:"flex",alignItems:"center",gap:12,background:"transparent",marginBottom:mb,
        border:"1px solid #23232f",borderRadius:10,padding:"12px 14px",
      }}>
        <div style={{width:42,height:42,borderRadius:"50%",flexShrink:0,border:"1px solid #3a3a4a",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,color:"#6f6f88",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>?</div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:10,color:"#818181",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:3}}>{s.name}{s.sport ? " · " + s.sport : ""}</div>
          <div style={{fontSize:"clamp(15px,3.6vw,17px)",color:"#9a9a9a",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>Coming soon</div>
        </div>
        <span style={{fontSize:10,color:"#818181",letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",flexShrink:0}}>soon</span>
      </div>
    );
  }

  // ---- one family panel (header pinned, leagues scroll inside when they overflow) ----
  function FamilyPanel({ fam, last }){
    const list = sports.filter(s=>s.group===fam.id);
    if(list.length===0) return null;
    const liveInFam = list.filter(s=>s.live);
    const doneN = liveInFam.filter(s=>{ const r=genome[s.code]; return !!(r&&r.club); }).length;
    // A bucket earns its crest when every league in it is collected (the full five). Because you can
    // only hold a live league, a bucket with a hidden league is not yet reachable and shows no tick.
    const reachable = list.every(s=>s.live);
    const complete = reachable && list.every(s=>{ const r=genome[s.code]; return !!(r&&r.club); });
    const scrolls = list.length>MAX_ROWS;
    const maxH = MAX_ROWS*ROW_PX + PEEK;

    return(
      <div id={"fam-"+fam.id} style={{marginBottom:last?0:16,scrollMarginTop:12}}>
        <div style={{position:"relative",background:PBG,border:`1px solid ${PBD}`,borderRadius:12,overflow:"hidden"}}>
          {/* header */}
          <div style={{display:"flex",alignItems:"center",gap:9,padding:"13px 15px 11px",borderBottom:`1px solid ${PBD}`}}>
            <FamilyGlyph kind={fam.glyph}/>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:12,color:PLBL,letterSpacing:"0.32em",textTransform:"uppercase",fontWeight:500,flex:1,minWidth:0}}>{fam.label}</span>
            {complete ? (
              <button type="button" onClick={()=>onOpenCrest&&onOpenCrest(fam)} aria-label={`View your ${fam.label} crest`}
                style={{display:"flex",alignItems:"center",gap:6,background:"rgba(201,178,122,0.12)",border:"1px solid rgba(201,178,122,0.5)",borderRadius:20,padding:"4px 11px 4px 9px",cursor:"pointer",flexShrink:0}}>
                <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2 L20.5 7.1 L20.5 16.9 L12 21.8 L3.5 16.9 L3.5 7.1 Z" fill="#c9b27a33" stroke="#c9b27a" strokeWidth="1.6"/><circle cx="12" cy="12" r="2.3" fill="#c9b27a"/></svg>
                <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:"#d8c184",letterSpacing:"0.16em",textTransform:"uppercase"}}>View crest</span>
              </button>
            ) : (liveInFam.length>0&&(<span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:COUNT,letterSpacing:"0.12em",textTransform:"uppercase",flexShrink:0}}>{doneN} of {list.length} mapped</span>))}
          </div>

          {/* leagues - full list, no internal scroll (s58: buckets no longer scroll inside;
              the page scrolls and the jump-nav pills hop between families). */}
          <div className="fdna-scroll" style={{padding:"13px 13px",overflowY:"visible"}}>
            {list.map((s,i)=>(<Strand key={s.code} s={s} last={i===list.length-1}/>))}
          </div>
        </div>
      </div>
    );
  }

  return(
    <div style={{animation:"popIn .45s cubic-bezier(.2,.8,.3,1) both",position:"relative",overflow:"hidden"}}>
      <style>{`
        .fdna-scroll::-webkit-scrollbar{width:0;height:0}
        .fdna-scroll{scrollbar-width:none;-ms-overflow-style:none}
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
        <h1 style={{
          fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:300,
          fontSize:"clamp(44px,12vw,66px)",color:"#e8e4de",letterSpacing:"-.02em",lineHeight:1,margin:0,
        }}>
          Fan<span style={{color:"#9898b8"}}>DNA</span>
        </h1>
        <div style={{
          marginTop:10,fontSize:11,color:"#8484b0",letterSpacing:"0.35em",
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

      {/* Light delta: after a re-sequence, name only the leagues that actually moved. Shown once. */}
      {resequenceDelta&&(
        <div style={{position:"relative",zIndex:1,maxWidth:430,margin:"0 auto 16px",background:"#171722",border:"1px solid #2c2c40",borderRadius:10,padding:"13px 15px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#9a9ac4",letterSpacing:"0.22em",textTransform:"uppercase"}}>{resequenceDelta.reason==="heal"?"Fit updated":"Core re-sequenced"}</span>
            <button type="button" onClick={onDismissDelta}
              style={{background:"none",border:"none",cursor:"pointer",padding:0,fontFamily:"'DM Mono',monospace",fontSize:9,color:"#7f7f9f",letterSpacing:"0.14em",textTransform:"uppercase"}}>Dismiss</button>
          </div>
          {resequenceDelta.reason==="heal"&&(
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:13,color:"#8f8fa8",lineHeight:1.4,marginBottom:8}}>We refined the scoring. Your answers didn't change.</div>
          )}
          {resequenceDelta.moved.map(m=>(
            <div key={m.sport} style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:15,color:"#c9c5cf",lineHeight:1.45}}>{leagueName(m.sport)} re-read: {clubName(m.sport,m.from)} &rarr; <span style={{color:"#c9b27a"}}>{clubName(m.sport,m.to)}</span></div>
          ))}
          {resequenceDelta.moved.length===0&&resequenceDelta.stale.length===0&&(
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:15,color:"#9898b8",lineHeight:1.45}}>Every club held. Same you, same teams.</div>
          )}
          {resequenceDelta.stale.map(code=>(
            <div key={code} style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:14,color:"#9a9270",lineHeight:1.4,marginTop:4}}>{leagueName(code)} needs a retake to update.</div>
          ))}
        </div>
      )}

      {/* Restore: fresh home only. The returning user who lost their data lands here (no genome yet); someone who already has a genome does not need it. */}
      {!coreSequenced && (!restoreOpen ? (
        <div style={{textAlign:"center",marginBottom:20,position:"relative",zIndex:1}}>
          <button type="button" onClick={()=>setRestoreOpen(true)}
            style={{background:"#191922",border:"1px solid #2e2a44",borderRadius:9,padding:"9px 16px",color:"#9a96b8",fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",cursor:"pointer"}}
          >Been here before?  Restore &rarr;</button>
        </div>
      ) : (
        <div style={{marginBottom:20,maxWidth:420,marginLeft:"auto",marginRight:"auto",position:"relative",zIndex:1}}>
          <input
            value={restoreText}
            onChange={e=>{setRestoreText(e.target.value);setRestoreErr(false);}}
            placeholder="paste your playfandna.com/c/ link"
            aria-label="Paste your FanDNA restore link"
            style={{width:"100%",boxSizing:"border-box",background:"#14141c",border:"1px solid "+(restoreErr?"#c46c96":"#33333f"),borderRadius:10,padding:"11px 14px",color:"#d6d6e0",fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:"0.02em",outline:"none"}}
          />
          <div style={{display:"flex",gap:14,justifyContent:"center",alignItems:"center",marginTop:12}}>
            <button type="button" onClick={()=>{ const ok=onRestore&&onRestore(restoreText); if(!ok) setRestoreErr(true); }}
              style={{background:"linear-gradient(180deg,#d4a24c 0%,#c08f34 100%)",border:"none",borderRadius:22,padding:"10px 28px",color:"#241a05",fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:18,fontWeight:600,cursor:"pointer"}}
            >Restore</button>
            <button type="button" onClick={()=>{setRestoreOpen(false);setRestoreText("");setRestoreErr(false);}}
              style={{color:"#7f7f9f",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",background:"none",border:"none",cursor:"pointer",padding:"6px 6px"}}
            >Cancel</button>
          </div>
          {restoreErr&&(
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"#c46c96",marginTop:10,letterSpacing:"0.02em",textAlign:"center"}}>That doesn't look like a FanDNA link.</div>
          )}
        </div>
      ))}

      {/* First-run: no genome yet, lead with Start (the hero + junction stay collapsed). */}
      {!coreSequenced&&(
        <p style={{textAlign:"center",fontSize:11,color:"#8888a8",letterSpacing:"0.08em",fontFamily:"'DM Mono',monospace",margin:"0 0 26px"}}>
          No trivia, no homework. Just you.
        </p>
      )}

      {/* Identity hero: the user's core strip, shown ONCE, with a quiet share footer. */}
      {coreSequenced&&(
        <div style={{position:"relative",zIndex:1,border:"1px solid #222230",borderRadius:12,padding:"15px 14px 13px",background:"#14141c"}}>
          {readOut&&(
            <div style={{marginBottom:16,paddingBottom:15,borderBottom:"1px solid #222230"}}>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"#8484b0",letterSpacing:"0.26em",textTransform:"uppercase",marginBottom:8}}>The through-line</div>
              <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400,fontSize:"clamp(30px,8.4vw,38px)",color:"#e8e4de",lineHeight:1.04,marginBottom:9}}>{readOut.headline}</div>
              <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:"clamp(16px,4.3vw,19px)",color:"#9898b8",lineHeight:1.5}}>{readOut.read} {readOut.closing}</div>
            </div>
          )}
          {/* The core strip and the instincts line each carry their own retake disc (beside the
              expand chevron), which opens a two-step confirm in place. The old standalone
              "Re-sequence core" button is gone: both retakes now live on their own rows. */}
          <CoreStrip dims={coreProfile} onRetake={onRetakeCore}/>
          <InstinctsLine spineAnswers={spineAnswers} onRetake={onRetakeInstincts}/>
          {/* Hero teams-code strip removed (session-28 redesign): the family panels below are the
              single source of the league list, so the hero no longer double-prints the groups. */}
          {/* Primary: Compare with a friend (the /c/ genome invite) */}
          <button type="button" onClick={onCompare}
            style={{display:"block",width:"100%",textAlign:"center",background:"#6a5ad0",border:"1px solid #6a5ad0",borderRadius:9,padding:"14px 10px",marginTop:14,color:"#fff",fontFamily:"'DM Mono',monospace",fontSize:13,letterSpacing:"0.12em",textTransform:"uppercase",cursor:"pointer",fontWeight:600}}
            onMouseEnter={e=>{e.currentTarget.style.filter="brightness(1.08)";}}
            onMouseLeave={e=>{e.currentTarget.style.filter="none";}}
          >Compare with a friend</button>
          {/* Save line + Copy link (single /c/ link) + Share (rich caption). The link IS the save. */}
          <div style={{marginTop:13,textAlign:"center"}}>
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:15,color:"#a6a2bc",lineHeight:1.4,marginBottom:10}}>Your genome is saved to this link.</div>
            <div style={{display:"flex",gap:10,justifyContent:"center"}}>
              <button type="button" onClick={copyShare} aria-live="polite"
                style={{background:"#1c1a2a",border:"1px solid #3a3654",borderRadius:8,padding:"9px 18px",color:"#d6d2e2",fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:"0.08em",textTransform:"uppercase",cursor:"pointer"}}
              >{copied?"Copied":"Copy link"}</button>
              <button type="button" onClick={shareLink}
                style={{background:"none",border:"1px solid #33333f",borderRadius:8,padding:"9px 18px",color:"#b6b2c6",fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:"0.08em",textTransform:"uppercase",cursor:"pointer"}}
              >Share</button>
            </div>
          </div>

        </div>
      )}

      {/* Caption framing the league list as the through-line's evidence (earned at 2+ leagues). */}
      {coreSequenced&&takenLive.length>=2&&(
        <div style={{textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:14,color:"#8a8aa8",margin:"20px 0 15px",position:"relative",zIndex:1}}>
          The proof, league by league
        </div>
      )}

      {/* Group jump-nav pills: one per family, with its mapped count; a not-yet-live family
          (World, while its sports are hidden) shows a gold NEW flag. Taps scroll to the panel. */}
      <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap",marginTop:22,marginBottom:6,position:"relative",zIndex:1}}>
        {FAMILIES.map(fam=>{
          const inFam = sports.filter(s=>s.group===fam.id);
          if(inFam.length===0) return null;
          const liveInFam = inFam.filter(s=>s.live);
          const isNew = liveInFam.length===0;   // family whose sports are all still hidden (the World teaser)
          const set = isNew ? inFam : liveInFam; // numerator: mapped live leagues (an all-hidden family has none done)
          const total = inFam.length; // denominator is the full bucket (all five slots), so every pill reads x/5
          const doneN = set.filter(s=>{ const r=genome[s.code]; return !!(r&&r.club); }).length;
          const gold = isNew;
          const pillComplete = !isNew && inFam.every(s=>s.live) && inFam.every(s=>{ const r=genome[s.code]; return !!(r&&r.club); });
          const pillLabel = fam.label.split(" ")[0];                  // FOOTBALL / AMERICAN / WORLD
          return (
            <button key={fam.id} type="button"
              onClick={()=>{ const el=(typeof document!=="undefined")&&document.getElementById("fam-"+fam.id); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); }}
              style={{display:"flex",alignItems:"center",gap:7,background:"#171722",
                border:"1px solid #2c2c40",borderRadius:22,padding:"7px 16px",minHeight:44,boxSizing:"border-box",cursor:"pointer"}}>
              <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.16em",textTransform:"uppercase",color:PLBL}}>{pillLabel}</span>
              <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.04em",color:COUNT}}>{doneN}/{total}</span>
              {pillComplete&&(
                <svg width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" style={{flexShrink:0}}><path d="M12 2.2 L20.5 7.1 L20.5 16.9 L12 21.8 L3.5 16.9 L3.5 7.1 Z" fill="#c9b27a33" stroke="#c9b27a" strokeWidth="1.6"/><circle cx="12" cy="12" r="2.3" fill="#c9b27a"/></svg>
              )}
              {isNew&&(
                <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:"0.14em",color:"#c9b27a",background:"rgba(201,178,122,0.14)",borderRadius:4,padding:"1px 5px"}}>NEW</span>
              )}
            </button>
          );
        })}
      </div>

      {/* The family panels - the through-line's evidence and the way into each league. */}
      <div style={{marginTop:14,marginBottom:26}}>
        {(()=>{ const allDone = FAMILIES.every(f=>{ const gs=sports.filter(s=>s.group===f.id); return gs.length>0 && gs.every(s=>s.live && genome[s.code] && genome[s.code].club); });
          return allDone ? (
            <button type="button" onClick={()=>onOpenFinale&&onOpenFinale()} aria-label="Collection complete, view the genome"
              style={{display:"flex",alignItems:"center",gap:10,width:"100%",marginBottom:14,background:"rgba(201,178,122,0.07)",border:"1px solid rgba(201,178,122,0.35)",borderRadius:12,padding:"10px 14px",cursor:"pointer",textAlign:"left"}}>
              <HexBadge kind="genome" profile={coreProfile} size={26}/>
              <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",color:"#d8c184",flex:1}}>Collection complete</span>
              <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"#8a8560"}}>all three groups</span>
            </button>
          ) : null; })()}
        {FAMILIES.map((fam,i)=>(
          <FamilyPanel key={fam.id} fam={fam} last={i===FAMILIES.length-1}/>
        ))}
      </div>

      {/* The Pro Beach Hockey bonus: a restrained teaser until every league is sequenced, then a
          relive card. It cannot appear for a first-time visitor; hasCompletedAll gates the earned state. */}
      <BeachHomeCard coreProfile={coreProfile} results={genome} coreSequenced={coreSequenced} seen={beachSeen} onOpen={onOpenBeach}/>

      {/* Support + feedback footer */}
      <div style={{paddingTop:20,borderTop:"1px solid #1e1e2e",textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{display:"flex",gap:20,justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
          <button type="button" onClick={onHow}
            style={{color:"#9898b8",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",background:"none",border:"none",cursor:"pointer",padding:0,transition:"color .15s"}}
            onMouseEnter={e=>e.currentTarget.style.color="#d0ccc6"}
            onMouseLeave={e=>e.currentTarget.style.color="#9898b8"}
          >How this works</button>
          <a href="https://forms.gle/kAV9KGGUxdcA1dYv6" target="_blank" rel="noopener noreferrer"
            style={{color:"#9898b8",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"color .15s"}}
            onMouseEnter={e=>e.currentTarget.style.color="#d0ccc6"}
            onMouseLeave={e=>e.currentTarget.style.color="#9898b8"}
          >Feedback or a bug?</a>
          {/* Clear my results: only for a returning user (a core has been sequenced), and only in the resting state. */}
          {coreSequenced&&!confirmClear&&(
            <button type="button" onClick={()=>setConfirmClear(true)}
              style={{color:"#9898b8",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",background:"none",border:"none",cursor:"pointer",padding:0,transition:"color .15s"}}
              onMouseEnter={e=>e.currentTarget.style.color="#d0ccc6"}
              onMouseLeave={e=>e.currentTarget.style.color="#9898b8"}
            >Clear my results</button>
          )}
        </div>
        {/* Confirm step for the destructive reset: an explicit "can't be undone" message with a deliberate second tap. */}
        {coreSequenced&&confirmClear&&(
          <div style={{marginTop:16,textAlign:"center"}}>
            <p style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"#b8b4c4",lineHeight:1.6,margin:"0 auto 12px",maxWidth:320,letterSpacing:"0.02em"}}>This permanently clears your results and can't be undone.</p>
            <div style={{display:"flex",gap:22,justifyContent:"center",alignItems:"center"}}>
              <button type="button" onClick={()=>{setConfirmClear(false);onReset&&onReset();}}
                style={{color:"#d4a44e",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",background:"none",border:"none",cursor:"pointer",padding:"4px 4px"}}
              >Clear everything</button>
              <button type="button" onClick={()=>setConfirmClear(false)}
                style={{color:"#7f7f9f",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",background:"none",border:"none",cursor:"pointer",padding:"4px 4px"}}
              >Cancel</button>
            </div>
          </div>
        )}
        <p style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#7f7f9f",lineHeight:1.6,margin:"16px auto 0",maxWidth:360,letterSpacing:"0.02em"}}>FanDNA is an independent project. Not affiliated with, endorsed by, or associated with any club, league, or governing body.</p>
      </div>

    </div>
  );
}
