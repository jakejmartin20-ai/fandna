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
import { moduleQuestions as mlbModule, scoring as mlbScoring, teamDims as mlbDims } from "../data/mlb";

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
  const fpEng = FP_ENGINES[sport];
  if (fpEng) return scoreFingerprint(input, fpEng);   // fingerprint sports (NFL, MLB)
  const eng = SPORT_ENGINES[sport];
  if (!eng) throw new Error("No scoring engine for sport: "+sport);
  // PL (and any full-fidelity sport) scores the full answer set on its own matrix.
  const answers = { ...(input.coreAnswers||{}), ...(input.moduleAnswers||{}) };
  return pickWinner(answers, eng.matrix, eng.teamKeys, ID_TO_PHASE, eng.finalPhase);
}

// -- Fingerprint stage-2 (NFL, MLB): dimensional fingerprint base + module-point tiebreakers ----
// The coreProfile (the same 7 dims used everywhere) is matched against each team's teamDims:
// closer team, bigger head start (the FINGERPRINT). A sport's module answers then add points
// from its craft "points toward" lists (the MODULE TIEBREAKERS), which is what separates the
// dense clusters that sit too close in dim-space for the fingerprint alone. FP_W is the one
// calibrated knob: heavy enough that the fingerprint decides ACROSS clusters, light enough that
// the module answers decide WITHIN a cluster. The engine is data-keyed, so every fingerprint
// sport reads through the SAME code with its own data (no per-sport branch).
const FP_W = 1.2;        // fingerprint weight (calibrated in the Phase 4 simulation)
const DIST_REF = 14;     // headroom so the zero-clip rarely fires; does not affect the winner

// A fingerprint engine is just a sport's data, pre-indexed. Build one per fingerprint sport;
// nothing in the scorer is hardcoded to a sport, so adding MLB is one entry here. NFL keeps the
// exact same dims/scoring/keys/weights it always had, so its results are unchanged.
function makeFpEngine(dims, scoring, module){
  const keys = Object.keys(dims);                 // iteration order = the final tie-break tail
  const idToPhase = {};
  for (const q of coreQuestions) idToPhase[q.id]=q.phase;
  for (const q of module)        idToPhase[q.id]=q.phase;
  const finalPhase = module[module.length-1].phase;
  return { dims, scoring, keys, idToPhase, finalPhase, FP_W, DIST_REF };
}
const FP_ENGINES = {
  NFL: makeFpEngine(nflDims, nflScoring, nflModule),
  MLB: makeFpEngine(mlbDims, mlbScoring, mlbModule),
};

