const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  console.error('dist/ folder does not exist. Run "npm run build" first.');
  process.exit(1);
}

const htmlFiles = [];
function collectHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      collectHtml(full);
    } else if (e.name.endsWith('.html')) {
      htmlFiles.push(full);
    }
  }
}
collectHtml(distDir);

console.log(`Auditing ${htmlFiles.length} built HTML pages...\n`);

const pages = {};
const linkCounts = {};

for (const f of htmlFiles) {
  const rel = path.relative(distDir, f).replace(/\\/g, '/');
  const route = '/' + rel.replace(/index\.html$/, '');
  pages[route] = fs.readFileSync(f, 'utf8');
  linkCounts[route] = 0;
}

// Check inbound links
for (const [fromRoute, html] of Object.entries(pages)) {
  const hrefMatches = html.match(/href="([^"#:]+)"/g) || [];
  for (const hm of hrefMatches) {
    let target = hm.slice(6, -1);
    if (!target.startsWith('/')) continue;
    if (!target.endsWith('/')) target += '/';
    if (linkCounts[target] !== undefined && target !== fromRoute) {
      linkCounts[target]++;
    }
  }
}

let issues = 0;

for (const [route, html] of Object.entries(pages)) {
  if (html.includes('http-equiv="refresh"') || html.includes('http-equiv="Refresh"')) {
    continue;
  }
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  const bcCount = (html.match(/"@type":\s*"BreadcrumbList"/g) || []).length;

  const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&') : '';
  const desc = descMatch ? descMatch[1].replace(/&amp;/g, '&') : '';
  const inLinks = linkCounts[route] ?? 0;

  const errors = [];
  if (!title) errors.push('Missing <title>');
  else if (title.length > 60) errors.push(`Title too long (${title.length} > 60 chars)`);

  if (!desc) errors.push('Missing meta description');
  else if (desc.length > 160) errors.push(`Description too long (${desc.length} > 160 chars)`);
  else if (desc.length < 80) errors.push(`Description too short (${desc.length} < 80 chars)`);

  if (bcCount > 1) errors.push(`Duplicate BreadcrumbList schema (${bcCount})`);
  if (inLinks === 0 && route !== '/') errors.push(`Orphan page (0 inbound links)`);

  const status = errors.length === 0 ? '✓ PASS' : '✗ FAIL';
  if (errors.length > 0) issues += errors.length;

  console.log(`${status.padEnd(8)} ${route.padEnd(35)} T:${String(title.length).padStart(2)} D:${String(desc.length).padStart(3)} BC:${bcCount} IN:${String(inLinks).padStart(2)}`);
  if (errors.length > 0) {
    for (const err of errors) console.log(`         ↳ ${err}`);
  }
}

console.log('\n----------------------------------------');
if (issues === 0) {
  console.log(`SUCCESS: All ${htmlFiles.length} pages passed SEO, schema, title length & internal linking audits!`);
} else {
  console.error(`FAILURE: Found ${issues} audit issue(s).`);
  process.exit(1);
}
