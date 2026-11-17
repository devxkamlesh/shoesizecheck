# allshoesizeconverter.com

Static Astro site with shoe size converters and charts (US, UK, EU, India, Japan, Mexico, CM, and more), deployed to Cloudflare Pages.

## Commands

| Command | What it does |
| :-- | :-- |
| `npm install` | Install dependencies (Node 22.18+) |
| `npx astro dev --background` | Start the dev server at `localhost:4321` (`astro dev stop` to stop) |
| `npm run build` | Type-check (`astro check`), then build to `dist/` and write `dist/sitemap.xml` |
| `npm run check:sizes` | After a build: fail if any size pairing in page text disagrees with the size data |
| `npm run audit` | After a build: check titles, descriptions, breadcrumbs, and orphan pages |
| `npm run deploy` | Build and deploy `dist/` with Wrangler |

## Where things live

- `src/data/shoe-sizes.ts`: the single source of truth for every size table and converter. EU sizes follow Nike's published charts; Mexico sizes are foot length in cm. Change numbers here, then run `npm run build && npm run check:sizes` to find page text that needs updating.
- `src/pages/`: one hand-written page per conversion and country. `[conversion].astro` and `[country].astro` only render entries that have no dedicated page.
- `scripts/sitemap.mjs`: Astro integration that generates the sitemap. `lastmod` comes from git history, so build from a full clone.
- `functions/_middleware.js`: Cloudflare Pages middleware for host redirects, retired URLs (add them to `MOVED`), and the Markdown view of the homepage. Put redirects here, not in `public/_redirects`, because Pages skips `_redirects` for requests that go through Functions.
- `public/_headers`: security headers and noindex rules for machine-readable files and preview domains.
