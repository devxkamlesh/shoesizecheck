// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from './scripts/sitemap.mjs';
import { MOVED } from './src/data/redirects.mjs';

const site = 'https://allshoesizeconverter.com';

// https://astro.build/config
export default defineConfig({
  site,
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: true,
  integrations: [sitemap(site)],
  // Static fallback for when Pages Functions don't run (preview, fail-open, other hosts).
  // functions/_middleware.js still answers with a real 301 first when it runs.
  redirects: MOVED,
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: [400, 500, 600, 700],
    },
    {
      // Display face for headings and size numerals.
      provider: fontProviders.google(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-bricolage',
      weights: [600, 700, 800],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      weights: [400, 500],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
