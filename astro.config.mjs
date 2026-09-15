// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://allshoesizeconverter.com',
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: true,
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: [400, 500, 600, 700],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      weights: [400, 500],
    },
  ],
  redirects: {
    '/us-to-maxico-shoe-size': '/us-to-mexico-shoe-size/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

