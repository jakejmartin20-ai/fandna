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
const VERSION = 2;           // storage schema (v2 adds spineAnswers). SEPARATE from CORE_VERSION below.

// CORE_VERSION stamps the CORE QUESTION SET, not the storage schema. It bumps only when a core
// question's ANSWERS change shape (options added / re-lettered), which invalidates a returning
// user's stored answers to those questions. The community+chaos regrade (q6/q10/q22 binary ->
// graded A-E) is core set 2: a genome with no coreVersion, or coreVersion < 2, holds pre-regrade
// answers and must be re-asked (App.jsx routes it to the Core-update prompt) rather than silently
// re-scored (scoreCore skips the now-unknown left/right keys and degrades the profile).
const CORE_VERSION = 2;

function blank(){ return { version: VERSION, coreVersion: 0, coreAnswers: null, coreProfile: null, spineAnswers: null, results: {}, pending: [], earnedGroups: [], updatePending: false, coreFrozen: false }; }

function migrate(state){
  // Single place to bump old shapes forward as the schema evolves.
  if (!state || typeof state!=="object") return blank();
  if (!state.results) state.results = {};
  if (!Array.isArray(state.pending)) state.pending = [];
  // earnedGroups: which bucket crests have already fired their earn moment (fire once, forever).
  if (!Array.isArray(state.earnedGroups)) state.earnedGroups = [];
  // v1 -> v2: spineAnswers didn't exist. Old genomes get null; a spine-enabled league they had
  // already taken is re-derived / re-flagged on recompute (App.jsx), never silently mis-scored.
  if (!("spineAnswers" in state) || state.spineAnswers === undefined) state.spineAnswers = null;
  // Core-set stamp + return-migration flags. A genome saved before this ship has NO coreVersion,
  // so it defaults to 0 (pre-regrade) and is caught by the Core-update prompt on return. New/updated
  // genomes carry coreVersion 2. updatePending marks a genome routed to the prompt; coreFrozen marks
  // a genome whose owner chose "keep my current results" (its old core stays, never re-scored).
  if (typeof state.coreVersion !== "number") state.coreVersion = 0;
  if (typeof state.updatePending !== "boolean") state.updatePending = false;
  if (typeof state.coreFrozen !== "boolean") state.coreFrozen = false;
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

// Bucket crests earned. The earn moment fires once per bucket, the first time it completes; the
// flag persists so it never re-fires and never un-earns when a hidden league later flips live.
function markGroupEarned(groupId){
  const state = loadState();
  if (!Array.isArray(state.earnedGroups)) state.earnedGroups = [];
  if (groupId && !state.earnedGroups.includes(groupId)) state.earnedGroups.push(groupId);
  writeState(state);
  return state.earnedGroups;
}
function earnedGroups(){ return loadState().earnedGroups || []; }

// Core-set stamping. Kept OUT of saveResult on purpose: a module-only retake reuses the cached
// core answers verbatim (which, for a "keep" genome, are still the old-format ones), so stamping
// there would wrongly promote a stale core to current. Instead App.jsx stamps only at the moments a
// core was actually answered under the current set (a first full take, a core re-sequence, or a
// completed Core-update), and freezes at the moment "keep" is chosen.
//   stampCoreCurrent  : the stored core IS the current set now -> current, not pending, not frozen.
//   keepCurrentCore   : user kept their pre-regrade result -> stop nagging (current stamp) but never
//                       re-score the old-format answers (frozen); a later full retake clears it.
//   markUpdatePending : flag a genome that has been routed to the Core-update prompt (telemetry / a
//                       belt-and-braces guard); cleared by either of the two above.
function stampCoreCurrent(){
  const state = loadState();
  state.coreVersion = CORE_VERSION; state.updatePending = false; state.coreFrozen = false;
  writeState(state);
  return state;
}
function keepCurrentCore(){
  const state = loadState();
  state.coreVersion = CORE_VERSION; state.updatePending = false; state.coreFrozen = true;
  writeState(state);
  return state;
}
function markUpdatePending(){
  const state = loadState();
  state.updatePending = true;
  writeState(state);
  return state;
}

export { loadState, saveResult, saveSpine, clearModule, clearAll, appendPending, readPending, clearPending, markGroupEarned, earnedGroups, stampCoreCurrent, keepCurrentCore, markUpdatePending, KEY, VERSION, CORE_VERSION };
