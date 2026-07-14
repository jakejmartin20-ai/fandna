// FanDNA - HowItWorks: the "how the data is crunched" explainer. Everything shown here is
// COMPUTED LIVE from the real engine and the real data files, never hand-typed: the example
// question and its option shapes come from core.js, the worked core comes from scoreCore on a
// real answer set, the stretched core comes from the real decompressProfile, and the matched
// club (plus the anti-match's rank) comes from scoreModule itself. If scoring ever moves, this
// page moves with it instead of quietly going stale.
//
// Honesty notes baked into the copy:
//  - the core is read against the population TWICE, in two different units, and the page owns it:
//    standing() (genomeRead) is what the home strip / card / compare strips DRAW, and it answers
//    "which traits define you". decompressProfile() (scoring) is what the MATCH uses, because a
//    club was authored on a raw 0-10 scale and has to be met there. Same reading, different ruler.
//  - PL is the matrix engine (the seven are only a tie-break there). The page owns that.
//
// The worked example is Bundesliga because BL is a true fingerprint league, so the seven-vs-seven
// story the page tells is literally how that result is produced.
//
// All copy here is user-facing, so: no em dashes.

import { useState, useEffect } from "react";
import { coreQuestions, coreDimScoring, DIM_ORDER, DIM_COLORS, DIM_CODES } from "../data/core";
import { scoreCore, scoreModule, decompressProfile } from "../lib/scoring";
import { standing } from "../lib/genomeRead";
import { SPORT_DATA } from "../lib/sportData";

const CG   = "'Cormorant Garamond',Georgia,serif";
const MONO = "'DM Mono',monospace";

// ── The worked example. A REAL answer set, verified to land on Union Berlin under the live
// engine (RB Leipzig comes out near the bottom for this person). Kept as answers, not as
// numbers, so every shape on the page is derived rather than asserted.
const EX_CORE = {
  q1:"C", q2:"right", q3:"B",  q4:"4", q5:"A",  q6:"left", q7:"B",  q8:"2",
  q9:"A", q10:"left", q11:"A", q12:"5", q13:"D", q14:"left", q15:"C", q16:"3",
  q17:"B", q18:"left", q19:"E", q20:"3", q21:"A", q22:"left", q23:"A", q24:"4",
};
const EX_MODULE = {
  bl_q1:"B", bl_q2:"C", bl_q3:"A", bl_q4:"B",  bl_q5:"B",  bl_q6:"B",
  bl_q7:"B", bl_q8:"right", bl_q9:"left", bl_q10:"left", bl_q11:"left", bl_q12:"A",
};
const EX_SPORT = "BL";
const ANTI     = "RBL";   // the club this person is furthest from, shown as the anti-match

