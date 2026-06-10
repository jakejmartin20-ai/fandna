import { useState, useEffect, useRef, useMemo, Component } from "react";
import { Analytics } from "@vercel/analytics/react";
import { track } from "@vercel/analytics";
import { coreQuestions } from "./data/core";
import { SPORT_DATA } from "./lib/sportData";
import { scoreCore, scoreModule } from "./lib/scoring";
import { loadState, saveResult, clearAll } from "./lib/storage";
import { generateShareCard } from "./lib/card";
import { ChoiceQ, BinaryQ, SliderQ, DimBars, BadgeImg } from "./components/quiz";
import { GenomeHome } from "./screens/Genome";
import { SPORTS } from "./lib/manifest";

// Fail-state guard. If anything in the app throws while rendering, the user sees this
// instead of a blank screen. A plain reload keeps their saved genome.
class ErrorBoundary extends Component {
  constructor(p){ super(p); this.state={crashed:false}; }
  static getDerivedStateFromError(){ return {crashed:true}; }
  componentDidCatch(err){ try{ track("render_error",{message:String(err&&err.message).slice(0,120)}); }catch(e){} }
  render(){
    if(!this.state.crashed) return this.props.children;
    return (
      <div style={{
        background:"#16161e",minHeight:"100dvh",
        display:"flex",alignItems:"center",justifyContent:"center",
        padding:"32px 24px",fontFamily:"'Georgia','Times New Roman',serif",position:"relative",overflow:"hidden",
      }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');html,body{margin:0}`}</style>

        {/* faint helix backbone, echoes the home screen */}
        <svg viewBox="0 0 520 440" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"
          style={{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",opacity:0.5,width:"100%",height:"100%"}}>
          <path d="M180 0 C320 110, 200 220, 340 330 S 200 440, 340 540" stroke="#22222e" strokeWidth="1.5" fill="none"/>
          <path d="M340 0 C200 110, 320 220, 180 330 S 320 440, 180 540" stroke="#22222e" strokeWidth="1.5" fill="none"/>
        </svg>

        <div style={{position:"relative",zIndex:1,textAlign:"center",maxWidth:340}}>
          {/* one strand bar knocked out of line */}
          <div style={{display:"flex",gap:4,justifyContent:"center",marginBottom:26}}>
            <span style={{width:26,height:5,borderRadius:3,background:"#2a2a3a"}}/>
            <span style={{width:26,height:5,borderRadius:3,background:"#2a2a3a"}}/>
            <span style={{width:26,height:5,borderRadius:3,background:"#6a6a90",transform:"translateY(7px) rotate(-12deg)",opacity:0.8}}/>
            <span style={{width:26,height:5,borderRadius:3,background:"#2a2a3a"}}/>
            <span style={{width:26,height:5,borderRadius:3,background:"#2a2a3a"}}/>
          </div>

          <h1 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:300,color:"#d8d4ce",lineHeight:1.2,fontSize:"clamp(28px,7vw,34px)",letterSpacing:".01em",margin:"0 0 16px"}}>A strand came loose.</h1>
          <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:"clamp(16px,4vw,18px)",lineHeight:1.55,color:"#9898b8",margin:"0 0 30px"}}>That one's on us, not your DNA. Refresh and we'll re-read the sequence.</p>

          <button onClick={()=>window.location.reload()}
            style={{border:"1px solid #4a4a6a",borderRadius:6,padding:"13px 30px",color:"#cfcbe6",fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.25em",textTransform:"uppercase",background:"rgba(120,120,160,0.06)",cursor:"pointer"}}>
            Re-sequence
          </button>

          <a href="https://forms.gle/kAV9KGGUxdcA1dYv6" target="_blank" rel="noopener noreferrer"
            style={{display:"block",marginTop:20,fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#5a5a78",textDecoration:"none"}}>
            Report it
          </a>
        </div>
      </div>
    );
  }
}

function AppInner(){
  const [cur,setCur]=useState(0);
  const [answers,setAnswers]=useState({});
  const [scores,setScores]=useState(null);
  const [result,setResult]=useState(null);
  const [phase,setPhase]=useState("in");
  const [tab,setTab]=useState("result");
  const [mode,setMode]=useState("full");        // "full" = core+module ; "module" = PL module only
  const [savedCore,setSavedCore]=useState(null); // cached {coreAnswers,coreProfile} for module-only retakes
  const [screen,setScreen]=useState("home");     // "home" | "quiz" | "result" - the genome home is the landing page
  const [genome,setGenome]=useState({});         // saved results map { PL:{club} } - drives the home strands + share string
  const [activeSport,setActiveSport]=useState("PL"); // which sport's quiz/result/card is in play
  const containerRef=useRef(null);

  // NFL ships behind live:false. A hidden ?nfl=1 in the URL unlocks the strand on preview
  // (tappable, takeable) while the public still sees "coming soon". Nothing else changes.
  const nflUnlocked = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("nfl");
  const sportsList = SPORTS.map(s=> s.code==="NFL" ? {...s, live: s.live||nflUnlocked} : s);

  // Active sport's data, bound to the same names the screens already use, so the result
  // screen and quiz read the right sport with no other changes. PL behaves exactly as before.
  const D = SPORT_DATA[activeSport] || SPORT_DATA.PL;
  const moduleQuestions = D.moduleQuestions;
  const teams = D.teams, archetypes = D.archetypes, teamTextColors = D.teamTextColors;
  const greats = D.greats, vitalStats = D.vitalStats, nearlyGot = D.nearlyGot;
  const badgeUrls = D.badgeUrls, squadUrls = D.squadUrls;

  // The active question run. First time: 24 core + 14 PL module = 38, in the v1 order.
  // Module-only retake: just the 14 PL questions (the core is already sequenced).
  const sequence=useMemo(
    ()=> mode==="module" ? moduleQuestions : [...coreQuestions, ...moduleQuestions],
    [mode,activeSport]
  );
  const coreIds=useMemo(()=>new Set(coreQuestions.map(p=>p.id)),[]);

  const q=sequence[cur];
  const pct=Math.round((cur/sequence.length)*100);
  const currentPhase=q?.phase;

  // Phase tracker: frames the quiz as short chapters.
  const phaseOrder=[...new Set(sequence.map(p=>p.phase))];
  const phaseIdx=phaseOrder.indexOf(currentPhase);
  const phaseStart=sequence.findIndex(p=>p.phase===currentPhase);
  const phaseLen=sequence.filter(p=>p.phase===currentPhase).length;

  // Resume a previously completed PL genome. The result is PRELOADED so the completed
  // strand on the home screen is tappable straight to it, but we stay on the home screen
  // (the landing page) rather than jumping into the result. First-timers are unaffected.
  useEffect(()=>{
    const st=loadState();
    setGenome(st.results||{});
    if(st.results&&st.results.PL&&st.results.PL.club){
      setSavedCore({coreAnswers:st.coreAnswers,coreProfile:st.coreProfile});
      setScores(st.results.PL.scores||null);
      setResult(st.results.PL.club);
    }
  },[]);

  // Keyboard handler
  useEffect(()=>{
    const h=(e)=>{
      if(screen!=="quiz") return;
      if(result) return;
      if(q.type==="choice"){
        const n=parseInt(e.key);
        if(n>=1&&n<=q.options.length) handleSelect(q.options[n-1].value);
      }
      if(q.type==="slider"&&["1","2","3","4","5"].includes(e.key)) handleSelect(Number(e.key));
      if(q.type==="binary"){
        if(e.key==="1") handleSelect("left");
        if(e.key==="2") handleSelect("right");
      }
      if(e.key==="ArrowLeft"&&cur>0) goBack();
    };
    window.addEventListener("keydown",h);
    return()=>window.removeEventListener("keydown",h);
  },[cur,q,result,screen]);

  function handleSelect(val){
    const na={...answers,[q.id]:val};
    setAnswers(na);
    if(Object.keys(answers).length===0) track("quiz_started");
    if(cur+1<sequence.length){
      const nextPhase=sequence[cur+1].phase;
      if(nextPhase!==q.phase) track("quiz_phase",{phase:nextPhase});
      setPhase("out");
      setTimeout(()=>{setCur(c=>c+1);setPhase("in");},220);
    } else {
      // Two-stage scoring. Split the answers into the shared core and the PL module.
      // On a module-only retake the core comes from the already-saved genome.
      const coreAnswers = mode==="module"
        ? (savedCore?savedCore.coreAnswers:{})
        : Object.fromEntries(Object.entries(na).filter(([k])=>coreIds.has(k)));
      const moduleAnswers = Object.fromEntries(Object.entries(na).filter(([k])=>!coreIds.has(k)));
      const coreProfile = (mode==="module" && savedCore && savedCore.coreProfile)
        ? savedCore.coreProfile
        : scoreCore(coreAnswers);
      // PL reproduces the exact v1 assignment (full matrix + tie-break); NFL uses the
      // fingerprint-plus-module path. scoreModule routes on the sport.
      const { club, scores:s } = scoreModule(activeSport, { coreProfile, coreAnswers, moduleAnswers });
      setScores(s);
      setResult(club);
      setScreen("result");
      setGenome(g=>({...g,[activeSport]:{club}}));
      track("quiz_completed",{sport:activeSport,club});
      saveResult(activeSport,{coreAnswers,coreProfile,club,moduleAnswers,scores:s});
    }
  }

  function goBack(){
    if(cur===0) return;
    setPhase("out");
    setTimeout(()=>{setCur(c=>c-1);setPhase("in");},220);
  }

  function startOver(){
    clearAll();
    setMode("full");setSavedCore(null);setGenome({});
    setPhase("out");
    setTimeout(()=>{
      setCur(0);setAnswers({});setScores(null);setResult(null);setTab("result");
      setScreen("home");setPhase("in");
    },160);
  }
  // Redo just the PL module; keep the already-sequenced core. Falls back to a full
  // run if no saved core exists (e.g. a genome saved before this version).
  function retakeModule(){
    const st=loadState();
    if(!st.coreAnswers){ startOver(); return; }
    setSavedCore({coreAnswers:st.coreAnswers,coreProfile:st.coreProfile});
    setMode("module");
    setPhase("out");
    setTimeout(()=>{
      setCur(0);setAnswers({});setScores(null);setResult(null);setTab("result");
      setScreen("quiz");setPhase("in");
    },160);
  }
  // Start a sport from the home screen (a live, untaken strand). Sets it active.
  // If the shared core is already sequenced, run just that sport's module; else run the full set.
  function startSport(code){
    const sport=code||"PL";
    setActiveSport(sport);
    setResult(null); setScores(null);   // drop any prior sport's result before this one's data loads
    const st=loadState();
    if(st.coreAnswers){
      setSavedCore({coreAnswers:st.coreAnswers,coreProfile:st.coreProfile});
      setMode("module");
    } else {
      setSavedCore(null);
      setMode("full");
    }
    setPhase("out");
    setTimeout(()=>{
      setCur(0);setAnswers({});setScores(null);setResult(null);setTab("result");
      setScreen("quiz");setPhase("in");
    },160);
  }
  // Open a completed sport's result from the home screen. Loads that sport's saved
  // club + scores so the result screen (and its Almost-you percentages) render.
  function openResult(code){
    const sport=code||"PL";
    setActiveSport(sport);
    const st=loadState();
    const r=(st.results&&st.results[sport])||{};
    if(r.club){ setResult(r.club); setScores(r.scores||null); }
    setTab("result");
    setScreen("result");
  }

  const team=result?teams[result]:null;
  const sortedOthers=scores
    ?Object.entries(scores).sort((a,b)=>b[1]-a[1]).filter(([k])=>k!==result)
    :[];
  const maxScore=scores?Math.max(...Object.values(scores)):1;

  // Phase label colours
  const phaseColors={
    "Who are you?":"#4a4a6a",
    "Where do you belong?":"#3a5a4a",
    "How do you win?":"#5a3a3a",
    "How do you feel it?":"#4a3a5a",
    "The fine print":"#5a4a2a",
    "What it comes down to":"#3a4a5a",
  };
  const phaseTextColors={
    "Who are you?":          "#9a9acc",
    "Where do you belong?":  "#7abf9a",
    "How do you win?":       "#cc8a8a",
    "How do you feel it?":   "#aa8acc",
    "The fine print":        "#ccaa6a",
    "What it comes down to": "#7aaacc",
  };
  const phaseShortNames={
    "Who are you?":          "Identity",
    "Where do you belong?":  "Place",
    "How do you win?":       "Mentality",
    "How do you feel it?":   "Passion",
    "The fine print":        "Details",
    "What it comes down to": "The crunch",
  };

  // ── Squad tab state ────────────────────────────────────────────────────────


  // ── Squad pitch data (pre-computed, no IIFE in JSX) ───────────────────────


    // ── Pre-compute tab data (no logic inside JSX) ───────────────────────────
  const vit = result ? vitalStats[result] : null;
  const statsData = vit ? (activeSport==="NFL" ? [
    ["Nickname",   vit.nickname],
    ["Founded",    String(vit.founded)],
    ["Stadium",    vit.stadium],
    ["City",       vit.city],
    ["Capacity",   vit.capacity],
    ["Colours",    vit.colors],
    ["Titles",     vit.titles],
    ["Last title", vit.lastTitle],
  ] : [
    ["Nickname",    vit.nickname],
    ["Founded",     String(vit.founded)],
    ["Ground",      vit.ground],
    ["City",        vit.city],
    ["Capacity",    vit.capacity],
    ["Kit colours", vit.colors],
    ["Kit maker",   vit.kitMaker],
    ["Last title",  vit.lastTitle],
  ]).filter(([,v])=>v!=null&&v!=="") : [];

  const ng = result ? (nearlyGot[result]||{}) : {};
  // PL shows the four highest-scoring runners-up (dynamic). NFL shows the four matchups the
  // craft authored for this team (the deliberate near-misses), which always carry a written line.
  const nearClubs = activeSport==="NFL"
    ? Object.keys(ng).filter(k=>teams[k])
    : sortedOthers.slice(0,4).map(([k])=>k).filter(k=>teams[k]);

  // ── Home-screen data, all manifest-driven ─────────────────────────────────
  // The share string lists every sport in the manifest: a completed one shows its club
  // code, every other shows "?". Adding a sport later extends this automatically.
  const shareString = "FanDNA: " + SPORTS.map(s=>{
    const r=genome[s.code];
    return `${s.code}-${(r&&r.club)?r.club:"?"}`;
  }).join(" · ");
  const coreSequenced = Object.keys(genome).length>0;
  const coreCount = coreQuestions.length;
  const moduleCounts = { PL: SPORT_DATA.PL.moduleQuestions.length, NFL: SPORT_DATA.NFL.moduleQuestions.length };

  return(
    <div ref={containerRef} className="app-root" style={{
      background:"#16161e",
      display:"flex",alignItems:"flex-start",justifyContent:"center",
      padding:"32px 20px",
      fontFamily:"'Georgia','Times New Roman',serif",
      position:"relative",
    }}>
      <Analytics/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
        @keyframes slideIn  {from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideOut {from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-8px)}}
        @keyframes popIn    {0%{opacity:0;transform:scale(.94)}60%{transform:scale(1.01)}100%{opacity:1;transform:scale(1)}}
        @keyframes fadeIn   {from{opacity:0}to{opacity:1}}
        @keyframes strandPulse {0%,100%{border-color:#3a3a50}50%{border-color:#6a6a90}}
        html,body{margin:0;overscroll-behavior:none}
        .app-root{min-height:100vh;min-height:100dvh}
        *{box-sizing:border-box}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:#16161e}
        ::-webkit-scrollbar-thumb{background:#1e1e2e;border-radius:2px}
      `}</style>

      {/* Ambient glow, changes with phase */}
      <div style={{
        position:"fixed",inset:0,zIndex:0,pointerEvents:"none",
        background:`radial-gradient(ellipse at 30% 40%, ${result&&teams[result]?teams[result].color+"08":"#ffffff08"} 0%, transparent 65%)`,
        transition:"background 1s ease",
      }}/>

      <div style={{
        width:"100%",maxWidth:560,position:"relative",zIndex:1,
        animation:`${phase==="out"?"slideOut":"slideIn"} .22s ease forwards`,
      }}>

        {/* ── GENOME HOME (landing page) ── */}
        {screen==="home"&&(
          <GenomeHome
            sports={sportsList}
            genome={genome}
            sportData={SPORT_DATA}
            coreSequenced={coreSequenced}
            coreCount={coreCount}
            moduleCounts={moduleCounts}
            shareString={shareString}
            onOpenResult={openResult}
            onStartSport={startSport}
          />
        )}

        {/* ── QUIZ ── */}
        {screen==="quiz"&&(
          <>
            {/* League indicator: which sequence you're taking, always visible */}
            <div style={{textAlign:"center",marginBottom:14,fontSize:11,color:"#7878a0",letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace"}}>
              {(SPORTS.find(s=>s.code===activeSport)||{}).name||"Premier League"}
            </div>
            {/* Progress: six-segment phase tracker (in-flow, not jammed to viewport top) */}
            <div style={{display:"flex",gap:3,height:4,marginBottom:24}}>
              {phaseOrder.map((ph,i)=>{
                const frac=i<phaseIdx?1:i>phaseIdx?0:Math.min(1,Math.max(0,(cur-phaseStart+1)/phaseLen));
                return(
                  <div key={ph} style={{flex:1,height:"100%",background:"#1e1e2e",borderRadius:2,overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${frac*100}%`,background:"#6a6a90",borderRadius:2,transition:"width .3s ease"}}/>
                  </div>
                );
              })}
            </div>

