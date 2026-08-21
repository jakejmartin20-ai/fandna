// FanDNA - CrestFinale: the collection-complete moment, the biggest beat.
//
// Fires on the result screen the instant the club that completes the THIRD bucket lands. The three
// earned bucket strand hexes assemble one after another under a gold bloom, the line rises, and the
// genome helix settles in at the bottom as a quiet through-line - yours since step one, never an
// earned crest. Holds on Share / Done. Reduced motion presents the finished set with no assemble.
//
// The genome is NOT "earned" here - the COLLECTION is complete. The line reads the person's own
// genome type, so it lands as "The Native, read in all of them". Display-only; reuses HexBadge and
// imports nothing from scoring. All copy is user-facing, so: no em dashes.

import { HexBadge } from "./HexBadge";

const KEYFRAMES = `
@keyframes cfWipe{0%{opacity:1;clip-path:inset(0 0 100% 0);}100%{opacity:1;clip-path:inset(0 0 0 0);}}
@keyframes cfGlow{0%{opacity:0;transform:scale(0.7);}55%{opacity:1;}100%{opacity:0.7;transform:scale(1);}}
@keyframes cfRise{0%{opacity:0;transform:translateY(9px);}100%{opacity:1;transform:translateY(0);}}
@keyframes cfThrough{0%{opacity:0;transform:translateY(9px);}100%{opacity:0.72;transform:translateY(0);}}
@keyframes cfFade{0%{opacity:0;}100%{opacity:1;}}
`;

export function CrestFinale({ groups, genomeProfile, typeName, reducedMotion=false, onShare, onDone }){
  if(!groups || !groups.length) return null;
  const rm = !!reducedMotion;
  const anim = (name, dur, delay) => rm ? "none" : `${name} ${dur}s ease ${delay}s both`;
  const type = typeName || "You";

  const btn = {
    fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:"0.14em",
    textTransform:"uppercase", padding:"11px 22px", borderRadius:8, cursor:"pointer",
  };

  return (
    <div role="dialog" aria-label="Collection complete"
      style={{
        position:"fixed", inset:0, zIndex:80,
        background:"rgba(9,9,15,0.95)",
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
        padding:"26px 18px", textAlign:"center", overflowY:"auto",
        animation: rm ? "none" : "cfFade 0.3s ease both",
      }}>
      <style>{KEYFRAMES}</style>

      <div style={{position:"relative", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div aria-hidden="true" style={{
          position:"absolute", width:300, height:180, borderRadius:"50%",
          background:"radial-gradient(ellipse,#e8c46e33 0%,#e8c46e10 46%,transparent 70%)",
          opacity: rm ? 0.7 : 0, animation: anim("cfGlow", 2, 0.7),
        }}/>
        <div style={{display:"flex", gap:14, justifyContent:"center", position:"relative"}}>
          {groups.map((g, i)=>(
            <div key={g.id} style={{display:"flex", flexDirection:"column", alignItems:"center", gap:6}}>
              <div style={{animation: anim("cfWipe", 0.55, 0.2 + i*0.25), opacity: rm ? 1 : 0}}>
                <HexBadge kind="group" clubColors={g.colors} size={74} title={`${g.label} crest`}/>
              </div>
              <div style={{opacity: rm ? 1 : 0, animation: anim("cfRise", 0.5, 1.0),
                fontFamily:"'DM Mono',monospace", fontSize:8, letterSpacing:"0.16em", textTransform:"uppercase", color:"#8a8560"}}>
                {g.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{marginTop:26, opacity: rm ? 1 : 0, animation: anim("cfRise", 0.5, 1.0),
        fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:"0.34em", textTransform:"uppercase", color:"#c9a95e"}}>
        Collection complete
      </div>
      <div style={{marginTop:8, opacity: rm ? 1 : 0, animation: anim("cfRise", 0.5, 1.0),
        fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:30, color:"#ece7de", letterSpacing:"-0.01em", lineHeight:1.1}}>
        Every league, mapped.
      </div>
      <div style={{marginTop:8, maxWidth:300, opacity: rm ? 1 : 0, animation: anim("cfRise", 0.5, 1.15),
        fontFamily:"'Cormorant Garamond',Georgia,serif", fontStyle:"italic", fontSize:15, color:"#a6a2b6", lineHeight:1.4}}>
        Three crests earned. {type}, read in all of them.
      </div>

      {genomeProfile && (
        <div style={{marginTop:24, display:"flex", flexDirection:"column", alignItems:"center", gap:4,
          opacity: rm ? 0.72 : 0, animation: anim("cfThrough", 0.6, 1.35)}}>
          <HexBadge kind="genome" profile={genomeProfile} size={46} title="Your genome"/>
          <div style={{fontFamily:"'DM Mono',monospace", fontSize:8, letterSpacing:"0.14em", textTransform:"uppercase", color:"#5a5a72"}}>
            Your genome &middot; yours since step one
          </div>
        </div>
      )}

      <div style={{marginTop:24, display:"flex", gap:10, opacity: rm ? 1 : 0, animation: anim("cfRise", 0.5, 1.55)}}>
        <button onClick={onShare} style={{...btn, background:"#e8c46e", color:"#2a220e", border:"none"}}>Share</button>
        <button onClick={onDone}  style={{...btn, background:"none", color:"#9898b8", border:"0.5px solid #3f3f55"}}>Done</button>
      </div>
    </div>
  );
}
