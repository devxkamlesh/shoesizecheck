const fs = require('fs');

const ukHtml = fs.readFileSync('dist/country/uk/index.html', 'utf8');

const checks = {
  // Main Keyword
  hasMainKw: ukHtml.includes('uk shoe size chart'),
  
  // Secondary Keywords
  hasSizeChartShoes: ukHtml.includes('size chart shoes'),
  hasFeetSizeChart: ukHtml.includes('feet size chart'),
  hasChildsShoeSizeChart: ukHtml.includes('childs shoe size chart'),
  hasSizeGuideShoes: ukHtml.includes('size guide shoes'),
  hasToddlerShoeSizeChart: ukHtml.includes('toddler shoe size chart'),
  hasClarksShoeSizeChart: ukHtml.includes('clarks shoe size chart'),
  hasKidsShoeSizeChartUk: ukHtml.includes('kids shoe size chart uk'),
  hasToddlerUk: ukHtml.includes('toddler shoe size chart uk'),
  hasToddlerByAge: ukHtml.includes('toddler shoe size chart by age'),
  hasBabyShoeSizeChart: ukHtml.includes('baby shoe size chart'),
  hasShoeSizeChart: ukHtml.includes('shoe size chart'),
  hasKidsShoeSizeChart: ukHtml.includes('kids shoe size chart'),
  
  // FAQ queries
  hasFaqMeasure: ukHtml.includes('Shoe size chart: How to measure your feet accurately at home?'),
  hasFaqHowToRead: ukHtml.includes('How do I read a shoe size chart to find my correct UK size?'),
  hasFaqChinese: ukHtml.includes('What is a Chinese shoe size chart and how does it convert to UK sizes?'),
  hasFaqHowToFit: ukHtml.includes('How to fit my shoe size chart: How should properly fitted shoes feel?'),
  hasFaqWidthChart: ukHtml.includes('How does a shoe size width chart work for Clarks and British footwear?'),
  hasFaqCm: ukHtml.includes('What does CM mean on a shoe size chart and why is it the most reliable measurement?'),
  hasFaqAgeProgression: ukHtml.includes('How do UK toddler and children\'s shoe sizes correspond to age?'),
  hasFaqUsEuCompare: ukHtml.includes('How do UK adult shoe sizes compare with US and European footwear?'),
  
  // Technical & Schema
  hasOgTitle: ukHtml.includes('property="og:title"'),
  hasOgDescription: ukHtml.includes('property="og:description"'),
  hasOgUrl: ukHtml.includes('property="og:url"'),
  hasOgImage: ukHtml.includes('property="og:image"'),
  hasTwitterCard: ukHtml.includes('name="twitter:card"'),
  hasFaqSchema: ukHtml.includes('"@type":"FAQPage"'),
  hasBreadcrumbSchema: ukHtml.includes('"@type":"BreadcrumbList"')
};

console.log(checks);

const allPassed = Object.values(checks).every(Boolean);
console.log('All checks passed:', allPassed);
