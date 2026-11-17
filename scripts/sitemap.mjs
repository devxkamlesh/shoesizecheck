// Astro integration: writes dist/sitemap.xml from the pages Astro actually built, skipping any
// page marked noindex. lastmod is the last commit that touched the page file or any local file it
// imports (components, layouts, data), followed recursively, so the date moves whenever something
// rendered on that page changes. Needs full git history at build time (not a shallow clone).
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const IMPORT = /(?:import|from)\s+['"](\.{1,2}\/[^'"]+)['"]/g;
const EXTENSIONS = ['', '.astro', '.ts', '.mjs', '.js', '/index.ts', '/index.astro'];

/** The file plus every relative import it reaches, as repo-relative paths. */
function localDependencies(file, seen = new Set()) {
  if (seen.has(file)) return seen;
  seen.add(file);
  const src = readFileSync(file, 'utf8');
  for (const [, spec] of src.matchAll(IMPORT)) {
    const base = path.posix.join(path.posix.dirname(file), spec);
    const target = EXTENSIONS.map(ext => base + ext).find(p => existsSync(p) && !p.endsWith('/'));
    if (target && /\.(astro|ts|mjs|js)$/.test(target)) localDependencies(target, seen);
  }
  return seen;
}

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
            const lastmod = file ? lastCommitDate([...localDependencies(file)]) : '';
            return `  <url><loc>${site}/${pathname}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`;
          });
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
        writeFileSync(new URL('sitemap.xml', dir), xml);
        logger.info(`sitemap.xml: ${entries.length} URLs`);
      },
    },
  };
}
