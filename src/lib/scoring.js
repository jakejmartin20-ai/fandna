// FanDNA scoring — TWO-STAGE engine (Phase 2).
//
// Stage 1  scoreCore(coreAnswers)            -> coreProfile : the 7 dimensions, a point
//                                               in personality space, NOT a club. Portable
//                                               across every sport. Cached and reused.
// Stage 2  scoreModule(sport, input)         -> { club, scores } : each sport maps the
//                                               core + its own module answers to a team.
//
// PL's stage-2 is the high-fidelity path: it reuses the full v1 club-scoring matrix and the
// exact v1 tie-break, so every PL result is reproduced bit-for-bit (the non-negotiable gate).
// Future sports (NFL) plug in a lighter nearest-archetype path on the SAME coreProfile.

import { coreQuestions, coreDimScoring, DIM_ORDER } from "../data/core";
import { moduleQuestions, scoring as plScoring, teams as plTeams } from "../data/pl";
import { moduleQuestions as nflModule, scoring as nflScoring, teamDims as nflDims } from "../data/nfl";

// -- Stage 1: core answers -> coreProfile (7 dims, 0-10) -------------------------
function scoreCore(coreAnswers){
  const sum = Object.fromEntries(DIM_ORDER.map(d=>[d,0]));
  const cnt = Object.fromEntries(DIM_ORDER.map(d=>[d,0]));
  for (const [qId,ans] of Object.entries(coreAnswers||{})){
    const vec = coreDimScoring[qId]?.[ans];
    if (!vec) continue;
    for (const d of DIM_ORDER){ sum[d]+=vec[d]; cnt[d]++; }
  }
  const profile = {};
  for (const d of DIM_ORDER) profile[d] = cnt[d]>0 ? Math.round((sum[d]/cnt[d])*10)/10 : 5;
  return profile;
}

// -- Generic matrix scoring (the v1 mechanics, parameterised by sport) -----------
function allScores(answers, matrix, teamKeys){
  const s = Object.fromEntries(teamKeys.map(k=>[k,0]));
  for (const [qId,ans] of Object.entries(answers))
    for (const [club,pts] of Object.entries(matrix[qId]?.[ans]||{}))
      if (s[club]!==undefined) s[club]+=pts;
  return s;
}
function phaseScores(answers, matrix, teamKeys, idToPhase, phaseName){
  const ps = Object.fromEntries(teamKeys.map(k=>[k,0]));
  for (const [qId,ans] of Object.entries(answers)){
    if (idToPhase[qId]===phaseName)
      for (const [club,pts] of Object.entries(matrix[qId]?.[ans]||{}))
        if (ps[club]!==undefined) ps[club]+=pts;
  }
  return ps;
}
function maxSingleAward(answers, matrix, teamKeys){
  const m = Object.fromEntries(teamKeys.map(k=>[k,0]));
  for (const [qId,ans] of Object.entries(answers))
    for (const [club,pts] of Object.entries(matrix[qId]?.[ans]||{}))
      if (m[club]!==undefined && pts>m[club]) m[club]=pts;
  return m;
}
// Exact v1 winner selection: top total, then most points in the final phase,
// then strongest single pull, then team iteration order.
function pickWinner(answers, matrix, teamKeys, idToPhase, finalPhase){
  const s = allScores(answers, matrix, teamKeys);
  const max = Math.max(...Object.values(s));
  let tied = Object.keys(s).filter(k=>s[k]===max);
  let top;
  if (tied.length===1){ top = tied[0]; }
  else {
    const dec = phaseScores(answers, matrix, teamKeys, idToPhase, finalPhase);
    const decMax = Math.max(...tied.map(k=>dec[k]));
    let dtied = tied.filter(k=>dec[k]===decMax);
    if (dtied.length===1){ top = dtied[0]; }
    else {
      const single = maxSingleAward(answers, matrix, teamKeys);
      const sMax = Math.max(...dtied.map(k=>single[k]));
      top = dtied.filter(k=>single[k]===sMax)[0];
    }
  }
  return { club: top, scores: s };
}

// Shared phase lookup (core + module). The final phase is the phase of the last module Q,
// matching v1 (questions[last].phase). No core question is in the final phase.
const ID_TO_PHASE = {};
for (const q of coreQuestions)   ID_TO_PHASE[q.id]=q.phase;
for (const q of moduleQuestions) ID_TO_PHASE[q.id]=q.phase;

