// Astro integration: writes dist/sitemap.xml from the pages Astro actually built, skipping any
// page marked noindex. lastmod is the last commit that touched the page file, plus the shared size
// data when the page imports it, so the date moves only when that page's content changes.
// ponytail: edits to shared components (FAQ, HomeSeoContent) don't bump lastmod; add their paths
// here if they start carrying page content. Needs full git history at build time (not a shallow clone).
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';

/** Date (YYYY-MM-DD) of the last commit touching any of `files`, or '' when git has none. */
function lastCommitDate(files) {
  try {
    return execFileSync('git', ['log', '-1', '--format=%cs', '--', ...files], { encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
}

/** Source .astro file that renders a built pathname such as '', 'about/', or 'country/europe/'. */
function sourceFile(pathname) {
  const base = 'src/pages' + (pathname ? '/' + pathname.replace(/\/$/, '') : '');
  for (const file of [`${base}.astro`, `${base}/index.astro`]) if (existsSync(file)) return file;
  const dir = base.slice(0, base.lastIndexOf('/'));
  const dynamic = readdirSync(dir).find(name => name.startsWith('['));
  return dynamic ? `${dir}/${dynamic}` : '';
}

export default function sitemap(site) {
  return {
    name: 'sitemap',
    hooks: {
      'astro:build:done': ({ dir, pages, logger }) => {
        const entries = pages
          .map(({ pathname }) => pathname)
          .filter(pathname => {
            // Astro reports '404/' for dist/404.html, so try both layouts.
            const html = [`${pathname}index.html`, `${pathname.replace(/\/$/, '')}.html`]
              .map(p => new URL(p, dir))
              .find(url => existsSync(url));
            return html && !/<meta name="robots" content="noindex/.test(readFileSync(html, 'utf8'));
          })
          .sort()
          .map(pathname => {
            const file = sourceFile(pathname);
            const usesData = file && readFileSync(file, 'utf8').includes('data/shoe-sizes');
            const lastmod = file ? lastCommitDate(usesData ? [file, 'src/data/shoe-sizes.ts'] : [file]) : '';
            return `  <url><loc>${site}/${pathname}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`;
          });
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
        writeFileSync(new URL('sitemap.xml', dir), xml);
        logger.info(`sitemap.xml: ${entries.length} URLs`);
      },
    },
  };
}
