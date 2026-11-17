// Permanent redirects for misspelled or retired URLs. These live here, not in
// public/_redirects, because Cloudflare Pages skips _redirects for requests
// that run through Functions, and this middleware runs on every route.
// The list is shared with astro.config.mjs; edit it in src/data/redirects.mjs.
import { MOVED } from '../src/data/redirects.mjs';

export async function onRequest(context) {
  const { request, next } = context;
  const accept = request.headers.get('accept') || '';
  const url = new URL(request.url);

  // Keep one permanent hostname so Google does not split URL signals.
  // Host and path fixes go out as a single 301 so there is no redirect chain.
  const hostname = url.hostname.toLowerCase();
  const wrongHost = hostname === 'www.allshoesizeconverter.com' || hostname === 'allshoesizeconverter.pages.dev';
  const movedPath = MOVED[url.pathname.replace(/\/$/, '')];
  if (wrongHost || movedPath) {
    if (wrongHost) {
      url.protocol = 'https:';
      url.hostname = 'allshoesizeconverter.com';
    }
    if (movedPath) url.pathname = movedPath;
    return Response.redirect(url.toString(), 301);
  }

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
            'x-robots-tag': 'noindex, follow',
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
          'x-robots-tag': 'noindex, follow',
          'x-markdown-tokens': String(tokenCount),
          'cache-control': 'public, max-age=3600',
          'access-control-allow-origin': '*'
        }
      });
    }
  }

  return next();
}
