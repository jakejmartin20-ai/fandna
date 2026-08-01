// FanDNA - MatchEvidence: the proof block on the result. Two honest pieces.
//  1) Stress test (section="stability"): the same per-answer fact as ever, told as the
//     test it is. Every answer is swapped for every alternative, one at a time; "held"
//     counts the answers where no single change moves you off the team. Rendered inside
//     THE READOUT (chapter 04). The old cell strip and verdict line retired with the
//     Almost chapter; the readout's banded verdict (App.jsx) reads the margin instead.
//  2) What tipped it (section="why"): the three answers that pulled most distinctively
//     toward the team. Texture, not proof. They never claim exclusivity, so they can
//     never overclaim it.
// All copy here is user-facing, so: no em dashes. The structural noun (club / franchise /
// ballclub) comes from the per-sport voice; evidence.safe is null for any sport not yet
// wired, and we render nothing in that case.

const CORE_N = 24; // the shared core is 24 questions in every sport

export function MatchEvidence({ evidence, clubName, color = "#b8567a", noun = "club", moduleLabel = "", section }){
  if (!evidence || evidence.safe == null) return null;
  const { safe, total, tips = [] } = evidence;
  const club = clubName || "your club";
  const stripColon = (s) => (s || "").replace(/\s*:\s*$/, "");

  // Split held counts by layer when the real per-answer pattern is present. The evidence
  // locks array is ordered core-first (24), module after; without it we show the total only.
  let coreHeld = null, modHeld = null;
  if (Array.isArray(evidence.locks) && evidence.locks.length === total && total > CORE_N){
    coreHeld = evidence.locks.slice(0, CORE_N).filter(Boolean).length;
    modHeld = safe - coreHeld;
  }

  return (
    <div style={{marginTop: section ? 0 : 28}}>

      {section !== "why" && (<>
      {/* THE STRESS TEST, the proof */}
      <div style={{background:"#1e1e2e",border:"1px solid #2a2a3a",borderRadius:14,padding:"18px 16px"}}>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#8484b0",marginBottom:12}}>The match, stress-tested</div>
        <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(16px,3.6vw,18px)",fontWeight:300,color:"#e4ddd4",lineHeight:1.55,margin:0}}>
          We went back through all {total} of your answers, changing each one at a time. {club} held through {safe} of them.
        </p>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:"#9696b4",marginTop:12,letterSpacing:"0.06em"}}>
          {"held " + safe + " / " + total}
          {coreHeld != null && (" · core " + coreHeld + " of " + CORE_N + (moduleLabel ? " · " + moduleLabel + " " + modHeld + " of " + (total - CORE_N) : ""))}
        </div>
      </div>
      </>)}

      {/* WHAT TIPPED IT, the texture. When nothing stands out (a genuine broad match), a strong
          line says so on purpose, so the result never reads as bare. */}
      {section !== "stability" && (tips.length > 0 ? (
        <div style={{background:"#1e1e2e",border:"1px solid #2a2a3a",borderRadius:14,padding:"18px 16px",marginTop:16}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#8484b0",marginBottom:4}}>What tipped it</div>
          <p style={{fontSize:12.5,color:"#9696b4",lineHeight:1.45,margin:"0 0 12px"}}>The answers that pulled you hardest toward {club}.</p>
          {tips.map((t, i) => (
            <div key={i} style={{display:"flex",gap:12,padding:"13px 0",borderTop:i===0?"none":"1px solid #242433"}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:color,marginTop:7,flexShrink:0,boxShadow:`0 0 7px ${color}`}}/>
              <div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9.5,letterSpacing:"0.1em",textTransform:"uppercase",color:"#8585b4",marginBottom:5}}>{stripColon(t.question)}</div>
                <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:17,lineHeight:1.3,color:"#e4ddd4"}}>{t.answer}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{background:"#1e1e2e",border:"1px solid #2a2a3a",borderRadius:14,padding:"18px 16px",marginTop:16}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#8484b0",marginBottom:10}}>Why this lands</div>
          <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:19,lineHeight:1.45,color:"#e4ddd4",margin:0}}>This match runs deeper than any one answer. {club} is where your whole core settles, not a {noun} one choice tipped you into. A broad match like this is its own kind of strong.</p>
        </div>
      ))}

    </div>
  );
}