// -- Per-sport registry. Add a sport here; nothing else in the engine changes. --
const SPORT_ENGINES = {
  PL: {
    matrix: plScoring,
    teamKeys: Object.keys(plTeams),          // iteration order = tie-break tail (unchanged)
    finalPhase: moduleQuestions[moduleQuestions.length-1].phase,
  },
};

// -- Stage 2: map (coreProfile + module answers) to a team for a given sport -----
// input = { coreProfile, coreAnswers, moduleAnswers }
function scoreModule(sport, input){
  if (sport==="NFL") return scoreNFL(input);   // fingerprint base + module tiebreakers
  const eng = SPORT_ENGINES[sport];
  if (!eng) throw new Error("No scoring engine for sport: "+sport);
  // PL (and any full-fidelity sport) scores the full answer set on its own matrix.
  const answers = { ...(input.coreAnswers||{}), ...(input.moduleAnswers||{}) };
  return pickWinner(answers, eng.matrix, eng.teamKeys, ID_TO_PHASE, eng.finalPhase);
}

// -- NFL stage-2: "Option 1" = dimensional fingerprint base + module-point tiebreakers ----
// The coreProfile (the same 7 dims used everywhere) is matched against each team's teamDims:
// closer team, bigger head start (the FINGERPRINT). The 12 NFL module answers then add points
// from the craft-feeder "points toward" lists (the MODULE TIEBREAKERS), which is what separates
// the dense clusters (heritage-pride, suffering-loyalty, moderate-narrative) that sit too close
// in dim-space for the fingerprint alone. FP_W is the one calibrated knob (set in the Phase 4
// simulation): heavy enough that the fingerprint decides ACROSS clusters, light enough that the
// module answers decide WITHIN a cluster.
const NFL_KEYS  = Object.keys(nflDims);
const NFL_ID_TO_PHASE = {};
for (const q of coreQuestions) NFL_ID_TO_PHASE[q.id]=q.phase;
for (const q of nflModule)     NFL_ID_TO_PHASE[q.id]=q.phase;
const NFL_FINAL_PHASE = nflModule[nflModule.length-1].phase;
const FP_W = 1.2;        // fingerprint weight (calibrated in the Phase 4 simulation)
const DIST_REF = 14;     // headroom so the zero-clip rarely fires; does not affect the winner

function fpBase(coreProfile){
  const out={};
  for (const code of NFL_KEYS){
    const dims=nflDims[code]; let d=0;
    for (const k of DIM_ORDER){ const diff=(coreProfile[k]||0)-(dims[k]||0); d+=diff*diff; }
    const dist=Math.sqrt(d);
    out[code]={ dist, base: FP_W*Math.max(0, DIST_REF-dist) };
  }
  return out;
}
function scoreNFL(input){
  const fp = fpBase(input.coreProfile||{});
  const mod = allScores(input.moduleAnswers||{}, nflScoring, NFL_KEYS);
  const finalPts = phaseScores(input.moduleAnswers||{}, nflScoring, NFL_KEYS, NFL_ID_TO_PHASE, NFL_FINAL_PHASE);
  const total={};
  for (const c of NFL_KEYS) total[c] = fp[c].base + (mod[c]||0);
  const max = Math.max(...Object.values(total));
  let tied = NFL_KEYS.filter(c=>total[c]===max);
  let top;
  if (tied.length===1){ top=tied[0]; }
  else {
    // Tie-break: most points in the closer phase, then closest fingerprint, then team order.
    const fmax = Math.max(...tied.map(c=>finalPts[c]||0));
    let t2 = tied.filter(c=>(finalPts[c]||0)===fmax);
    if (t2.length===1){ top=t2[0]; }
    else { let best=t2[0]; for (const c of t2) if (fp[c].dist<fp[best].dist) best=c; top=best; }
  }
  return { club: top, scores: total };
}

// -- Cross-sport helper (used by the hint + future lighter sports, NOT PL's pick) -
// Nearest team to a coreProfile in 7-dim space.
function nearestInDimSpace(coreProfile, dimsTable){
  let best=null, bestD=Infinity;
  for (const [code,dims] of Object.entries(dimsTable)){
    let d=0; for (const k of DIM_ORDER){ const diff=(coreProfile[k]||0)-(dims[k]||0); d+=diff*diff; }
    if (d<bestD){ bestD=d; best=code; }
  }
  return best;
}

