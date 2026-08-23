// FanDNA - the Pro Beach Hockey bonus: the ONE surface that skips the rigor.
//
// A two-stage relic, deliberately non-intrusive:
//   BeachIndicator = a small MINIMISED browser window that slips into the corner of the result
//                    screen once every league is sequenced. Noticeable (a gentle wobble + glow),
//                    but the result screen stays primary; you can ignore it. Its title bar is
//                    REDACTED so it never outs the joke before you choose to look.
//   BeachWindow    = tap the indicator (or the home card) and it grows into a little floating
//                    Netscape window that loads the relic over a fake modem and unearths your
//                    beach team. It floats over the corner; the screen behind stays visible.
//   BeachHomeCard  = what sits below the leagues on the genome home: a restrained teaser before
//                    the endgame, an "unlocked" alert after it, and a calm relive card once seen.
//
// Quarantine: imports ONLY the quarantined beach.js and the completion gate. It never touches
// scoring, a fixture, or a match. Only the reveal breaks the app's elegance; everything else
// stays in the app's own dark voice. User-facing copy: no em dashes.

import { useState, useEffect, useRef } from "react";
import { matchBeach } from "../data/beach";
import { hasCompletedAll } from "../lib/beachGate";

const SUNSET = ["#ff9e2c", "#ff5a7a", "#8a4bd8"];
const ALERT_LINE = "All fifteen, sequenced. Unearth your last read.";