            {/* Nav row */}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:28,flexWrap:"nowrap",gap:8}}>
              <div style={{display:"flex",gap:10,alignItems:"center",flexShrink:1}}>
                <button onClick={goBack} disabled={cur===0}
                  style={{
                    background:"none",border:"none",padding:0,
                    color:cur===0?"#333344":"#9898b8",
                    fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",
                    fontFamily:"'DM Mono',monospace",cursor:cur===0?"default":"pointer",
                    transition:"color .15s",
                  }}
                  onMouseEnter={e=>cur>0&&(e.currentTarget.style.color="#ccc")}
                  onMouseLeave={e=>e.currentTarget.style.color=cur===0?"#222232":"#4a4a6a"}
                >← back</button>
              </div>

              <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0,minWidth:0}}>
                {/* Phase pill */}
                <span style={{
                  fontSize:11,color:phaseTextColors[currentPhase]||"#aaa",
                  letterSpacing:"0.2em",textTransform:"uppercase",
                  fontFamily:"'DM Mono',monospace",
                  border:`1px solid ${phaseColors[currentPhase]||"#333"}`,
                  background:`${phaseColors[currentPhase]||"#333"}22`,
                  padding:"4px 10px",borderRadius:20,fontWeight:500,
                  maxWidth:"clamp(100px,35vw,180px)",overflow:"hidden",
                  textOverflow:"ellipsis",whiteSpace:"nowrap",
                }}>
                  {phaseShortNames[currentPhase]||currentPhase}
                </span>
                <span style={{fontSize:10,color:"#aaa",letterSpacing:"0.15em",fontFamily:"'DM Mono',monospace"}}>
                  {cur+1}/{sequence.length}
                </span>
              </div>
            </div>

            {/* Entry framing, first question only (per 1b) */}
            {cur===0&&(
              <div style={{textAlign:"center",marginBottom:26}}>
                <div style={{fontSize:11,color:"#7878a0",letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:10}}>Which club are you, really?</div>
                <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:"clamp(14px,3.4vw,17px)",color:"#9898b8",lineHeight:1.55,margin:0}}>{mode==="module"?`Your core DNA is already sequenced. ${moduleQuestions.length} questions to remap your Premier League strand.`:"Answer honestly, not how you wish you were. New to the league or loyal for life, this is the club in your DNA."}</p>
              </div>
            )}

            {/* Question */}
            <h2 style={{
              fontFamily:"'Cormorant Garamond',Georgia,serif",
              fontSize:"clamp(22px,5vw,30px)",
              fontWeight:300,color:"#d8d4ce",
              lineHeight:1.35,margin:"0 0 28px",
              letterSpacing:".01em",
            }}>{q.question}</h2>

            {q.type==="choice"&&<ChoiceQ key={q.id} q={q} onSelect={handleSelect}/>}
            {q.type==="binary"&&<BinaryQ key={q.id} q={q} onSelect={handleSelect}/>}
            {q.type==="slider"&&<SliderQ key={q.id} q={q} onSelect={handleSelect}/>}
          </>
        )}

        {/* ── RESULT ── */}
        {screen==="result"&&result&&(
          <div style={{animation:"popIn .45s cubic-bezier(.2,.8,.3,1) both",background:`linear-gradient(160deg,${team.color}06 0%,transparent 40%)`,borderRadius:12,padding:"4px"}}>

            {/* Back to the genome home + league indicator */}
            <div style={{marginBottom:14,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <button onClick={()=>setScreen("home")}
                style={{
                  background:"none",border:"none",padding:0,
                  color:"#9898b8",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",
                  fontFamily:"'DM Mono',monospace",cursor:"pointer",transition:"color .15s",
                }}
                onMouseEnter={e=>e.currentTarget.style.color="#ccc"}
                onMouseLeave={e=>e.currentTarget.style.color="#9898b8"}
              >← genome</button>
              <span style={{fontSize:11,color:"#7878a0",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace"}}>
                {(SPORTS.find(s=>s.code===activeSport)||{}).name||"Premier League"}
              </span>
            </div>

            {/* Club header */}
            <div style={{marginBottom:20,paddingBottom:20,borderBottom:"1px solid #0f0f1a"}}>
              <div style={{fontSize:11,color:"#888",letterSpacing:"0.4em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:16,textAlign:"center"}}>your club</div>
              <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:12}}>
                {/* Badge - emoji default, img replaces on successful load */}
                <BadgeImg url={badgeUrls[result]} emoji={team.emoji} size={60}/>
                {/* Name + tagline + archetype inline */}
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",marginBottom:4}}>
                    <h1 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",margin:0,fontSize:"clamp(26px,6vw,38px)",fontWeight:300,color:"#e8e4de",letterSpacing:"-.02em",lineHeight:1}}>{team.name}</h1>
                    <div style={{display:"inline-flex",alignItems:"center",gap:6,background:`${team.color}15`,border:`1px solid ${team.color}30`,borderRadius:4,padding:"3px 10px",flexShrink:0}}>
                      <span style={{fontSize:11,color:"#aaa",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace"}}>type</span>
                      <span style={{fontSize:11,color:(teamTextColors[result]||team.color),fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>{archetypes[result]}</span>
                    </div>
                  </div>
                  <p style={{margin:0,fontSize:13,color:(teamTextColors[result]||team.color),fontStyle:"italic",letterSpacing:".01em",opacity:0.9}}>{team.tagline}</p>
                </div>
              </div>
            </div>

            {/* Tabs, scrollable row */}
            <div style={{position:"relative",marginBottom:22}}>
              <div style={{display:"flex",gap:0,marginBottom:0,borderBottom:"1px solid #0f0f1a",overflowX:"auto",scrollbarWidth:"none",WebkitOverflowScrolling:"touch",msOverflowStyle:"none"}}>
              {[["result","Match"],["analysis","Why you?"],["stats","Club Vitals"],["nearly","Almost you"]].map(([id,label])=>(
                <button key={id} onClick={()=>setTab(id)}
                  style={{
                    background:"none",border:"none",
                    borderBottom:`2px solid ${tab===id?team.color:"transparent"}`,
                    padding:"8px 14px 10px",marginBottom:-1,whiteSpace:"nowrap",
                    color:tab===id?"#e8e4de":"#666",
                    fontSize:12,letterSpacing:"0.12em",textTransform:"uppercase",
                    fontFamily:"'DM Mono',monospace",cursor:"pointer",
                    transition:"all .15s ease",flexShrink:0,
                    fontWeight:tab===id?"500":"400",
                  }}
                >{label}</button>
              ))}
            </div>
              {/* Right-edge fade, indicates more tabs off-screen */}
              <div style={{
                position:"absolute",top:0,right:0,width:52,height:"calc(100% - 1px)",
                background:"linear-gradient(to right, transparent, #16161e)",
                pointerEvents:"none",
              }}/>
            </div>

            {/* ── Tab: Match ── */}
            {tab==="result"&&(
              <div style={{animation:"fadeIn .3s ease"}}>
                <div style={{width:28,height:2,background:team.color,marginBottom:18,borderRadius:2}}/>
                <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(19px,4vw,22px)",fontWeight:300,color:"#d8d4ce",lineHeight:1.85,margin:"0 0 20px",fontStyle:"italic"}}>{team.desc}</p>
                {team.note&&(<p style={{fontSize:14,color:"#bbb",lineHeight:1.75,margin:"0 0 24px",borderLeft:`1px solid #252535`,paddingLeft:14,fontFamily:"'DM Mono',monospace"}}>{team.note}</p>)}
                {/* Fandom vs FanDNA reframe (per 1b) */}
                <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(15px,3.4vw,18px)",fontStyle:"italic",color:"#9898b8",lineHeight:1.6,margin:"6px 0 22px"}}>This is your club by DNA. What you support on Saturdays is up to you.</p>
                {/* Share card */}
                <div style={{background:"#141420",border:"1px solid #222230",borderRadius:8,padding:"16px 18px",marginBottom:20,marginTop:8,borderTop:`2px solid ${team.color}20`}}>
                  <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:12}}>Share your genome</div>
                  <button
                    onClick={async()=>{
                      const noun=activeSport==="NFL"?"franchise":"club";
                      const caption=`Which ${noun} are you, really? Turns out I'm ${team.name}, ${archetypes[result]}. ${shareString}. Find yours: fandna.vercel.app`;
                      let blob=null;
                      try{blob=await generateShareCard(activeSport,result,genome);}catch(e){blob=null;}
                      if(blob&&navigator.canShare){
                        const file=new File([blob],`fandna-${result}.png`,{type:"image/png"});
                        if(navigator.canShare({files:[file]})){
                          try{await navigator.share({files:[file],text:caption});return;}
                          catch(e){if(e&&e.name==="AbortError")return;}
                        }
                      }
                      if(blob){
                        const url=URL.createObjectURL(blob);
                        const a=document.createElement("a");a.href=url;a.download=`fandna-${result}.png`;
                        document.body.appendChild(a);a.click();a.remove();
                        setTimeout(()=>URL.revokeObjectURL(url),1500);
                        navigator.clipboard?.writeText(caption).catch(()=>{});
                        return;
                      }
                      navigator.clipboard?.writeText(caption).then(()=>alert("Card couldn't render here. Caption copied.")).catch(()=>alert(caption));
                    }}
                    style={{
                      display:"inline-flex",alignItems:"center",gap:10,
                      background:`${team.color}22`,border:`1px solid ${team.color}55`,borderRadius:5,
                      padding:"12px 20px",color:"#e8e4de",fontSize:11,letterSpacing:"0.15em",
                      textTransform:"uppercase",fontFamily:"'DM Mono',monospace",cursor:"pointer",
                      transition:"all .15s ease",fontWeight:500,
                    }}
                    onMouseEnter={e=>{e.currentTarget.style.background=`${team.color}33`;}}
                    onMouseLeave={e=>{e.currentTarget.style.background=`${team.color}22`;}}
                  >🧬 Share card</button>
                  <div style={{fontSize:11,color:"#666",marginTop:10,fontFamily:"'DM Mono',monospace",letterSpacing:"0.05em"}}>Saves a card to share. On mobile, opens your share sheet.</div>
                </div>
                <div style={{display:"flex",gap:24,flexWrap:"wrap",marginTop:4}}>
                  {team.kit&&(<a href={team.kit} target="_blank" rel="noopener noreferrer"
                    style={{display:"inline-flex",alignItems:"center",gap:10,background:`${team.color}22`,border:`1px solid ${team.color}55`,borderRadius:5,padding:"12px 20px",color:"#e8e4de",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"all .15s ease",fontWeight:500}}>
                    <span style={{color:(teamTextColors[result]||team.color)}}>↗</span> Buy the kit
                  </a>)}
                  {squadUrls[result]&&(
                    <a href={squadUrls[result]} target="_blank" rel="noopener noreferrer"
                      style={{display:"inline-flex",alignItems:"center",gap:10,background:`${team.color}22`,border:`1px solid ${team.color}55`,borderRadius:5,padding:"12px 20px",color:"#e8e4de",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"all .15s ease",fontWeight:500}}>
                      <span style={{color:(teamTextColors[result]||team.color)}}>↗</span> View squad
                    </a>
                  )}
                </div>
              </div>
            )}
            {/* ── Tab: Analysis ── */}
            {tab==="analysis"&&(
              <div style={{animation:"fadeIn .3s ease"}}>
                <div style={{marginBottom:24}}>
                  <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:14}}>Why this match</div>
                  {team.why.map((line,i)=>(
                    <div key={i} style={{display:"flex",gap:12,marginBottom:14,alignItems:"flex-start"}}>
                      <span style={{color:(teamTextColors[result]||team.color),fontFamily:"'DM Mono',monospace",fontSize:10,marginTop:4,flexShrink:0}}>→</span>
                      <p style={{margin:0,fontSize:"clamp(16px,3.5vw,18px)",color:"#c8c4be",lineHeight:1.8}}>{line}</p>
                    </div>
                  ))}
                </div>
                <div style={{borderTop:"1px solid #0f0f1a",paddingTop:20}}>
                  <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:14}}>Personality dimensions</div>
                  <DimBars dims={D.teamDims[result]} color={team.color}/>
                </div>
                {/* ── CTAs ── */}
                <div style={{display:"flex",gap:24,flexWrap:"wrap",marginTop:24,paddingTop:20,borderTop:"1px solid #2a2a3a"}}>
                  {team.kit&&(<a href={team.kit} target="_blank" rel="noopener noreferrer"
                    style={{display:"inline-flex",alignItems:"center",gap:10,background:`${team.color}22`,border:`1px solid ${team.color}55`,borderRadius:5,padding:"12px 20px",color:"#e8e4de",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"all .15s ease",fontWeight:500}}>
                    <span style={{color:(teamTextColors[result]||team.color)}}>↗</span> Buy the kit
                  </a>)}
                  {squadUrls[result]&&(
                    <a href={squadUrls[result]} target="_blank" rel="noopener noreferrer"
                      style={{display:"inline-flex",alignItems:"center",gap:10,background:`${team.color}22`,border:`1px solid ${team.color}55`,borderRadius:5,padding:"12px 20px",color:"#e8e4de",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"all .15s ease",fontWeight:500}}>
                      <span style={{color:(teamTextColors[result]||team.color)}}>↗</span> View squad
                    </a>
                  )}
                </div>
              </div>
            )}
            {/* ── Tab: Club Stats ── */}
            {tab==="stats"&&(
              <div style={{animation:"fadeIn .3s ease"}}>
                <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:18}}>Club Info</div>
                {statsData.length>0?(
                  <>
                    <div style={{border:"1px solid #1e1e2e",borderRadius:8,overflow:"hidden",marginBottom:20}}>
                      <div style={{height:3,background:team.color}}/>
                      {statsData.map(([label,val],i)=>(
                        <div key={label} style={{
                          display:"flex",justifyContent:"space-between",alignItems:"center",
                          padding:"11px 16px",
                          borderBottom:i<statsData.length-1?"1px solid #0a0a14":"none",
                          background:i%2===0?"transparent":"#111120",
                        }}>
                          <span style={{fontSize:11,color:"#aaa",fontFamily:"'DM Mono',monospace",letterSpacing:"0.08em",textTransform:"uppercase"}}>{label}</span>
                          <span style={{fontSize:14,color:"#e8e4de",fontFamily:"'Cormorant Garamond',Georgia,serif",textAlign:"right",maxWidth:"55%"}}>{val}</span>
                        </div>
                      ))}
                    </div>
                    {/* All-time greats */}
                    {greats[result]&&(
                      <div style={{marginBottom:20}}>
                        <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:12,marginTop:20}}>All-time greats</div>
                        {greats[result].map((g,i)=>(
                          <div key={i} style={{padding:"10px 0",borderBottom:"1px solid #1e1e2e"}}>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                              <span style={{fontSize:16,color:"#e8e4de",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400}}>{g.name}</span>
                              <span style={{fontSize:10,color:(teamTextColors[result]||team.color),fontFamily:"'DM Mono',monospace"}}>{g.years}</span>
                            </div>
                            <p style={{margin:0,fontSize:13,color:"#bbb",lineHeight:1.65,fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>{g.note}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div style={{display:"flex",gap:24,flexWrap:"wrap",marginTop:8}}>
                      {team.kit&&(<a href={team.kit} target="_blank" rel="noopener noreferrer"
                        style={{display:"inline-flex",alignItems:"center",gap:10,background:`${team.color}22`,border:`1px solid ${team.color}55`,borderRadius:5,padding:"12px 20px",color:"#e8e4de",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"all .15s ease",fontWeight:500}}>
                        <span style={{color:(teamTextColors[result]||team.color)}}>↗</span> Buy the kit
                      </a>)}
                      {squadUrls[result]&&(
                        <a href={squadUrls[result]} target="_blank" rel="noopener noreferrer"
                          style={{display:"inline-flex",alignItems:"center",gap:10,background:`${team.color}22`,border:`1px solid ${team.color}55`,borderRadius:5,padding:"12px 20px",color:"#e8e4de",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"all .15s ease",fontWeight:500}}>
                          <span style={{color:(teamTextColors[result]||team.color)}}>↗</span> View squad
                        </a>
                      )}
                    </div>
                  </>
                ):(
                  <p style={{fontSize:13,color:"#aaa",fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>Stats not available for this club yet.</p>
                )}
              </div>
            )}

                        
            {/* ── Tab: Nearly Got ── */}
            {tab==="nearly"&&(
              <div style={{animation:"fadeIn .3s ease"}}>
                <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:6}}>Almost you...</div>
                <p style={{fontSize:13,color:"#aaa",margin:"0 0 20px",fontFamily:"'DM Mono',monospace",lineHeight:1.6}}>
                  These clubs scored closest to you. Here's what you share, and what separates you.
                </p>
                {nearClubs.length===0&&(
                  <p style={{fontSize:"clamp(15px,3.5vw,17px)",color:"#ccc",fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>
                    Your match was clear, no close runners-up.
                  </p>
                )}
                {nearClubs.map((k)=>{
                  const nt=teams[k];
                  if(!nt) return null;
                  const rawPct=maxScore>0?Math.min(99,Math.round(((scores||{})[k]||0)/maxScore*100)):0;
                  return(
                    <div key={k} style={{marginBottom:20,border:"1px solid #1e1e2e",borderRadius:8,overflow:"hidden"}}>
                      <div style={{height:2,background:nt.color}}/>
                      <div style={{padding:"14px 16px"}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                          <div style={{display:"flex",alignItems:"center",gap:10}}>
                            <BadgeImg url={badgeUrls[k]} emoji={nt.emoji} size={36}/>
                            <div>
                              <div style={{fontSize:15,color:"#ddd",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400}}>{nt.name}</div>
                              <div style={{fontSize:12,color:(teamTextColors[k]||nt.color),fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>{archetypes[k]||""}</div>
                            </div>
                          </div>
                          <div style={{textAlign:"right"}}>
                            <div style={{fontSize:18,color:"#ddd",fontFamily:"'DM Mono',monospace",fontWeight:300}}>{rawPct}%</div>
                            <div style={{fontSize:11,color:"#aaa",fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em"}}>of your score</div>
                          </div>
                        </div>
                        <div style={{height:2,background:"#141420",borderRadius:2,marginBottom:12,overflow:"hidden"}}>
                          <div style={{height:"100%",width:`${rawPct}%`,background:nt.color,borderRadius:2}}/>
                        </div>
                        {ng[k]?(
                          <p style={{margin:0,fontSize:"clamp(15px,3.5vw,17px)",color:"#ccc",lineHeight:1.8,fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>
                            {ng[k]}
                          </p>
                        ):(
                          <p style={{margin:0,fontSize:13,color:"#ccc",lineHeight:1.7,fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>
                            {nt.tagline}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            
            <div style={{marginTop:32,textAlign:"center",display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
              <button onClick={retakeModule}
                style={{background:"none",border:"1px solid #444",borderRadius:5,padding:"9px 22px",color:"#bbb",fontSize:11,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",cursor:"pointer",transition:"all .15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#888";e.currentTarget.style.color="#aaa";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#252535";e.currentTarget.style.color="#666";}}
              >retake {activeSport}</button>
              <button onClick={startOver}
                style={{background:"none",border:"1px solid #444",borderRadius:5,padding:"9px 22px",color:"#bbb",fontSize:11,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",cursor:"pointer",transition:"all .15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#888";e.currentTarget.style.color="#aaa";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#252535";e.currentTarget.style.color="#666";}}
              >start over</button>
            </div>

            {/* Support + feedback footer (off the newcomer's critical path) */}
            <div style={{marginTop:28,paddingTop:20,borderTop:"1px solid #1e1e2e",textAlign:"center"}}>
              <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:14,color:"#7a7a98",lineHeight:1.6,margin:"0 auto 14px",maxWidth:380}}>Built by one person and far too many spreadsheets. If this made you laugh, argue, or text a friend, you can buy me a pint.</p>
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
        )}
      </div>
    </div>
  );
}

export default function App(){
  return (<ErrorBoundary><AppInner/></ErrorBoundary>);
}