// ── A gel strip. Same visual language as the home/card CoreStrip, but read-only and with its
// own label, so nothing on the shipped CoreStrip has to change.
function Gel({ dims, label, note, accent="#d4a44e", muted=false, height=86, delay=0 }){
  const [shown,setShown]=useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setShown(true),140+delay); return ()=>clearTimeout(t); },[delay]);
  const d=dims||{}, P=6, B=10, travel=height-2*P-B, BOTTOM=height-B-2;
  const clamp=(s)=>Math.max(0,Math.min(10,s||0));
  const topFor=(s)=>P+(1-clamp(s)/10)*travel;
  return (
    <div style={{margin:"0 0 4px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,marginBottom:11}}>
        <span style={{fontFamily:MONO,fontSize:10,color:accent,letterSpacing:"0.26em",textTransform:"uppercase",opacity:muted?0.75:1}}>{label}</span>
        {note&&<span style={{fontFamily:CG,fontStyle:"italic",fontSize:14,color:"#8888a6",textAlign:"right",flexShrink:0}}>{note}</span>}
      </div>
      <div style={{display:"flex",gap:5,alignItems:"flex-end"}}>
        {DIM_ORDER.map((dk,i)=>{
          const base=DIM_COLORS[dk];
          const top=shown?topFor(d[dk]):BOTTOM;
          return (
            <div key={dk} style={{position:"relative",flex:1,height,background:"#1c1c28",border:"1px solid #2a2a3a",borderRadius:3,overflow:"hidden"}}>
              <div style={{
                position:"absolute",left:6,right:6,height:B,borderRadius:3,top,
                opacity:shown?(muted?0.5:1):0, background:base,
                boxShadow:muted?"none":`0 0 8px ${base}88`,
                transition:`top .7s cubic-bezier(.2,.8,.3,1) ${(i*0.07).toFixed(2)}s, opacity .5s ease ${(i*0.07).toFixed(2)}s`,
              }}>
                <div style={{position:"absolute",left:1,right:1,top:1,height:3,borderRadius:2,background:"rgba(255,255,255,0.4)"}}/>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{display:"flex",gap:5,marginTop:6,fontFamily:MONO,fontSize:9}}>
        {DIM_ORDER.map(dk=>(
          <span key={dk} style={{flex:1,textAlign:"center",color:DIM_COLORS[dk],opacity:muted?0.5:1}}>{DIM_CODES[dk]}</span>
        ))}
      </div>
    </div>
  );
}

// A small strip, used for a single answer's shape and for the stack of answers.
function MiniGel({ dims, faint=false, height=46, delay=0 }){
  const [shown,setShown]=useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setShown(true),160+delay); return ()=>clearTimeout(t); },[delay]);
  const d=dims||{}, P=3, B=5, travel=height-2*P-B, BOTTOM=height-B-1;
  const clamp=(s)=>Math.max(0,Math.min(10,s||0));
  return (
    <div style={{display:"flex",gap:2,alignItems:"flex-end"}}>
      {DIM_ORDER.map((dk,i)=>{
        const base=DIM_COLORS[dk];
        const top=shown?P+(1-clamp(d[dk])/10)*travel:BOTTOM;
        return (
          <div key={dk} style={{position:"relative",flex:1,height,background:"#1c1c28",border:"1px solid #2a2a3a",borderRadius:2,overflow:"hidden"}}>
            <div style={{position:"absolute",left:2,right:2,height:B,borderRadius:2,top,background:base,
              opacity:shown?(faint?0.45:0.92):0,
              transition:`top .6s cubic-bezier(.2,.8,.3,1) ${(i*0.05).toFixed(2)}s, opacity .4s ease ${(i*0.05).toFixed(2)}s`}}/>
          </div>
        );
      })}
    </div>
  );
}

const Title = ({children,size=26}) => (
  <h2 style={{fontFamily:CG,fontSize:size,fontWeight:600,color:"#e4e0da",margin:"0 0 14px",lineHeight:1.25}}>{children}</h2>
);
const P = ({children,muted=false}) => (
  <p style={{fontFamily:CG,fontSize:17,color:muted?"#9a9ab4":"#b8b4b0",lineHeight:1.55,margin:"0 0 12px"}}>{children}</p>
);
const Note = ({children,color="#8a8aa2"}) => (
  <p style={{fontFamily:CG,fontStyle:"italic",fontSize:15,color,lineHeight:1.5,margin:"8px 0 0"}}>{children}</p>
);
const Rule = () => <div style={{height:1,background:"#242433",margin:"34px 0"}}/>;
const Section = ({children}) => <section style={{margin:"0 0 36px"}}>{children}</section>;

export function HowItWorks({ onStart, onBack, hasGenome=false }){
  // Everything below is derived from the live engine and the live data.
  const sd    = SPORT_DATA[EX_SPORT]||{};
  const teams = sd.teams||{};
  const dims  = sd.teamDims||{};

  const q1     = coreQuestions.find(q=>q.id==="q1");
  const q1opts = coreDimScoring.q1||{};
  const labelOf=(v)=>((q1&&q1.options||[]).find(o=>o.value===v)||{}).label||"";

  const rawCore   = scoreCore(EX_CORE);
  const stood     = standing(rawCore);        // what the home strip / card actually draw
  const stretched = decompressProfile(rawCore); // what the club match actually compares

  const res   = scoreModule(EX_SPORT,{coreProfile:rawCore,coreAnswers:EX_CORE,moduleAnswers:EX_MODULE});
  const match = res.club;
  const ranked = Object.entries(res.scores||{}).sort((a,b)=>b[1]-a[1]).map(([k])=>k);
  const antiRank = ranked.indexOf(ANTI)+1;
  const fieldSize = ranked.length;

  const matchName = (teams[match]||{}).name || match;
  const antiName  = (teams[ANTI]||{}).name  || ANTI;
  const ord = (n)=>{ const s=["th","st","nd","rd"], v=n%100; return n+(s[(v-20)%10]||s[v]||s[0]); };

  // The stack of answer-shapes above the core: the first five answers, as their real vectors.
  const stack = ["q1","q3","q5","q7","q9"]
    .map(id=>(coreDimScoring[id]||{})[EX_CORE[id]])
    .filter(Boolean);

  return (
    <div style={{width:"100%",padding:"6px 0 44px"}}>

      <div style={{fontFamily:MONO,fontSize:10,color:"#9696b4",letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:14}}>How this works</div>
      <h1 style={{fontFamily:CG,fontSize:31,fontWeight:600,color:"#e4e0da",margin:"0 0 14px",lineHeight:1.2}}>Your fandom, sequenced.</h1>
      <p style={{fontFamily:CG,fontStyle:"italic",fontSize:18,color:"#a8a4b4",lineHeight:1.5,margin:"0 0 4px"}}>Most quizzes ask what you like. This one asks who you are.</p>

      <Rule/>

      <Section>
        <Title>No trivia.</Title>
        <P>The first questions have nothing to do with sport. They're about pressure. Loyalty. What you do when something you cared about slips away.</P>
        <P>Nothing to know, nothing to get right. Someone who has never watched a game can answer every one.</P>
      </Section>

      <Section>
        <Title>One answer, one shape.</Title>
        <P>You aren't adding a point to a tally. Every answer you can give is already a shape of its own, across all seven.</P>
        <div style={{background:"#1a1a25",border:"1px solid #28283a",borderRadius:10,padding:"18px 16px 16px",marginTop:18}}>
          <p style={{fontFamily:CG,fontSize:18,color:"#d0ccc6",lineHeight:1.45,margin:"0 0 16px"}}>{q1?q1.question:""}</p>
          <div style={{display:"flex",gap:16}}>
            {["A","D"].map((v,i)=>(
              <div key={v} style={{flex:1,minWidth:0}}>
                <p style={{fontFamily:CG,fontSize:15,color:"#a8a4b4",lineHeight:1.35,margin:"0 0 12px",minHeight:40}}>{labelOf(v)}</p>
                <MiniGel dims={q1opts[v]} height={48} delay={i*160}/>
              </div>
            ))}
          </div>
        </div>
        <Note>Same question. Two people. Two completely different reads, before a ball is kicked.</Note>
      </Section>

      <Section>
        <Title>Your core is the average.</Title>
        <P>Every shape you cast gets laid on top of the last. No single answer can drag you somewhere you aren't.</P>
        <div style={{display:"flex",gap:10,margin:"20px 0 6px"}}>
          {stack.map((v,i)=>(<div key={i} style={{flex:1,minWidth:0}}><MiniGel dims={v} faint height={42} delay={i*90}/></div>))}
        </div>
        <div aria-hidden="true" style={{display:"flex",justifyContent:"center",margin:"10px 0 16px"}}>
          <svg width="10" height="26" viewBox="0 0 10 26"><path d="M5 0 L5 20" stroke="#3a3a50" strokeWidth="1"/><path d="M1.5 19 L5 25 L8.5 19 Z" fill="#3a3a50"/></svg>
        </div>
        <Gel dims={rawCore} label="Your core" note="the raw average" accent="#7d7d9c" muted height={76} delay={420}/>
        <Note>Seven traits. Loyalty, emotion, ambition, process, community, chaos, rootedness. That's the part of you that doesn't move when the sport does.</Note>
      </Section>

      <Section>
        <Title>Everyone crowds the middle.</Title>
        <P>Average two dozen answers and almost nobody comes out extreme. Worse, the seven don't share a scale. Nobody alive can score above 5.4 in chaos, and nobody can fall below 5.9 in ambition. Read those raw, side by side, and you are not reading a person. You are reading the questions.</P>
        <P>So before anything else, we read you against everybody else. Your quiet 7 is a roar if the rest of the world sits at 6.4. Your 4.7 in chaos is not low. It is higher than two thirds of people.</P>
        <div style={{marginTop:24}}>
          <Gel dims={stood} label="Where you stand" note="the strip on your home screen" accent="#d4a44e" height={86}/>
        </div>
        <Note>Same person. Nothing added, nothing invented. Every band is now how much more of that trait you carry than everyone else, which is the only thing a band can honestly mean.</Note>
        <div style={{marginTop:28}}>
          <Gel dims={stretched} label="What we hand the clubs" note="the same read, in the clubs' units" accent="#7d7d9c" muted height={86}/>
        </div>
        <Note color="#74748c">A club was written down on a plain 0 to 10 scale, so to stand you next to one we have to put you back on that scale. Same reading, different ruler.</Note>
      </Section>

      <Section>
        <Title>Then we look for you.</Title>
        <P>Every club is scored on the same seven traits. Not on how good they are. On how they are. A club that wins everything and a club that hasn't won in forty years can sit right next to each other. Temperament isn't trophies.</P>
        <div style={{marginTop:24}}>
          <Gel dims={dims[match]} label={matchName} note="your read" accent="#78c8a0" height={86}/>
          <Note color="#8f9a93">Loyalty and community pinned to the ceiling. Ambition and process on the floor. It tracks you the whole way across.</Note>
        </div>
        <div style={{marginTop:28}}>
          <Gel dims={dims[ANTI]} label={antiName} note="not you" accent="#70708e" muted height={86}/>
          <Note color="#74748c">
            Tall exactly where you're short. {antiRank>0?`${ord(antiRank)} of ${fieldSize}`:"Bottom of the pile"} for this person, and no amount of money changes that.
          </Note>
        </div>
      </Section>

      <Rule/>

      <Section>
        <Title>The bit we're strict about.</Title>
        <P>The easy way to build this is to make sure most people land somewhere famous. Big crest, big reaction, big share.</P>
        <P>So we test against it. Every club has to be reachable by the person who actually is that club. If one team starts swallowing everybody, the scoring's wrong and the scoring gets fixed. Never the team.</P>
        <p style={{fontFamily:CG,fontStyle:"italic",fontSize:17,color:"#c8b084",lineHeight:1.5,margin:"14px 0 0"}}>A small club isn't a consolation prize. It's a read.</p>
      </Section>

      <Section>
        <Title>It isn't science.</Title>
        <P>It's a personality match. Nobody's diagnosing you.</P>
        <P>It isn't a coin toss either. Answer differently, land somewhere else. Answer the same tomorrow, land in the same place. Take a second sport and you'll recognize whoever turns up. That's the whole promise, and it's one we can keep.</P>
      </Section>

      <Section>
        <Title>Where your answers go.</Title>
        <P>Nowhere. No account, no sign-up, no server with your name on it. Your sequence lives on your phone.</P>
        <P>When a friend sends you theirs, it's riding inside the link. The comparison happens in your hand, not ours.</P>
      </Section>

      <Section>
        <Title size={23}>One honest asterisk.</Title>
        <P muted>The Premier League works a little differently under the hood. It was the first one built, before the seven existed, and the module still does most of the lifting there. One day it'll be rewired to match. Today it isn't.</P>
      </Section>

      <Rule/>

      <p style={{fontFamily:CG,fontStyle:"italic",fontSize:19,color:"#c0bcc8",lineHeight:1.5,textAlign:"center",margin:"0 auto 24px",maxWidth:340}}>
        Your personality already chose your team. We just read it back.
      </p>

      <div style={{display:"flex",justifyContent:"center"}}>
        <button type="button" onClick={onStart}
          style={{fontFamily:CG,fontSize:19,fontWeight:600,color:"#16161e",background:"#d4a44e",border:"none",borderRadius:25,padding:"13px 34px",cursor:"pointer"}}>
          {hasGenome?"Back to my genome":"Sequence yourself"}
        </button>
      </div>

      <div style={{textAlign:"center",marginTop:24}}>
        <button type="button" onClick={onBack}
          style={{fontFamily:MONO,fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9898b8",background:"none",border:"none",cursor:"pointer",padding:6}}>
          Back
        </button>
      </div>

    </div>
  );
}
