// FanDNA telemetry readout. Returns every counter as plain text, one per line,
// sorted, so it reads cleanly in a phone browser. Protected by a secret word:
// the request must carry ?key=WORD matching the STATS_KEY environment variable.
// If STATS_KEY is not set, this endpoint answers nothing at all: closed by default.

export default async function handler(req, res) {
  const secret = process.env.STATS_KEY;
  const given = (req.query && req.query.key) || "";
  if (!secret || given !== secret) { res.status(404).end(); return; }

  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) { res.status(200).send("storage not connected yet"); return; }

  try {
    const keysResp = await fetch(url + "/pipeline", {
      method: "POST",
      headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
      body: JSON.stringify([["KEYS", "t:*"], ["KEYS", "k:*"], ["KEYS", "re:*"]]),
    });
    const keysJson = await keysResp.json();
    const keys = [];
    for (const part of keysJson) {
      if (part && Array.isArray(part.result)) keys.push(...part.result);
    }
    if (keys.length === 0) { res.status(200).send("no results counted yet"); return; }

    const valResp = await fetch(url + "/pipeline", {
      method: "POST",
      headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
      body: JSON.stringify([["MGET", ...keys]]),
    });
    const valJson = await valResp.json();
    const vals = (valJson[0] && valJson[0].result) || [];

    const lines = keys.map((k, i) => k + " " + (vals[i] == null ? 0 : vals[i]));
    lines.sort();
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(200).send(lines.join("\n"));
  } catch (e) {
    res.status(200).send("readout error, try again");
  }
}
