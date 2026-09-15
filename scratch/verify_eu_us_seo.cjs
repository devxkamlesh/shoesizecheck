const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/pages/eu-to-us-shoe-size.astro');
const content = fs.readFileSync(filePath, 'utf8');

console.log('=== Verifying EU to US Shoe Size Page ===\n');

// 1. Check Title & Description
const titleMatch = content.match(/const pageTitle = '([^']+)';/);
const descMatch = content.match(/const pageDescription = '([^']+)';/);

const title = titleMatch ? titleMatch[1] : '';
const desc = descMatch ? descMatch[1] : '';

console.log(`Title (${title.length} chars): "${title}"`);
console.log(`Description (${desc.length} chars): "${desc}"`);

if (title.length > 60) console.error('FAIL: Title > 60 chars');
if (desc.length > 160) console.error('FAIL: Description > 160 chars');

// 2. Check Word Count of Editorial section
const articleMatch = content.match(/<section class="editorial-band">([\s\S]*?)<\/section>/);
if (articleMatch) {
  const cleanText = articleMatch[1]
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = cleanText.split(/\s+/).filter(Boolean);
  console.log(`\nEditorial Prose Word Count: ${words.length} words (Target: 800 - 1200 words)`);
  if (words.length >= 800 && words.length <= 1200) {
    console.log('✓ PASS: Word count is within 800 - 1200 words.');
  } else {
    console.warn(`Word count ${words.length} outside target 800-1200.`);
  }
} else {
  console.error('FAIL: Could not find editorial-band');
}

// 3. Check Keywords
const requestedKeywords = [
  "us to eu shoe size",
  "us to euro shoe size",
  "european shoe size to american",
  "us to european shoe size",
  "american shoe size to european",
  "american shoe size to eu",
  "european foot size to us",
  "eu foot size to us",
  "us foot size to eu",
  "european us shoe size chart",
  "eu to american shoe size",
  "us and eu shoe sizes",
  "us and european shoe sizes",
  "american and european shoe sizes",
  "eu and us shoe size chart",
  "eu boot size to us",
  "eu to us foot size",
  "feet size us to eu",
  "shoes size chart us to eu"
];

console.log('\n--- Checking Keywords Presence ---');
let kwFound = 0;
const lowerContent = content.toLowerCase();

for (const kw of requestedKeywords) {
  const found = lowerContent.includes(kw.toLowerCase());
  if (found) {
    kwFound++;
    console.log(`✓ Found: "${kw}"`);
  } else {
    console.warn(`✗ Missing: "${kw}"`);
  }
}
console.log(`\nKeywords match: ${kwFound} / ${requestedKeywords.length}`);