// -- Match evidence (PL): stability + the answers that tipped it ------------------
// READ-ONLY on top of the pick. It NEVER changes which club you get. It re-runs the
// same pick with one answer changed at a time to measure how settled the result is
// (the stability count), and reads the scoring matrix to surface the answers that
// pulled hardest, and most distinctively, toward the club (the tips).

const QUESTION_MAP = {};
for (const q of coreQuestions)   QUESTION_MAP[q.id] = q;
for (const q of moduleQuestions) QUESTION_MAP[q.id] = q;

function answerLabel(qId, ans){
  const q = QUESTION_MAP[qId];
  if (!q) return String(ans);
  if (q.type === "binary") return ans === "left" ? q.left : q.right;
  const o = (q.options || []).find(o => o.value === ans);
  return o ? o.label : String(ans);
}
function questionText(qId){
  const q = QUESTION_MAP[qId];
  return (q && q.question) ? q.question : "";
}
// A tip is only shown if it reads as a sentence (filters out slider values like "3").
function readableTip(label){
  if (typeof label !== "string") return false;
  const letters = label.replace(/[^a-zA-Z]/g, "");
  return letters.length >= 6 && !/^[0-9]+$/.test(label.trim());
}

function matchEvidence(sport, input){
  // Only PL is wired for evidence right now. NFL waits on the module rebalance, so we
  // return a null result and the UI renders nothing for it.
  if (sport !== "PL") return { sport, club: null, safe: null, total: null, tips: [] };

  const eng = SPORT_ENGINES.PL;
  const all = { ...(input.coreAnswers || {}), ...(input.moduleAnswers || {}) };
  const club = pickWinner(all, eng.matrix, eng.teamKeys, ID_TO_PHASE, eng.finalPhase).club;

  // Every question's answer-option set, read straight from the scoring tables.
  const optionSpace = [];
  for (const q of coreQuestions)   { const o = coreDimScoring[q.id]; if (o) optionSpace.push([q.id, Object.keys(o)]); }
  for (const q of moduleQuestions) { const o = eng.matrix[q.id];     if (o) optionSpace.push([q.id, Object.keys(o)]); }

  // STABILITY: a question is "safe" when no single alternative answer changes the club.
  const total = optionSpace.length;
  let safe = 0;
  const locks = [];   // per-question: true = locked (no single change moves you), false = could have tipped it
  for (const [qId, opts] of optionSpace){
    let flips = false;
    for (const alt of opts){
      if (alt === all[qId]) continue;
      const perturbed = { ...all, [qId]: alt };
      if (pickWinner(perturbed, eng.matrix, eng.teamKeys, ID_TO_PHASE, eng.finalPhase).club !== club){ flips = true; break; }
    }
    locks.push(!flips);
    if (!flips) safe++;
  }

  // TIPS: the answers that pull most distinctively toward the club
  // (the club's points on that answer, minus the average across all clubs).
  const teamKeys = eng.teamKeys;
  const rows = [];
  for (const [qId, ans] of Object.entries(all)){
    const cell = eng.matrix[qId] && eng.matrix[qId][ans];
    if (!cell) continue;
    const clubPts = cell[club] || 0;
    if (clubPts <= 0) continue;
    let sum = 0; for (const t of teamKeys) sum += (cell[t] || 0);
    const label = answerLabel(qId, ans);
    if (!readableTip(label)) continue;
    rows.push({ distinct: clubPts - sum / teamKeys.length, clubPts, question: questionText(qId), answer: label });
  }
  rows.sort((a, b) => (b.distinct - a.distinct) || (b.clubPts - a.clubPts));
  const tips = rows.slice(0, 3).map(r => ({ question: r.question, answer: r.answer }));

  return { sport, club, safe, total, locks, tips };
}

// -- Cross-match (PL): point the SAME pick at the club you actually support ----------
// READ-ONLY, like matchEvidence. It never changes your result. It reports, for the club
// you support: where it placed for you (rank, 1 = your match), how many answers you would
// have to change to land it instead (a greedy walk, flipping your most-supported-favouring
// answers one at a time until it would win), and the answers that pulled toward it vs toward
// the club you actually matched. Alignment, not a bar-vs-bar overlay.

