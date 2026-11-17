// Permanent (301) redirects for retired, merged, or misspelled URLs.
// One list feeds both functions/_middleware.js (the real 301 on Cloudflare) and
// astro.config.mjs `redirects` (static fallback pages when Functions don't run).
// Keys have no trailing slash; values are final URLs, so there are no redirect chains.
export const MOVED = {
  // Reverse-direction duplicates, merged into one page per pair (November 2026).
  '/uk-to-us-shoe-size': '/us-to-uk-shoe-size/',
  '/us-to-eu-shoe-size': '/eu-to-us-shoe-size/',
  '/eu-to-uk-shoe-size': '/uk-to-eu-shoe-size/',
  '/india-to-eu-shoe-size': '/eu-to-india-shoe-size/',
  '/india-to-us-shoe-size': '/us-to-india-shoe-size/',
  '/uk-to-india-shoe-size': '/india-to-uk-shoe-size/',
  // Thin single-size page, folded into its topic page.
  '/eu-40-to-au-shoe-size': '/country/australia/',
  // Misspelling.
  '/us-to-maxico-shoe-size': '/us-to-mexico-shoe-size/',
};
