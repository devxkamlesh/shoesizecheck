// Submits every URL in dist/sitemap.xml to IndexNow (Bing, Yandex, Seznam and others share it),
// plus the retired URLs in src/data/redirects.mjs so crawlers revisit them and see the 301s.
// Run after a deploy: `npm run build` then `npm run indexnow`.
// The key file lives at public/<key>.txt and must already be live on the site.
import fs from 'node:fs';
import path from 'node:path';
import { MOVED } from '../src/data/redirects.mjs';

const HOST = 'allshoesizeconverter.com';
const SITE = `https://${HOST}`;

const keyFile = fs.readdirSync('public').find(f => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) { console.error('No IndexNow key file (32 hex characters + .txt) in public/.'); process.exit(1); }
const key = fs.readFileSync(path.join('public', keyFile), 'utf8').trim();
const keyLocation = `${SITE}/${keyFile}`;

const sitemap = path.resolve('dist/sitemap.xml');
if (!fs.existsSync(sitemap)) { console.error('dist/sitemap.xml missing. Run "npm run build" first.'); process.exit(1); }
const live = [...fs.readFileSync(sitemap, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const retired = Object.keys(MOVED).map(p => `${SITE}${p}/`);
const urlList = [...new Set([...live, ...retired])];

// Confirm the key is reachable before submitting, or the request is rejected.
const check = await fetch(keyLocation);
if (!check.ok || (await check.text()).trim() !== key) {
  console.error(`Key file not live at ${keyLocation} (HTTP ${check.status}). Deploy first.`);
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
});
console.log(`IndexNow: HTTP ${res.status} ${res.statusText} for ${urlList.length} URLs (${live.length} live, ${retired.length} redirected)`);
const body = await res.text();
if (body) console.log(body);
// 200 = accepted, 202 = accepted and key validation pending.
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
