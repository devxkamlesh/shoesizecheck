# Google Indexing Recovery Runbook

Last updated: 14 November 2026

This document is the step-by-step recovery plan for `allshoesizeconverter.com`. Complete the steps in order. Do not make unrelated design, title, URL, or template changes while measuring recovery.

## 1. What the data proves

The Search Console exports show this sequence:

| Date | Indexed | Not indexed | Impressions |
|---|---:|---:|---:|
| 23 October | 40 | 31 | 2,795 |
| 24 October | 10 | 61 | 2,586 |
| 27 October | 10 | 61 | 1,861 |
| 28 October | 10 | 61 | 61 |

Google moved 30 pages out of the index on 24 October. Search visibility then collapsed on 28 October.

The 61 excluded URLs consist of:

- 31 `Crawled - currently not indexed`
- 27 `Page with redirect`
- 3 `Alternative page with proper canonical tag`

There are no reported `noindex`, robots.txt, server error, redirect error, or canonical-conflict exclusions. The 27 redirect URLs are old HTTP or `www` variants. The 3 canonical alternatives are duplicates. Those 30 URLs are normal cleanup and are not the main problem.

The important issue is that Google crawled 30 submitted content pages and chose not to index them. This points to overlapping intent, repetitive page templates, or insufficiently distinct value across the URL set.

## 2. Changes already made in the repository

The remediation release makes only technical-hygiene changes:

1. Removes the invalid `SearchAction` that generated `/?q={search_term_string}` even though the site has no working search results page.
2. Adds `X-Robots-Tag: noindex, follow` to `/index.md`, `/llms.txt`, and `/.well-known/*` machine resources.
3. Removes machine-resource links from the visual sitewide footer.
4. Redirects the production `allshoesizeconverter.pages.dev` hostname to the apex domain while keeping deployment-preview hostnames available and `noindex`.
5. Preserves the existing `www` to apex redirect.

These changes clean up discovery signals. They will not, by themselves, make Google re-index 30 pages. Content consolidation is still required.

## 3. Deploy one controlled release

1. Review the working tree:

   ```powershell
   git status --short
   git diff -- src/pages/index.astro src/components/Footer.astro functions/_middleware.js public/_headers SEO_RECOVERY_RUNBOOK.md
   ```

2. Confirm that unrelated existing work, especially changes to `src/pages/eu-to-india-shoe-size.astro`, is intentional before committing.
3. Run:

   ```powershell
   npm run check
   npm run build
   ```

4. Deploy using the normal Cloudflare Pages workflow.
5. Record the production deployment time and commit SHA in a private log.
6. Do not deploy another SEO/template release for at least 2 weeks unless this release causes a genuine technical failure.

## 4. Verify the deployment

Run these checks after Cloudflare reports a successful deployment.

### Apex homepage

Open `https://allshoesizeconverter.com/` and confirm:

- HTTP status is 200.
- The page renders normally.
- Canonical is `https://allshoesizeconverter.com/`.
- Robots directive is `index, follow`.
- Page source does not contain `SearchAction` or `search_term_string`.

### Host redirects

Check:

- `https://www.allshoesizeconverter.com/us-to-eu-shoe-size/?test=1`
- `https://allshoesizeconverter.pages.dev/us-to-eu-shoe-size/?test=1`

Both should return a permanent redirect to:

`https://allshoesizeconverter.com/us-to-eu-shoe-size/?test=1`

The path and query string must remain intact.

Cloudflare preview deployments such as `https://<hash>.allshoesizeconverter.pages.dev/` should remain accessible for testing but must return `X-Robots-Tag: noindex, nofollow`.

### Machine resources

Check headers for:

- `https://allshoesizeconverter.com/index.md`
- `https://allshoesizeconverter.com/llms.txt`
- `https://allshoesizeconverter.com/.well-known/api-catalog`
- `https://allshoesizeconverter.com/.well-known/schema.json`