function fpBase(coreProfile, eng){
  const out={};
  for (const code of eng.keys){
    const dims=eng.dims[code]; let d=0;
    for (const k of DIM_ORDER){ const diff=(coreProfile[k]||0)-(dims[k]||0); d+=diff*diff; }
    const dist=Math.sqrt(d);
    out[code]={ dist, base: eng.FP_W*Math.max(0, eng.DIST_REF-dist) };
  }
  return out;
}
function scoreFingerprint(input, eng){
  const fp = fpBase(input.coreProfile||{}, eng);
  const mod = allScores(input.moduleAnswers||{}, eng.scoring, eng.keys);
  const finalPts = phaseScores(input.moduleAnswers||{}, eng.scoring, eng.keys, eng.idToPhase, eng.finalPhase);
  const total={};
  for (const c of eng.keys) total[c] = fp[c].base + (mod[c]||0);
  const max = Math.max(...Object.values(total));
  let tied = eng.keys.filter(c=>total[c]===max);
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

// -- Fingerprint evidence + cross-match (NFL, MLB) --------------------------------
// READ-ONLY, exactly like the PL versions. They never change the pick. The difference is
// only the engine underneath: a fingerprint result is the coreProfile-to-teamDims distance
// (the fingerprint base) plus module-answer points. So to test a CORE answer we re-derive the
// coreProfile with scoreCore, then re-run scoreFingerprint; to test a MODULE answer we just
// swap it and re-run. "What tipped it" reads the MODULE lean-lists only (the core's pull is the
// fingerprint, already shown by the Why-you dimension bars, so we never double-count it).

// Build the question option spaces straight from the data, same idea as the PL path:
// core questions from coreDimScoring, module questions from the sport's module scoring.
function fpCoreIds(){ return coreQuestions.map(q=>q.id).filter(id=>coreDimScoring[id]); }
function fpProfile(input, eng){
  // Prefer the coreProfile the result was computed from (identical to the displayed pick);
  // fall back to deriving it from the core answers when it was not passed.
  if (input.coreProfile && Object.keys(input.coreProfile).length) return input.coreProfile;
  return scoreCore(input.coreAnswers || {});
}

function matchEvidenceFp(sport, input, eng){
  const coreAns = input.coreAnswers || {};
  const modAns  = input.moduleAnswers || {};
  const baseProfile = fpProfile(input, eng);
  const club = scoreFingerprint({ coreProfile: baseProfile, moduleAnswers: modAns }, eng).club;
  const allAns = { ...coreAns, ...modAns };

  // STABILITY: a question is "safe" when no single alternative answer changes the team.
  const optionSpace = [];
  for (const id of fpCoreIds())            optionSpace.push([id, Object.keys(coreDimScoring[id]), "core"]);
  for (const id of Object.keys(eng.scoring)) optionSpace.push([id, Object.keys(eng.scoring[id]), "module"]);

  const total = optionSpace.length;
  let safe = 0;
  const locks = [];
  for (const [qId, opts, kind] of optionSpace){
    let flips = false;
    for (const alt of opts){
      if (alt === allAns[qId]) continue;
      let testClub;
      if (kind === "module"){
        testClub = scoreFingerprint({ coreProfile: baseProfile, moduleAnswers: { ...modAns, [qId]: alt } }, eng).club;
      } else {
        testClub = scoreFingerprint({ coreProfile: scoreCore({ ...coreAns, [qId]: alt }), moduleAnswers: modAns }, eng).club;
      }
      if (testClub !== club){ flips = true; break; }
    }
    locks.push(!flips);
    if (!flips) safe++;
  }

  // TIPS: module lean-lists only (the distinctiveness measure), readable answers.
  const tips = distinctiveTips(modAns, club, eng.scoring, eng.keys, 3);
  return { sport, club, safe, total, locks, tips };
}

// Greedy walk for a fingerprint sport: from the current answers, change one not-yet-changed
// question at a time toward `target` (a module change reads the lean-list, a core change re-derives
// the profile), taking a winning move as soon as one exists. Returns the change count, or null.
function changeToLandFp(coreAns, modAns, baseProfile, target, eng){
  let curCore = { ...coreAns }, curMod = { ...modAns }, curProfile = baseProfile;
  if (scoreFingerprint({ coreProfile: curProfile, moduleAnswers: curMod }, eng).club === target) return 0;
  const coreIds = fpCoreIds();
  const modIds  = Object.keys(eng.scoring);
  const changed = new Set();
  const compMax = (scores) => { let comp = -Infinity; for (const c of eng.keys){ if (c !== target && (scores[c] || 0) > comp) comp = scores[c] || 0; } return comp; };
  const totalQ = coreIds.length + modIds.length;
  for (let step = 1; step <= totalQ; step++){
    let best = null;
    const consider = (cand) => {
      if (cand.wins && (!best || !best.wins)){ best = cand; return; }
      if (!!cand.wins === !!(best && best.wins) && (!best || cand.margin > best.margin)) best = cand;
    };
    for (const q of modIds){
      if (changed.has("m:"+q)) continue;
      let bo = curMod[q], bp = -Infinity;
      for (const o of Object.keys(eng.scoring[q])){ const p = eng.scoring[q][o]?.[target] || 0; if (p > bp){ bp = p; bo = o; } }
      if (bo === curMod[q]) continue;
      const trialMod = { ...curMod, [q]: bo };
      const { club, scores } = scoreFingerprint({ coreProfile: curProfile, moduleAnswers: trialMod }, eng);
      consider({ key:"m:"+q, core: curCore, mod: trialMod, profile: curProfile, margin: (scores[target] || 0) - compMax(scores), wins: club === target });
    }
    for (const q of coreIds){
      if (changed.has("c:"+q)) continue;
      let bo = null, bestTot = -Infinity, bestPf = null;
      for (const o of Object.keys(coreDimScoring[q])){
        if (o === curCore[q]) continue;
        const pf = scoreCore({ ...curCore, [q]: o });
        const tot = scoreFingerprint({ coreProfile: pf, moduleAnswers: curMod }, eng).scores[target] || 0;
        if (tot > bestTot){ bestTot = tot; bo = o; bestPf = pf; }
      }
      if (bo == null) continue;
      const trialCore = { ...curCore, [q]: bo };
      const { club, scores } = scoreFingerprint({ coreProfile: bestPf, moduleAnswers: curMod }, eng);
      consider({ key:"c:"+q, core: trialCore, mod: curMod, profile: bestPf, margin: (scores[target] || 0) - compMax(scores), wins: club === target });
    }
    if (!best) return null;
    curCore = best.core; curMod = best.mod; curProfile = best.profile; changed.add(best.key);
    if (best.wins) return step;
  }
  return null;
}

function crossMatchFp(sport, input, supportedClub, eng){
  const coreAns = input.coreAnswers || {};
  const modAns  = input.moduleAnswers || {};
  const baseProfile = fpProfile(input, eng);
  const { club: matched, scores } = scoreFingerprint({ coreProfile: baseProfile, moduleAnswers: modAns }, eng);
  const totalAnswers = fpCoreIds().length + Object.keys(eng.scoring).length;
  if (!supportedClub || scores[supportedClub] === undefined){
    return { sport, matched, supported: supportedClub || null, isMatch: false, rank: null, totalClubs: eng.keys.length, totalAnswers, changeToLand: null, towardSupported: [], towardMatch: [] };
  }
  const isMatch = supportedClub === matched;
  const supPts = scores[supportedClub] || 0;
  let greater = 0; for (const c of eng.keys){ if ((scores[c] || 0) > supPts) greater++; }
  const rank = greater + 1;
  return {
    sport, matched, supported: supportedClub, isMatch,
    rank, totalClubs: eng.keys.length, totalAnswers,
    closeByRank: true,   // in fingerprint sports module flips are big chunks, so flip-count is compressed; rank is the honest closeness signal, used for the verdict line
    changeToLand: isMatch ? 0 : changeToLandFp(coreAns, modAns, baseProfile, supportedClub, eng),
    towardSupported: distinctiveTips(modAns, supportedClub, eng.scoring, eng.keys, 2),
    towardMatch:     distinctiveTips(modAns, matched,       eng.scoring, eng.keys, 2),
  };
}

// -- Match evidence (PL): stability + the answers that tipped it ------------------
// READ-ONLY on top of the pick. It NEVER changes which club you get. It re-runs the
// same pick with one answer changed at a time to measure how settled the result is
// (the stability count), and reads the scoring matrix to surface the answers that
// pulled hardest, and most distinctively, toward the club (the tips).

const QUESTION_MAP = {};
for (const q of coreQuestions)   QUESTION_MAP[q.id] = q;
for (const q of moduleQuestions) QUESTION_MAP[q.id] = q;
for (const q of nflModule)       QUESTION_MAP[q.id] = q;   // namespaced ids (nfl_q*), no collision with PL
for (const q of mlbModule)       QUESTION_MAP[q.id] = q;   // namespaced ids (mlb_q*), no collision with PL

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
  // Data-keyed like scoreModule: fingerprint sports (NFL, MLB) take the fingerprint path,
  // PL keeps its exact matrix path below (byte-identical), anything else renders nothing.
  const fpEng = FP_ENGINES[sport];
  if (fpEng) return matchEvidenceFp(sport, input || {}, fpEng);
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
  const fpEng = FP_ENGINES[sport];
  if (fpEng) return crossMatchFp(sport, input || {}, supportedClub, fpEng);
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
