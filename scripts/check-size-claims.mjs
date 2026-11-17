// Checks that size pairs written in page text ("US 9 = EU 42.5", "EU 43 (27.5 cm)")
// agree with src/data/shoe-sizes.ts. Run after `npm run build`.
// ponytail: regex sentence heuristics, not an NLP parser. Each EU mention is paired with the
// nearest US/UK/India/cm mention in the same sentence; brand-specific sentences are skipped.
import fs from 'node:fs';
import path from 'node:path';
import { MEN_SIZE_ROWS, WOMEN_SIZE_ROWS, KIDS_SIZE_ROWS } from '../src/data/shoe-sizes.ts';

const dist = path.resolve(import.meta.dirname, '../dist');
if (!fs.existsSync(dist)) { console.error('dist/ missing. Run "npm run build" first.'); process.exit(1); }

const valid = { men: new Set(), women: new Set() };
const known = { men: new Set(), women: new Set() };
for (const [gender, rows] of [['men', MEN_SIZE_ROWS], ['women', WOMEN_SIZE_ROWS]]) {
  for (const r of rows) {
    for (const sys of ['us', 'uk', 'india', 'cm']) {
      valid[gender].add(`${sys}:${Number(r[sys])}:${r.eu}`);
      known[gender].add(`${sys}:${Number(r[sys])}`);
    }
  }
}
// Kids rows only pair EU with cm here; their US/UK values carry C/Y suffixes the regex skips.
for (const r of KIDS_SIZE_ROWS) for (const g of ['men', 'women']) { valid[g].add(`cm:${r.cm}:${r.eu}`); known[g].add(`cm:${r.cm}`); }

// /changelog/ records past values on purpose.
const SKIP_ROUTES = new Set(['/changelog/']);
// Sentences about other brands' own charts or other standards are not claims about our table.
const SKIP = /nike|jordan|adidas|puma|birkenstock|new balance|asics|converse|vans|clarks|bata|reebok|skechers|mondopoint|insole|\b2\/3|\b1\/3/i;
const MENTION = /\b(US|UK|India|EU)(?:\s+(Men's|Women's|Men|Women|Mens|Womens))?\s+(\d{1,2}(?:\.\d)?)(?!\d|\.\d|\s?[CY]\b)|\b(\d{2}(?:\.\d)?)\s?(?:cm|centimet)/gi;

function textOf(html) {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<\/(tr|li|p|h\d|summary|option)>/gi, ' \u2016 ')
    .replace(/<\/(td|th|div|section|span)>/gi, '. ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ');
}

function genderOf(label, sentence) {
  const l = (label || '').toLowerCase();
  if (l.startsWith('women')) return ['women'];
  if (l.startsWith('men')) return ['men'];
  const w = /\bwomen/i.test(sentence), m = /\bmen(?:'s)?\b/i.test(sentence);
  return w && !m ? ['women'] : m && !w ? ['men'] : ['men', 'women'];
}

const problems = new Map();
const files = fs.readdirSync(dist, { recursive: true }).filter(f => f.endsWith('.html'));
for (const file of files) {
  const route = '/' + file.replace(/\\/g, '/').replace(/index\.html$/, '');
  if (SKIP_ROUTES.has(route)) continue;
  for (const sentence of textOf(fs.readFileSync(path.join(dist, file), 'utf8')).split(/\u2016|(?<=[.!?])\s+(?=[A-Z])/)) {
    if (SKIP.test(sentence) || !/\bEU\s\d/.test(sentence)) continue;
    const mentions = [...sentence.matchAll(MENTION)].filter(m => !/^\s*last\b/.test(sentence.slice(m.index + m[0].length))).map(m => ({
      sys: m[1] ? m[1].toLowerCase() : 'cm', label: m[2], value: Number(m[3] ?? m[4]), at: m.index, end: m.index + m[0].length,
    }));
    const eus = mentions.filter(m => m.sys === 'eu');
    const others = mentions.filter(m => m.sys !== 'eu');
    // Distance between two mentions. Infinity when they belong to different clauses: another EU or
    // same-system value in between, a hard separator, or leaving a parenthetical ("...EU 40) or US 8").
    const cost = (o, eu) => {
      const [a, b] = o.at < eu.at ? [o.end, eu.at] : [eu.end, o.at];
      if (mentions.some(m => m.at >= a && m.end <= b && (m.sys === 'eu' || m.sys === o.sys))) return Infinity;
      const between = sentence.slice(a, b);
      if (/;| or | while | whereas /.test(between)) return Infinity;
      let depth = 0;
      for (const ch of between) if ((depth += ch === '(' ? 1 : ch === ')' ? -1 : 0) < 0) return Infinity;
      return between.length + 60 * (between.match(/,|·| and /g) || []).length;
    };
    const nearest = (cands, score) => cands.reduce((best, c) => (score(c) < score(best) ? c : best), cands[0]);
    const pairs = new Set();
    for (const eu of eus) {
      for (const sys of new Set(others.map(o => o.sys))) {
        const o = nearest(others.filter(x => x.sys === sys), x => cost(x, eu));
        if (cost(o, eu) <= 140) pairs.add([o, eu]);
      }
    }
    for (const o of others) {
      const eu = eus.length && nearest(eus, e => cost(o, e));
      if (eu && cost(o, eu) <= 140) pairs.add([o, eu]);
    }
    const seen = new Set();
    for (const [o, eu] of pairs) {
      if (seen.has(`${o.at}:${eu.at}`)) continue;
      seen.add(`${o.at}:${eu.at}`);
      // Only judge values our table actually lists for that gender (e.g. skip "US Men's 4.5").
      const genders = genderOf(o.label, sentence).filter(g => known[g].has(`${o.sys}:${o.value}`));
      if (!genders.length || genders.some(g => valid[g].has(`${o.sys}:${o.value}:${eu.value}`))) continue;
      const claim = `${o.sys.toUpperCase()} ${o.value} <-> EU ${eu.value} (${genders.join('/')})`;
      const key = `${claim}|${sentence.trim().slice(0, 160)}`;
      if (!problems.has(key)) problems.set(key, { claim, sentence: sentence.trim().slice(0, 160), routes: [] });
      problems.get(key).routes.push(route);
    }
  }
}

for (const p of problems.values()) console.log(`${p.claim}\n  ${p.routes.join(', ')}\n  "${p.sentence}"\n`);
if (problems.size) { console.error(`FAILURE: ${problems.size} size claim(s) disagree with src/data/shoe-sizes.ts`); process.exit(1); }
console.log(`OK: every EU pairing in ${files.length} pages matches src/data/shoe-sizes.ts`);
