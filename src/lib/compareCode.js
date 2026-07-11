// FanDNA - compare share code. Packs ONE person's genome (their 7 core numbers + the club
// they matched in each mapped sport + a version tag) into a short, URL-safe string that rides
// on the share link (playfandna.com/c/<code>). The recipient's phone decodes it, reads its
// OWN genome from storage, and compares locally. No server, no accounts. The link is a SNAPSHOT
// (reshare to update). Display-only: this file imports nothing from the scoring path and cannot
// move a single match.
//
// Wire format (base64url of a byte array):
//   [0]        version
//   [1..7]     the 7 core dims, in DIM_ORDER, each = round(clamp(v,0,10)*10)  -> 0..100
//   [8]        N = number of mapped sports
//   then N x:  [sportIdx][keyLen][key bytes...]   (key = the club key, ASCII)
//
// SPORT_CODES is a FIXED, APPEND-ONLY index list, deliberately decoupled from the manifest's
// order: a sport's wire index never changes, so old codes keep decoding even if the manifest is
// reordered or a league is inserted. Add a new sport only by APPENDING here.
// The club KEY is stored as text (not an index into the team list) so a code never rots if a
// data file's teams are reordered.

import { DIM_ORDER } from "../data/core";

const VERSION = 1;

// APPEND-ONLY. Never reorder or remove. New leagues get the next free index.
const SPORT_CODES = ["PL", "NFL", "MLB", "NBA", "BL", "LL", "L1", "SA"];
const SPORT_IDX = Object.fromEntries(SPORT_CODES.map((c, i) => [c, i]));

const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

// bytes -> base64url (no padding). Works on 0..255 byte values.
function bytesToCode(bytes) {
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i] & 0xff);
  const b64 = (typeof btoa !== "undefined")
    ? btoa(bin)
    : Buffer.from(bin, "binary").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// base64url -> bytes. Returns null on anything malformed.
function codeToBytes(code) {
  try {
    let b64 = String(code).replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const bin = (typeof atob !== "undefined")
      ? atob(b64)
      : Buffer.from(b64, "base64").toString("binary");
    const out = new Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i) & 0xff;
    return out;
  } catch (e) { return null; }
}

// { coreProfile:{...7 dims}, results:{ SPORT:{club} } } -> code string.
// Only mapped sports we have a wire index for are packed; unmapped sports are simply absent.
export function encodeGenome({ coreProfile, results } = {}) {
  const bytes = [VERSION & 0xff];
  const prof = coreProfile || {};
  for (const d of DIM_ORDER) {
    bytes.push(clamp(Math.round((+prof[d] || 0) * 10), 0, 100));
  }
  const entries = Object.entries(results || {})
    .filter(([sport, r]) => r && r.club && SPORT_IDX[sport] != null)
    .sort((a, b) => SPORT_IDX[a[0]] - SPORT_IDX[b[0]]);      // stable order -> stable code
  bytes.push(entries.length & 0xff);
  for (const [sport, r] of entries) {
    const key = String(r.club);
    bytes.push(SPORT_IDX[sport] & 0xff);
    bytes.push(key.length & 0xff);
    for (let i = 0; i < key.length; i++) bytes.push(key.charCodeAt(i) & 0xff);
  }
  return bytesToCode(bytes);
}

// code string -> { version, coreProfile, results } | null (broken) | { future:true } (newer link).
// An unknown sport index inside a KNOWN version is skipped (a newer link may carry a league this
// build doesn't have yet); a newer VERSION byte is the hard "reshare / broken" case.
export function decodeCode(code) {
  const bytes = codeToBytes(code);
  if (!bytes || bytes.length < 1 + 7 + 1) return null;
  const version = bytes[0];
  if (version > VERSION) return { future: true };
  if (version < 1) return null;

  let p = 1;
  const coreProfile = {};
  for (const d of DIM_ORDER) { coreProfile[d] = bytes[p++] / 10; }

  const n = bytes[p++];
  const results = {};
  for (let i = 0; i < n; i++) {
    if (p >= bytes.length) return null;                      // truncated
    const idx = bytes[p++];
    if (p >= bytes.length) return null;
    const klen = bytes[p++];
    if (p + klen > bytes.length) return null;                // truncated key
    let key = "";
    for (let j = 0; j < klen; j++) key += String.fromCharCode(bytes[p++]);
    const sport = SPORT_CODES[idx];
    if (sport) results[sport] = { club: key };               // unknown idx -> skipped, pointer already advanced
  }
  return { version, coreProfile, results };
}

// Two genomes are "the same person" when their codes match (used to catch someone opening their
// OWN link). Cheap and exact: normalize both through encode and string-compare.
export function sameGenome(a, b) {
  try { return encodeGenome(a) === encodeGenome(b); } catch (e) { return false; }
}

export { VERSION, SPORT_CODES };
