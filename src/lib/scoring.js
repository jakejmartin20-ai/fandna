// FanDNA scoring functions — extracted verbatim from App.jsx (Phase 1, behaviour-neutral).
import { scoring, questions, teams } from "../data/pl";

function getAllScores(answers) {
  const s = Object.fromEntries(Object.keys(teams).map(k=>[k,0]));
  for (const [qId,ans] of Object.entries(answers)) {
    for (const [club,pts] of Object.entries(scoring[qId]?.[ans]||{})) {
      if (s[club]!==undefined) s[club]+=pts;
    }
  }
  return s;
}

// Points contributed only by answers within a single phase (used for tie-breaking).
function phaseScores(answers, phaseName) {
  const ps = Object.fromEntries(Object.keys(teams).map(k=>[k,0]));
  for (const [qId,ans] of Object.entries(answers)) {
    const qq = questions.find(p=>p.id===qId);
    if (qq && qq.phase===phaseName) {
      for (const [club,pts] of Object.entries(scoring[qId]?.[ans]||{})) {
        if (ps[club]!==undefined) ps[club]+=pts;
      }
    }
  }
  return ps;
}

// Largest single-answer point award per club (final tie-break proxy: strongest single pull).
function maxSingleAward(answers) {
  const m = Object.fromEntries(Object.keys(teams).map(k=>[k,0]));
  for (const [qId,ans] of Object.entries(answers)) {
    for (const [club,pts] of Object.entries(scoring[qId]?.[ans]||{})) {
      if (m[club]!==undefined && pts>m[club]) m[club]=pts;
    }
  }
  return m;
}

export { getAllScores, phaseScores, maxSingleAward };