// The hex-family shape (mirrors HexBadge geometry) in a sunset kit: one of the family, colour-coded
// as the bonus, never a real league.
function hexPoints(cx, cy, R){
  const a = R * 0.866;
  return [[cx,cy-R],[cx+a,cy-R/2],[cx+a,cy+R/2],[cx,cy+R],[cx-a,cy+R/2],[cx-a,cy-R/2]]
    .map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
}
function BeachHex({ size=44, mark, locked=false, lit=false, gid="bh" }){
  const S=size, cx=S/2, cy=S/2, R=S/2-3, scale=S/66;
  if(locked){
    // "lit" gives the teaser hex a brighter sunset-gradient rim + more weight; plain stays a dim outline.
    const w = lit ? Math.max(1.6,2.2*scale) : Math.max(1,1.3*scale);
    return (
      <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`} role="img" aria-label="a hidden bonus, locked">
        {lit &&
          <defs><linearGradient id={gid} x1="0" y1="0" x2="0.7" y2="1">
            <stop offset="0" stopColor={SUNSET[0]}/><stop offset="0.55" stopColor={SUNSET[1]}/><stop offset="1" stopColor={SUNSET[2]}/>
          </linearGradient></defs>}
        <polygon points={hexPoints(cx,cy,R)} fill="none" stroke={lit?`url(#${gid})`:"#b5657f"} strokeWidth={w} strokeOpacity={lit?0.95:0.5}/>
      </svg>
    );
  }
  return (
    <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`} role="img" aria-label={mark ? `${mark} bonus badge` : "bonus badge"}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor={SUNSET[0]}/><stop offset="0.55" stopColor={SUNSET[1]}/><stop offset="1" stopColor={SUNSET[2]}/>
        </linearGradient>
      </defs>
      <polygon points={hexPoints(cx,cy,R)} fill={`url(#${gid})`} stroke="#c9c9d6" strokeWidth={Math.max(1,1.5*scale)} strokeOpacity="0.55"/>
      {mark &&
        <text x={cx} y={cy} dy="0.35em" textAnchor="middle" fontFamily="'DM Mono',monospace" fontWeight="500"
          fontSize={Math.round(S*0.17)} fill="#ffffff" style={{textShadow:"1px 1px 0 rgba(0,0,0,0.25)"}}>{mark}</text>}
    </svg>
  );
}

// -- The indicator ------------------------------------------------------------
// A minimised, REDACTED relic window in the corner of the result screen. Non-blocking.
export function BeachIndicator({ onOpen }){
  return (
    <div style={{position:"fixed",right:14,bottom:16,zIndex:118,width:184}}>
      <style>{`
        @keyframes pbh-spin { to { transform:rotate(360deg); } }
        @keyframes pbh-wob { 0%,92%,100%{transform:translateY(0) rotate(0)} 95%{transform:translateY(-3px) rotate(-1.2deg)} 98%{transform:translateY(-1px) rotate(.8deg)} }
        @keyframes pbh-glow { 0%,100%{opacity:.4} 50%{opacity:1} }
      `}</style>
      <div style={{position:"absolute",right:0,bottom:"100%",marginBottom:8,width:184,textAlign:"right",
        fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:12.5,color:"#c9b58a",textShadow:"0 1px 4px #000",lineHeight:1.3}}>
        {ALERT_LINE}
      </div>
      <button type="button" onClick={onOpen} aria-label="Open the hidden bonus"
        style={{display:"block",width:"100%",padding:0,border:"none",background:"none",cursor:"pointer",position:"relative",
          animation:"pbh-wob 3.4s ease-in-out infinite"}}>
        <span style={{position:"absolute",inset:-3,borderRadius:3,pointerEvents:"none",boxShadow:"0 0 16px rgba(255,90,122,.35)",animation:"pbh-glow 2s ease-in-out infinite"}}/>
        <span style={{display:"flex",alignItems:"center",gap:5,padding:"5px 6px",boxShadow:"0 8px 22px rgba(0,0,0,.5)",
          background:"linear-gradient(90deg,#000080,#1084d0)",color:"#fff",fontFamily:"Arial,sans-serif",fontSize:10,fontWeight:"bold",
          border:"2px solid",borderColor:"#fff #808080 #808080 #fff"}}>
          <span style={{width:12,height:12,borderRadius:"50%",flex:"none",
            background:"conic-gradient(from 0deg,#ff9e2c,#ff5a7a,#8a4bd8,#1084d0,#ff9e2c)",
            WebkitMask:"radial-gradient(circle 3px at 50% 50%,transparent 98%,#000)",mask:"radial-gradient(circle 3px at 50% 50%,transparent 98%,#000)",
            animation:"pbh-spin 1s linear infinite"}}/>
          <span style={{flex:1,textAlign:"left",letterSpacing:"1px"}}>{"\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF.net"}</span>
          <span style={{fontSize:9,opacity:.85}}>&#9633;</span>
        </span>
      </button>
    </div>
  );
}

// -- The window ---------------------------------------------------------------
// Grows from the corner and loads the relic over a fake modem. Floats; screen behind stays live.
export function BeachWindow({ coreProfile, reducedMotion=false, onDone, onSeen }){
  const team = matchBeach(coreProfile);
  const [st, setSt] = useState({ prog:false, wipe:false, done:false, read:false, relic:false });
  const seenRef = useRef(false);
  const markSeen = () => { if(!seenRef.current){ seenRef.current = true; if(onSeen) onSeen(); } };

  useEffect(()=>{
    if(!team){ if(onDone) onDone(); return; }
    if(reducedMotion){ setSt({prog:true,wipe:true,done:true,read:true,relic:true}); markSeen(); return; }
    const t=[];
    t.push(setTimeout(()=>setSt(s=>({...s,prog:true})),50));
    t.push(setTimeout(()=>setSt(s=>({...s,wipe:true})),2300));
    t.push(setTimeout(()=>setSt(s=>({...s,done:true})),4000));
    t.push(setTimeout(()=>setSt(s=>({...s,read:true})),4500));
    t.push(setTimeout(()=>{ setSt(s=>({...s,relic:true})); markSeen(); },5300));
    return ()=>t.forEach(clearTimeout);
  }, [team, reducedMotion]);

  if(!team) return null;
  const status = st.done ? "Done." : st.wipe ? "Transferring..." : "Connecting...";
  const tbtn = { width:13,height:11,background:"#c0c0c0",border:"1px solid",borderColor:"#fff #808080 #808080 #fff",color:"#000",fontSize:8,lineHeight:"11px",textAlign:"center",cursor:"pointer",fontStyle:"normal" };

  return (
    <div role="dialog" aria-label="Pro Beach Hockey" style={{position:"fixed",right:14,bottom:16,zIndex:120,
      width:"min(300px,86vw)",background:"#c0c0c0",border:"2px solid",borderColor:"#fff #808080 #808080 #fff",
      boxShadow:"0 16px 44px rgba(0,0,0,.65)",fontFamily:"'Times New Roman',Georgia,serif",color:"#000",transformOrigin:"bottom right",
      animation:"pbh-grow .28s ease-out"}}>
      <style>{`
        @keyframes pbh-grow { from{transform:scale(.4);opacity:.2} to{transform:scale(1);opacity:1} }
        @keyframes pbh-spin2 { to { transform:rotate(360deg); } }
        @keyframes pbh-wipe { to { clip-path:inset(0 0 0 0); } }
        @keyframes pbh-scan { 0%{opacity:.9} 100%{opacity:0} }
        @keyframes pbh-fade { to { opacity:1; } }
        .pbhw-band { clip-path:inset(0 0 100% 0); }
        .pbhw-band.on { animation:pbh-wipe 1.7s steps(11) forwards; }
        .pbhw-scan { position:absolute; inset:0; z-index:3; pointer-events:none; opacity:0;
          background:repeating-linear-gradient(0deg,rgba(0,0,0,.14) 0 1px,transparent 1px 3px); }
        .pbhw-scan.on { animation:pbh-scan 1.7s ease-out forwards; }
        .pbhw-fade { opacity:0; } .pbhw-fade.on { animation:pbh-fade .7s ease forwards; }
      `}</style>

      {/* title bar */}
      <div style={{display:"flex",alignItems:"center",gap:5,padding:"3px 4px",background:"linear-gradient(90deg,#000080,#1084d0)",
        color:"#fff",fontFamily:"Arial,sans-serif",fontSize:10,fontWeight:"bold"}}>
        <span style={{width:13,height:13,borderRadius:"50%",flex:"none",
          background:"conic-gradient(from 0deg,#ff9e2c,#ff5a7a,#8a4bd8,#1084d0,#ff9e2c)",
          WebkitMask:"radial-gradient(circle 3.2px at 50% 50%,transparent 98%,#000)",mask:"radial-gradient(circle 3.2px at 50% 50%,transparent 98%,#000)",
          animation: st.done ? "none" : "pbh-spin2 .9s linear infinite", opacity: st.done ? .5 : 1}}/>
        <span style={{flex:1}}>probeachhockey.net</span>
        <span role="button" aria-label="Minimise" onClick={()=>onDone&&onDone()} style={tbtn}>_</span>
        <span role="button" aria-label="Close" onClick={()=>onDone&&onDone()} style={tbtn}>&#10005;</span>
      </div>

      {/* body */}
      <div style={{position:"relative",background:"#fff",maxHeight:320,overflowY:"auto"}}>
        <div className={"pbhw-band"+(st.wipe?" on":"")}>
          <div className={"pbhw-scan"+(st.wipe?" on":"")}/>
          <div style={{padding:"14px 14px 6px",textAlign:"center"}}>
            <div style={{width:62,height:69,margin:"0 auto 8px",filter:"drop-shadow(0 0 14px rgba(255,90,122,.45))"}}>
              <BeachHex size={62} mark={team.key} gid="pbh-win"/>
            </div>
            <div style={{fontFamily:"Arial Black,Arial,sans-serif",fontSize:17,fontWeight:900,color:"#101014"}}>{team.name}</div>
            <div style={{fontFamily:"Arial,sans-serif",fontSize:11,color:"#b0006a",fontStyle:"italic",marginBottom:5}}>{team.tagline}</div>
            <div style={{height:6,width:st.done?"86%":0,margin:"4px auto 0",background:"linear-gradient(90deg,#ff9e2c,#ff5a7a,#8a4bd8)",
              animation: st.done ? "pbh-fade .01s" : "none"}}/>
          </div>
          <div className={"pbhw-fade"+(st.read?" on":"")}
            style={{padding:"8px 14px 0",fontFamily:"Georgia,serif",fontSize:11.5,lineHeight:1.55,color:"#1a1a22",textAlign:"left"}}>{team.read}</div>
          <div className={"pbhw-fade"+(st.relic?" on":"")} style={{textAlign:"center",margin:"10px 0 4px"}}>
            <span style={{display:"inline-block",background:"#000",color:"#39ff5a",fontFamily:"'Courier New',monospace",fontWeight:"bold",
              letterSpacing:2,fontSize:11,padding:"2px 6px",border:"1px solid #333"}}>visitor 00001337</span>
          </div>
          <div className={"pbhw-fade"+(st.relic?" on":"")}
            style={{fontFamily:"Arial,sans-serif",fontSize:9,color:"#555",textAlign:"center",padding:"6px 8px 10px"}}>Best viewed in Netscape Navigator 4.0 at 800x600</div>
        </div>
      </div>

      {/* status bar */}
      <div style={{display:"flex",alignItems:"center",gap:6,padding:"2px 5px",background:"#c0c0c0",borderTop:"1px solid #fff",
        fontFamily:"Arial,sans-serif",fontSize:9,color:"#000"}}>
        <span>{status}</span>
        <div style={{marginLeft:"auto",width:66,height:9,background:"#fff",border:"1px solid",borderColor:"#808080 #fff #fff #808080",padding:1}}>
          <span style={{display:"block",height:"100%",width:st.prog?"100%":"0%",transition:"width 2.2s steps(11)",
            background:"repeating-linear-gradient(90deg,#000080 0 7px,#1084d0 7px 9px)"}}/>
        </div>
      </div>
    </div>
  );
}

// -- The home surface ---------------------------------------------------------
export function BeachHomeCard({ coreProfile, results, coreSequenced, seen, onOpen }){
  const unlocked = hasCompletedAll(results);

  if(unlocked){
    const team = matchBeach(coreProfile);
    if(!team) return null;
    // Once seen: a calm named relive card. Before seen: the "unlocked" alert (mystery kept).
    if(seen){
      return (
        <button type="button" onClick={()=>onOpen&&onOpen()} aria-label={`Relive your Pro Beach Hockey bonus, ${team.name}`}
          style={{width:"100%",marginTop:18,padding:"14px",borderRadius:9,border:"1px solid #3a2a3e",
            background:"linear-gradient(180deg,#17111c,#120f17)",display:"flex",alignItems:"center",gap:13,cursor:"pointer",textAlign:"left"}}>
          <div style={{flex:"none",filter:"drop-shadow(0 0 10px rgba(255,90,122,.35))"}}><BeachHex size={44} mark={team.key} gid="pbh-card"/></div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:".18em",textTransform:"uppercase",color:"#d08a5a"}}>Pro Beach Hockey &middot; bonus</div>
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:18,color:"#e7d9c9",marginTop:1}}>{team.name}</div>
          </div>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:".16em",textTransform:"uppercase",color:"#8a6a6f"}}>Relive &#9654;</div>
        </button>
      );
    }
    return (
      <button type="button" onClick={()=>onOpen&&onOpen()} aria-label="Open your hidden bonus"
        style={{width:"100%",marginTop:18,padding:"14px",borderRadius:9,border:"1px solid #5a3a4e",
          background:"linear-gradient(180deg,#1e1420,#160f19)",boxShadow:"0 0 18px rgba(255,90,122,.12)",
          display:"flex",alignItems:"center",gap:13,cursor:"pointer",textAlign:"left"}}>
        <style>{`@keyframes pbh-dot { 0%,100%{opacity:.35;transform:scale(.85)} 50%{opacity:1;transform:scale(1.15)} }`}</style>
        <div style={{flex:"none",filter:"drop-shadow(0 0 12px rgba(255,90,122,.5))"}}><BeachHex size={44} mark={"?"} gid="pbh-alert"/></div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:".18em",textTransform:"uppercase",color:"#e0955f",display:"flex",alignItems:"center",gap:6}}>
            <span style={{width:6,height:6,borderRadius:"50%",background:"#ff7a4d",boxShadow:"0 0 6px #ff7a4d",animation:"pbh-dot 1.6s ease-in-out infinite"}}/> Unlocked
          </div>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:15,color:"#e7d9c9",marginTop:2}}>{ALERT_LINE}</div>
        </div>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:".16em",textTransform:"uppercase",color:"#e0955f"}}>Open &#9654;</div>
      </button>
    );
  }

  // teaser: only for a returning taker, never a first-time visitor. Given room to breathe (padding
  // above + below) and a sunset-lit hex with a soft glow, so it reads as intentional while staying
  // quieter than a real league row.
  if(!coreSequenced) return null;
  return (
    <div style={{marginTop:30,paddingBottom:16,display:"flex",alignItems:"center",justifyContent:"center",gap:12}}>
      <div style={{flex:"none",filter:"drop-shadow(0 0 8px rgba(255,90,122,.4))"}}><BeachHex size={30} locked lit gid="pbh-teaser"/></div>
      <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:15.5,color:"#8a7a92",letterSpacing:".015em"}}>
        Past the fifteenth, there is one more read.
      </div>
    </div>
  );
}
