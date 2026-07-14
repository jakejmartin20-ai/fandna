// FanDNA - Compare screen. A friend's genome arrives packed on the share link; this screen
// decodes against the recipient's OWN saved genome and draws the right read. Teams are the
// headline, the seven-trait core is the lens, and the archetype name leads. Fully frictionless:
// "You" vs "Them", no name field. All display-only: nothing here can move a match.
//
// Routes: broken link, recruit (recipient has no genome), self (opened your own link), and the
// real compare. Compare picks a layout by how many leagues the two share (0 / 1 / 2+) and a skin
// by archetype relationship and same-vs-different team. US English, no em dashes in user copy.

import { SPORT_DATA } from "../lib/sportData";
import { SPORTS, sportName } from "../lib/manifest";
import { regOf } from "../lib/register";
import { ClubMark } from "../components/ClubMark";
import { CompareStrips } from "../components/CompareStrips";
import { sameGenome } from "../lib/compareCode";
import { archetypeLabel, bandModel, sportSplit, poleFor } from "../lib/compareRead";

const GOLD = "#d4a24c";
const ACCENT = "#d99a3c";
const CG = "'Cormorant Garamond',Georgia,serif";
const MONO = "'DM Mono',monospace";

const DIM_SHORT = {
  loyalty: "loyalty", emotion: "emotion", ambition: "ambition", process: "process",
  community: "community", chaos: "chaos", rootedness: "rootedness",
};

function teamOf(sport, club) {
  const sd = SPORT_DATA[sport];
  return (sd && sd.teams && sd.teams[club]) || null;
}
function teamName(sport, club) {
  const t = teamOf(sport, club);
  return (t && t.name) || club;
}
function liveSet() {
  const s = new Set();
  SPORTS.forEach(x => { if (x.live) s.add(x.code); });
  return s;
}
// First mapped club (manifest order) that resolves to a real team.
function headline(results) {
  for (const s of SPORTS) {
    const r = results && results[s.code];
    if (r && r.club && teamOf(s.code, r.club)) return { sport: s.code, club: r.club };
  }
  const k = Object.keys(results || {})[0];
  return k ? { sport: k, club: results[k].club } : null;
}

// ---- shared chrome ----------------------------------------------------------
function Header() {
  return (
    <div style={{ borderBottom: "1px solid #23232f", paddingBottom: 16, marginBottom: 22 }}>
      <span style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.18em", color: GOLD }}>FANDNA</span>
      <span style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.18em", color: "#6a6a86" }}> / COMPARE</span>
    </div>
  );
}
function Rule({ label }) {
  return (
    <div style={{ margin: "24px 0 16px" }}>
      <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "#8484b0", marginBottom: 8 }}>{label}</div>
      <div style={{ height: 1, background: "#23232f" }} />
    </div>
  );
}
function Hero({ children }) {
  return (
    <h1 style={{ fontFamily: CG, fontStyle: "italic", fontWeight: 300, color: "#e8e4de", fontSize: "clamp(26px,6.4vw,40px)", lineHeight: 1.12, letterSpacing: ".01em", margin: "6px 0 4px" }}>{children}</h1>
  );
}
function Sub({ children, dim }) {
  return (
    <p style={{ fontFamily: CG, fontStyle: "italic", fontSize: "clamp(15px,3.6vw,18px)", color: dim ? "#8f8fb2" : "#c2c2d4", lineHeight: 1.55, margin: "0 0 4px" }}>{children}</p>
  );
}
function GoldButton({ children, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: `linear-gradient(180deg, ${GOLD} 0%, #c08f34 100%)`, border: "none", borderRadius: 24,
      padding: "13px 30px", color: "#241a05", fontFamily: CG, fontSize: 20, fontWeight: 600, cursor: "pointer",
      boxShadow: "0 2px 14px rgba(212,162,76,0.28)",
    }}>{children}</button>
  );
}
function ShareFoot({ onReshare }) {
  return (
    <div onClick={onReshare} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onReshare(); } }}
      style={{ textAlign: "center", marginTop: 26, cursor: "pointer", fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", color: "#7f7f9c" }}>
      tap to share this compare&nbsp;&nbsp;·&nbsp;&nbsp;playfandna.com
    </div>
  );
}

