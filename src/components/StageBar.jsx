// FanDNA - StageBar: the named, staged progress bar for the quiz and the core reveal.
// A first full take runs three stages - Core, Instincts, then the sport module - and this
// bar names all three so the taker can see the shape of the test at a glance (the old bar
// folded instincts silently into "Your core" and named nothing). A module-only retake shows
// just the league stage; a core or instincts re-sequence shows just its one stage. V2 read:
// the live stage glows and a dot marks the fill front, the current stage's label brightens,
// finished stages sit fully filled. Display-only; nothing here touches scoring.
//
// stages: [{ key, label, color, labelColor, frac (0..1), state: "done"|"active"|"upcoming" }]

const KEYFRAMES = `
@keyframes sbDot{0%,100%{opacity:1;transform:translate(-50%,-50%) scale(1);}50%{opacity:.45;transform:translate(-50%,-50%) scale(1.65);}}
@media (prefers-reduced-motion: reduce){ .sb-dot{ animation:none !important; } }
`;

export function StageBar({ stages }){
  if(!stages || !stages.length) return null;
  const totalLen = stages.reduce((a,s)=>a+(s.len||1),0);
  const align = (i)=> i===0 ? "left" : i===stages.length-1 ? "right" : "center";

  return (
    <div style={{marginBottom:24}}>
      <style>{KEYFRAMES}</style>

      {/* The bars */}
      <div style={{display:"flex",gap:16,height:8,alignItems:"center"}}>
        {stages.map((s)=>{
          const active = s.state==="active";
          const frac = Math.max(0,Math.min(1,s.frac||0));
          return (
            <div key={s.key} style={{flex:s.len||1,height:"100%",position:"relative"}}>
              {/* track */}
              <div style={{position:"absolute",inset:0,background:"#1e1e2e",borderRadius:3}}/>
              {/* fill */}
              <div style={{
                position:"absolute",top:0,left:0,bottom:0,width:`${frac*100}%`,
                background:s.color,borderRadius:3,transition:"width .3s ease",
                boxShadow: active ? `0 0 10px ${s.color}, 0 0 3px ${s.color}` : "none",
              }}/>
              {/* leading dot on the live stage */}
              {active&&(
                <span className="sb-dot" style={{
                  position:"absolute",top:"50%",left:`${frac*100}%`,
                  width:9,height:9,borderRadius:"50%",background:"#e8e4f0",
                  boxShadow:`0 0 8px ${s.color}`,transform:"translate(-50%,-50%)",
                  animation:"sbDot 1.6s ease-in-out infinite",
                }}/>
              )}
            </div>
          );
        })}
      </div>

      {/* The stage names */}
      <div style={{display:"flex",gap:16,marginTop:8,fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:"0.18em",textTransform:"uppercase"}}>
        {stages.map((s,i)=>{
          const on = s.state!=="upcoming";
          const color = s.state==="active" ? (s.labelColor||"#cfcbe6")
                      : s.state==="done"   ? (s.labelColor||"#8a8ac0")
                      : "#5a5a74";
          return (
            <span key={s.key} style={{
              flex:s.len||1,color,textAlign:align(i),
              fontWeight: s.state==="active" ? 500 : 400,
              opacity: on ? 1 : 0.75,
              overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",
            }}>{s.label}</span>
          );
        })}
      </div>
    </div>
  );
}
