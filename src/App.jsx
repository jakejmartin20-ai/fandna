import { useState, useEffect, useRef, useMemo, Component } from "react";
import { Analytics } from "@vercel/analytics/react";
import { track } from "@vercel/analytics";
import { coreQuestions, DIM_ORDER, DIM_LABELS } from "./data/core";
import { spineQuestions } from "./data/spine";
import { SPORT_DATA } from "./lib/sportData";
import { scoreCore, scoreModule, matchEvidence, decompressProfile } from "./lib/scoring";
import { loadState, saveResult, saveSpine, clearAll, appendPending, readPending, clearPending, markGroupEarned } from "./lib/storage";
import { newlyCompletedGroup, groupClubColors, allBucketsComplete, completedGroups } from "./lib/crest";
import { hasCompletedAll } from "./lib/beachGate";
import { pingResult } from "./lib/telemetry";
import { generateShareCard } from "./lib/card";
import { ChoiceQ, BinaryQ, SliderQ } from "./components/quiz";
import { ClubMark } from "./components/ClubMark";
import { DumpView } from "./components/DumpView";
import { GenomeHome } from "./screens/Genome";
import { coreBlocks, generateRead } from "./lib/genomeRead";

// Recompute every stored league from its saved module answers against a freshly
// scored core, writing the results back to storage. Returns what moved and which
// share-link leagues had no answers to re-read. Shared by the re-sequence button
// and the silent stale-core auto-heal on load. This runs the LIVE engine over
// already-stored answers, so it is a deterministic recompute, never a scoring change.
function recomputeAllFromCore(newCoreAnswers){
  const newCore = scoreCore(newCoreAnswers);
  const st = loadState();
  const spineAnswers = st.spineAnswers || {};
  const moved = []; const stale = [];
  for(const [sport,r] of Object.entries(st.results||{})){
    if(!r||!r.club) continue;
    const modAns = r.answers||{};
    // A spine-enabled league scored before the spine existed has no spineAnswers to re-read: keep its
    // club and flag it stale rather than mis-score it (same treatment as a share-link result).
    const usesSpine = !!(SPORT_DATA[sport] && SPORT_DATA[sport].spineScoring);
    if(Object.keys(modAns).length===0 || (usesSpine && Object.keys(spineAnswers).length===0)){
      stale.push(sport);
      saveResult(sport,{coreAnswers:newCoreAnswers,coreProfile:newCore,club:r.club,date:r.date});
      continue;
    }
    const { club:newClub, scores:ns } = scoreModule(sport,{coreProfile:newCore,coreAnswers:newCoreAnswers,moduleAnswers:modAns,spineAnswers});
    if(newClub!==r.club) moved.push({sport,from:r.club,to:newClub,scores:ns});
    saveResult(sport,{coreAnswers:newCoreAnswers,coreProfile:newCore,club:newClub,moduleAnswers:modAns,scores:ns,date:r.date});
  }
  return { newCore, moved, stale };
}
import { CoreStrip } from "./components/CoreStrip";
import { InstinctsLine } from "./components/InstinctsLine";
import { CoreReveal } from "./components/CoreReveal";
import { StageBar } from "./components/StageBar";
import { CrestEarn } from "./components/CrestEarn";
import { CrestFinale } from "./components/CrestFinale";
import { BeachWindow, BeachIndicator } from "./components/BeachEgg";
import { MatchEvidence } from "./components/MatchEvidence";
import { CrossMatch } from "./components/CrossMatch";
import { SPORTS, FAMILIES } from "./lib/manifest";
import { REGISTER, regOf } from "./lib/register";
import { Compare } from "./screens/Compare";
import { HowItWorks } from "./screens/HowItWorks";
import { encodeGenome, decodeCode } from "./lib/compareCode";

// Per-sport voice (noun, tail, cross-match labels) now lives in one shared source: ./lib/register.
// The result screen, the share card, and any future sport all read REGISTER/regOf from there, so
// the app and the card can never drift. Adding a sport is one row in register.js.

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

// CoreCompare - the "why you" readout on the result. It measures in ENGINE-SPACE: the user's
// core after decompressProfile() (the very same stretch the matcher applies) against the club's
// raw 0-10 teamDims, on one shared 0-10 axis per trait. That IS the quantity the engine minimised
// to pick this club, so "nearer dot = better-fitting trait" is true by construction.
//
// It used to z-normalise each profile WITHIN ITSELF, keeping shape and discarding magnitude. That
// asked a different question ("is this trait high FOR YOU and high FOR THE CLUB?") than the engine
// asked ("is your number close to the club's number?"). On traits whose population dial rests
// unusually low or high, the two answers came out BACKWARDS. Measured over 24,000 real takers:
// "Where you align" contained one of the two WORST-matching traits 75.5% of the time, and "Where
// you diverge" contained one of the two BEST-matching traits 58.7% of the time. Worked case: a
// taker matched to Genoa sat on chaos 6.0 against Genoa's 6 (the identical number) and was told
// chaos was where they part ways. Engine-space cannot produce that: the rows ARE the gaps.
//
// Note there is no clamping here and none is possible: both dots live in a bounded 0-10 space, so
// nothing can pin to an edge and the drawn gap is always the real gap. The user's dots are NOT a
// self-ranking any more (each row is its own trait scale, and a 7 in chaos is extraordinary while
// a 7 in loyalty is average) - the genome read on the home screen owns that job, on population z.
// Display-only: never read by the scoring path.
function CoreCompare({ core, club, clubName="the club", accent="#b8567a", leagueIn="the league", noun="club", edge={}, matrixDecided=false }){
  if(!core || !club) return null;
  const YOU="#e8e4de";
  const you=decompressProfile(core);
  const rows=DIM_ORDER.map(k=>({ k, label:DIM_LABELS[k],
    you:+you[k]||0, them:+club[k]||0, dz:Math.abs((+you[k]||0)-(+club[k]||0)) }));
  // Same cut rule as before, now applied to the REAL per-trait gap: order by gap, cut at the
  // widest natural break that keeps 3-5 traits in "align" (so both groups fill).
  const byAgree=[...rows].sort((a,b)=>a.dz-b.dz);
  let cut=5, best=-1;
  for(const c of [3,4,5]){ const g=byAgree[c].dz-byAgree[c-1].dz; if(g>best){ best=g; cut=c; } }
  const align  = byAgree.slice(0,cut);
  const diverge= byAgree.slice(cut).sort((a,b)=>b.dz-a.dz);

  // The shared axis IS the clubs' own 0-10 trait scale. Fixed by definition; no real value can
  // leave it, so unlike the old z-axis it needs no pad, no minimum span and no clamp.
  const xp=(v)=>3 + (Math.max(0,Math.min(10,+v||0))/10)*94;

  const Row=({r})=>(
    <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0"}}>
      <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:16,color:"#d8d4ce",width:112,flexShrink:0}}>{r.label}</span>
      <div style={{position:"relative",flex:1,height:16}}>
        <div style={{position:"absolute",top:7,left:0,right:0,height:2,background:"#1c1c28",borderRadius:2}}/>
        <span style={{position:"absolute",top:2,left:`${xp(r.them)}%`,transform:"translateX(-50%)",width:12,height:12,borderRadius:"50%",background:accent,boxShadow:`0 0 6px ${accent}88`}}/>
        {/* The you-ring is TRANSPARENT on purpose. An opaque fill painted over the club dot whenever
            the two coincided, so a PERFECT match on a trait rendered as a MISSING club dot: the chart
            deleted its own best evidence. Hollow, the club dot shows through the ring, and "your ring
            sitting around their dot" reads as exactly what it is. */}
        <span style={{position:"absolute",top:0,left:`${xp(r.you)}%`,transform:"translateX(-50%)",width:16,height:16,borderRadius:"50%",background:"transparent",border:`2px solid ${YOU}`,boxSizing:"border-box"}}/>
      </div>
    </div>
  );

  const human=(arr)=>{ const ls=arr.map(r=>r.label.toLowerCase());
    if(ls.length<=1) return ls[0]||"the core traits";
    if(ls.length===2) return `${ls[0]} and ${ls[1]}`;
    return `${ls.slice(0,-1).join(", ")} and ${ls[ls.length-1]}`; };
  const alignList=human(align.slice(0,3));
  const divUp=diverge.filter(r=>r.them>r.you);
  const d0=divUp[0]||diverge[0];
  // The verb has to key off the club's ABSOLUTE level, not just the direction of the gap. In
  // engine-space a stretched taker can land at 1.5 on ambition, and a club on 3 is then "higher"
  // than them - but a club on 3 does not "lean into ambition far more than you do". The `edge`
  // phrases are authored to describe the club's own STANCE on a trait (high ones are proud, low
  // ones are content: "modest by choice", "calm rather than dramatic"), so one only reads right
  // when the club genuinely sits at that end. Every edge phrase in the six live leagues sits on a
  // dim of >=6 or <=4 or exactly 5; the 5s are ambiguous, so they attach nothing.
  const up  = d0 ? d0.them>d0.you : false;
  const lbl = d0 ? d0.label.toLowerCase() : "";
  const strongUp   = d0 ? ( up && d0.them>=6) : false;
  const strongDown = d0 ? (!up && d0.them<=4) : false;
  const edgeClause = (d0 && (strongUp||strongDown) && edge && edge[d0.k]) ? `, ${edge[d0.k]}` : "";
  const partWays = strongUp   ? `it leans into ${lbl} far more than you do`
                 : up         ? `it carries more ${lbl} than you do, though neither of you leans on it`
                 : strongDown ? `it plays down ${lbl} more than you do`
                 :              `it carries less ${lbl} than you do`;
  const explainer = matrixDecided
    ? (d0
      ? `No ${noun} in ${leagueIn} is an exact copy of you. This is how you and ${clubName} line up across the seven traits: you match on ${alignList}, and where you part ways ${partWays}${edgeClause}. Your ${noun} comes from your full set of answers, these traits among them.`
      : `You and ${clubName} land on the same number across all seven traits. Your ${noun} comes from your full set of answers, these traits among them.`)
    : (d0
      ? `No ${noun} in ${leagueIn} is an exact copy of you. ${clubName} is the closest fit across all seven traits at once. You line up on ${alignList}, and where you part ways ${partWays}${edgeClause}. The match is all seven together, not any single line.`
      : `You and ${clubName} land on the same number across all seven. That is an unusually clean match: no single trait pulls against it.`);

  const H=(t)=>(<div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",color:"#8484b0",margin:"0 0 4px"}}>{t}</div>);
  const axis=(<div style={{display:"flex",alignItems:"center",gap:12,margin:"0 0 2px"}}>
      <span style={{width:112,flexShrink:0}}/>
      <div style={{flex:1,display:"flex",justifyContent:"space-between",fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:"0.08em",color:"#7e7e9f"}}><span>0</span><span>10</span></div>
    </div>);

  return (
    <div>
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.22em",textTransform:"uppercase",color:"#9696b4",marginBottom:6}}>Your core vs {clubName}</div>
      <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:15,fontStyle:"italic",color:"#8a8ab0",marginBottom:12}}>{matrixDecided ? `how you and ${clubName} line up on the seven traits` : "the seven traits that decided it"}</div>
      <div style={{display:"flex",gap:18,fontFamily:"'DM Mono',monospace",fontSize:10,color:"#9696b4",marginBottom:14}}>
        <span><i style={{display:"inline-block",width:11,height:11,borderRadius:"50%",background:"#12121c",border:`2px solid ${YOU}`,marginRight:6,verticalAlign:"-2px"}}/>you</span>
        <span><i style={{display:"inline-block",width:11,height:11,borderRadius:"50%",background:accent,marginRight:6,verticalAlign:"-2px"}}/>{clubName}</span>
      </div>

      {align.length>0&&(<div style={{marginBottom:diverge.length?18:6}}>
        {H("Where you align")}
        {axis}
        {align.map(r=>(<Row key={r.k} r={r}/>))}
      </div>)}

      {diverge.length>0&&(<div>
        {H("Where you diverge")}
        {diverge.map(r=>(<Row key={r.k} r={r}/>))}
      </div>)}

      <div style={{borderTop:`1px solid ${accent}`,margin:"22px 0 0"}}/>
      <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(16px,3.5vw,18px)",fontStyle:"italic",color:"#9a9ac4",lineHeight:1.6,margin:"16px 0 0"}}>{explainer}</p>
    </div>
  );
}

