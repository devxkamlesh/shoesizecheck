const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/pages/us-to-eu-shoe-size.astro');
const content = fs.readFileSync(filePath, 'utf8');

console.log('=== Verifying US to EU Shoe Size Page ===\n');

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
  "US to EU Shoe Size",
  "us to eu shoe size",
  "eu shoe size to us",
  "european shoe size chart",
  "eu size to us",
  "euro shoe size to us women's",
  "us to euro shoe size",
  "european shoe size to american",
  "us to european shoe size",
  "american shoe size to european",
  "european size to us",
  "european shoe size guide",
  "american shoe size to eu",
  "european foot size to us",
  "euro shoe sizes",
  "eu foot size to us",
  "us foot size to eu",
  "eu size shoes",
  "european us shoe size chart",
  "eu to american shoe size",
  "us and eu shoe sizes",
  "us and european shoe sizes"
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

// 4. Check FAQs
const faqs = [
  "what is the eu shoe size to us",
  "what is eu to us shoe size",
  "how do i convert my shoe size from eu to us",
  "what is eu shoe size to us",
  "what are the us to eu shoe size conversions"
];

console.log('\n--- Checking FAQs Presence ---');
let faqFound = 0;
for (const f of faqs) {
  const found = lowerContent.includes(f.toLowerCase());
  if (found) {
    faqFound++;
    console.log(`✓ Found FAQ: "${f}"`);
  } else {
    console.warn(`✗ Missing FAQ: "${f}"`);
  }
}
console.log(`\nFAQs match: ${faqFound} / ${faqs.length}`);
