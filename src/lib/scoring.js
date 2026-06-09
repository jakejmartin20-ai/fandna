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
  const eng = SPORT_ENGINES[sport];
  if (!eng) throw new Error("No scoring engine for sport: "+sport);
  // PL (and any full-fidelity sport) scores the full answer set on its own matrix.
  const answers = { ...(input.coreAnswers||{}), ...(input.moduleAnswers||{}) };
  return pickWinner(answers, eng.matrix, eng.teamKeys, ID_TO_PHASE, eng.finalPhase);
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

export { scoreCore, scoreModule, nearestInDimSpace, SPORT_ENGINES };
