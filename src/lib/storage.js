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

function blank(){ return { version: VERSION, coreAnswers: null, coreProfile: null, results: {} }; }

function migrate(state){
  // Single place to bump old shapes forward as the schema evolves.
  if (!state || typeof state!=="object") return blank();
  if (!state.version) state.version = VERSION;
  if (!state.results) state.results = {};
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
function saveResult(sport, { coreAnswers, coreProfile, club, moduleAnswers, scores }){
  const state = loadState();
  if (coreAnswers)  state.coreAnswers  = coreAnswers;
  if (coreProfile)  state.coreProfile  = coreProfile;
  state.results[sport] = {
    club,
    answers: moduleAnswers || {},
    scores: scores || null,
    date: new Date().toISOString().slice(0,10),
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

export { loadState, saveResult, clearModule, clearAll, KEY, VERSION };
