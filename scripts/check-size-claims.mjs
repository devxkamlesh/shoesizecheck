// Checks that size pairs written in page text ("US 9 = EU 42.5", "US 9 Men -> India 8.5",
// "UK 8 (26.5 cm)") agree with src/data/shoe-sizes.ts. Run after `npm run build`.
// ponytail: regex sentence heuristics, not an NLP parser. Each EU, US, or UK mention is paired with
// the nearest mention of every other system in the same sentence; brand-specific sentences are skipped.
import fs from 'node:fs';
import path from 'node:path';
import { MEN_SIZE_ROWS, WOMEN_SIZE_ROWS, KIDS_SIZE_ROWS } from '../src/data/shoe-sizes.ts';

const dist = path.resolve(import.meta.dirname, '../dist');
if (!fs.existsSync(dist)) { console.error('dist/ missing. Run "npm run build" first.'); process.exit(1); }

// valid[g] holds every pair the table allows, keyed "sysA:valueA|sysB:valueB" (both orders).
const SYSTEMS = ['us', 'uk', 'india', 'cm', 'eu'];
// Systems a mention is paired from. US-UK and US-India pairs are checked from US; UK-India and
// UK-cm from UK. EU pairs with everything.
const ANCHORS = { eu: ['us', 'uk', 'india', 'cm'], us: ['uk', 'india', 'cm'], uk: ['india', 'cm'] };
const valid = { men: new Set(), women: new Set() };
const known = { men: new Set(), women: new Set() };
const addRow = (g, r, systems) => {
  for (const a of systems) {
    known[g].add(`${a}:${Number(r[a])}`);
    for (const b of systems) if (a !== b) valid[g].add(`${a}:${Number(r[a])}|${b}:${Number(r[b])}`);
  }
};
for (const [gender, rows] of [['men', MEN_SIZE_ROWS], ['women', WOMEN_SIZE_ROWS]]) for (const r of rows) addRow(gender, r, SYSTEMS);
// Kids rows only pair EU with cm here; their US/UK values carry C/Y suffixes the regex skips.
for (const r of KIDS_SIZE_ROWS) for (const g of ['men', 'women']) addRow(g, r, ['cm', 'eu']);

// /changelog/ records past values on purpose.
const SKIP_ROUTES = new Set(['/changelog/']);
// Sentences about other brands' own charts or other standards are not claims about our table.
// Also skipped: photographed box labels, generic sneaker-label notes, and negations ("US 9 does not equal UK 9").
const SKIP = /box label|sneaker brands|brands? (often )?label|not equal|is not a|nike|jordan|adidas|puma|birkenstock|new balance|asics|converse|vans|clarks|bata|reebok|skechers|mondopoint|insole|\b2\/3|\b1\/3/i;
const MENTION = /\b(US|UK|India|EU)n?(?:\s+(Men's|Women's|Men|Women|Mens|Womens))?\s+(?:size\s+)?(\d{1,2}(?:\.\d)?)(?!\d|\.\d|\s?[CY]\b)|\b(\d{2}(?:\.\d)?)\s?(?:cm|centimet)/gi;

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
    if (SKIP.test(sentence) || !/\b(EU|US|UK)\s(Men'?s?\s|Women'?s?\s)?\d/i.test(sentence)) continue;
    // Range endpoints ("India 6 to 6.5", "22.5 to 23.0 cm") are approximations, not one-to-one claims.
    // Only a bare number can close a range; "UK 5 to EU 38" is a pairing, not a range.
    const isRange = m => /^\s*(to|-|–)\s*\d/.test(sentence.slice(m.index + m[0].length))
      || (/^\d/.test(m[0]) && /\d\s*(to|-|–)\s*$/.test(sentence.slice(0, m.index)));
    const mentions = [...sentence.matchAll(MENTION)].filter(m => !/^\s*last\b/.test(sentence.slice(m.index + m[0].length)) && !isRange(m)).map(m => ({
      sys: m[1] ? m[1].toLowerCase() : 'cm', label: m[2], value: Number(m[3] ?? m[4]), at: m.index, end: m.index + m[0].length,
    }));
    const pairs = new Set();
    const nearest = (cands, score) => cands.reduce((best, c) => (score(c) < score(best) ? c : best), cands[0]);
    for (const [anchor, partners] of Object.entries(ANCHORS)) {
    const eus = mentions.filter(m => m.sys === anchor);
    const others = mentions.filter(m => partners.includes(m.sys));
    // Distance between two mentions. Infinity when they belong to different clauses: another EU or
    // same-system value in between, a hard separator, or leaving a parenthetical ("...EU 40) or US 8").
    const cost = (o, eu) => {
      const [a, b] = o.at < eu.at ? [o.end, eu.at] : [eu.end, o.at];
      if (mentions.some(m => m.at >= a && m.end <= b && (m.sys === anchor || m.sys === o.sys))) return Infinity;
      const between = sentence.slice(a, b);
      if (/;| or | while | whereas /.test(between)) return Infinity;
      let depth = 0;
      for (const ch of between) if ((depth += ch === '(' ? 1 : ch === ')' ? -1 : 0) < 0) return Infinity;
      return between.length + 60 * (between.match(/,|·| and /g) || []).length;
    };
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
    }
    const seen = new Set();
    for (const [o, eu] of pairs) {
      if (seen.has(`${o.at}:${eu.at}`)) continue;
      seen.add(`${o.at}:${eu.at}`);
      // Only judge values our table actually lists for that gender (e.g. skip "US Men's 4.5").
      const genders = genderOf(o.label || eu.label, sentence)
        .filter(g => known[g].has(`${o.sys}:${o.value}`) && known[g].has(`${eu.sys}:${eu.value}`));
      if (!genders.length || genders.some(g => valid[g].has(`${o.sys}:${o.value}|${eu.sys}:${eu.value}`))) continue;
      const claim = `${o.sys.toUpperCase()} ${o.value} <-> ${eu.sys.toUpperCase()} ${eu.value} (${genders.join('/')})`;
      const key = `${claim}|${sentence.trim().slice(0, 160)}`;
      if (!problems.has(key)) problems.set(key, { claim, sentence: sentence.trim().slice(0, 160), routes: [] });
      problems.get(key).routes.push(route);
    }
  }
}

for (const p of problems.values()) console.log(`${p.claim}\n  ${p.routes.join(', ')}\n  "${p.sentence}"\n`);
if (problems.size) { console.error(`FAILURE: ${problems.size} size claim(s) disagree with src/data/shoe-sizes.ts`); process.exit(1); }
console.log(`OK: every US, UK, India, EU and cm pairing in ${files.length} pages matches src/data/shoe-sizes.ts`);
