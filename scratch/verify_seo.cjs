const http = require('http');

function fetchBody(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${path}`, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    });
  });
}

async function verify() {
  const usHtml = await fetchBody('/country/us/');
  const homeHtml = await fetchBody('/');

  const usChecks = {
    hasMainKw: usHtml.includes('us shoe size chart'),
    hasSecKw1: usHtml.includes('shoe size conversion chart'),
    hasSecKw2: usHtml.includes('men shoe size chart'),
    hasSecKw3: usHtml.includes('female shoe size chart'),
    hasSecKw4: usHtml.includes('childs shoe size chart'),
    hasSecKw5: usHtml.includes('feet size chart'),
    hasSecKw6: usHtml.includes('36 shoe size in us women'),
    hasFaq1: usHtml.includes('Is a US size 8 a 38 or 39?'),
    hasFaq2: usHtml.includes('Is US 7 size 40?'),
    hasFaq3: usHtml.includes('What is 42 in US shoe size?'),
    hasFaq4: usHtml.includes('What is US size 8 in India?'),
    hasOgTitle: usHtml.includes('og:title'),
    hasOgImage: usHtml.includes('og:image'),
    hasFaqSchema: usHtml.includes('"@type":"FAQPage"') || usHtml.includes('"@type": "FAQPage"')
  };

  const homeProseMatch = homeHtml.match(/<section class="seo-content-section"[\s\S]*?<\/section>/);
  let homeProseWords = 0;
  if (homeProseMatch) {
    const text = homeProseMatch[0].replace(/<[^>]+>/g, ' ');
    homeProseWords = text.trim().split(/\s+/).filter(Boolean).length;
  }

  console.log({ usChecks, homeProseWords });
}

verify();
