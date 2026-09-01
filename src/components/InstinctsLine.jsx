// FanDNA - InstinctsLine: surfaces the shared SPINE (the 7 cross-sport gut calls) back to the
// taker on the genome home hero and the result screen. Reads the cached spineAnswers (S1..S7,
// answered once, stored the same way as the core) and never touches scoring.
//
// Resting state is one calm row: a label + a plain descriptor + a chevron disc (the "open me"
// signal). Tapping it reveals the seven calls with the taker's own answer highlighted; the two
// slider calls show where their dot landed between the poles. If the taker has no spine answers
// yet (an old genome, or only bespoke leagues taken), the whole line renders nothing.
//
// When an onRetake handler is supplied (the home hero), a small retake disc sits beside the
// expand chevron. Tapping it opens a two-step confirm in place; confirming re-answers the seven
// and recomputes the taken leagues. It is never shown where onRetake is absent (e.g. the result
// screen), so those surfaces stay display-only.
//
// All copy here is user-facing: sentence case, periods only, no em dashes.

import { useState } from "react";
import { spineQuestions, SPINE_IDS } from "../data/spine";

// Short restatement of each canonical spine question, so the highlighted answer has context
// without dumping the full stem. Per-question (not per-answer).
const PROMPTS = {
  S1: "When something you gave years to lets you down",
  S2: "When it all comes down to one moment",
  S3: "How much winning it all matters",
  S4: "Where you feel most like yourself",
  S5: "What really carries a win",
  S6: "The way you'd get to the top",
  S7: "The position that suits you",
};

// Short pole labels for the two slider calls (the full stems are long; these read on one line).
const SLIDER_POLES = {
  S3: { left: "the very top", right: "the love of it" },
  S4: { left: "deep roots",   right: "wherever it's next" },
};

const BY_ID = {};
for (const q of spineQuestions) BY_ID[q.id] = q;

// A slider answer is stored 1..5 (1 = full left, 5 = full right); also tolerate "left"/"right".
function sliderPct(v){
  if (v === "left")  return 0;
  if (v === "right") return 100;
  const n = parseInt(v, 10);
  if (isNaN(n)) return 50;
  return Math.max(0, Math.min(100, ((n - 1) / 4) * 100));
}

// Turn cached spineAnswers into the ordered calls to render (answered slots only).
function readInstincts(spineAnswers){
  if (!spineAnswers) return [];
  const out = [];
  for (const id of SPINE_IDS){
    const ans = spineAnswers[id];
    if (ans === undefined || ans === null || ans === "") continue;
    const q = BY_ID[id];
    if (!q) continue;
    if (q.type === "slider"){
      const poles = SLIDER_POLES[id] || { left: q.left, right: q.right };
      out.push({ id, prompt: PROMPTS[id] || q.question, type: "slider",
                 pct: sliderPct(ans), left: poles.left, right: poles.right });
    } else {
      const opt = (q.options || []).find(o => o.value === ans);
      out.push({ id, prompt: PROMPTS[id] || q.question, type: "choice",
                 answer: opt ? opt.label : "" });
    }
  }
  return out;
}

const ACCENT = "#9280c6";

export function InstinctsLine({ spineAnswers, onRetake }){
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);   // two-step guard on the retake
  const calls = readInstincts(spineAnswers);
  if (!calls.length) return null;

  return (
    <div style={{border:"1px solid #2a2740",borderRadius:9,padding:"12px 13px",background:"rgba(146,128,198,0.05)",marginTop:13}}>

      <div role="button" tabIndex={0} aria-expanded={open}
        aria-label={open ? "Hide your instincts" : "Read your instincts, the seven calls behind every team"}
        onClick={()=>setOpen(o=>!o)}
        onKeyDown={(e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); setOpen(o=>!o); } }}
        style={{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
        <div>
          <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#a79ccb",letterSpacing:"0.26em",textTransform:"uppercase"}}>Your instincts</span>
          {!open && (
            <div style={{fontSize:12.5,color:"#a29cbb",marginTop:7,lineHeight:1.45}}>The seven gut calls behind every team you get.</div>
          )}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
          {onRetake&&(
            <button type="button" aria-label="Retake your seven instincts"
              onClick={(e)=>{ e.stopPropagation(); setConfirm(c=>!c); }}
              style={{width:44,height:44,borderRadius:"50%",border:"none",background:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0,flexShrink:0}}>
              <span style={{width:30,height:30,borderRadius:"50%",border:`1px solid ${confirm?"#6a5f8a":"#4a4468"}`,background:confirm?"rgba(120,104,168,0.16)":"none",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#b9aee0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
              </svg>
              </span>
            </button>
          )}
          <div aria-hidden="true" style={{width:30,height:30,borderRadius:"50%",border:"1px solid #4a4468",display:"flex",alignItems:"center",justifyContent:"center",color:"#b9aee0",flexShrink:0}}>
            <svg width="12" height="12" viewBox="0 0 12 12" style={{transform:open?"rotate(180deg)":"none",transition:"transform .22s ease"}}>
              <path d="M2.5 4.5 L6 8 L9.5 4.5" fill="none" stroke="#b9aee0" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Retake confirm (sibling of the clickable row so its taps never toggle the reveal) */}
      {onRetake&&confirm&&(
        <div style={{marginTop:12,borderTop:"1px solid #262238",paddingTop:12}}>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontSize:14,color:"#b8b4c4",lineHeight:1.5,marginBottom:10}}>Re-answer your seven instincts? Your leagues recompute against your new answers.</div>
          <div style={{display:"flex",gap:22,alignItems:"center"}}>
            <button type="button" onClick={()=>{setConfirm(false);onRetake&&onRetake();}}
              style={{color:"#d4a44e",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",background:"none",border:"none",cursor:"pointer",padding:"2px 0"}}>Retake</button>
            <button type="button" onClick={()=>setConfirm(false)}
              style={{color:"#7f7f9f",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",background:"none",border:"none",cursor:"pointer",padding:"2px 0"}}>Cancel</button>
          </div>
        </div>
      )}

      {open && (
        <div style={{marginTop:12,borderTop:"1px solid #262238",paddingTop:12,display:"flex",flexDirection:"column",gap:11}}>
          {calls.map(c=>(
            <div key={c.id}>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"#7c7796",marginBottom: c.type==="slider"?5:4}}>{c.prompt}</div>
              {c.type==="choice" ? (
                <div style={{fontSize:12.5,lineHeight:1.4,color:"#ded8ee",borderLeft:`2px solid ${ACCENT}`,background:"rgba(146,128,198,0.09)",padding:"6px 9px",borderRadius:"0 6px 6px 0"}}>{c.answer}</div>
              ) : (
                <>
                  <div style={{position:"relative",height:4,background:"#2b2b3a",borderRadius:2,margin:"0 2px"}}>
                    <div style={{position:"absolute",left:`${c.pct}%`,top:"50%",transform:"translate(-50%,-50%)",width:12,height:12,borderRadius:"50%",background:ACCENT}}/>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:5,fontSize:10,color:"#8a8ab0"}}>
                    <span style={{color:c.pct<=50?"#c8c2dc":"#8a8ab0"}}>{c.left}</span>
                    <span style={{color:c.pct>50?"#c8c2dc":"#8a8ab0"}}>{c.right}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