Each should remain accessible and return `X-Robots-Tag: noindex, follow`.

### Sitemap and robots

Confirm:

- `https://allshoesizeconverter.com/robots.txt` returns 200.
- `https://allshoesizeconverter.com/sitemap.xml` returns 200.
- Every sitemap URL uses HTTPS and the non-`www` host.
- Every sitemap URL returns 200 directly, without a redirect.
- The sitemap contains only pages that should compete in Google Search.

## 5. Search Console actions after deployment

### Do immediately

1. Open Search Console for the domain property.
2. Open **URL Inspection**.
3. Inspect the homepage.
4. Click **Test Live URL**.
5. Confirm:
   - URL is available to Google.
   - Indexing is allowed.
   - No page-fetch error appears.
   - User-declared canonical is the apex homepage.
6. Request indexing for the homepage only if the live test passes.
7. Submit `https://allshoesizeconverter.com/sitemap.xml` again only if Search Console does not already show a successful recent read.

### Do not validate the normal exclusions

Do not spend time trying to make these URLs indexable:

- HTTP URLs
- `www` URLs
- URLs classified as `Page with redirect`
- URLs classified as `Alternative page with proper canonical tag`

Those URLs are supposed to be excluded. A redirect URL remaining in the report does not mean its destination is broken.

### Inspect a representative content sample

Inspect these 5 URLs:

1. Homepage, retained/indexed control page
2. `/kids-shoe-size-by-age/`, retained/indexed informational page
3. `/country/japan/`, excluded former strong page
4. `/india-to-us-shoe-size/`, excluded former strong page
5. `/eu-to-cm-shoe-size/`, excluded former strong page

For every URL, save:

- Last crawl date
- Page fetch status
- Indexing allowed status
- User-declared canonical
- Google-selected canonical
- Current index status

If Google-selected canonical differs from the user canonical, stop and investigate that URL before changing content. If the canonical agrees and the reason remains `Crawled - currently not indexed`, continue with the content plan below.

## 6. Content recovery strategy

Do not rewrite all 30 excluded pages at once. Use a small test batch so the result can be measured.

### Test batch

Start with these 3 excluded URLs because they previously had useful visibility:

1. `/country/japan/`
2. `/india-to-us-shoe-size/`
3. `/eu-to-cm-shoe-size/`

Do not change the 10 retained pages during this experiment.

### Requirements for each revised page

Each page must answer a distinct search intent rather than merely reversing the columns of another converter.

Add or improve:

- A direct answer near the top for the exact query intent.
- Original calculation methodology and clear assumptions.
- The authoritative standard or primary source behind the numbers.
- Examples that are specific to that market or conversion direction.
- Brand or retailer labeling differences where they can be verified.
- At least one genuinely useful element not present on the inverse page.
- Clear explanation of where conversion values are approximate.
- A short update/review statement that reflects a real review, not an automatically changed date.

Avoid:

- Repeating the same introduction with system names swapped.
- Creating separate URLs for every individual size query.
- Generic FAQ text copied across converters.
- Claims such as “accurate” or “authoritative” without evidence.
- Adding words only to increase page length.
- Automatically generated `lastmod` dates when content did not change.

### Direction-specific examples

For `/country/japan/`:

- Explain Japan's centimeter labeling versus actual internal shoe length.
- Show how Japanese retailers label men, women, and children.
- Explain half-centimeter increments and brand variation.
- Cite a Japanese or manufacturer primary source where possible.

For `/india-to-us-shoe-size/`:

- Address Indian shoppers buying US-labeled footwear.
- Explain UK/India equivalence and gender-specific US offsets.
- Show marketplace and box-label examples that can be verified.
- Clearly separate men, women, and kids conversions.

For `/eu-to-cm-shoe-size/`:

