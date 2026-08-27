// FanDNA - DumpView: a display-only export of the saved genome, gated behind the ?dump URL hook
// (the same mechanism as ?beach / ?ipl). Mobile browsers give no easy way to read localStorage,
// so this prints the whole saved answer sheet (coreAnswers + spineAnswers + every league's module
// answers + coreProfile) as copyable text, for pasting into a diagnosis. It imports NOTHING from
// the scoring path, reads storage only, and renders nothing anyone else ever sees. It cannot move
// a single match. Reachable only by adding ?dump to the URL; the public never lands here.

import { useState } from "react";
import { loadState, KEY } from "../lib/storage";

export function DumpView(){
  const [copied,setCopied]=useState(false);

  // Prefer the raw stored string so what you paste is byte-for-byte what the app saved; fall back
  // to the migrated object if the raw read fails for any reason.
  let text="";
  try {
    const raw = (typeof localStorage!=="undefined") ? localStorage.getItem(KEY) : null;
    const obj = raw ? JSON.parse(raw) : loadState();
    text = JSON.stringify(obj, null, 2);
  } catch(e){
    try { text = JSON.stringify(loadState(), null, 2); }
    catch(e2){ text = "(no saved FanDNA data found on this device)"; }
  }

  // A short human summary so you can eyeball that it is the right person's sheet before copying.
  let summary="";
  try {
    const st = loadState();
    const sports = Object.keys(st.results||{});
    const line = sports.map(s=>`${s}:${(st.results[s]&&st.results[s].club)||"?"}`).join("  ");
    summary = `core ${st.coreAnswers?"saved":"none"} \u00b7 instincts ${st.spineAnswers?"saved":"none"} \u00b7 ${sports.length} leagues\n${line}`;
  } catch(e){ summary=""; }

  function copy(){
    try {
      if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(()=>{ setCopied(true); setTimeout(()=>setCopied(false),1800); });
        return;
      }
    } catch(e){ /* fall through to manual select */ }
    // Fallback: select the textarea so a long-press "Copy" works on mobile.
    try {
      const ta=document.getElementById("fandna-dump-text");
      if(ta){ ta.focus(); ta.select(); document.execCommand&&document.execCommand("copy"); setCopied(true); setTimeout(()=>setCopied(false),1800); }
    } catch(e){}
  }

  const mono="'DM Mono','SFMono-Regular',Menlo,Consolas,monospace";

  return (
    <div style={{
      minHeight:"100vh", background:"#16161e", color:"#e8e8ef",
      padding:"28px 18px 60px", boxSizing:"border-box",
      display:"flex", flexDirection:"column", alignItems:"center",
      fontFamily:"'Georgia','Times New Roman',serif",
    }}>
      <div style={{width:"100%", maxWidth:520}}>
        <div style={{fontSize:28, letterSpacing:"0.5px", marginBottom:6}}>FanDNA data</div>
        <div style={{fontFamily:mono, fontSize:12, opacity:0.6, marginBottom:18}}>
          a display-only export &middot; nothing here is scored
        </div>

        {summary && (
          <pre style={{
            fontFamily:mono, fontSize:12, lineHeight:1.5, whiteSpace:"pre-wrap",
            background:"#1e1e28", border:"1px solid #2c2c3a", borderRadius:10,
            padding:"12px 14px", margin:"0 0 16px", opacity:0.85,
          }}>{summary}</pre>
        )}

        <button onClick={copy} style={{
          fontFamily:mono, fontSize:14, cursor:"pointer",
          background: copied ? "#2f6d4f" : "#3a3a4c", color:"#fff",
          border:"none", borderRadius:10, padding:"12px 18px",
          width:"100%", marginBottom:14, transition:"background 160ms",
        }}>{copied ? "Copied \u2713" : "Copy everything"}</button>

        <div style={{fontFamily:mono, fontSize:12, opacity:0.6, marginBottom:8}}>
          If the button does nothing, tap the box, Select All, Copy.
        </div>

        <textarea
          id="fandna-dump-text"
          readOnly
          value={text}
          onFocus={e=>{ try{ e.target.select(); }catch(x){} }}
          spellCheck={false}
          style={{
            width:"100%", height:340, boxSizing:"border-box",
            fontFamily:mono, fontSize:11, lineHeight:1.45,
            background:"#12121a", color:"#c9c9d6",
            border:"1px solid #2c2c3a", borderRadius:10, padding:"12px 14px",
            resize:"vertical", whiteSpace:"pre",
          }}
        />

        <div style={{marginTop:20}}>
          <a href="/" style={{fontFamily:mono, fontSize:13, color:"#8a8ad0", textDecoration:"none"}}>&larr; back to FanDNA</a>
        </div>
      </div>
    </div>
  );
}