// ChapterHead - a prominent section divider for the single-scroll result. Replaces the old tab
// labels: a numbered eyebrow + team-colour rule + big serif title, so every section announces
// itself as you scroll and nothing hides behind a control. Display-only. No em dashes.
function ChapterHead({ n, title, sub, color="#b8567a", textColor="#b8567a", first=false }){
  return (
    <div style={{margin: first ? "0 0 22px" : "52px 0 22px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
        <span style={{fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:"0.14em",color:textColor,flexShrink:0}}>{n} / 04</span>
        <span style={{flex:1,height:1,background:"#242438"}}/>
      </div>
      <div style={{width:44,height:3,background:color,borderRadius:2,marginBottom:12}}/>
      <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(30px,8vw,38px)",fontWeight:400,color:"#efe9e3",letterSpacing:"-0.01em",lineHeight:1.02,margin:0}}>{title}</h2>
      <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:15,fontStyle:"italic",color:"#9a9ac4",margin:"6px 0 0"}}>{sub}</div>
    </div>
  );
}

function AppInner(){
  const [cur,setCur]=useState(0);
  const [answers,setAnswers]=useState({});
  const [scores,setScores]=useState(null);
  const [result,setResult]=useState(null);
  const [evidence,setEvidence]=useState(null); // match evidence (stability + tips) for the current result
  const [evidenceInput,setEvidenceInput]=useState(null); // {coreAnswers,moduleAnswers} for the cross-match compare
  const [phase,setPhase]=useState("in");
  const [tab,setTab]=useState("result");
  const [mode,setMode]=useState("full");        // "full" = core+module ; "module" = league module only ; "core" = re-sequence the shared core
  const [savedCore,setSavedCore]=useState(null); // cached {coreAnswers,coreProfile} for module-only retakes
  const [savedSpine,setSavedSpine]=useState(null); // cached shared-spine answers {S1..S7}, answered once
  const [resequenceConfirm,setResequenceConfirm]=useState(false); // the "re-sequence core?" confirm modal
  const [exitConfirm,setExitConfirm]=useState(false); // leave-the-quiz confirm (in-app, s58)
  const [resequenceDelta,setResequenceDelta]=useState(null);      // {moved:[{sport,from,to}],stale:[...]} shown once after a re-sequence
  const [coreProfile,setCoreProfile]=useState(null); // the user's 7-dim core; drives the strip everywhere
  const [landed,setLanded]=useState(true);        // result reveal: club-card head hidden until the strip has read, then lands (finish path only)
  const [revealSeq,setRevealSeq]=useState(false); // true only when arriving at a result straight from finishing the quiz
  const [screen,setScreen]=useState("home");     // "home" | "quiz" | "result" | "compare" | "how" - the genome home is the landing page
  const [showTop,setShowTop]=useState(false);   // back-to-top affordance on the long single-scroll result (display-only)
  const [howFrom,setHowFrom]=useState("home");   // which screen the explainer was opened from, so Back returns there
  const [genome,setGenome]=useState({});         // saved results map { PL:{club} } - drives the home strands + share string
  const [earnFamily,setEarnFamily]=useState(null); // the bucket that just completed, driving the crest earn moment (null = none)
  const [earnReduced,setEarnReduced]=useState(false); // prefers-reduced-motion at the moment it fired
  const [finaleOn,setFinaleOn]=useState(false);   // collection-complete finale (all three buckets whole)
  const [finaleReduced,setFinaleReduced]=useState(false);
  const [beachOn,setBeachOn]=useState(false);       // the Pro Beach Hockey bonus window (floating, non-blocking)
  const [beachReduced,setBeachReduced]=useState(false);
  const [beachSeen,setBeachSeen]=useState(()=>{ try{ return loadState().earnedGroups.includes("beach_seen"); }catch(e){ return false; } }); // watched the reveal to the end?
  const [pendingAdvance,setPendingAdvance]=useState(null); // question index to resume at after the core reveal
  const [coreRevealSeen,setCoreRevealSeen]=useState(false); // the first-full-take type reveal fires once per run
  const [activeSport,setActiveSport]=useState("PL"); // which sport's quiz/result/card is in play
  const [compareFriend,setCompareFriend]=useState(null);  // decoded friend genome for the /c/ compare route
  const [pendingCompare,setPendingCompare]=useState(null); // friend genome held while a recruit takes the quiz
  const containerRef=useRef(null);

  // NFL/MLB ship behind live:false. Hidden ?nfl=1 / ?mlb=1 in the URL unlock the strand on
  // preview (tappable, takeable) while the public still sees "coming soon". Nothing else changes.
  const nflUnlocked = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("nfl");
  const mlbUnlocked = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("mlb");
  const nbaUnlocked = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("nba");
  const blUnlocked  = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("bl");
  const llUnlocked  = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("ll");
  const l1Unlocked  = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("l1");
  const saUnlocked  = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("sa");
  const cfbUnlocked = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("cfb");
  const nhlUnlocked = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("nhl");
  const f1Unlocked  = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("f1");
  const aflUnlocked = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("afl");
  const iplUnlocked = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("ipl");
  const top14Unlocked = typeof window!=="undefined" && new URLSearchParams(window.location.search).has("top14");
  const sportsList = SPORTS.map(s=>
    s.code==="NFL" ? {...s, live: s.live||nflUnlocked} :
    s.code==="MLB" ? {...s, live: s.live||mlbUnlocked} :
    s.code==="NBA" ? {...s, live: s.live||nbaUnlocked} :
    s.code==="BL"  ? {...s, live: s.live||blUnlocked} :
    s.code==="LL"  ? {...s, live: s.live||llUnlocked} :
    s.code==="L1"  ? {...s, live: s.live||l1Unlocked} :
    s.code==="SA"  ? {...s, live: s.live||saUnlocked} :
    s.code==="CFB" ? {...s, live: s.live||cfbUnlocked} :
    s.code==="NHL" ? {...s, live: s.live||nhlUnlocked} :
    s.code==="F1"  ? {...s, live: s.live||f1Unlocked} :
    s.code==="AFL" ? {...s, live: s.live||aflUnlocked} :
    s.code==="IPL" ? {...s, live: s.live||iplUnlocked} :
    s.code==="TOP14" ? {...s, live: s.live||top14Unlocked} : s);

  // Active sport's data, bound to the same names the screens already use, so the result
  // screen and quiz read the right sport with no other changes. PL behaves exactly as before.
  const D = SPORT_DATA[activeSport] || SPORT_DATA.PL;
  const moduleQuestions = D.moduleQuestions;
  // Does this sport read the shared cross-sport spine? (Option B leagues export spineScoring.)
  const usesSpine = !!D.spineScoring;
  const teams = D.teams, archetypes = D.archetypes, teamTextColors = D.teamTextColors;
  const greats = D.greats, vitalStats = D.vitalStats; // nearlyGot retired from the result screen (chapter 04 is THE READOUT)
  const squadUrls = D.squadUrls;
  const milestones = D.milestones || {};

  // The active question run. First time: 24 core + 14 PL module = 38, in the v1 order.
  // Module-only retake: just the 14 PL questions (the core is already sequenced).
  // The 7 shared-spine questions are answered ONCE (like the core). They join the run only when this
  // sport uses the spine AND it hasn't been answered yet. First play: core + spine + module. A later
  // spine-league when the spine is already cached: module only. Live (non-spine) sports are unchanged.
  const needSpine = !savedSpine; // ask the shared spine on ANY first-ever run - even a bespoke (off-spine) league like PL/NFL/CFB - so every taker builds a spine profile and the home instincts line fills in
  const sequence=useMemo(
    ()=> mode==="core" ? coreQuestions
       : mode==="spine" ? spineQuestions
       : mode==="module" ? (needSpine ? [...spineQuestions, ...moduleQuestions] : moduleQuestions)
       : [...coreQuestions, ...(needSpine ? spineQuestions : []), ...moduleQuestions],
    [mode,activeSport,needSpine]
  );
  const coreIds=useMemo(()=>new Set(coreQuestions.map(p=>p.id)),[]);
  const spineIds=useMemo(()=>new Set(spineQuestions.map(p=>p.id)),[]);
  // Which phases belong to the shared core (vs a league module). Data-derived, so the
  // progress bar can colour + group core-purple then league-gold in any mode.
  // The spine chapter ("Your instincts") colours with the genome ("Your core"), not a league.
  const CORE_PHASES=useMemo(()=>new Set([...coreQuestions.map(p=>p.phase), ...spineQuestions.map(p=>p.phase)]),[]);

  const q=sequence[cur];
  const pct=Math.round((cur/sequence.length)*100);
  const currentPhase=q?.phase;

  // Phase tracker: frames the quiz as short chapters.
  const phaseOrder=[...new Set(sequence.map(p=>p.phase))];
  const phaseIdx=phaseOrder.indexOf(currentPhase);
  const phaseStart=sequence.findIndex(p=>p.phase===currentPhase);
  const phaseLen=sequence.filter(p=>p.phase===currentPhase).length;
  const coreInSeq=phaseOrder.filter(p=>CORE_PHASES.has(p)).length; // core segments in this run
  const modInSeq=phaseOrder.length-coreInSeq;                       // league segments in this run
  const seqLeagueName=(SPORTS.find(s=>s.code===activeSport)||{}).name||"Premier League";

  // Named stage model for the progress bar (StageBar): Core / Instincts / <League>, each sized by
  // how many questions it holds in THIS run, so a first full take reads as three clear stages. A
  // module-only retake shows just the league stage; a core or instincts re-sequence shows just its
  // one stage. The live stage is "active" (glows + a leading dot); passed stages are "done". Progress-only.
  const quizStages=useMemo(()=>{
    const coreLen  = sequence.filter(x=>coreIds.has(x.id)).length;
    const spineLen = sequence.filter(x=>spineIds.has(x.id)).length;
    const modLen   = sequence.length - coreLen - spineLen;
    const out=[]; let start=0;
    const mk=(key,label,color,labelColor,len)=>{
      if(len<=0) return;
      const done=cur>=start+len, active=cur>=start&&cur<start+len;
      const frac=done?1:active?Math.max(0,Math.min(1,(cur-start+1)/len)):0;
      out.push({key,label,color,labelColor,len,frac,state:done?"done":active?"active":"upcoming"});
      start+=len;
    };
    mk("core","Core","#7f7fb0","#9a9acc",coreLen);
    mk("spine","Instincts","#7f7fb0","#9a9acc",spineLen);
    mk("mod",seqLeagueName,"#c9b27a","#c9b27a",modLen);
    return out;
  },[sequence,cur,seqLeagueName,coreIds,spineIds]);

  // Per-stage count (Baymard chunking): count WITHIN the active stage, not the flat total, so a
  // long first take reads as three short, finishable parts (Core / Instincts / Sport) and the
  // denominator resets at each new part instead of ever showing "of 35". Progress-only.
  const stageCoreLen  = sequence.filter(x=>coreIds.has(x.id)).length;
  const stageSpineLen = sequence.filter(x=>spineIds.has(x.id)).length;
  let stageLabel, stageIdx, stageTotal;
  if(cur < stageCoreLen){ stageLabel="Core"; stageIdx=cur+1; stageTotal=stageCoreLen; }
  else if(cur < stageCoreLen+stageSpineLen){ stageLabel="Instincts"; stageIdx=cur-stageCoreLen+1; stageTotal=stageSpineLen; }
  else { stageLabel=seqLeagueName; stageIdx=cur-stageCoreLen-stageSpineLen+1; stageTotal=Math.max(1,sequence.length-stageCoreLen-stageSpineLen); }

  // Resume a previously completed PL genome. The result is PRELOADED so the completed
  // strand on the home screen is tappable straight to it, but we stay on the home screen
  // (the landing page) rather than jumping into the result. First-timers are unaffected.
  useEffect(()=>{
    let st=loadState();
    // On every return, re-run the live engine over the stored answers so every result
    // tracks the current engine, and surface any team that moved (once) via the delta
    // banner. Deterministic recompute, never a scoring change; the core is re-derived too,
    // so a core-scoring change still heals here as it always did. Healed results re-ping
    // telemetry (flagged as a retake) so live counts follow the current engine.
    if(st.coreAnswers){
      const { newCore, moved, stale } = recomputeAllFromCore(st.coreAnswers);
      if(moved.length){
        appendPending(moved);
        moved.forEach(m=>pingResult({sport:m.sport,club:m.to,scores:m.scores,coreProfile:newCore,coreAnswers:st.coreAnswers,retake:true}));
        track("results_healed",{moved:moved.length,stale:stale.length});
      }
      st=loadState();
    }
    const pend=readPending();
    if(pend.length) setResequenceDelta({moved:pend,stale:[],reason:"heal"});
    setGenome(st.results||{});
    setCoreProfile(st.coreProfile||null);
    setSavedSpine(st.spineAnswers||null);   // so a later spine-league skips the already-answered spine
    if(st.results&&st.results.PL&&st.results.PL.club){
      setSavedCore({coreAnswers:st.coreAnswers,coreProfile:st.coreProfile});
      setScores(st.results.PL.scores||null);
      setResult(st.results.PL.club);
      setEvidence(matchEvidence("PL",{coreAnswers:st.coreAnswers||{},moduleAnswers:st.results.PL.answers||{},coreProfile:st.coreProfile||null}));
      setEvidenceInput({coreAnswers:st.coreAnswers||{},moduleAnswers:st.results.PL.answers||{},coreProfile:st.coreProfile||null});
    }
  },[]);

  // On load, a /c/<code> link carries a friend's packed genome. Decode it and route to Compare;
  // recruit / self / broken are all decided inside the Compare screen from this plus storage.
  useEffect(()=>{
    if(typeof window==="undefined") return;
    const m=window.location.pathname.match(/^\/c\/(.+)$/);
    if(!m) return;
    let code=m[1];
    try{ code=decodeURIComponent(code); }catch(e){}
    setCompareFriend(decodeCode(code));
    setScreen("compare");
  },[]);

  // On load, /how opens the explainer directly (so it can be linked to from anywhere).
  useEffect(()=>{
    if(typeof window==="undefined") return;
    if(window.location.pathname.replace(/\/+$/,"")==="/how"){ setHowFrom("home"); setScreen("how"); }
  },[]);

  // The explainer is the only screen with its own address, so it is the only one that touches
  // history. Opening it pushes /how; Back (button or browser) returns to wherever we came from.
  useEffect(()=>{
    if(typeof window==="undefined") return;
    const onPop=()=>{ setScreen(s=>s==="how"?howFrom:s); };
    window.addEventListener("popstate",onPop);
    return ()=>window.removeEventListener("popstate",onPop);
  },[howFrom]);

  function openHow(){
    setHowFrom(screen==="how"?howFrom:screen);
    try{ if(window.location.pathname!=="/how") window.history.pushState({fdna:"how"},"","/how"); }catch(e){}
    setScreen("how");
    try{ window.scrollTo(0,0); }catch(e){}
  }
  function goHomeFromHow(){
    try{ if(window.location.pathname.replace(/\/+$/,"")==="/how") window.history.pushState({},"","/"); }catch(e){}
    setScreen("home"); setPhase("in");
    try{ window.scrollTo(0,0); }catch(e){}
  }
  function closeHow(){
    try{ if(window.location.pathname.replace(/\/+$/,"")==="/how") window.history.pushState({},"","/"); }catch(e){}
    setScreen(howFrom);
    try{ window.scrollTo(0,0); }catch(e){}
  }

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

  // Back-to-top: show a jump-to-top button once the reader is well down a long single-scroll
  // page - the result AND the continuous-scroll genome home (s58).
  useEffect(()=>{
    if(screen!=="result"&&screen!=="home"){ setShowTop(false); return; }
    const onScroll=()=>setShowTop(window.scrollY>640);
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[screen]);

  function handleSelect(val){
    const na={...answers,[q.id]:val};
    setAnswers(na);
    if(Object.keys(answers).length===0) track("quiz_started");
    if(cur+1<sequence.length){
      const nextPhase=sequence[cur+1].phase;
      // First full take only: at the seam where the about-you questions (core + instincts) give
      // way to the sport module, pause on a reveal of the taker's core "type" before the sport
      // begins - so the three-part test stops feeling hidden. Fires once per run; a later league
      // reuses the cached core (mode "module") and never reaches this branch. Display-only.
      const crossingToSport = CORE_PHASES.has(q.phase) && !CORE_PHASES.has(nextPhase);
      if(mode==="full" && crossingToSport && !coreRevealSeen){
        const coreAnswersSoFar = Object.fromEntries(Object.entries(na).filter(([k])=>coreIds.has(k)));
        setCoreProfile(scoreCore(coreAnswersSoFar));
        setPendingAdvance(cur+1);
        setCoreRevealSeen(true);
        track("core_reveal_shown");
        setPhase("out");
        setTimeout(()=>{ setScreen("reveal"); setPhase("in"); try{ window.scrollTo(0,0); }catch(e){} },220);
        return;
      }
      if(nextPhase!==q.phase) track("quiz_phase",{phase:nextPhase});
      setPhase("out");
      setTimeout(()=>{setCur(c=>c+1);setPhase("in");},220);
    } else if(mode==="core"){
      // Re-sequence: the 24 core answers ARE the whole run. Recompute every taken league
      // from its stored module answers against the new core, through the same engine, so a
      // club only moves if the new core honestly lands somewhere else. A league restored
      // from a share link has no stored answers to re-read, so we keep its club and flag it.
      const newCoreAnswers=na;
      const { newCore, moved, stale } = recomputeAllFromCore(newCoreAnswers);
      const stg=loadState();
      setCoreProfile(newCore);
      setGenome(stg.results||{});
      setResequenceDelta({moved,stale});
      track("core_resequenced",{moved:moved.length,stale:stale.length});
      setMode("full");
      setPhase("out");
      setTimeout(()=>{
        setCur(0);setAnswers({});setResult(null);setScores(null);setTab("result");
        setScreen("home");setPhase("in");
      },160);
    } else if(mode==="spine"){
      // Re-take the shared instincts: the 7 spine answers ARE the whole run. Save them, then
      // recompute every taken league from its stored module answers against the NEW spine and the
      // unchanged core, through the same engine, so a club only moves if the new instincts honestly
      // land it elsewhere. A league restored from a share link has no stored answers to re-read, so
      // we keep its club and flag it (same treatment as the core re-sequence).
      const newSpine=Object.fromEntries(Object.entries(na).filter(([k])=>spineIds.has(k)));
      saveSpine(newSpine);                       // persist the new spine BEFORE recompute reads it
      setSavedSpine(newSpine);
      const st0=loadState();
      const { newCore, moved, stale } = recomputeAllFromCore(st0.coreAnswers||{});
      const stg=loadState();
      setCoreProfile(newCore);
      setGenome(stg.results||{});
      setResequenceDelta({moved,stale});
      track("instincts_resequenced",{moved:moved.length,stale:stale.length});
      setMode("full");
      setPhase("out");
      setTimeout(()=>{
        setCur(0);setAnswers({});setResult(null);setScores(null);setTab("result");
        setScreen("home");setPhase("in");
      },160);
    } else {
      // Two-stage scoring. Split the answers into the shared core and the PL module.
      // On a module-only retake the core comes from the already-saved genome.
      const coreAnswers = mode==="module"
        ? (savedCore?savedCore.coreAnswers:{})
        : Object.fromEntries(Object.entries(na).filter(([k])=>coreIds.has(k)));
      // Shared-spine answers: from THIS run if it included the spine, else the cached copy.
      const spineFromRun = Object.fromEntries(Object.entries(na).filter(([k])=>spineIds.has(k)));
      const spineAnswers = Object.keys(spineFromRun).length ? spineFromRun : (savedSpine || {});
      // League-unique module answers = everything that is neither core nor spine.
      const moduleAnswers = Object.fromEntries(Object.entries(na).filter(([k])=>!coreIds.has(k) && !spineIds.has(k)));
      const coreProfile = (mode==="module" && savedCore && savedCore.coreProfile)
        ? savedCore.coreProfile
        : scoreCore(coreAnswers);
      // PL reproduces the exact v1 assignment (full matrix + tie-break); fingerprint sports use the
      // fingerprint-plus-module path, now also folding the shared-spine answers. scoreModule routes on the sport.
      const { club, scores:s } = scoreModule(activeSport, { coreProfile, coreAnswers, moduleAnswers, spineAnswers });
      setScores(s);
      setCoreProfile(coreProfile);
      setResult(club);
      if(Object.keys(spineAnswers).length) setSavedSpine(spineAnswers); // cache the spine whenever it was collected, even after a bespoke-league (PL/NFL/CFB) first run
      setEvidence(matchEvidence(activeSport,{coreAnswers,moduleAnswers,coreProfile,spineAnswers}));
      setEvidenceInput({coreAnswers,moduleAnswers,coreProfile,spineAnswers});
      { const rm = typeof window!=="undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; setRevealSeq(!rm); setLanded(rm); }
      setScreen("result");
      try{ window.scrollTo(0,0); }catch(e){}
      setGenome(g=>({...g,[activeSport]:{club}}));
      track("quiz_completed",{sport:activeSport,club});
      pingResult({sport:activeSport,club,scores:s,coreProfile,coreAnswers,retake:!!(genome[activeSport]&&genome[activeSport].club)});
      saveResult(activeSport,{coreAnswers,coreProfile,spineAnswers,club,moduleAnswers,scores:s});
      // Did this club complete a bucket? Record it. If it also completed the whole collection,
      // fire the finale (once) instead of a single-bucket earn moment.
      try{
        const stNow=loadState();
        const fam=newlyCompletedGroup(stNow.results, stNow.earnedGroups);
        if(fam) markGroupEarned(fam.id);
        const st2=loadState();
        const rm=!!(typeof window!=="undefined"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);
        if(allBucketsComplete(st2.results) && !st2.earnedGroups.includes("genome")){
          markGroupEarned("genome"); setFinaleReduced(rm); setFinaleOn(true); track("collection_complete",{});
        } else if(fam){
          setEarnReduced(rm); setEarnFamily(fam); track("crest_earned",{group:fam.id});
        }
      }catch(e){}
      if(pendingCompare){ setCompareFriend(pendingCompare); setPendingCompare(null); setScreen("compare"); }
    }
  }

  function goBack(){
    if(cur===0) return;
    setPhase("out");
    setTimeout(()=>{setCur(c=>c-1);setPhase("in");},220);
  }

  // Leave the core reveal and resume the run at the first sport-module question.
  function continueFromReveal(){
    const to = (pendingAdvance!=null) ? pendingAdvance : cur;
    track("core_reveal_continued");
    setPhase("out");
    setTimeout(()=>{
      setCur(to); setPendingAdvance(null);
      setScreen("quiz"); setPhase("in");
      try{ window.scrollTo(0,0); }catch(e){}
    },160);
  }

  function startOver(){
    clearAll();
    setMode("full");setSavedCore(null);setGenome({});setCoreProfile(null);setEvidence(null);setEvidenceInput(null);
    setEarnFamily(null);setFinaleOn(false);setBeachOn(false);setBeachSeen(false);
    setPendingAdvance(null);setCoreRevealSeen(false);
    setPhase("out");
    setTimeout(()=>{
      setCur(0);setAnswers({});setScores(null);setResult(null);setTab("result");
      setScreen("home");setPhase("in");
    },160);
  }
  // Re-open an already-earned bucket crest from the home tick. Reuses the earn overlay (display-only).
  function openCrest(fam){
    if(!fam) return;
    setEarnReduced(!!(typeof window!=="undefined"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches));
    setEarnFamily(fam);
  }
  // Re-open the collection-complete finale from the quiet home line.
  function openFinale(){
    setFinaleReduced(!!(typeof window!=="undefined"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches));
    setFinaleOn(true);
  }
  // Replay / open the Pro Beach Hockey bonus window (from the corner indicator or the home card).
  function openBeach(){
    setBeachReduced(!!(typeof window!=="undefined"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches));
    setBeachOn(true);
  }
  // Marked once the reveal has actually played to the team: the corner indicator retires and the
  // home card settles into its calm relive state. Fire-once via earnedGroups (no new storage code).
  function markBeachSeen(){ if(!beachSeen){ markGroupEarned("beach_seen"); setBeachSeen(true); } }
  // Hidden preview trigger (?beach), like ?nhl / ?nba / ?afl: lets Jake and Mark pull up the actual
  // window on demand off their current core, with no fifteen-league gate. Invisible to real users.
  useEffect(()=>{
    if(typeof window==="undefined") return;
    if(/[?&]beach\b/.test(window.location.search)) openBeach();
  }, []);
  // Restore a saved genome from a share code: the link IS the backup. Rebuilds local storage by
  // replaying the packed {core + club-per-sport} through saveResult (no new storage code), then
  // hydrates state. A restored sport's result-screen match evidence is thinner (the code carries
  // the genome, not the original answer sheet); openResult already reads scores null-safe.
  function restoreGenome(g){
    if(!g || g.future || !g.coreProfile) return false;
    const entries=Object.entries(g.results||{}).filter(([,r])=>r&&r.club);
    if(entries.length===0) return false;
    entries.forEach(([sport,r])=>{ saveResult(sport,{coreProfile:g.coreProfile,club:r.club}); });
    const st=loadState();
    setSavedCore(null);setGenome(st.results||{});setCoreProfile(st.coreProfile||null);
    return true;
  }
  // From the compare-recruit screen (opened your own link on a new device): adopt it and land home.
  function restoreFromCompare(){
    if(!restoreGenome(compareFriend)) return false;
    setPhase("out");
    setTimeout(()=>{ setResult(null);setScores(null);setTab("result");setScreen("home");setPhase("in"); },160);
    return true;
  }
  // From the cold home: parse a pasted link (or bare code) and restore in place. false on a bad link.
  function restoreFromText(text){
    const s=String(text||"").trim();
    if(!s) return false;
    const m=s.match(/\/c\/([A-Za-z0-9\-_]+)/);
    const code=m?m[1]:s.replace(/^.*\//,"");
    return restoreGenome(decodeCode(code));
  }
  // Redo just the PL module; keep the already-sequenced core. Falls back to a full
  // run if no saved core exists (e.g. a genome saved before this version).
  function retakeModule(){
    const st=loadState();
    if(!st.coreAnswers){ startOver(); return; }
    setSavedCore({coreAnswers:st.coreAnswers,coreProfile:st.coreProfile});
    setSavedSpine(st.spineAnswers||null);   // keep the shared spine; a module retake never re-asks it
    setMode("module");
    setPhase("out");
    setTimeout(()=>{
      setCur(0);setAnswers({});setScores(null);setResult(null);setTab("result");
      setScreen("quiz");setPhase("in");
    },160);
  }
  // Re-sequence the shared core: re-answer the 24 about-you questions. On finish, every taken
  // league recomputes from its saved answers against the new core (see the mode==="core" branch).
  function resequenceCore(){
    setResequenceConfirm(false);
    setResequenceDelta(null);
    setSavedCore(null);
    setMode("core");
    setPhase("out");
    setTimeout(()=>{
      setCur(0);setAnswers({});setScores(null);setResult(null);setTab("result");
      setScreen("quiz");setPhase("in");
    },160);
  }
  // Re-take the shared instincts: re-answer the 7 spine calls. On finish, every taken league
  // recomputes from its saved answers against the new instincts (see the mode==="spine" branch).
  // Requires an already-sequenced core (the spine only exists alongside one); with no core we fall
  // back to a full first run rather than re-take instincts in isolation.
  function retakeInstincts(){
    const st=loadState();
    if(!st.coreAnswers){ startOver(); return; }
    setSavedCore({coreAnswers:st.coreAnswers,coreProfile:st.coreProfile});
    setResequenceDelta(null);
    setMode("spine");
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
    setResult(null); setScores(null); setEvidence(null); setEvidenceInput(null);   // drop any prior sport's result before this one's data loads
    setPendingAdvance(null); setCoreRevealSeen(false);   // arm the first-full-take core reveal fresh
    const st=loadState();
    setSavedSpine(st.spineAnswers||null);   // spine is shared + answered once; a later spine-league skips it
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
    setCoreProfile(st.coreProfile||null);
    const r=(st.results&&st.results[sport])||{};
    if(r.club){ setResult(r.club); setScores(r.scores||null);
      setEvidence(matchEvidence(sport,{coreAnswers:st.coreAnswers||{},moduleAnswers:r.answers||{},coreProfile:st.coreProfile||null,spineAnswers:st.spineAnswers||{}}));
      setEvidenceInput({coreAnswers:st.coreAnswers||{},moduleAnswers:r.answers||{},coreProfile:st.coreProfile||null,spineAnswers:st.spineAnswers||{}});
    }
    setSavedSpine(st.spineAnswers||null);
    setTab("result");
    setRevealSeq(false); setLanded(true);
    setScreen("result");
    try{ window.scrollTo(0,0); }catch(e){}
  }

  // Result reveal (finish path only): after the strip settles (~1.55s), the club's identity lands.
  // A revisit from home or reduced-motion shows it immediately (landed stays true).
  useEffect(()=>{
    if(revealSeq && screen==="result" && result && !landed){
      const t=setTimeout(()=>setLanded(true),1550);
      return ()=>clearTimeout(t);
    }
  },[revealSeq,screen,result,landed]);

  const team=result?teams[result]:null;
  const rvHead=(d)=> landed
    ? {opacity:1,transform:"none",transition:`opacity .5s ease ${d}s, transform .55s cubic-bezier(.2,.8,.3,1) ${d}s`}
    : {opacity:0,transform:"translateY(10px) scale(.99)"};
  const rvName= landed
    ? {opacity:1,transform:"none",filter:"blur(0px)",transition:"opacity .5s ease .12s, transform .55s cubic-bezier(.2,.8,.3,1) .12s, filter .6s ease .12s"}
    : {opacity:0,transform:"translateY(10px) scale(.99)",filter:"blur(6px)"};
  const blk=(p)=> (p&&Object.keys(p).length) ? ("\uD83E\uDDEC "+coreBlocks(p)) : "";
  // Names of any restored-from-link leagues (no saved answers), for the re-sequence confirm note.
  const staleLeagueNames=useMemo(()=>{
    if(!resequenceConfirm) return [];
    const st=loadState();
    return Object.entries(st.results||{})
      .filter(([,r])=>r&&r.club&&Object.keys(r.answers||{}).length===0)
      .map(([code])=>(SPORTS.find(s=>s.code===code)||{}).name||code);
  },[resequenceConfirm]);
  const onTeam=(()=>{ const c=team&&team.color; if(!c) return "#fff"; const h=c.replace("#",""); const r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16); return (0.2126*r+0.7152*g+0.0722*b)>150?"#15151d":"#fff"; })();
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
  const vit = result && vitalStats ? vitalStats[result] : null;
  const statsData = vit ? (activeSport==="AFL" ? [
    ["Base",         vit.base],
    ["Founded",      String(vit.founded)],
    ["Home ground",  vit.home],
    ["Colours",      vit.colours],
    ["Premierships", vit.flags],
    ["Coach",        vit.coach],
    ["Captain",      vit.captain],
  ] : activeSport==="F1" ? [
    ["Base",       vit.base],
    ["Founded",    String(vit.founded)],
    ["Power unit", vit.powerUnit],
    ["Titles",     vit.titles],
    ["Colours",    vit.colours],
    ["Drivers",    vit.drivers],
    ["Principal",  vit.principal],
  ] : activeSport==="IPL" ? [
    ["First season", String(vit.firstSeason)],
    ["Home ground",  vit.ground],
    ["City",         vit.city],
    ["Capacity",     vit.capacity],
    ["Colours",      vit.colours],
    ["Titles",       vit.titles],
    ["Last title",   vit.lastTitle],
  ] : activeSport==="TOP14" ? [
    ["Founded",       String(vit.founded)],
    ["Home ground",   vit.ground],
    ["City",          vit.city],
    ["Colours",       vit.colours],
    ["French titles", vit.titles],
    ["European",      vit.european],
    ["Last title",    vit.lastTitle],
  ] : activeSport!=="PL" ? [
    ["Nickname",   vit.nickname],
    ["Founded",    String(vit.founded)],
    ["Stadium",    vit.stadium],
    ["City",       vit.city],
    ["Capacity",   vit.capacity],
    ["Colors",     vit.colors],
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
    ["Titles",      vit.titles],
    ["Last title",  vit.lastTitle],
  ]).filter(([,v])=>v!=null&&v!=="") : [];

  // THE READOUT (chapter 04): the true chase pack, straight from the scores. The authored
  // nearlyGot corpus is retired from the result screen; every runner gets the same anatomy.
  // PL RULE: matrix runners may be NAMED with score framing ("The closest readings"), but
  // never with personality framing. No "nearest to your sequence", no similarity copy, no
  // "what you share". A matrix score that finished close is a fact; a close identity is a
  // claim the matrix cannot back. PL gaps are integer matrix points and display as integers.
  const READOUT_K = { MLB: 4, CFB: 4, NFL: 4, NHL: 4, F1: 4, AFL: 4, IPL: 4, TOP14: 4, PL: 3 };
  const readoutRows = result
    ? sortedOthers.slice(0, READOUT_K[activeSport]||3).filter(([k])=>teams[k])
    : [];
  const topGap = sortedOthers.length ? (maxScore - sortedOthers[0][1]) : null;
  // Margin bands, measured on live main (10k answer-space takers per league):
  // fingerprint six share close<0.5 / clear>2.2 (pooled p25/p75); PL integer margins close<=1 / clear>=4.
  const readoutVerdict = (topGap==null || !team) ? null : (()=>{
    if (activeSport==="PL"){
      // PL margins are integer matrix points; the verdict carries the number in words.
      const g = Math.round(topGap);
      const WORDS = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
      const n = g < WORDS.length ? WORDS[g] : String(g);
      if (g === 0) return "Level at the top of the field. The tie-break made the call: "+team.name+".";
      if (g === 1) return "A close read, but a read all the same. "+team.name+" is the call, a single point clear.";
      if (g >= 4) return "A clean read. "+team.name+", "+n+" points clear of the field.";
      return team.name+" is the call, "+n+" points clear of the field.";
    }
    const close = topGap<0.5;
    const clear = topGap>2.2;
    if (close) return "A close read, but a read all the same. "+team.name+" is the call.";
    if (clear) return "A clean read. "+team.name+", with room to spare.";
    return team.name+" is the call.";
  })();

  // ── Home-screen data, all manifest-driven ─────────────────────────────────
  // The share string lists every sport in the manifest: a completed one shows its club
  // code, every other shows "?". Adding a sport later extends this automatically.
  const shareString = "FanDNA: " + sportsList.filter(s=>s.live).map(s=>{
    const r=genome[s.code];
    const sd=SPORT_DATA[s.code];
    const c3=(r&&r.club)?(((sd&&sd.teams&&sd.teams[r.club]&&sd.teams[r.club].code3))||r.club):"?";
    return `${s.code}-${c3}`;
  }).join(" · ");
  // Group the same strands by family (GLOBAL / USA) for a decluttered result-screen readout.
  // Display-only; reads the same manifest the share string does, no new plumbing.
  const shareGroups = FAMILIES.map(f=>({
    fam: f,
    items: sportsList.filter(s=>s.live&&s.group===f.id).map(s=>{
      const r=genome[s.code];
      const sd=SPORT_DATA[s.code];
      const c3=(r&&r.club)?(((sd&&sd.teams&&sd.teams[r.club]&&sd.teams[r.club].code3))||r.club):"?";
      return `${s.code}-${c3}`;
    })
  })).filter(g=>g.items.length>0);
  const coreSequenced = Object.keys(genome).length>0;
  const availSports = sportsList.filter(s=>s.live);
  const takenAvail = availSports.filter(s=>genome[s.code]&&genome[s.code].club);
  const untakenAvail = availSports.filter(s=>!(genome[s.code]&&genome[s.code].club));
  const nextSport = untakenAvail[0]||null;
  const coreCount = coreQuestions.length;
  const moduleCounts = { PL: SPORT_DATA.PL.moduleQuestions.length, NFL: SPORT_DATA.NFL.moduleQuestions.length, MLB: SPORT_DATA.MLB.moduleQuestions.length, NBA: SPORT_DATA.NBA.moduleQuestions.length, BL: SPORT_DATA.BL.moduleQuestions.length, LL: SPORT_DATA.LL.moduleQuestions.length, L1: SPORT_DATA.L1.moduleQuestions.length, SA: SPORT_DATA.SA.moduleQuestions.length, CFB: SPORT_DATA.CFB.moduleQuestions.length, NHL: SPORT_DATA.NHL.moduleQuestions.length };

  // Build the share card (the user's core feeds the strip), then either open the share sheet
  // or save the image. Download always saves. Both fall back to copying the caption.
  function genomeCode(){ return encodeGenome({coreProfile, results: genome}); }
  function cardCaption(){
    const noun=regOf(activeSport).noun;
    const seq="FanDNA: "+shareGroups.flatMap(g=>g.items).filter(t=>!/-\?$/.test(t)).join(" · ");
    return [`Which ${noun} are you, really? Turns out I'm ${team.name}, ${archetypes[result]}.`, blk(coreProfile), seq+".", `Find yours: playfandna.com`].filter(Boolean).join("\n");
  }
  function saveBlob(blob){
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");a.href=url;a.download=`fandna-${result}.png`;
    document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1500);
  }
  // ── Compare wiring ─────────────────────────────────────────────────────
  // A cross-invite / recruit CTA starts a sport but remembers we were mid-compare, so finishing
  // the quiz drops back into the compare (now filled in) rather than the normal result.
  function startSportFromCompare(code){ setPendingCompare(compareFriend); startSport(code); }
  function exitCompare(){ setCompareFriend(null); setScreen("home"); }
  async function shareCompareLink(){
    const st=loadState();
    const code=encodeGenome({coreProfile:st.coreProfile, results:st.results||{}});
    const url=`https://playfandna.com/c/${code}`;
    const noun=regOf(activeSport).noun;
    const caption=[`Which ${noun} are you, really?`, blk(st.coreProfile), `Compare your FanDNA with mine: ${url}`].filter(Boolean).join("\n");
    try{ if(navigator.share){ await navigator.share({text:caption}); return; } }catch(e){ if(e&&e.name==="AbortError") return; }
    navigator.clipboard?.writeText(caption).then(()=>alert("Link copied.")).catch(()=>alert(caption));
  }
  async function shareGenomeCompare(){
    const st=loadState();
    const code=encodeGenome({coreProfile:st.coreProfile, results:st.results||{}});
    const url=`https://playfandna.com/c/${code}`;
    const caption=[blk(st.coreProfile), `Compare your FanDNA with mine: ${url}`].filter(Boolean).join("\n");
    try{ if(navigator.share){ await navigator.share({text:caption}); return; } }catch(e){ if(e&&e.name==="AbortError") return; }
    navigator.clipboard?.writeText(caption).then(()=>alert("Compare link copied.")).catch(()=>alert(caption));
  }

  async function shareCard(){
    const caption=cardCaption();
    let blob=null;
    try{blob=await generateShareCard(activeSport,result,genome,coreProfile);}catch(e){blob=null;}
    track("card_generated",{sport:activeSport,club:result});
    if(blob&&navigator.canShare){
      const file=new File([blob],`fandna-${result}.png`,{type:"image/png"});
      if(navigator.canShare({files:[file]})){
        try{await navigator.share({files:[file],text:caption});return;}
        catch(e){if(e&&e.name==="AbortError")return;}
      }
    }
    if(blob){ saveBlob(blob); navigator.clipboard?.writeText(caption).catch(()=>{}); return; }
    navigator.clipboard?.writeText(caption).then(()=>alert("Card couldn't render here. Caption copied.")).catch(()=>alert(caption));
  }
  async function downloadCard(){
    let blob=null;
    try{blob=await generateShareCard(activeSport,result,genome,coreProfile);}catch(e){blob=null;}
    track("card_generated",{sport:activeSport,club:result});
    if(blob){ saveBlob(blob); return; }
    const caption=cardCaption();
    navigator.clipboard?.writeText(caption).then(()=>alert("Card couldn't render here. Caption copied.")).catch(()=>alert(caption));
  }

  // The recipient's OWN genome, read fresh from storage for the compare route (refreshes after a
  // recruit finishes the quiz). Kept out of JSX per the no-logic-in-JSX house rule.
  const compareMe = useMemo(()=>{ const st=loadState(); return {coreProfile:st.coreProfile, results:st.results||{}}; }, [screen, genome, coreProfile]);

  // ?dump: a display-only export of the saved genome for copy-off on mobile (same hook style as
  // ?beach / ?ipl). Placed after all hooks so the early return never trips the rules-of-hooks.
  // Reads storage only; imports nothing from the scoring path; cannot move a match.
  if (typeof window!=="undefined" && new URLSearchParams(window.location.search).has("dump")) {
    return <DumpView/>;
  }

  return(
    <div ref={containerRef} className="app-root" style={{
      background:"#16161e",
      display:"flex",alignItems:"flex-start",justifyContent:"center",
      padding:"32px 20px",
      fontFamily:"'Georgia','Times New Roman',serif",
      position:"relative",
    }}>
      <Analytics/>
      {earnFamily && (
        <CrestEarn
          family={earnFamily}
          clubColors={groupClubColors(genome, earnFamily.id)}
          reducedMotion={earnReduced}
          onShare={()=>{ setEarnFamily(null); try{ shareCard(); }catch(e){} }}
          onDone={()=>setEarnFamily(null)}
        />
      )}
      {finaleOn && (
        <CrestFinale
          groups={completedGroups(genome)}
          genomeProfile={coreProfile}
          typeName={(coreProfile && generateRead(coreProfile, Object.keys(genome).length) || {}).headline}
          reducedMotion={finaleReduced}
          onShare={()=>{ setFinaleOn(false); try{ shareCard(); }catch(e){} }}
          onDone={()=>setFinaleOn(false)}
        />
      )}
      {beachOn && (
        <BeachWindow
          coreProfile={coreProfile}
          reducedMotion={beachReduced}
          onDone={()=>setBeachOn(false)}
          onSeen={markBeachSeen}
        />
      )}
      {screen==="result" && !beachOn && !beachSeen && hasCompletedAll(genome) && (
        <BeachIndicator onOpen={openBeach}/>
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
        @keyframes slideIn  {from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideOut {from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-8px)}}
        @keyframes popIn    {0%{opacity:0;transform:scale(.94)}60%{transform:scale(1.01)}100%{opacity:1;transform:scale(1)}}
        @keyframes fadeIn   {from{opacity:0}to{opacity:1}}
        @keyframes rvBloom  {0%{transform:scale(.72);opacity:0}28%{opacity:.5}100%{transform:scale(1.8);opacity:0}}
        @keyframes strandPulse {0%,100%{border-color:#3a3a50}50%{border-color:#6a6a90}}
        html,body{margin:0;overscroll-behavior:none}
        .app-root{min-height:100vh;min-height:100svh}
        *{box-sizing:border-box}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:#16161e}
        ::-webkit-scrollbar-thumb{background:#1e1e2e;border-radius:2px}
        :focus-visible{outline:2px solid #b6b2cc;outline-offset:2px;border-radius:4px}
        :focus:not(:focus-visible){outline:none}
        @media (prefers-reduced-motion: reduce){
          *,*::before,*::after{animation-duration:.001ms !important;animation-iteration-count:1 !important;transition-duration:.001ms !important;scroll-behavior:auto !important}
        }
      `}</style>

      {/* Ambient glow, changes with phase */}
      <div style={{
        position:"fixed",inset:0,zIndex:0,pointerEvents:"none",
        background:`radial-gradient(ellipse at 30% 40%, ${screen==="compare"?"transparent":(result&&teams[result]?teams[result].color+"08":"#ffffff08")} 0%, transparent 65%)`,
        transition:"background 1s ease",
      }}/>

      {/* Floating nav on the long single-scroll result: Home is always reachable; back-to-top joins
          once you have scrolled down. Hex-shaped (s58) so the FABs wear the FanDNA badge. Display-only. */}
      {(screen==="result"||(screen==="home"&&showTop)) && (
        <div style={{position:"fixed",right:18,bottom:20,zIndex:40,display:"flex",flexDirection:"column",alignItems:"center",gap:12}}>
          {showTop && (
            <button type="button" aria-label="Back to top"
              onClick={()=>{ const rm = typeof window!=="undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; try{ window.scrollTo({top:0,behavior:rm?"auto":"smooth"}); }catch(e){ try{ window.scrollTo(0,0); }catch(_){} } }}
              style={{width:46,height:46,background:"none",border:"none",padding:0,cursor:"pointer",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.5))",animation:"fadeIn .2s ease"}}
              onMouseEnter={e=>{const h=e.currentTarget.querySelector(".fhex"); if(h)h.setAttribute("stroke","#5a5a7a"); const i=e.currentTarget.querySelector(".fico"); if(i)i.style.color="#efe9e3";}}
              onMouseLeave={e=>{const h=e.currentTarget.querySelector(".fhex"); if(h)h.setAttribute("stroke","#3a3a52"); const i=e.currentTarget.querySelector(".fico"); if(i)i.style.color="#c8c4d8";}}
            >
              <svg width="46" height="46" viewBox="0 0 24 24" style={{position:"absolute",inset:0}} aria-hidden="true"><path className="fhex" d="M12 1.6 L21.1 6.85 L21.1 17.15 L12 22.4 L2.9 17.15 L2.9 6.85 Z" fill="rgba(30,30,46,0.95)" stroke="#3a3a52" strokeWidth="1"/></svg>
              <span className="fico" style={{position:"relative",color:"#c8c4d8",fontSize:19,lineHeight:1}}>{"\u2191"}</span>
            </button>
          )}
          {screen==="result" && (
          <button type="button" aria-label="Back to your FanDNA home"
            onClick={()=>{ try{ window.scrollTo(0,0); }catch(e){} setScreen("home"); }}
            style={{width:46,height:46,background:"none",border:"none",padding:0,cursor:"pointer",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.5))"}}
            onMouseEnter={e=>{const h=e.currentTarget.querySelector(".fhex"); if(h)h.setAttribute("stroke","#5a5a7a"); const i=e.currentTarget.querySelector(".fico"); if(i)i.style.color="#efe9e3";}}
            onMouseLeave={e=>{const h=e.currentTarget.querySelector(".fhex"); if(h)h.setAttribute("stroke","#3a3a52"); const i=e.currentTarget.querySelector(".fico"); if(i)i.style.color="#c8c4d8";}}
          >
            <svg width="46" height="46" viewBox="0 0 24 24" style={{position:"absolute",inset:0}} aria-hidden="true"><path className="fhex" d="M12 1.6 L21.1 6.85 L21.1 17.15 L12 22.4 L2.9 17.15 L2.9 6.85 Z" fill="rgba(30,30,46,0.95)" stroke="#3a3a52" strokeWidth="1"/></svg>
            <span className="fico" style={{position:"relative",display:"flex",color:"#c8c4d8"}}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11.5 12 5l8 6.5"/><path d="M6.2 10.2V19h11.6v-8.8"/></svg>
            </span>
          </button>
          )}
        </div>
      )}

      {/* Re-sequence core confirm: re-answering the core can move clubs, so set that expectation. */}
      {resequenceConfirm&&(
        <div role="dialog" aria-modal="true" aria-label="Re-sequence your core"
          style={{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",background:"rgba(10,10,16,0.72)",animation:"fadeIn .18s ease"}}
          onClick={()=>setResequenceConfirm(false)}>
          <div onClick={e=>e.stopPropagation()}
            style={{width:"100%",maxWidth:420,background:"#1c1c28",border:"1px solid #2a2a3a",borderRadius:14,padding:"26px 24px",animation:"popIn .2s ease"}}>
            <div style={{textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:500,fontSize:25,color:"#e8e4de",marginBottom:12}}>Re-sequence your core?</div>
            <p style={{textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:16,color:"#9e9eba",lineHeight:1.5,margin:"0 0 12px"}}>Your core is the same you across every sport. Re-answering it may change the clubs you have already been matched to. That is the mirror working, not a glitch.</p>
            <p style={{textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:16,color:"#9e9eba",lineHeight:1.5,margin:"0 0 16px"}}>Your league answers are kept. We just re-read them against your new core.</p>
            {staleLeagueNames.length>0&&(
              <div style={{display:"flex",gap:10,alignItems:"flex-start",background:"#282420",border:"1px solid #5a4a2a",borderRadius:7,padding:"10px 12px",marginBottom:18}}>
                <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:"#ccaa6a",letterSpacing:"0.2em",marginTop:2,flexShrink:0}}>NOTE</span>
                <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:14,color:"#bea878",lineHeight:1.4}}>{staleLeagueNames.join(" and ")} {staleLeagueNames.length>1?"were":"was"} restored from a link, so {staleLeagueNames.length>1?"they have":"it has"} no saved answers, so {staleLeagueNames.length>1?"they will":"it will"} need a fresh retake.</span>
              </div>
            )}
            <div style={{display:"flex",gap:12,justifyContent:"center"}}>
              <button onClick={resequenceCore} style={{background:"#6a5ad0",border:"none",borderRadius:6,padding:"11px 22px",color:"#f0eefb",fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",cursor:"pointer"}}>Re-sequence</button>
              <button onClick={()=>setResequenceConfirm(false)} style={{background:"none",border:"1px solid #4a4a6a",borderRadius:6,padding:"11px 22px",color:"#9898b8",fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",cursor:"pointer"}}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Leave-the-take confirm: answers only commit at the finish, so a mid-take exit discards
          this run. In-app modal (matches re-sequence) rather than a native dialog. */}
      {exitConfirm&&(
        <div role="dialog" aria-modal="true" aria-label="Leave this take"
          style={{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",background:"rgba(10,10,16,0.72)",animation:"fadeIn .18s ease"}}
          onClick={()=>setExitConfirm(false)}>
          <div onClick={e=>e.stopPropagation()}
            style={{width:"100%",maxWidth:400,background:"#1c1c28",border:"1px solid #2a2a3a",borderRadius:14,padding:"26px 24px",animation:"popIn .2s ease"}}>
            <div style={{textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:500,fontSize:25,color:"#e8e4de",marginBottom:12}}>Leave this take?</div>
            <p style={{textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:16,color:"#9e9eba",lineHeight:1.5,margin:"0 0 18px"}}>Your answers so far aren't saved yet, so you'd start this one fresh next time. Anything you've already sequenced stays put.</p>
            <div style={{display:"flex",gap:12,justifyContent:"center"}}>
              <button onClick={()=>{ setExitConfirm(false); try{window.scrollTo(0,0);}catch(e){} setScreen("home"); }} style={{background:"#6a5ad0",border:"none",borderRadius:6,padding:"11px 22px",color:"#f0eefb",fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",cursor:"pointer"}}>Leave</button>
              <button onClick={()=>setExitConfirm(false)} style={{background:"none",border:"1px solid #4a4a6a",borderRadius:6,padding:"11px 22px",color:"#9898b8",fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",cursor:"pointer"}}>Stay</button>
            </div>
          </div>
        </div>
      )}

      <div style={{
        width:"100%",maxWidth:560,position:"relative",zIndex:1,
        animation:`${phase==="out"?"slideOut":"slideIn"} .22s ease forwards`,
      }}>

        {/* ── COMPARE (arrived on a friend's /c/ link) ── */}
        {screen==="compare"&&(
          <Compare
            friend={compareFriend}
            me={compareMe}
            onStartSport={startSportFromCompare}
            onReshare={shareCompareLink}
            onExit={exitCompare}
            onRestore={restoreFromCompare}
          />
        )}

        {/* ── GENOME HOME (landing page) ── */}
        {screen==="how"&&(
          <HowItWorks
            onStart={goHomeFromHow}
            onBack={closeHow}
            hasGenome={coreSequenced}
          />
        )}

        {screen==="home"&&(
          <GenomeHome
            sports={sportsList}
            genome={genome}
            sportData={SPORT_DATA}
            coreSequenced={coreSequenced}
            coreCount={coreCount}
            moduleCounts={moduleCounts}
            shareString={shareString}
            coreProfile={coreProfile}
            spineAnswers={savedSpine}
            onOpenResult={openResult}
            onStartSport={startSport}
            onReset={startOver}
            onRestore={restoreFromText}
            onCompare={shareGenomeCompare}
            onHow={openHow}
            onRetakeCore={resequenceCore}
            onRetakeInstincts={retakeInstincts}
            onOpenCrest={openCrest}
            onOpenFinale={openFinale}
            onOpenBeach={openBeach}
            beachSeen={beachSeen}
            resequenceDelta={resequenceDelta}
            onDismissDelta={()=>{setResequenceDelta(null);clearPending();}}
          />
        )}

        {/* ── QUIZ ── */}
        {screen==="quiz"&&(
          <>
            <h1 style={{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}}>
              FanDNA quiz: {mode==="core" ? "Your core" : ((SPORTS.find(s=>s.code===activeSport)||{}).name||"Premier League")}
            </h1>
            <div aria-live="polite" style={{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}}>
              {stageLabel}, question {stageIdx} of {stageTotal}
            </div>
            {/* League indicator: which sequence you're taking, always visible */}
            <div style={{textAlign:"center",marginBottom:14,fontSize:11,color:"#8484b0",letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace"}}>
              {mode==="core" ? "Your core" : ((SPORTS.find(s=>s.code===activeSport)||{}).name||"Premier League")}
            </div>
            {/* Progress: three named stages - Core, Instincts, then the sport - so the about-you
                layers and the sport layer read as distinct at a glance. The live stage glows. */}
            <StageBar stages={quizStages}/>

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
                  maxWidth:"clamp(90px,32vw,180px)",overflow:"hidden",
                  textOverflow:"ellipsis",whiteSpace:"nowrap",
                }}>
                  {phaseShortNames[currentPhase]||currentPhase}
                </span>
                <span style={{fontSize:10,color:"#aaa",letterSpacing:"0.15em",fontFamily:"'DM Mono',monospace"}}>
                  {stageIdx}/{stageTotal}
                </span>
                {/* Quiet exit: leave the take and return to the genome home. Confirms mid-take so a
                    mis-tap never discards answers (which only commit at the finish). */}
                <button type="button" aria-label="Leave this take"
                  onClick={()=>{ if(cur===0){ try{window.scrollTo(0,0);}catch(e){} setScreen("home"); } else { setExitConfirm(true); } }}
                  style={{width:30,height:30,background:"none",border:"none",padding:0,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",flexShrink:0}}
                  onMouseEnter={e=>{const h=e.currentTarget.querySelector(".qhex"); if(h)h.setAttribute("stroke","#6a6a8a");}}
                  onMouseLeave={e=>{const h=e.currentTarget.querySelector(".qhex"); if(h)h.setAttribute("stroke","#3a3a4e");}}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path className="qhex" d="M12 2.4 L20.3 7.2 L20.3 16.8 L12 21.6 L3.7 16.8 L3.7 7.2 Z" stroke="#3a3a4e" strokeWidth="1.3"/>
                    <path d="M8 12.1 12 8.9l4 3.2" stroke="#8a8ab0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.1 11.4V15.4h5.8v-4" stroke="#8a8ab0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Entry framing, first question only (per 1b) */}
            {cur===0&&(
              <div style={{textAlign:"center",marginBottom:26}}>
                <div style={{fontSize:11,color:"#8484b0",letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:10}}>{mode==="core"?"Re-sequencing your core":"Which team are you, really?"}</div>
                <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:"clamp(14px,3.4vw,17px)",color:"#9898b8",lineHeight:1.55,margin:0}}>{mode==="core"?"Answer honestly, not how you wish you were. When you finish, every league you have taken re-reads against the new you.":mode==="module"?`Your core is already sequenced. ${moduleQuestions.length} questions to remap your ${(SPORTS.find(s=>s.code===activeSport)||{}).name||"Premier League"} strand.`:"Answer honestly, not how you wish you were. New to the league or loyal for life, this is the club in your DNA."}</p>
                {mode==="full"&&(
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.16em",textTransform:"uppercase",color:"#7a7a98",marginTop:13}}>{quizStages.length} short parts &middot; about 5 minutes</div>
                )}
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

        {/* ── CORE REVEAL (first full take: your type, between the about-you questions and the sport) ── */}
        {screen==="reveal"&&(
          <CoreReveal
            coreProfile={coreProfile}
            sportName={seqLeagueName}
            onContinue={continueFromReveal}
          />
        )}

        {/* ── RESULT ── */}
        {screen==="result"&&result&&(
          <div style={{animation:"popIn .45s cubic-bezier(.2,.8,.3,1) both",background:`linear-gradient(160deg,${team.color}06 0%,transparent 40%)`,borderRadius:12,padding:"4px"}}>

            {/* Back to the genome home + league indicator */}
            <div style={{marginBottom:14,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <button onClick={()=>setScreen("home")}
                style={{
                  display:"inline-flex",alignItems:"center",gap:7,
                  background:"rgba(152,152,184,0.08)",border:"1px solid #34344a",borderRadius:20,padding:"6px 13px 6px 11px",
                  color:"#b8b8d0",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",
                  fontFamily:"'DM Mono',monospace",cursor:"pointer",transition:"all .15s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.color="#efe9e3";e.currentTarget.style.borderColor="#5a5a7a";}}
                onMouseLeave={e=>{e.currentTarget.style.color="#b8b8d0";e.currentTarget.style.borderColor="#34344a";}}
              ><span aria-hidden="true" style={{fontSize:13,lineHeight:1}}>←</span> Your full FanDNA</button>
              <span style={{fontSize:11,color:"#8484b0",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace"}}>
                {(SPORTS.find(s=>s.code===activeSport)||{}).name||"Premier League"}
              </span>
            </div>

            {/* Card-as-hero: your share card, on screen, with the tappable core strip inside it.
                Share and Download generate the flat image (which shows the codes only). */}
            <div style={{border:`1px solid ${team.color}33`,borderRadius:14,overflow:"hidden",background:"#14141c",marginBottom:14}}>
              <div style={{background:`linear-gradient(180deg,${team.color}2e 0%,transparent 70%)`,padding:"22px 18px 4px",textAlign:"center"}}>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#9696b4",letterSpacing:"0.34em",textTransform:"uppercase",marginBottom:14}}>your {regOf(activeSport).noun}</div>
                <div style={{display:"inline-flex",position:"relative",...rvHead(0)}}>
                  <ClubMark team={team} size={84}/>
                  <span aria-hidden="true" style={{position:"absolute",inset:0,borderRadius:"50%",border:`2px solid ${team.color}`,opacity:0,pointerEvents:"none",animation:(revealSeq&&landed)?"rvBloom .8s ease-out":"none"}}/>
                </div>
                <h1 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",margin:"14px 0 0",fontSize:"clamp(28px,7vw,38px)",fontWeight:300,color:"#e8e4de",letterSpacing:"-.02em",lineHeight:1,...rvName}}>{team.name}</h1>
                <div style={{display:"inline-flex",alignItems:"center",gap:7,background:`${team.color}15`,border:`1px solid ${team.color}30`,borderRadius:5,padding:"4px 11px",marginTop:11,...rvHead(0.24)}}>
                  <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#aaa",letterSpacing:"0.2em",textTransform:"uppercase"}}>type</span>
                  <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:13,color:(teamTextColors[result]||team.color),fontStyle:"italic"}}>{archetypes[result]}</span>
                </div>
                <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:15,color:"#c9c4bd",fontStyle:"italic",margin:"13px auto 0",maxWidth:300,lineHeight:1.45,...rvHead(0.36)}}>{team.tagline}</p>
              </div>

              {coreProfile&&(
              <div style={{padding:"16px 16px 15px"}}>
                <CoreStrip dims={coreProfile} compact/>
                <InstinctsLine spineAnswers={savedSpine}/>
              </div>
              )}

              {/* Universal genome line: this club is how the user's core shows up in THIS league.
                  Display-only, templated on team.name + the register's articled league phrase
                  (regOf().leagueIn) so it reads true on every league. Periods only, no em dashes. */}
              <div style={{padding:"0 16px 14px",textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:13,fontStyle:"italic",color:"#9a9ac4",lineHeight:1.45,...rvHead(0.46)}}>{team.name} is how your genome shows up in {regOf(activeSport).leagueIn}.</div>

              <div style={{padding:"0 16px 16px"}}>
                <div style={{display:"flex",flexDirection:"column",gap:5,alignItems:"center",marginBottom:6}}>
                  {shareGroups.map(g=>{
                    const dim = g.fam.id!=="global";
                    return (
                      <div key={g.fam.id} style={{display:"flex",gap:8,alignItems:"baseline"}}>
                        <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:"0.14em",color:dim?"#7f7f9f":"#7d7d9c",flexShrink:0,width:36,textAlign:"right"}}>{g.fam.id==="global"?"GLOBAL":g.fam.id==="world"?"WORLD":"USA"}</span>
                        <span style={{fontFamily:"'DM Mono',monospace",fontSize:12,color:dim?"#82829a":"#c9c5cf",letterSpacing:"0.03em",wordBreak:"break-word",lineHeight:1.45}}>{g.items.join(" · ")}</span>
                      </div>
                    );
                  })}
                </div>
                <div style={{textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:14,color:"#9898b8",fontStyle:"italic"}}>Which {regOf(activeSport).noun} are you, really?</div>
              </div>
            </div>

            {/* Share hierarchy: Compare (primary) / Share card (weighted) / Download (quiet) */}
            <div style={{marginBottom:18}}>
              <button onClick={shareCompareLink}
                style={{display:"block",width:"100%",textAlign:"center",background:team.color,border:`1px solid ${team.color}`,borderRadius:8,padding:"15px 10px",color:onTeam,fontFamily:"'DM Mono',monospace",fontSize:13,letterSpacing:"0.12em",textTransform:"uppercase",cursor:"pointer",fontWeight:600}}
                onMouseEnter={e=>{e.currentTarget.style.filter="brightness(1.08)";}}
                onMouseLeave={e=>{e.currentTarget.style.filter="none";}}
              >Compare with a friend</button>
              <button onClick={shareCard}
                style={{display:"block",width:"100%",textAlign:"center",background:`${team.color}1f`,border:`1px solid ${team.color}4d`,borderRadius:7,padding:"11px 10px",marginTop:9,color:"#e6e2ea",fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",cursor:"pointer",fontWeight:500}}
                onMouseEnter={e=>{e.currentTarget.style.background=`${team.color}30`;}}
                onMouseLeave={e=>{e.currentTarget.style.background=`${team.color}1f`;}}
              >Share card</button>
              <div style={{textAlign:"center",marginTop:10}}>
                <button onClick={downloadCard}
                  style={{background:"none",border:"none",color:"#74748e",fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:"0.1em",cursor:"pointer",padding:"4px 8px"}}
                  onMouseEnter={e=>{e.currentTarget.style.color="#9a9ac0";}}
                  onMouseLeave={e=>{e.currentTarget.style.color="#74748e";}}
                >Download image</button>
              </div>
            </div>

            {/* Result, single scroll: four sections stacked, no tabs. Each ChapterHead is a
                prominent divider so nothing hides behind a control (was: 4-tab bar). */}
            <ChapterHead n="01" title="Your match" sub={"why this "+regOf(activeSport).noun+" is you"} color={team.color} textColor={teamTextColors[result]||team.color} first/>
                <div style={{width:28,height:2,background:team.color,marginBottom:18,borderRadius:2}}/>
                <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(19px,4vw,22px)",fontWeight:300,color:"#d8d4ce",lineHeight:1.85,margin:"0 0 20px",fontStyle:"italic"}}>{team.desc}</p>
                {team.note&&(<p style={{fontSize:14,color:"#bbb",lineHeight:1.75,margin:"0 0 24px",borderLeft:`1px solid #252535`,paddingLeft:14,fontFamily:"'DM Mono',monospace"}}>{team.note}</p>)}
                {/* Fandom vs FanDNA reframe (per 1b) - sport-aware */}
                <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(15px,3.4vw,18px)",fontStyle:"italic",color:"#9898b8",lineHeight:1.6,margin:"6px 0 22px"}}>This is your {regOf(activeSport).noun} by DNA. {regOf(activeSport).tail}</p>
            <ChapterHead n="02" title="Why you" sub="the answers and traits behind it" color={team.color} textColor={teamTextColors[result]||team.color}/>
                <MatchEvidence evidence={evidence} clubName={team.name} color={teamTextColors[result]||team.color} noun={regOf(activeSport).noun} section="why"/>
                <div style={{marginTop:28,paddingTop:24,borderTop:"1px solid #1e1e2e"}}>
                {coreProfile ? (
                  <CoreCompare core={coreProfile} club={D.teamDims[result]} clubName={team.name}
                    accent={teamTextColors[result]||team.color}
                    leagueIn={regOf(activeSport).leagueIn} noun={regOf(activeSport).noun} edge={team.edge} matrixDecided={activeSport==='PL'}/>
                ) : (
                  <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:16,fontStyle:"italic",color:"#9a9ac4",lineHeight:1.6,margin:"0 0 8px"}}>Retake this {regOf(activeSport).noun} to map your core against {team.name}.</p>
                )}
                </div>
            <ChapterHead n="03" title="Vitals" sub={"the "+regOf(activeSport).noun+" itself"} color={team.color} textColor={teamTextColors[result]||team.color}/>
                <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:18}}>{regOf(activeSport).team} Info</div>
                {(statsData.length>0||(milestones&&milestones[result]))?(
                  <>
                    {statsData.length>0&&(
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
                    )}
                    {/* All-time greats */}
                    {greats&&greats[result]&&(
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
                    {/* Club milestones - fallback for clubs with no all-time greats */}
                    {(!greats||!greats[result])&&milestones&&milestones[result]&&(
                      <div style={{marginBottom:20}}>
                        <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:12,marginTop:20}}>Club milestones</div>
                        {milestones[result].map((m,i)=>(
                          <div key={i} style={{padding:"10px 0",borderBottom:"1px solid #1e1e2e"}}>
                            <p style={{margin:0,fontSize:14,color:"#e8e4de",lineHeight:1.65,fontFamily:"'Cormorant Garamond',Georgia,serif"}}>{m}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ):(
                  <p style={{fontSize:13,color:"#aaa",fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>Stats not available for this club yet.</p>
                )}
            <ChapterHead n="04" title="The Readout" sub="your match, measured against the field" color={team.color} textColor={teamTextColors[result]||team.color}/>
                {/* the strongest signal */}
                <div style={{marginBottom:24}}>
                  <div style={{display:"flex",alignItems:"baseline",gap:10,flexWrap:"wrap"}}>
                    <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(24px,6vw,30px)",fontWeight:600,color:"#efe9e3"}}>{team.name}</span>
                    <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:15,color:"#9898b8"}}>{archetypes[result]||""}</span>
                  </div>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.12em",color:(teamTextColors[result]||team.color),marginTop:8}}>the strongest signal in your sample</div>
                </div>
                {readoutRows.length>0&&(<>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#8484b0",marginBottom:16}}>{activeSport==="PL" ? "The closest readings" : "Nearest to your sequence"}</div>
                  {readoutRows.map(([k,pts])=>{
                    const nt=teams[k];
                    const gap=maxScore-pts;
                    const frac=maxScore>0?Math.max(0,Math.min(1,pts/maxScore)):0;
                    return(
                      <div key={k} style={{marginBottom:18}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:8}}>
                          <div style={{display:"flex",alignItems:"baseline",gap:8,minWidth:0}}>
                            <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:17,color:"#ddd"}}>{nt.name}</span>
                            <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:12.5,color:"#77779c",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{archetypes[k]||""}</span>
                          </div>
                          <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#9696b4",whiteSpace:"nowrap",marginLeft:10}}>within {activeSport==="PL" ? String(Math.round(gap)) : gap.toFixed(1)}</span>
                        </div>
                        <div style={{height:3,background:"#252533",borderRadius:2,overflow:"hidden"}}>
                          <div style={{height:"100%",width:`${(frac*100).toFixed(1)}%`,background:"#4a4a6a",borderRadius:2}}/>
                        </div>
                      </div>
                    );
                  })}
                </>)}
                {readoutVerdict&&(
                  <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:"clamp(15px,3.5vw,17px)",color:"#9a9ac4",lineHeight:1.6,margin:"8px 0 22px"}}>{readoutVerdict}</p>
                )}
                <div style={{marginBottom:24}}>
                  <MatchEvidence evidence={evidence} clubName={team.name} color={teamTextColors[result]||team.color} noun={regOf(activeSport).noun} moduleLabel={regOf(activeSport).leagueAbbr.toLowerCase()} section="stability"/>
                </div>
                <CrossMatch
                  sport={activeSport}
                  input={evidenceInput}
                  teams={teams}
                  teamDims={D.teamDims}
                  coreProfile={coreProfile}
                  teamTextColors={teamTextColors}
                  matchedCode={result}
                  matchedName={team.name}
                  matchedColor={teamTextColors[result]||team.color}
                  voice={regOf(activeSport)}
                />
            {/* one kit/squad CTA set for the whole result (was repeated in three tabs) */}
            <div style={{display:"flex",gap:24,flexWrap:"wrap",marginTop:34,paddingTop:24,borderTop:"1px solid #2a2a3a"}}>
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

            
            {/* #8 Retention: progress (B) + next-strand (A) + full-genome link (C) */}
            <div style={{marginTop:34,paddingTop:26,borderTop:"1px solid #1e1e2e"}}>
              <div style={{textAlign:"center",fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.28em",textTransform:"uppercase",color:"#8a8ab0",marginBottom:12}}>Same you &middot; every sport</div>
              <div style={{textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:22,color:"#e8e4de",marginBottom:14}}>{takenAvail.length} of {availSports.length} sequenced</div>
              <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap",marginBottom:24}}>
                {availSports.map(s=>{ const done=!!(genome[s.code]&&genome[s.code].club); return (
                  <span key={s.code} title={s.name} style={{width:11,height:11,borderRadius:"50%",boxSizing:"border-box",background:done?((team&&team.color)||"#6a5ad0"):"transparent",border:done?"none":"2px solid #46465c"}}/>
                ); })}
              </div>
              {nextSport ? (
                <button onClick={()=>startSport(nextSport.code)}
                  style={{display:"block",width:"100%",textAlign:"left",background:`${(team&&team.color)||"#6a5ad0"}12`,border:`1px solid ${(team&&team.color)||"#6a5ad0"}55`,borderRadius:12,padding:"18px 52px 18px 20px",cursor:"pointer",position:"relative"}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.24em",textTransform:"uppercase",color:"#9a9ac4",marginBottom:8}}>Next strand</div>
                  <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:26,color:"#efe9e3",lineHeight:1.1}}>Find your {nextSport.name} {regOf(nextSport.code).noun}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:15,color:"#9898b8",marginTop:6}}>Same core, different game. {SPORT_DATA[nextSport.code].moduleQuestions.length} questions.</div>
                  <span style={{position:"absolute",right:20,top:"50%",transform:"translateY(-50%)",fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:34,color:"#b9b4c8",lineHeight:1}}>&rsaquo;</span>
                </button>
              ) : (
                <div style={{textAlign:"center",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:17,color:"#9898b8"}}>You've sequenced every live league. More sports soon.</div>
              )}
              <div style={{textAlign:"center",marginTop:22}}>
                <button onClick={()=>setScreen("home")}
                  style={{background:"none",border:"none",color:"#a7a2c0",fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:"0.16em",textTransform:"uppercase",cursor:"pointer",padding:"6px"}}>See your full FanDNA &rarr;</button>
              </div>
            </div>

            <div style={{marginTop:32,textAlign:"center",display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
              <button onClick={()=>{ if(window.confirm(`Retake ${activeSport}? This replaces your current ${activeSport} result.`)) retakeModule(); }}
                style={{background:"none",border:"1px solid #444",borderRadius:5,padding:"9px 22px",color:"#bbb",fontSize:11,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",cursor:"pointer",transition:"all .15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#888";e.currentTarget.style.color="#aaa";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#252535";e.currentTarget.style.color="#818181";}}
              >retake {activeSport}</button>
              <button onClick={()=>setResequenceConfirm(true)}
                style={{background:"none",border:"1px solid #444",borderRadius:5,padding:"9px 22px",color:"#bbb",fontSize:11,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",cursor:"pointer",transition:"all .15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#888";e.currentTarget.style.color="#aaa";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#252535";e.currentTarget.style.color="#818181";}}
              >re-sequence core</button>
              <button onClick={()=>{ if(window.confirm("Start over? This clears your entire FanDNA. Every league result and your saved core will be erased. This cannot be undone.")) startOver(); }}
                style={{background:"none",border:"1px solid #444",borderRadius:5,padding:"9px 22px",color:"#bbb",fontSize:11,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",cursor:"pointer",transition:"all .15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#888";e.currentTarget.style.color="#aaa";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#252535";e.currentTarget.style.color="#818181";}}
              >start over</button>
            </div>

            {/* Support + feedback footer (off the newcomer's critical path) */}
            <div style={{marginTop:28,paddingTop:20,borderTop:"1px solid #1e1e2e",textAlign:"center"}}>
              <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:14,color:"#7f7f9e",lineHeight:1.6,margin:"0 auto 14px",maxWidth:380}}>Built by one person and far too many spreadsheets. If this made you laugh, argue, or text a friend, it did exactly what it was meant to.</p>
              <div style={{display:"flex",gap:20,justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
                <button type="button" onClick={openHow}
                  style={{color:"#9898b8",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",background:"none",border:"none",cursor:"pointer",padding:0,transition:"color .15s"}}
                  onMouseEnter={e=>e.currentTarget.style.color="#d0ccc6"}
                  onMouseLeave={e=>e.currentTarget.style.color="#9898b8"}
                >How this works</button>
                <a href="https://forms.gle/kAV9KGGUxdcA1dYv6" target="_blank" rel="noopener noreferrer"
                  style={{color:"#9898b8",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"color .15s"}}
                  onMouseEnter={e=>e.currentTarget.style.color="#d0ccc6"}
                  onMouseLeave={e=>e.currentTarget.style.color="#9898b8"}
                >Feedback or a bug?</a>
              </div>
              <p style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#7f7f9f",lineHeight:1.6,margin:"16px auto 0",maxWidth:360,letterSpacing:"0.02em"}}>FanDNA is an independent project. Not affiliated with, endorsed by, or associated with any club, league, or governing body.</p>
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
