const fs = require('fs');

const ukHtml = fs.readFileSync('dist/country/uk/index.html', 'utf8');

const checks = {
  hasMainKw: ukHtml.includes('uk shoe size chart'),
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
  hasFaqMeasure: ukHtml.includes('How do I measure my feet at home to find my size on a UK shoe size chart?'),
  hasFaqChinese: ukHtml.includes('What is a Chinese shoe size chart and how does it convert to UK sizes?'),
  hasFaqClarksWidth: ukHtml.includes('How does a UK shoe size width chart work, particularly for Clarks footwear?'),
  hasFaqCm: ukHtml.includes('What does CM mean on a shoe size chart and why is it the most reliable measurement?'),
  hasFaqProperFit: ukHtml.includes('How should shoes properly fit according to a British size guide?'),
  hasFaqAgeProgression: ukHtml.includes('How do UK toddler and children\'s shoe sizes correspond to age?'),
  hasOgTitle: ukHtml.includes('og:title'),
  hasOgImage: ukHtml.includes('og:image'),
  hasFaqSchema: ukHtml.includes('"@type":"FAQPage"')
};

console.log(checks);
