// FanDNA - CrestEarn: the one loud beat when a bucket completes.
//
// Fires on the result screen the instant the club that finishes a bucket lands. The group strand
// hex assembles top down (the rungs land in order), a soft gold pulse blooms behind it, and the
// label rises. It HOLDS on Share / Done - never auto-dismisses, because it is earned. With reduced
// motion we skip the assemble and simply present the finished crest.
//
// Display-only: it draws the strand from the collected clubs' colours (via HexBadge) and imports
// nothing from scoring. All copy here is user-facing, so: no em dashes.

import { HexBadge } from "./HexBadge";

const KEYFRAMES = `
@keyframes ceWipe{0%{opacity:1;clip-path:inset(0 0 100% 0);}100%{opacity:1;clip-path:inset(0 0 0 0);}}
@keyframes ceGlow{0%{opacity:0;transform:scale(0.6);}45%{opacity:1;}70%{opacity:0.55;transform:scale(1.05);}100%{opacity:0.5;transform:scale(1);}}
@keyframes ceRise{0%{opacity:0;transform:translateY(9px);}100%{opacity:1;transform:translateY(0);}}
@keyframes ceFade{0%{opacity:0;}100%{opacity:1;}}
`;

export function CrestEarn({ family, clubColors, reducedMotion=false, onShare, onDone }){
  if(!family || !clubColors || !clubColors.length) return null;

  const rm = !!reducedMotion;
  const anim = (name, dur, delay) => rm ? "none" : `${name} ${dur}s ease ${delay}s both`;
  const label = family.label || "Bucket";
  const count = clubColors.length;

  const btn = {
    fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:"0.14em",
    textTransform:"uppercase", padding:"11px 22px", borderRadius:8, cursor:"pointer",
  };

  return (
    <div role="dialog" aria-label={`${label} crest earned`}
      style={{
        position:"fixed", inset:0, zIndex:80,
        background:"rgba(9,9,15,0.94)",
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
        padding:"24px", textAlign:"center",
        animation: rm ? "none" : "ceFade 0.3s ease both",
      }}>
      <style>{KEYFRAMES}</style>

      <div style={{position:"relative", width:150, height:150, display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div aria-hidden="true" style={{
          position:"absolute", width:150, height:150, borderRadius:"50%",
          background:"radial-gradient(circle,#e8c46e55 0%,#e8c46e18 42%,transparent 68%)",
          opacity: rm ? 0.5 : 0, animation: anim("ceGlow", 1.8, 0.55),
        }}/>
        <div style={{position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center",
          animation: anim("ceWipe", 0.62, 0.18)}}>
          <HexBadge kind="group" clubColors={clubColors} size={132} title={`${label} crest`}/>
        </div>
      </div>

      <div style={{marginTop:22, opacity: rm ? 1 : 0, animation: anim("ceRise", 0.5, 0.62),
        fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:"0.34em", textTransform:"uppercase", color:"#c9a95e"}}>
        Bucket complete
      </div>
      <div style={{marginTop:8, opacity: rm ? 1 : 0, animation: anim("ceRise", 0.5, 0.62),
        fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:34, color:"#ece7de", letterSpacing:"-0.01em", lineHeight:1}}>
        {label} crest
      </div>
      <div style={{marginTop:8, opacity: rm ? 1 : 0, animation: anim("ceRise", 0.5, 0.78),
        fontFamily:"'Cormorant Garamond',Georgia,serif", fontStyle:"italic", fontSize:16, color:"#a6a2b6"}}>
        {count} leagues sequenced. One family, whole.
      </div>

      <div style={{marginTop:26, display:"flex", gap:10, opacity: rm ? 1 : 0, animation: anim("ceRise", 0.5, 0.98)}}>
        <button onClick={onShare} style={{...btn, background:"#e8c46e", color:"#2a220e", border:"none"}}>Share</button>
        <button onClick={onDone}  style={{...btn, background:"none", color:"#9898b8", border:"0.5px solid #3f3f55"}}>Done</button>
      </div>
    </div>
  );
}
