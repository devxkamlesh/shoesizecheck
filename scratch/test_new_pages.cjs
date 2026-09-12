const http = require('http');

function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${path}`, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({
          path,
          status: res.statusCode,
          hasTitle: body.includes('<title>'),
          hasFaqSchema: body.includes('"@type":"FAQPage"') || body.includes('"@type": "FAQPage"'),
          hasHeader: body.includes('AllShoeSizeConverter'),
          hasFooter: body.includes('AllShoeSizeConverter. All rights reserved.'),
          bodyLength: body.length
        });
      });
    }).on('error', (err) => resolve({ path, error: err.message }));
  });
}

async function run() {
  const r1 = await checkUrl('/kids-shoe-size-by-age/');
  const r2 = await checkUrl('/mondopoint-shoe-size/');
  console.log(JSON.stringify({ r1, r2 }, null, 2));
}

run();
