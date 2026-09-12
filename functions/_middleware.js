export async function onRequest(context) {
  const { request, next } = context;
  const accept = request.headers.get('accept') || '';
  const url = new URL(request.url);

  // If request asks for text/markdown on the homepage
  if (accept.includes('text/markdown')) {
    if (url.pathname === '/' || url.pathname === '/index.html' || url.pathname === '') {
      const mdResponse = await context.env.ASSETS.fetch(new URL('/index.md', request.url));
      if (mdResponse.ok) {
        const text = await mdResponse.text();
        const words = text.match(/\b\w+\b/g) || [];
        const tokenCount = Math.round(words.length * 1.3);
        return new Response(text, {
          status: 200,
          headers: {
            'content-type': 'text/markdown; charset=utf-8',
            'x-markdown-tokens': String(tokenCount),
            'vary': 'Accept',
            'cache-control': 'public, max-age=0, must-revalidate'
          }
        });
      }
    }
  }

  // If request directly fetches /index.md, ensure text/markdown content-type
  if (url.pathname === '/index.md') {
    const mdResponse = await context.env.ASSETS.fetch(request);
    if (mdResponse.ok) {
      const text = await mdResponse.text();
      const words = text.match(/\b\w+\b/g) || [];
      const tokenCount = Math.round(words.length * 1.3);
      return new Response(text, {
        status: 200,
        headers: {
          'content-type': 'text/markdown; charset=utf-8',
          'x-markdown-tokens': String(tokenCount),
          'cache-control': 'public, max-age=3600',
          'access-control-allow-origin': '*'
        }
      });
    }
  }

  return next();
}
