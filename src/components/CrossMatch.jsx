// FanDNA - CrossMatch: the compare-to-your-club block at the foot of the Almost You tab.
// You name the club you actually support; this points the SAME pick at it and reports where it
// placed for you, how many answers you would have to change to land it, and which answers pulled
// toward it versus toward the club you matched. Alignment, never a bar-vs-bar overlay. The result
// numbers come straight from the engine (scoring.crossMatch), nothing is invented here.
// All copy is user-facing, so: no em dashes. Words like the worn item (shirt / jersey / cap) and
// the noun (club / franchise / ballclub) come from the per-sport voice; renders nothing without an answer set.

import { useState, useMemo } from "react";
import { crossMatch, decompressProfile } from "../lib/scoring";
import { DIM_ORDER, DIM_LABELS } from "../data/core";

// A team's emoji is only usable if it is actually a glyph. The White Sox carried the TEXT badge
// "SOX", which rendered here as raw letters where a crest should be. Any badge containing a
// plain-keyboard character is not an emoji: drop it and let the row read as name-only. The four
// gated leagues have badge data that has never once been rendered, so the guard lives in the code.
const glyphOnly = (b) => (b && [...b].every(c => c.codePointAt(0) > 127)) ? b : "";

const SERIF = "'Cormorant Garamond',Georgia,serif";
const MONO = "'DM Mono',monospace";

// Per-sport voice. Defaults reproduce the PL wording exactly; App passes the active sport's row.
const DEFAULT_VOICE = {
  noun: "club", worn: "shirt", team: "club", teams: "clubs",
  league: "Premier League", leagueAbbr: "PL",
  xmHeader: "Already have a favourite club?",
  xmEscape: "I don't support a Premier League club",
};

function placeWord(rank, flips){
  if (rank == null) return "";
  if (rank <= 4) return "one of your nearest misses";
  if (rank <= 8) return "close, but not your closest";
  // Far by the ranking, but the flip-count sentence sits directly below this line: a team a change
  // or two would flip can never honestly read as "a long way off". Cap the wording by the flips so
  // the headline and the "changing N answers" sentence can never contradict each other.
  if (flips != null && flips <= 2) return "closer than the ranking shows";
  if (flips != null && flips <= 5) return "a way off your match";
  if (rank <= 15) return "a way off your match";
  return "a long way from your match";
}
// Verdict line, keyed to rank using the same buckets as placeWord, so the headline ("a long way")
// and the verdict ("the X and the DNA ...") always tell one story on every sport. Flip-count is
// not used for the verdict: it can run small even for a far-placed team, which is what made the
// headline and the verdict contradict before.
function rankVerdict(rank, worn, flips){
  if (rank == null) return "";
  if (rank <= 4) return "The " + worn + " and the DNA nearly agree.";
  if (rank <= 8) return "The " + worn + " and the DNA mostly line up.";
  // Same cap as placeWord: a couple of changes away is not "says one thing ... says another".
  if (flips != null && flips <= 2) return "The " + worn + " and the DNA are closer than they look.";
  if (flips != null && flips <= 5) return "The " + worn + " and the DNA pull different ways.";
  if (rank <= 15) return "The " + worn + " and the DNA pull different ways.";
  return "Your " + worn + " says one thing, your DNA says another.";
}

