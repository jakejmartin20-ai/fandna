// FanDNA — saved-progress (localStorage in the deployed app). Versioned from day one.
//
// Shape (key "fandna_v1"):
//   { version, coreAnswers, coreProfile, results: { PL: { club, answers, scores, date } } }
//
// Rules: the core is answered ONCE and cached (coreAnswers + coreProfile). Each sport's
// result is keyed by sport. "Retake" can redo just one sport's module (keep the core) or
// reset everything. All reads/writes are wrapped so a storage failure never breaks the quiz.

const KEY = "fandna_v1";
const VERSION = 1;

function blank(){ return { version: VERSION, coreAnswers: null, coreProfile: null, results: {}, pending: [] }; }

function migrate(state){
  // Single place to bump old shapes forward as the schema evolves.
  if (!state || typeof state!=="object") return blank();
  if (!state.version) state.version = VERSION;
  if (!state.results) state.results = {};
  if (!Array.isArray(state.pending)) state.pending = [];
  return state;
}

function loadState(){
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return blank();
    return migrate(JSON.parse(raw));
  } catch (e){ return blank(); }
}

function writeState(state){
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e){ /* private mode / full: ignore */ }
}

// Save a completed sport result, caching the core the first time.
function saveResult(sport, { coreAnswers, coreProfile, club, moduleAnswers, scores, date }){
  const state = loadState();
  if (coreAnswers)  state.coreAnswers  = coreAnswers;
  if (coreProfile)  state.coreProfile  = coreProfile;
  state.results[sport] = {
    club,
    answers: moduleAnswers || {},
    scores: scores || null,
    date: date || new Date().toISOString().slice(0,10),
  };
  writeState(state);
  return state;
}

function clearModule(sport){
  const state = loadState();
  delete state.results[sport];
  writeState(state);
  return state;
}

function clearAll(){
  try { localStorage.removeItem(KEY); } catch (e){}
  return blank();
}

// Pending "your fit changed" notices, surfaced once on the home screen then dismissed.
// Each entry: { sport, from, to, at }. Merged so repeated heals show the NET move (the
// team last SEEN -> the team now); an entry that nets back to its origin drops out.
function appendPending(moved){
  const state = loadState();
  const by = {}; (state.pending||[]).forEach(p=>{ by[p.sport]=p; });
  for (const m of (moved||[])){
    const prev = by[m.sport];
    const from = prev ? prev.from : m.from;
    if (from === m.to){ delete by[m.sport]; continue; }
    by[m.sport] = { sport:m.sport, from, to:m.to, at:new Date().toISOString().slice(0,10) };
  }
  state.pending = Object.values(by);
  writeState(state);
  return state.pending;
}
function readPending(){ return loadState().pending || []; }
function clearPending(){ const state=loadState(); state.pending=[]; writeState(state); return state; }

export { loadState, saveResult, clearModule, clearAll, appendPending, readPending, clearPending, KEY, VERSION };