// The answers that pull most distinctively toward a given club (same measure as the tips).
function distinctiveTips(all, club, matrix, teamKeys, n){
  const rows = [];
  for (const [qId, ans] of Object.entries(all)){
    const cell = matrix[qId] && matrix[qId][ans];
    if (!cell) continue;
    const clubPts = cell[club] || 0;
    if (clubPts <= 0) continue;
    let sum = 0; for (const t of teamKeys) sum += (cell[t] || 0);
    const label = answerLabel(qId, ans);
    if (!readableTip(label)) continue;
    rows.push({ distinct: clubPts - sum / teamKeys.length, clubPts, question: questionText(qId), answer: label });
  }
  rows.sort((a, b) => (b.distinct - a.distinct) || (b.clubPts - a.clubPts));
  return rows.slice(0, n).map(r => ({ question: r.question, answer: r.answer }));
}

// Greedy: from the current answers, change one not-yet-changed question at a time to its most
// target-favouring option, taking a winning move as soon as one exists. Returns the number of
// changes to land `target`, or null if even changing every answer never lands it.
function changeToLand(all, target, eng){
  if (pickWinner(all, eng.matrix, eng.teamKeys, ID_TO_PHASE, eng.finalPhase).club === target) return 0;
  const qIds = Object.keys(eng.matrix);
  let cur = { ...all };
  const changed = new Set();
  for (let step = 1; step <= qIds.length; step++){
    let bestQ = null, bestSheet = null, bestMargin = -Infinity, bestWins = false;
    for (const q of qIds){
      if (changed.has(q)) continue;
      const opts = Object.keys(eng.matrix[q]);
      let bestOpt = cur[q], bp = -Infinity;
      for (const o of opts){ const p = eng.matrix[q][o]?.[target] || 0; if (p > bp){ bp = p; bestOpt = o; } }
      if (bestOpt === cur[q]) continue;
      const trial = { ...cur, [q]: bestOpt };
      const { club, scores } = pickWinner(trial, eng.matrix, eng.teamKeys, ID_TO_PHASE, eng.finalPhase);
      const wins = club === target;
      let comp = -Infinity; for (const c of eng.teamKeys){ if (c !== target && (scores[c] || 0) > comp) comp = scores[c] || 0; }
      const margin = (scores[target] || 0) - comp;
      if (wins && !bestWins){ bestWins = true; bestQ = q; bestSheet = trial; bestMargin = margin; }
      else if (wins === bestWins && margin > bestMargin){ bestMargin = margin; bestQ = q; bestSheet = trial; }
    }
    if (!bestQ) return null;
    cur = bestSheet; changed.add(bestQ);
    if (bestWins) return step;
  }
  return null;
}

function crossMatch(sport, input, supportedClub){
  if (sport !== "PL") return null;
  const eng = SPORT_ENGINES.PL;
  const all = { ...(input.coreAnswers || {}), ...(input.moduleAnswers || {}) };
  const { club: matched, scores } = pickWinner(all, eng.matrix, eng.teamKeys, ID_TO_PHASE, eng.finalPhase);
  if (!supportedClub || scores[supportedClub] === undefined){
    return { sport, matched, supported: supportedClub || null, isMatch: false, rank: null, totalClubs: eng.teamKeys.length, totalAnswers: Object.keys(eng.matrix).length, changeToLand: null, towardSupported: [], towardMatch: [] };
  }
  const isMatch = supportedClub === matched;
  const supPts = scores[supportedClub] || 0;
  let greater = 0; for (const c of eng.teamKeys){ if ((scores[c] || 0) > supPts) greater++; }
  const rank = greater + 1;
  return {
    sport, matched, supported: supportedClub, isMatch,
    rank, totalClubs: eng.teamKeys.length, totalAnswers: Object.keys(eng.matrix).length,
    changeToLand: isMatch ? 0 : changeToLand(all, supportedClub, eng),
    towardSupported: distinctiveTips(all, supportedClub, eng.matrix, eng.teamKeys, 2),
    towardMatch:     distinctiveTips(all, matched,       eng.matrix, eng.teamKeys, 2),
  };
}

export { scoreCore, scoreModule, nearestInDimSpace, matchEvidence, crossMatch, SPORT_ENGINES };
