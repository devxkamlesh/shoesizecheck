const fs = require('fs');

const indiaHtml = fs.readFileSync('dist/country/india/index.html', 'utf8');

const checks = {
  // Main Keyword
  hasMainKw: indiaHtml.includes('india shoe size chart'),
  
  // Secondary Keywords
  hasShoeSizeChart: indiaHtml.includes('shoe size chart'),
  hasShoeSizeChartIndiaFemale: indiaHtml.includes('shoe size chart india female'),
  hasShoeSizeChartIndia: indiaHtml.includes('shoe size chart india'),
  hasIndianShoeSizeChart: indiaHtml.includes('indian shoe size chart'),
  hasShoeSizeChartWomen: indiaHtml.includes('shoe size chart women'),
  hasKidsShoeSizeChart: indiaHtml.includes('kids shoe size chart'),
  hasShoeSizeChartMen: indiaHtml.includes('shoe size chart men'),
  hasToddlerShoeSizeChartByAge: indiaHtml.includes('toddler shoe size chart by age'),
  
  // FAQs
  hasFaqWhichChart: indiaHtml.includes('Which shoe size chart is used in India?'),
  hasFaqHowToMeasure: indiaHtml.includes('Shoe size chart: How to measure your feet accurately at home?'),
  hasFaqMenInWomen: indiaHtml.includes('What size is a men\'s shoe in a women\'s shoe size chart?'),
  hasFaqWhatIsCm: indiaHtml.includes('What does CM mean on an Indian shoe size chart?'),
  hasFaqHowToReadUse: indiaHtml.includes('How to read and use a shoe size chart correctly?'),
  hasFaqHowToFit: indiaHtml.includes('How should shoes properly fit according to an Indian shoe size chart?'),
  hasFaqWidthChart: indiaHtml.includes('How does a shoe size width chart work for Indian footwear?'),
  hasFaqKidsAge: indiaHtml.includes('How do kids and toddler shoe sizes correspond to age in India?'),
  
  // SEO Meta & Schema
  hasOgTitle: indiaHtml.includes('property="og:title"'),
  hasOgDescription: indiaHtml.includes('property="og:description"'),
  hasOgUrl: indiaHtml.includes('property="og:url"'),
  hasOgImage: indiaHtml.includes('property="og:image"'),
  hasTwitterCard: indiaHtml.includes('name="twitter:card"'),
  hasFaqSchema: indiaHtml.includes('"@type":"FAQPage"'),
  hasBreadcrumbSchema: indiaHtml.includes('"@type":"BreadcrumbList"')
};

console.log(checks);

const allPassed = Object.values(checks).every(Boolean);
console.log('All checks passed:', allPassed);
