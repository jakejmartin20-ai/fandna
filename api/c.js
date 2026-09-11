// FanDNA - /c/<code> handler. A compare link must serve HTML whose Open Graph tags are specific to
// THIS person's genome, so iMessage/Twitter/etc unfurl it as the sender's own FanDNA card rather
// than the one static site image. It fetches the live static index (so humans still boot the exact
// current app, which decodes the code client-side and shows Compare) and swaps only the OG lines.
// Display-only: touches metadata, not the app or the scoring path.

export default async function handler(req, res){
  const code = (req.query && req.query.code) || "";
  const proto = String(req.headers["x-forwarded-proto"] || "https").split(",")[0];
  const host = req.headers["x-forwarded-host"] || req.headers.host || "playfandna.com";
  const origin = `${proto}://${host}`;

  let html = "";
  try { html = await (await fetch(origin + "/", { headers: { "user-agent": "fandna-c" } })).text(); }
  catch (e) { res.writeHead(302, { Location: "/" }); res.end(); return; }

  if (code) {
    const img = `${origin}/api/og?c=${encodeURIComponent(code)}`;
    const pageUrl = `${origin}/c/${encodeURIComponent(code)}`;
    const set = (h, re, val) => re.test(h) ? h.replace(re, `$1${val}$2`) : h;
    html = set(html, /(<meta property="og:image" content=")[^"]*(")/i, img);
    html = set(html, /(<meta name="twitter:image" content=")[^"]*(")/i, img);
    html = set(html, /(<meta property="og:url" content=")[^"]*(")/i, pageUrl);
    html = set(html, /(<meta property="og:title" content=")[^"]*(")/i, "See my FanDNA. Compare yours.");
    html = set(html, /(<meta name="twitter:title" content=")[^"]*(")/i, "See my FanDNA. Compare yours.");
    html = set(html, /(<meta property="og:image:alt" content=")[^"]*(")/i, "A FanDNA genome card.");
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
  res.end(html);
}