// A crest with its label + archetype under it (the You / Them headline pair).
function CrestFace({ sport, club, side, arch }) {
  const t = teamOf(sport, club);
  const label = side === "you" ? "You" : "Them";
  const labelColor = side === "you" ? GOLD : "#7f9fd0";
  return (
    <div style={{ textAlign: "center", flex: 1, minWidth: 0 }}>
      <div style={{ display: "inline-flex" }}>{t ? <ClubMark team={t} size={92} /> : null}</div>
      <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.26em", textTransform: "uppercase", color: labelColor, margin: "12px 0 6px" }}>{label}</div>
      <div style={{ fontFamily: CG, fontSize: "clamp(20px,4.6vw,26px)", color: "#e8e4de", lineHeight: 1 }}>{teamName(sport, club)}</div>
      <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8aa2", marginTop: 6 }}>
        {sportName(sport)}{arch ? <>&nbsp;·&nbsp;<span style={{ color: GOLD }}>{arch.toUpperCase()}</span></> : null}
      </div>
    </div>
  );
}
function LockedDisc({ size = 92 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="not sequenced" style={{ display: "block" }}>
      <circle cx="50" cy="50" r="46" fill="#20202b" stroke="#3a3a4c" strokeWidth="2" strokeDasharray="5 5" />
      <text x="50" y="63" textAnchor="middle" fontFamily={CG} fontSize="42" fill="#6a6a86">?</text>
    </svg>
  );
}
function Vs() {
  return <div style={{ fontFamily: CG, fontStyle: "italic", fontSize: 22, color: "#6a6a86", padding: "0 6px", alignSelf: "center" }}>vs</div>;
}
function CrossBox({ label, line, note, cta, onClick }) {
  return (
    <div style={{ border: "1px solid #2a2a3a", borderRadius: 12, background: "#15151f", padding: "16px 16px 18px", marginTop: 22 }}>
      <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 8 }}>{label}</div>
      <div style={{ fontFamily: CG, fontSize: "clamp(18px,4.2vw,22px)", color: "#e2ded8", lineHeight: 1.3 }}>{line}</div>
      {note && <div style={{ fontFamily: CG, fontStyle: "italic", fontSize: 15, color: "#8f8fb2", margin: "5px 0 14px" }}>{note}</div>}
      {cta && <div style={{ marginTop: note ? 0 : 12 }}><GoldButton onClick={onClick}>{cta}</GoldButton></div>}
    </div>
  );
}