// Adaptive headline colour: clubs keep their own colour unless the two are too close to tell
// apart (red-vs-red, blue-vs-blue), in which case the supported side falls back to bone so the
// "shirt vs DNA" split always reads. The DNA (matched) side always keeps the result colour.
const BONE = "#cfc9c1";
function hexToRgb(h){
  const m = /^#?([0-9a-f]{6})$/i.exec(h || "");
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function tooClose(a, b){
  const ra = hexToRgb(a), rb = hexToRgb(b);
  if (!ra || !rb) return false;
  const d = Math.sqrt((ra[0]-rb[0])**2 + (ra[1]-rb[1])**2 + (ra[2]-rb[2])**2);
  return d < 120;
}

function TipGroup({ title, color, tips }){
  if (!tips || tips.length === 0) return null;
  return (
    <div style={{marginTop:4}}>
      <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color,margin:"18px 0 2px"}}>{title}</div>
      {tips.map((t,i)=>(
        <div key={i} style={{display:"flex",gap:11,padding:"11px 0",borderTop:i===0?"none":"1px solid #242433"}}>
          <span style={{width:7,height:7,borderRadius:"50%",background:color,marginTop:8,flexShrink:0,boxShadow:`0 0 7px ${color}`}}/>
          <div>
            <div style={{fontFamily:MONO,fontSize:9.5,letterSpacing:"0.08em",textTransform:"uppercase",color:"#8585b4",marginBottom:5,lineHeight:1.4}}>{(t.question||"").replace(/\s*:\s*$/,"")}</div>
            <div style={{fontFamily:SERIF,fontSize:17,lineHeight:1.3,color:"#e4ddd4"}}>{t.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// The three-dot split. ENGINE-SPACE, the only space in which a comparative claim between two
// clubs is honest: the user's core after decompressProfile() (the stretch the matcher applies)
// against each club's RAW 0-10 teamDims, all on one shared 0-10 axis. "Nearer dot = nearer club"
// is then true by construction, because it IS the measurement.
//
// Rows are sorted by where the two CLUBS disagree most (|matched - supported|, descending), so
// the chart tells the story unaided: here are the traits these two are nothing alike on, and look
// which one your dot is standing beside. The connector bar spans the two club dots, so the size of
// their argument is visible and your ring shows which end of it you are at.
//
// Deliberately NO align/diverge split (with three dots "aligned" is ambiguous: aligned with whom?)
// and deliberately NO "nearer on N of 7" count. A row count is a DIFFERENT statistic from the
// Euclidean distance the engine actually minimises, and over 22,861 measured pairs it declared the
// supported club nearer while the engine matched the other one 4.8% of the time. Ties are also the
// norm, not the exception (67.2% of pairs have at least one dead-level trait), and a count either
// swallows them or rounds them in the match's favour. The engine's own facts (where it placed, how
// many answers would flip it) carry the verdict; the chart carries the shape. Display-only.
function SplitChart({ you, matched, supported, matchedName, supportedName, matchedColor, supportedColor, teamsWord="clubs" }){
  if (!you || !matched || !supported) return null;
  const YOU = "#e8e4de";
  const rows = DIM_ORDER.map(k => ({
    k, label: DIM_LABELS[k],
    you: +you[k] || 0, m: +matched[k] || 0, s: +supported[k] || 0,
    gap: Math.abs((+matched[k] || 0) - (+supported[k] || 0)),
  })).sort((a,b) => b.gap - a.gap);

  const xp = (v) => 3 + (Math.max(0, Math.min(10, +v || 0)) / 10) * 94;

  return (
    <Card>
      <Eyebrow>Where the two {"" + (supportedName ? "clubs" : "clubs")} split</Eyebrow>
      <div style={{fontFamily:SERIF,fontSize:15,fontStyle:"italic",color:"#8a8ab0",margin:"-6px 0 12px"}}>and which one you are standing next to</div>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",fontFamily:MONO,fontSize:10,color:"#9696b4",marginBottom:12}}>
        <span><i style={{display:"inline-block",width:11,height:11,borderRadius:"50%",background:"#12121c",border:`2px solid ${YOU}`,marginRight:6,verticalAlign:"-2px"}}/>you</span>
        <span><i style={{display:"inline-block",width:11,height:11,borderRadius:"50%",background:matchedColor,marginRight:6,verticalAlign:"-2px"}}/>{matchedName}</span>
        <span><i style={{display:"inline-block",width:11,height:11,borderRadius:"50%",background:supportedColor,marginRight:6,verticalAlign:"-2px"}}/>{supportedName}</span>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:12,margin:"0 0 2px"}}>
        <span style={{width:104,flexShrink:0}}/>
        <div style={{flex:1,display:"flex",justifyContent:"space-between",fontFamily:MONO,fontSize:9,letterSpacing:"0.08em",color:"#7e7e9f"}}><span>0</span><span>10</span></div>
      </div>
      {rows.map(r => {
        const lo = Math.min(xp(r.m), xp(r.s)), hi = Math.max(xp(r.m), xp(r.s));
        return (
          <div key={r.k} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0"}}>
            <span style={{fontFamily:SERIF,fontSize:15,color:"#d8d4ce",width:104,flexShrink:0,lineHeight:1.2}}>{r.label}</span>
            <div style={{position:"relative",flex:1,height:16}}>
              <div style={{position:"absolute",top:7,left:0,right:0,height:2,background:"#1c1c28",borderRadius:2}}/>
              <div style={{position:"absolute",top:7,left:`${lo}%`,width:`${hi-lo}%`,height:2,background:"#3a3a50",borderRadius:2}}/>
              {/* When the two clubs land on the SAME number they have no argument here, and drawing
                  one opaque dot over the other simply deleted the club underneath. One split dot,
                  half each colour, says "these two agree" without hiding either of them. */}
              {r.m===r.s ? (
                <span style={{position:"absolute",top:2,left:`${xp(r.m)}%`,transform:"translateX(-50%)",width:12,height:12,borderRadius:"50%",background:`linear-gradient(90deg, ${supportedColor} 0 50%, ${matchedColor} 50% 100%)`,boxShadow:`0 0 6px ${matchedColor}66`}}/>
              ) : (<>
                <span style={{position:"absolute",top:2,left:`${xp(r.s)}%`,transform:"translateX(-50%)",width:12,height:12,borderRadius:"50%",background:supportedColor,boxShadow:`0 0 6px ${supportedColor}88`}}/>
                <span style={{position:"absolute",top:2,left:`${xp(r.m)}%`,transform:"translateX(-50%)",width:12,height:12,borderRadius:"50%",background:matchedColor,boxShadow:`0 0 6px ${matchedColor}88`}}/>
              </>)}
              {/* Transparent ring: an opaque one painted over a club dot sitting at the same value,
                  so a dead-exact trait match rendered as a vanished dot. */}
              <span style={{position:"absolute",top:0,left:`${xp(r.you)}%`,transform:"translateX(-50%)",width:16,height:16,borderRadius:"50%",background:"transparent",border:`2px solid ${YOU}`,boxSizing:"border-box"}}/>
            </div>
          </div>
        );
      })}
    </Card>
  );
}

function Card({ children }){
  return <div style={{background:"#1e1e2e",border:"1px solid #2a2a3a",borderRadius:14,padding:"18px 16px",marginTop:18}}>{children}</div>;
}
function Eyebrow({ children }){
  return <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#8484b0",marginBottom:13}}>{children}</div>;
}

export function CrossMatch({ sport, input, teams, teamDims = {}, coreProfile, teamTextColors = {}, matchedCode, matchedName, matchedColor = "#b8567a", voice }){
  const [supported, setSupported] = useState(null); // club code, "NONE", or null
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  if (!input) return null;
  const v = { ...DEFAULT_VOICE, ...(voice || {}) };

  const colorOf = (code) => teamTextColors[code] || (teams[code] && teams[code].color) || "#9696b4";
  const clubs = Object.entries(teams)
    .map(([code,t]) => ({ code, name:t.name, emoji:glyphOnly(t.emoji), color:colorOf(code) }))
    .sort((a,b)=>a.name.localeCompare(b.name));

  const data = useMemo(
    () => (supported && supported !== "NONE") ? crossMatch(sport, input, supported) : null,
    [supported, sport, input]
  );

  // supported side keeps its colour unless it collides with the matched colour, then bone
  const supAccent = (data && !data.isMatch)
    ? (tooClose(colorOf(data.supported), matchedColor) ? BONE : colorOf(data.supported))
    : matchedColor;

  const pick = (code) => { setSupported(code); setOpen(false); setQuery(""); };
  const chosen = supported && supported !== "NONE" ? clubs.find(c=>c.code===supported) : null;

  const q = query.toLowerCase();
  const filtered = clubs.filter(c => c.name.toLowerCase().includes(q));
  const showEscape = !q || v.xmEscape.toLowerCase().replace(/'/g,"").includes(q.replace(/'/g,""));

  return (
    <div style={{marginTop:24,paddingTop:24,borderTop:"1px solid #2a2a3a"}}>
      <h2 style={{fontFamily:SERIF,fontSize:26,color:"#efe9e3",lineHeight:1.2,margin:"0 0 16px",fontWeight:600}}>{v.xmHeader}</h2>

      <button onClick={()=>setOpen(o=>!o)} aria-haspopup="listbox" aria-expanded={open}
        style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#1e1e2e",border:"1px solid #2a2a3a",borderRadius:12,padding:"15px 16px",color:chosen?"#efe9e3":"#9696b4",fontFamily:MONO,fontSize:14,cursor:"pointer"}}>
        <span style={{display:"flex",alignItems:"center",gap:10}}>
          {chosen
            ? (<><span style={{fontSize:20}}>{chosen.emoji}</span><span>{chosen.name}</span></>)
            : (supported==="NONE" ? <span>No {v.leagueAbbr} {v.team}</span> : <span>Pick your {v.team}</span>)}
        </span>
        <span style={{color:"#8484b0",fontSize:12}}>{open?"\u25B4":"\u25BE"}</span>
      </button>

      {open && (
        <div style={{marginTop:10,background:"#1e1e2e",border:"1px solid #2a2a3a",borderRadius:12,overflow:"hidden"}}>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder={"Search "+v.teams} autoComplete="off"
            aria-label={"Search "+v.teams}
            style={{width:"100%",border:"none",background:"#191922",color:"#efe9e3",fontFamily:MONO,fontSize:14,padding:"14px 16px",borderBottom:"1px solid #2a2a3a"}}/>
          <div style={{maxHeight:320,overflowY:"auto"}}>
            {filtered.map((c,i)=>(
              <button type="button" key={c.code} onClick={()=>pick(c.code)}
                style={{width:"100%",textAlign:"left",background:"none",display:"flex",alignItems:"center",gap:11,padding:"12px 16px",cursor:"pointer",border:"none",borderTop:i===0?"none":"1px solid #242433"}}>
                <span style={{fontSize:20,width:24,textAlign:"center"}}>{c.emoji}</span>
                <span style={{flex:1,fontSize:15,color:"#c8c4be"}}>{c.name}</span>
                <span style={{width:9,height:9,borderRadius:"50%",background:c.color}}/>
              </button>
            ))}
            {showEscape && (
              <button type="button" onClick={()=>pick("NONE")}
                style={{width:"100%",textAlign:"left",background:"none",display:"flex",alignItems:"center",gap:11,padding:"12px 16px",cursor:"pointer",border:"none",borderTop:filtered.length?"1px solid #242433":"none"}}>
                <span style={{fontSize:18,width:24,textAlign:"center",color:"#8484b0"}}>{"\u00B7"}</span>
                <span style={{flex:1,fontSize:16,color:"#9696b4",fontStyle:"italic",fontFamily:SERIF}}>{v.xmEscape}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {supported === "NONE" && (
        <div style={{marginTop:22,background:"#1e1e2e",border:"1px solid #2a2a3a",borderRadius:14,padding:"22px 18px"}}>
          <div style={{fontFamily:SERIF,fontSize:21,color:"#efe9e3",marginBottom:8,lineHeight:1.3}}>No {v.team} named, nothing to line up.</div>
          <p style={{fontSize:14,color:"#c8c4be",lineHeight:1.6,margin:0}}>The compare reads your {v.noun} against your DNA. With no {v.league} {v.team} to point at, there is nothing to compare yet. When more sports go live, this becomes a cross-sport read.</p>
        </div>
      )}

      {data && (
        <div style={{marginTop:24}}>
          {data.isMatch ? (
            <>
              <div style={{fontFamily:SERIF,fontSize:34,fontWeight:600,lineHeight:1.12,letterSpacing:"-.01em",color:matchedColor}}>The {v.worn} and the DNA agree.</div>
              <p style={{fontSize:14.5,color:"#c8c4be",lineHeight:1.55,margin:"14px 0 0"}}>You support {matchedName}, and the quiz lands you there too. That agreement is rarer than it sounds.</p>
              <Card>
                <Eyebrow>How close it came</Eyebrow>
                <p style={{fontFamily:SERIF,fontSize:21,color:"#efe9e3",lineHeight:1.3,margin:"0 0 10px"}}>Nothing else gets near it.</p>
                <p style={{fontSize:15,color:"#c8c4be",lineHeight:1.6,margin:0}}>No {v.noun} comes within reach. Every read points the same way.</p>
                <div style={{fontFamily:MONO,fontSize:11,letterSpacing:"0.04em",color:"#9696b4",marginTop:11}}>The {v.noun} you chose and the {v.noun} you are, the same answer.</div>
              </Card>
              <Card>
                <Eyebrow>What sealed it</Eyebrow>
                <TipGroup title={`Toward ${matchedName}`} color={matchedColor} tips={data.towardMatch}/>
              </Card>
            </>
          ) : (
            <>
              <div style={{fontFamily:SERIF,fontSize:34,fontWeight:600,lineHeight:1.12,letterSpacing:"-.01em",color:"#d8d4ce"}}>
                <span style={{color:supAccent}}>{chosen ? chosen.name : data.supported}</span> on the {v.worn},<br/>
                <span style={{color:matchedColor}}>{matchedName}</span> in the DNA.
              </div>
              <p style={{fontSize:14.5,color:"#c8c4be",lineHeight:1.55,margin:"14px 0 0"}}>You support {chosen ? chosen.name : data.supported}, but the way you actually follow the game reads as {matchedName}.</p>
              {(coreProfile && teamDims[matchedCode] && teamDims[data.supported]) && (
                <SplitChart
                  you={decompressProfile(coreProfile)}
                  matched={teamDims[matchedCode]}
                  supported={teamDims[data.supported]}
                  matchedName={matchedName}
                  supportedName={chosen ? chosen.name : data.supported}
                  matchedColor={matchedColor}
                  supportedColor={supAccent}
                />
              )}
              <Card>
                <Eyebrow>How close it came</Eyebrow>
                <p style={{fontFamily:SERIF,fontSize:21,color:"#efe9e3",lineHeight:1.3,margin:"0 0 10px"}}>{chosen ? chosen.name : data.supported} was {placeWord(data.rank, data.changeToLand)}.</p>
                {data.changeToLand == null ? (
                  <p style={{fontSize:15,color:"#c8c4be",lineHeight:1.6,margin:0}}>Nothing you could change lands {chosen ? chosen.name : data.supported}. The DNA points firmly to {matchedName}.</p>
                ) : (
                  <p style={{fontSize:15,color:"#c8c4be",lineHeight:1.6,margin:0}}>It would take changing <b style={{color:"#efe9e3",fontWeight:500,fontFamily:SERIF,fontSize:18}}>{data.changeToLand} of your {data.totalAnswers} answers</b> to land {chosen ? chosen.name : data.supported} instead.</p>
                )}
                <div style={{fontFamily:MONO,fontSize:11,letterSpacing:"0.04em",color:"#9696b4",marginTop:11}}>{data.changeToLand == null ? "As far apart as the "+v.worn+" and the DNA get." : rankVerdict(data.rank, v.worn, data.changeToLand)}</div>
              </Card>
              <Card>
                <Eyebrow>What tipped which way</Eyebrow>
                {(data.towardSupported && data.towardSupported.length > 0)
                  ? <TipGroup title={`Pulled toward ${chosen ? chosen.name : data.supported}`} color={supAccent} tips={data.towardSupported}/>
                  : (
                    <div style={{marginTop:4}}>
                      <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:supAccent,margin:"18px 0 2px"}}>Pulled toward {chosen ? chosen.name : data.supported}</div>
                      <div style={{fontFamily:SERIF,fontStyle:"italic",fontSize:15,color:"#8a8aac",lineHeight:1.4,padding:"11px 0 2px"}}>Nothing in your answers pulled toward {chosen ? chosen.name : data.supported}. Where it placed comes from your core DNA, not your picks.</div>
                    </div>
                  )}
                {(data.towardMatch && data.towardMatch.length > 0)
                  ? <TipGroup title={`Pulled you to ${matchedName} instead`} color={matchedColor} tips={data.towardMatch}/>
                  : (
                    <div style={{marginTop:4}}>
                      <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:matchedColor,margin:"18px 0 2px"}}>Pulled you to {matchedName} instead</div>
                      <div style={{fontFamily:SERIF,fontStyle:"italic",fontSize:15,color:"#8a8aac",lineHeight:1.4,padding:"11px 0 2px"}}>Nothing in your answers pulled toward {matchedName}. The match comes from your core DNA, not your picks.</div>
                    </div>
                  )}
              </Card>
            </>
          )}
        </div>
      )}
    </div>
  );
}