- Explain the difference between foot length, last length, and insole length.
- Explain the Paris Point formula and why formula results may differ from retail charts.
- Include worked calculations and rounding behavior.
- Separate exact standard relationships from brand approximations.

## 7. Decide which overlapping pages to merge

Audit reciprocal pairs together:

- US to EU / EU to US
- US to UK / UK to US
- US to India / India to US
- UK to EU / EU to UK
- UK to India / India to UK
- India to EU / EU to India
- US to CM / shoe size in CM / shoe size by foot length

For each pair or cluster, answer:

1. Do users have meaningfully different intent in each direction?
2. Does each page contain unique information beyond reversing a table?
3. Did either page earn distinct queries, clicks, or links?
4. Can one strong page satisfy both directions without harming usability?

If the pages are not meaningfully distinct:

1. Choose the URL with stronger historical performance and clearer intent.
2. Move useful unique content into that page.
3. Add a 301 redirect from the weaker URL to the retained URL.
4. Update all internal links.
5. Remove the weaker URL from the sitemap.
6. Keep the redirect permanently.

Do not canonicalize two live, near-identical pages as a substitute for consolidation. If only one deserves to exist, redirect the other.

## 8. Re-indexing experiment

After deploying meaningful revisions to the 3-page test batch:

1. Run URL Inspection and **Test Live URL** for each revised page.
2. Request indexing for only those 3 pages.
3. Do not request indexing repeatedly.
4. Wait at least 14 days.
5. Record results on days 3, 7, and 14:
   - Last crawl date
   - Index status
   - Impressions
   - Queries
   - Google-selected canonical
6. If 2 or more pages return to the index, apply the successful pattern to the next small batch.
7. If none return, wait up to 28 days before concluding that the test failed.
8. If the pages remain excluded after 28 days, consolidate more aggressively rather than adding more generic copy.

## 9. Monitoring sheet

Maintain a spreadsheet with these columns:

| URL | Group | Before status | Change date | Main change | Inspection date | Last crawl | Google canonical | Status day 7 | Status day 14 | Impressions |
|---|---|---|---|---|---|---|---|---|---|---:|

Use groups such as `retained control`, `revised test`, `redirected`, and `untouched excluded`.

Compare revised pages with untouched excluded pages. This control group is important; otherwise an algorithm update may be mistaken for the effect of your changes.

## 10. When to use Validate Fix

`Crawled - currently not indexed` is primarily a Google-systems decision, not a basic technical validation error. Improve or consolidate pages first.

Use **Validate Fix** only after:

- Revised pages are deployed and live tests pass.
- Redirect destinations are correct.
- The sitemap contains only canonical 200-status pages.
- There is a meaningful sitewide or group-level correction to validate.

Do not repeatedly start validation without making substantive changes.

## 11. What not to do

- Do not roll back blindly to v2.0.0.
- Do not remove correct `www` or HTTP redirects.
- Do not submit redirect URLs in the sitemap.
- Do not request indexing for all 30 pages on the same day.
- Do not publish dozens of new long-tail size URLs.
- Do not rewrite titles, layouts, navigation, schema, and content simultaneously.
- Do not change URLs without permanent redirects.
- Do not interpret a redirect URL remaining in Coverage as a failed destination page.
- Do not deploy daily SEO experiments.

## 12. Success criteria

Technical success:

- Apex and sitemap pages return 200.
- `www`, HTTP, and production `pages.dev` URLs redirect to apex HTTPS.
- Preview hosts and machine resources are not indexable.
- No new query-template or host-duplicate URLs are discovered.

Content experiment success:

- At least 2 of the first 3 revised pages become indexed.
- Their Google-selected canonicals match the declared canonicals.
- Impressions return for relevant queries without creating new duplicate URLs.

Site recovery success:

- Indexed count rises because improved canonical content pages are accepted, not because redirect or duplicate URLs enter the index.
- Search impressions recover across stable URLs over several weeks.
- Future releases are measured independently rather than stacked together.