// The verdict line + WHY block that sits below the strips on compare layouts.
function ReasonsBlock({ topDim, youClub, themClub, youSport, themSport, sameArch }) {
  const rows = [
    { who: "You", pole: poleFor(topDim, "you"), club: teamName(youSport, youClub), dot: "#d6685c" },
    { who: "Them", pole: poleFor(topDim, "them"), club: teamName(themSport, themClub), dot: "#7f9fd0" },
  ];
  return (
    <div>
      {rows.map((r) => (
        <div key={r.who} style={{ display: "flex", gap: 11, alignItems: "baseline", marginBottom: 14 }}>
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: r.dot, flexShrink: 0, transform: "translateY(1px)" }} />
          <div>
            <span style={{ fontFamily: CG, fontSize: 18, color: "#d8d4ce" }}>{r.who}: </span>
            <span style={{ fontFamily: CG, fontStyle: "italic", fontSize: 17, color: "#9a9ac4" }}>{r.pole}</span>
            <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.04em", color: r.dot, marginTop: 3 }}>{"\u2192"} {r.club}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---- the screen -------------------------------------------------------------
export function Compare({ friend, me, onStartSport, onReshare, onExit, onRestore }) {
  const wrap = (inner) => (
    <div style={{ width: "100%", maxWidth: 560 }}>
      <Header />
      {inner}
    </div>
  );

  // BROKEN / FUTURE ----------------------------------------------------------
  if (!friend || friend.future || !friend.coreProfile) {
    return wrap(
      <div style={{ textAlign: "center", padding: "40px 10px" }}>
        <Hero>This link looks broken.</Hero>
        <Sub dim>Ask your friend to share it again. A fresh link will read straight through.</Sub>
        <div style={{ marginTop: 26 }}>
          <button onClick={onExit} style={{ border: "1px solid #33333f", background: "transparent", borderRadius: 6, padding: "12px 26px", color: "#bdbdd0", fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", cursor: "pointer" }}>Go to FanDNA</button>
        </div>
      </div>
    );
  }

  const themHead = headline(friend.results);
  const themArch = archetypeLabel(friend.coreProfile);

  // RECRUIT (recipient has no genome yet) -------------------------------------
  if (!me || !me.coreProfile) {
    const live = liveSet();
    const firstLive = (SPORTS.find(s => s.live) || { code: "PL" }).code;
    const noun = themHead ? regOf(themHead.sport).noun : "club";
    return wrap(
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8484b0", margin: "4px 0 20px" }}>A friend sent you their FanDNA</div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 18, marginBottom: 8 }}>
          {themHead ? <CrestFace sport={themHead.sport} club={themHead.club} side="them" arch={themArch} /> : null}
          <Vs />
          <div style={{ textAlign: "center", flex: 1 }}>
            <div style={{ display: "inline-flex" }}><LockedDisc /></div>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.26em", textTransform: "uppercase", color: "#7f9fd0", margin: "12px 0 6px" }}>You</div>
            <div style={{ fontFamily: CG, fontStyle: "italic", fontSize: 22, color: "#8a8aa2", lineHeight: 1 }}>not sequenced</div>
            <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6a6a86", marginTop: 6 }}>locked</div>
          </div>
        </div>
        <div style={{ marginTop: 22 }}>
          <Hero>See how your DNA stacks up.</Hero>
          <Sub>
            {themHead
              ? <>They are {themArch ? themArch.replace(/^The /, "a ") : "a fan"} through and through. Take yours and we line the two of you up, trait by trait.</>
              : <>Take yours and we line the two of you up, trait by trait.</>}
          </Sub>
        </div>
        <div style={{ marginTop: 22 }}><GoldButton onClick={() => onStartSport(firstLive)}>Find my FanDNA</GoldButton></div>
        <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.06em", color: "#7f7f9c", marginTop: 16 }}>about 3 minutes&nbsp;&nbsp;·&nbsp;&nbsp;no signup, no email</div>
        {/* Restore: opened your own link on a new device. Self-selecting copy; reversible via Clear. */}
        <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #23232f" }}>
          <button type="button" onClick={() => onRestore && onRestore()}
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: MONO, fontSize: 12, letterSpacing: "0.05em", color: GOLD, padding: "6px 6px" }}>
            Coming back on a new device? Restore your results
          </button>
        </div>
      </div>
    );
  }

  // SELF (opened your own link) ----------------------------------------------
  if (sameGenome(friend, me)) {
    return wrap(
      <div style={{ textAlign: "center", padding: "34px 10px" }}>
        <Hero>That one is yours.</Hero>
        <Sub dim>This is the link you would send to a friend. Share it and compare against them instead.</Sub>
        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <GoldButton onClick={onReshare}>Share it</GoldButton>
          <button onClick={onExit} style={{ border: "1px solid #33333f", background: "transparent", borderRadius: 24, padding: "12px 26px", color: "#bdbdd0", fontFamily: CG, fontSize: 18, cursor: "pointer" }}>Back to my genome</button>
        </div>
      </div>
    );
  }

  // REAL COMPARE -------------------------------------------------------------
  const youProfile = me.coreProfile, themProfile = friend.coreProfile;
  const youArch = archetypeLabel(youProfile) || "The Fan";
  const themArchL = themArch || "The Fan";
  const sameArch = youArch === themArchL;
  const bm = bandModel(youProfile, themProfile);
  const topDim = bm.byGap[0];
  const split = sportSplit(me.results, friend.results);
  const sharedCount = split.shared.length;
  const live = liveSet();
  const themSolo = split.onlyThem.filter(x => live.has(x.sport))[0] || split.onlyThem[0] || null;
  const youHead = headline(me.results);

  const aOrThe = (t) => t.replace(/^The /, "");            // "Chaser" from "The Chaser"
  const plural = (t) => aOrThe(t) + "s";                   // "Chasers"

  // highlight label word for the strips
  const hiLabel = bm.allLinedUp ? null
    : (sameArch && bm.splitCount === 1 ? "the split" : "the gulf");
  const note = bm.allLinedUp ? "all lined up" : null;

  const strips = (
    <CompareStrips
      you={youProfile} them={themProfile}
      highlightDims={bm.topDims} highlightLabel={hiLabel} note={note} accent={ACCENT}
    />
  );

  // cross-sport invite box, when a league only they have is live for the recipient
  const crossInvite = themSolo ? (
    <CrossBox
      label="Cross-sport"
      line={<>They also sequenced {sportName(themSolo.sport)}: {teamName(themSolo.sport, themSolo.club)}.</>}
      note={sameArch ? "Same core, a new jersey to find." : "Same gulf, a new sport. See where you would land."}
      cta={`Sequence ${themSolo.sport}`}
      onClick={() => onStartSport(themSolo.sport)}
    />
  ) : null;

  // ---- LAYOUT: 0 shared leagues -------------------------------------------
  if (sharedCount === 0) {
    const youCore = split.onlyYou[0] || youHead;
    const themCore = split.onlyThem[0] || themHead;
    const inviteSport = themSolo;   // invite you into a league only they have
    return wrap(
      <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: 8, margin: "6px 0 4px" }}>
          {youCore ? <CrestFace sport={youCore.sport} club={youCore.club} side="you" arch={youArch} /> : null}
          <Vs />
          {themCore ? <CrestFace sport={themCore.sport} club={themCore.club} side="them" arch={themArchL} /> : null}
        </div>
        <div style={{ textAlign: "center", margin: "18px 0 6px" }}>
          <Hero>Different games. Different wiring.</Hero>
        </div>
        <Rule label="The core still compares" />
        {strips}
        <div style={{ textAlign: "center", margin: "22px 0 6px" }}>
          <Sub>{sameArch ? <>Two {plural(youArch)}, in leagues that never meet.</> : <>A {aOrThe(youArch)} and {/^[AEIOU]/.test(aOrThe(themArchL)) ? "an" : "a"} {aOrThe(themArchL)}.</>}</Sub>
          <Sub dim>You just express the same core in different sports.</Sub>
        </div>
        {inviteSport && (
          <CrossBox
            label={`Your core · in ${sportName(inviteSport.sport)}`}
            line={<>One {regOf(inviteSport.sport).noun} fits your core.</>}
            note="Sequence it and the compare fills in."
            cta={`Sequence ${inviteSport.sport}`}
            onClick={() => onStartSport(inviteSport.sport)}
          />
        )}
        <ShareFoot onReshare={onReshare} />
      </div>
    );
  }

  // ---- LAYOUT: 1 shared league --------------------------------------------
  if (sharedCount === 1) {
    const sh = split.shared[0];
    const sameTeam = sh.same;
    const noun = regOf(sh.sport).noun;

    // collapsed crest for same team
    const crestBlock = sameTeam ? (
      <div style={{ textAlign: "center", margin: "6px 0 2px" }}>
        <div style={{ display: "inline-flex" }}>{teamOf(sh.sport, sh.youClub) ? <ClubMark team={teamOf(sh.sport, sh.youClub)} size={96} /> : null}</div>
        <div style={{ fontFamily: CG, fontSize: 26, color: "#e8e4de", margin: "12px 0 4px" }}>You + Them</div>
        <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: GOLD }}>
          {sameArch ? `Both: ${youArch}` : `${youArch} + ${themArchL}`}&nbsp;·&nbsp;{teamName(sh.sport, sh.youClub)}
        </div>
      </div>
    ) : (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: 8, margin: "6px 0 4px" }}>
        <CrestFace sport={sh.sport} club={sh.youClub} side="you" arch={youArch} />
        <Vs />
        <CrestFace sport={sh.sport} club={sh.themClub} side="them" arch={themArchL} />
      </div>
    );

    // hero + sub by skin
    let hero, sub1, sub2, showReasons = false, whyLabel = "Why different clubs";
    if (sameTeam && sameArch) {
      hero = <>Two {plural(youArch)}. One crest.</>;
      sub1 = bm.allLinedUp ? <>Twins on all seven.</> : <>Same read, and the same call.</>;
      sub2 = <>You did not just pick the same {noun}. You are the same fan.</>;
      whyLabel = "Why the same club";
    } else if (sameTeam && !sameArch) {
      hero = <>Same crest. Different souls.</>;
      sub1 = <>You landed on the same {noun} from different cores.</>;
      sub2 = <>The split is {DIM_SHORT[topDim.dim]}: for you {poleFor(topDim, "you")}, for them {poleFor(topDim, "them")}.</>;
      showReasons = true;
    } else if (!sameTeam && sameArch) {
      const twinCount = bm.twinCount;
      hero = <>Two {plural(youArch)}. Different jerseys.</>;
      sub1 = twinCount > 0
        ? <>Same read, twins on {twinCount} of seven.</>
        : <>Same read, and not one trait in common.</>;
      sub2 = bm.splitCount === 1
        ? <>The one split is {DIM_SHORT[topDim.dim]}: for you {poleFor(topDim, "you")}, for them {poleFor(topDim, "them")}.</>
        : <>The widest split is {DIM_SHORT[topDim.dim]}: for you {poleFor(topDim, "you")}, for them {poleFor(topDim, "them")}.</>;
      showReasons = true;
    } else {
      hero = <>The {aOrThe(youArch)}, meet the {aOrThe(themArchL)}.</>;
      sub1 = <>Different reads entirely.</>;
      sub2 = <>For you it is {poleFor(topDim, "you")}; for them, {poleFor(topDim, "them")}.</>;
      showReasons = true;
    }

    return wrap(
      <div>
        {crestBlock}
        <div style={{ textAlign: "center", margin: "18px 0 6px" }}><Hero>{hero}</Hero></div>
        <Rule label="The core underneath" />
        {strips}
        <div style={{ textAlign: "center", margin: "22px 0 6px" }}>
          <Sub>{sub1}</Sub>
          <Sub dim>{sub2}</Sub>
        </div>
        {showReasons && (
          <>
            <Rule label={whyLabel} />
            <ReasonsBlock topDim={topDim} youClub={sh.youClub} themClub={sh.themClub} youSport={sh.sport} themSport={sh.sport} sameArch={sameArch} />
          </>
        )}
        {crossInvite}
        <ShareFoot onReshare={onReshare} />
      </div>
    );
  }

  // ---- LAYOUT: 2+ shared leagues (the ledger) -----------------------------
  const rivalCount = split.shared.filter(s => !s.same).length;
  // The closeness claim must come from the measurement the strips are drawn from, not from a
  // hardcoded string. Under the old raw core every pair WAS close (0.4 apart at the widest), so
  // "Close cores" was true by accident. In standing space it is true for about 4% of pairs.
  const FAR = 5;                                  // half the scale apart on some trait
  const gulf = bm.byGap[0] ? String(bm.byGap[0].label).toLowerCase() : "";
  const near = bm.allLinedUp;                     // genuinely close
  const far  = !near && bm.maxGap >= FAR;         // genuinely far
  const leaguesWord = rivalCount === 1 ? "one league" : `${rivalCount} leagues`;
  const rows = [
    ...split.shared.map(s => ({ kind: s.same ? "same" : "split", sport: s.sport, youClub: s.youClub, themClub: s.themClub })),
    ...split.onlyYou.map(s => ({ kind: "onlyYou", sport: s.sport, youClub: s.club })),
    ...split.onlyThem.map(s => ({ kind: "onlyThem", sport: s.sport, themClub: s.club })),
  ].sort((a, b) => SPORTS.findIndex(x => x.code === a.sport) - SPORTS.findIndex(x => x.code === b.sport));

  const LedgerRow = ({ r }) => {
    const only = r.kind === "onlyYou" || r.kind === "onlyThem";
    const tagText = r.kind === "same" ? "SAME" : r.kind === "split" ? "SPLIT" : r.kind === "onlyYou" ? "ONLY YOU" : "ONLY THEM";
    const tagColor = r.kind === "same" ? "#6fae86" : (only ? GOLD : "#8a8aa2");
    const youT = r.youClub ? teamOf(r.sport, r.youClub) : null;
    const themT = r.themClub ? teamOf(r.sport, r.themClub) : null;
    const Side = ({ t, sport, club, muted }) => (
      <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0, opacity: muted ? 0.5 : 1 }}>
        {t ? <ClubMark team={t} size={30} /> : <span style={{ fontFamily: CG, fontStyle: "italic", fontSize: 16, color: "#6a6a86" }}>not yet</span>}
        {t && <span style={{ fontFamily: CG, fontSize: 17, color: "#dcd8d2", lineHeight: 1.15 }}>{teamName(sport, club)}</span>}
      </div>
    );
    return (
      <div style={{ border: only ? `1px solid ${GOLD}55` : "1px solid #20202b", background: only ? "#191308" : "transparent", borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
        <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#7f7f9c", marginBottom: 8 }}>{sportName(r.sport)}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Side t={youT} sport={r.sport} club={r.youClub} muted={r.kind === "onlyThem"} />
          <Side t={themT} sport={r.sport} club={r.themClub} muted={r.kind === "onlyYou"} />
          <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.12em", color: tagColor, flexShrink: 0 }}>{tagText}</span>
        </div>
      </div>
    );
  };

  return wrap(
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: "4px 0 10px" }}>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.14em", color: GOLD }}>YOU&nbsp;<span style={{ color: "#8f8fb2", fontFamily: CG, fontStyle: "italic", fontSize: 15 }}>{aOrThe(youArch)}</span></span>
        <span style={{ fontFamily: CG, fontStyle: "italic", color: "#6a6a86" }}>vs</span>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.14em", color: "#7f9fd0" }}><span style={{ color: "#8f8fb2", fontFamily: CG, fontStyle: "italic", fontSize: 15 }}>{aOrThe(themArchL)}</span>&nbsp;THEM</span>
      </div>
      <Hero>{near
        ? (sameArch ? <>One core, a different jersey in every league.</> : <>Close cores, a rival crest down the line.</>)
        : far
          ? (sameArch ? <>The same read, and two very different people underneath.</> : <>Two different cores, and the crests say so.</>)
          : (sameArch ? <>The same read, and then you part on {gulf}.</> : <>Two cores that hold together, then part on {gulf}.</>)}</Hero>
      <Rule label={`${split.shared.length + split.onlyYou.length + split.onlyThem.length} leagues sequenced`} />
      {rows.map((r, i) => <LedgerRow key={i} r={r} />)}
      <Rule label="One core, the jerseys" />
      {strips}
      <div style={{ textAlign: "center", margin: "22px 0 6px" }}>
        <Sub>{sameArch ? <>A pair of {plural(youArch)}.</> : <>A {aOrThe(youArch)} and {/^[AEIOU]/.test(aOrThe(themArchL)) ? "an" : "a"} {aOrThe(themArchL)}.</>}</Sub>
        <Sub dim>{rivalCount === 0
          ? <>Same jerseys, the whole way down.</>
          : near
            ? <>Close cores, and yet a rival crest in {leaguesWord}.</>
            : far || bm.twinCount === 0
              ? <>You part ways on {gulf}, and it shows up as a rival crest in {leaguesWord}.</>
              : <>You share {bm.twinCount} traits of seven, and still land on a rival crest in {leaguesWord}.</>}</Sub>
      </div>
      {crossInvite}
      <ShareFoot onReshare={onReshare} />
    </div>
  );
}
