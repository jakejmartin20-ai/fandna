// FanDNA — saved-progress (localStorage in the deployed app). Versioned from day one.
//
// Shape (key "fandna_v1", VERSION 2):
//   { version, coreAnswers, coreProfile, spineAnswers, results: { PL: { club, answers, scores, date } } }
//
// Rules: the core is answered ONCE and cached (coreAnswers + coreProfile). The 7 shared-spine
// answers (S1..S7) are ALSO answered once and cached (spineAnswers), the same way. Each sport's
// result is keyed by sport and stores only that league's UNIQUE module answers. "Retake" can redo
// just one sport's module (keep the core + spine) or reset everything. All reads/writes are wrapped
// so a storage failure never breaks the quiz.

const KEY = "fandna_v1";     // localStorage key unchanged (bumping it would drop everyone's genome)
const VERSION = 2;           // v2 adds spineAnswers

function blank(){ return { version: VERSION, coreAnswers: null, coreProfile: null, spineAnswers: null, results: {}, pending: [] }; }

function migrate(state){
  // Single place to bump old shapes forward as the schema evolves.
  if (!state || typeof state!=="object") return blank();
  if (!state.results) state.results = {};
  if (!Array.isArray(state.pending)) state.pending = [];
  // v1 -> v2: spineAnswers didn't exist. Old genomes get null; a spine-enabled league they had
  // already taken is re-derived / re-flagged on recompute (App.jsx), never silently mis-scored.
  if (!("spineAnswers" in state) || state.spineAnswers === undefined) state.spineAnswers = null;
  state.version = VERSION;
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

// Cache the shared-spine answers (S1..S7), answered once like the core. Idempotent.
function saveSpine(spineAnswers){
  const state = loadState();
  if (spineAnswers && Object.keys(spineAnswers).length) state.spineAnswers = spineAnswers;
  writeState(state);
  return state;
}

// Save a completed sport result, caching the core (and spine, if supplied) the first time.
// moduleAnswers = this league's UNIQUE answers only; the shared spine lives in state.spineAnswers.
function saveResult(sport, { coreAnswers, coreProfile, spineAnswers, club, moduleAnswers, scores, date }){
  const state = loadState();
  if (coreAnswers)  state.coreAnswers  = coreAnswers;
  if (coreProfile)  state.coreProfile  = coreProfile;
  if (spineAnswers && Object.keys(spineAnswers).length) state.spineAnswers = spineAnswers;
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

export { loadState, saveResult, saveSpine, clearModule, clearAll, appendPending, readPending, clearPending, KEY, VERSION };
