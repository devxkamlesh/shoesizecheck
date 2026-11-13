# Fix the AdSense “Low value content” rejection

This plan explains why AdSense rejected `allshoesizeconverter.com`, what the available evidence proves, which changes matter, and when to request another review. Follow the phases in order. A technical fix alone cannot guarantee approval because Google makes the final editorial and commercial-quality decision.

## Issue summary

AdSense rejected the site for **Low value content**. Google says an eligible site must:

- provide authentic, high-quality information, tools, or services
- show ongoing curation and structural maintenance
- generate and sustain genuine user interest

Google’s [AdSense content and user experience guidance](https://support.google.com/adsense/answer/10015918) also requires enough unique content to establish each page’s purpose. It recommends consolidating pages with highly similar content and avoiding repeated text across the site.

Google’s [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) warn against substantially similar pages created to rank for specific, similar queries. Google calls these doorway pages when they act as search-entry variations instead of distinct destinations.

The rejection does not say the site contains prohibited or dangerous content. It says Google does not yet see enough distinct value, sustained audience demand, and editorial maturity to approve an advertising relationship.

## Why AdSense likely rejected this site

No single item proves the reviewer’s internal reasoning. The repository, Search Console exports, and rejection notice support the following diagnosis.

### 1. Too many pages repeat the same underlying value

The site publishes reciprocal conversion pages such as:

- US to EU and EU to US
- US to UK and UK to US
- US to India and India to US
- UK to EU and EU to UK
- UK to India and India to UK
- India to EU and EU to India

These pages often use the same centralized size data, converter interaction, table rows, formula explanation, frequently asked questions, and related-link layout. Reversing table columns or replacing regional names does not always create a distinct user outcome.

A reviewer can therefore see a large template network instead of a smaller collection of authoritative tools. Unique titles and descriptions do not solve this problem when the main page experience remains substantially similar.

### 2. Google independently rejected most submitted content pages

Search Console recorded:

| Date | Indexed | Not indexed | Impressions |
|---|---:|---:|---:|
| 23 October 2026 | 40 | 31 | 2,795 |
| 24 October 2026 | 10 | 61 | 2,586 |
| 28 October 2026 | 10 | 61 | 61 |

The issue export classifies the 61 excluded URLs as:

| Reason | URLs | Interpretation |
|---|---:|---|
| Crawled, currently not indexed | 31 | Google fetched the content but chose not to index it |
| Page with redirect | 27 | Historical HTTP and `www` URLs redirect to the canonical host |
| Alternate page with proper canonical | 3 | Google recognized duplicate variants and selected another canonical |

Thirty of the 31 crawled-but-not-indexed URLs are submitted sitemap pages. Google retained only 10 sitemap pages. This does not automatically cause an AdSense rejection, but it independently supports the same low-distinctiveness concern.

### 3. The site has limited sustained user interest

The Search Console export shows 65,200 impressions, 111 clicks, a 0.2% click-through rate, and an average position of 22.7 for the selected period. Visibility then fell to single-digit or low-double-digit daily impressions.

AdSense specifically asks for genuine user interest and a consistent web presence. A recently launched site with an abrupt visibility loss has not yet demonstrated a stable audience, even if its tools work correctly.

Traffic is not the only approval factor, and Google does not publish a minimum traffic requirement. The present trend still weakens the application because the rejection explicitly references sustained user interest.

### 4. A large rewrite made editorial maturity harder to demonstrate

Version 2.0.0 changed almost every page and template on 2 October. Three more production deployments followed on 31 October. Frequent large changes are not a policy violation, but they make it harder for crawlers and reviewers to observe a stable, curated product.

The site needs a documented editorial cycle with focused updates, verified sources, and measured outcomes. Publishing or rewriting many pages at once can resemble scaled content production even when a person reviewed the output.

### 5. Some trust signals exist but need stronger page-level evidence

The site already includes:

- an About page
- an editorial policy
- contact information
- privacy and terms pages
- standards references
- original photographs and measurements for selected shoes
- interactive converters

These are useful foundations. The problem is that much of the strongest evidence appears at the site level or on selected pages. Each monetized landing page must make its own value and methodology clear.

### 6. Machine-oriented discovery created avoidable low-value URLs

The site previously emitted a `SearchAction` for `/?q={search_term_string}` without a functioning search-results experience. It also linked machine resources from the human-facing footer. Search Console discovered the query-template URL and `/.well-known/api-catalog`.

These URLs were not the primary cause of rejection, but they added weak destinations to Google’s known-URL set. Version 2.1.1 removes the invalid search action and marks machine resources as non-indexable.

## What is not causing the rejection

The available evidence does not support these explanations:

- **Robots.txt block**: Search Console reports no blocked-by-robots issue
- **Sitewide `noindex`**: submitted content pages use `index, follow`
- **Server failure**: Search Console reports no server-error exclusion
- **Broken canonical setup**: the alternate pages are reported as having proper canonicals
- **Broken `www` redirect**: live tests confirm a path-preserving 301 redirect
- **Cloudflare production hostname duplication**: the production `pages.dev` hostname now redirects to the apex host
- **Missing sitemap access**: the sitemap returns 200 and its submitted URLs return 200

Do not spend the recovery period repeatedly changing these working controls.

## Code remediation completed in version 2.1.1

The technical cleanup establishes a stable baseline:

1. Removed the invalid `WebSite` `SearchAction`
2. Added `X-Robots-Tag: noindex, follow` to `/index.md`, `/llms.txt`, and `/.well-known/*`
3. Removed machine-resource links from the sitewide visual footer
4. Added a permanent redirect from the production `allshoesizeconverter.pages.dev` hostname to the canonical apex host
5. Preserved hashed Cloudflare preview deployments with `noindex`
6. Preserved HTTP and `www` redirects with path and query-string forwarding

These changes improve URL hygiene. They do not replace the content work required for AdSense approval.

## Recovery strategy

Use four phases: reduce duplication, deepen retained pages, prove maintenance, then request review.

## Phase 1: build a page inventory

Create a spreadsheet with these columns:

| URL | Search intent | GSC status | Clicks | Impressions | Unique asset | Primary source | Decision |
|---|---|---|---:|---:|---|---|---|

Use one of these decisions for every indexable URL:

- `keep`
- `rewrite`
- `merge and redirect`
- `noindex`
- `remove`

A page qualifies for `keep` only when it serves a distinct user task and contains value not available on another page.

### Audit every reciprocal conversion pair

For each pair, answer:

1. Does each direction represent a different audience or buying task?
2. Does each page include direction-specific calculations or warnings?
3. Does each page have distinct Search Console queries?
4. Does each page include original evidence or a unique interactive result?
5. Would one combined converter satisfy both intents better?

If fewer than two answers are “yes,” merge the pages.

### Merge procedure

When two pages overlap:

1. Select the URL with stronger historical performance or clearer intent
2. Move all useful, non-repeated information into the retained page
3. Add a permanent 301 redirect from the weaker URL
4. Update navigation and internal links
5. Remove the redirected URL from the sitemap
6. Keep the redirect indefinitely
7. Test the source and destination in Search Console

Do not leave two near-identical pages live and rely on canonical tags. Consolidate their content and signals.

## Phase 2: improve the pages that remain

Every retained monetized page should pass the following test.

### Direct usefulness

The page should:

- answer the primary question near the top
- provide a working converter or table without requiring an ad interaction
- explain whether results are exact, standardized, or approximate
- show gender, age, width, and brand limitations where relevant
- help the visitor make a decision, not only display equivalent numbers

### Original evidence

Add evidence that competing conversion pages cannot copy from a public formula alone:

- physical shoe measurements with method, model, labeled size, and photographs
- verified retailer or manufacturer labeling examples
- first-party comparison tests across brands
- documented edge cases where formula and retail charts differ
- original diagrams for measuring foot length and width
- anonymized aggregate tool usage only when privacy and sample size permit

Do not manufacture tests, reviews, measurements, or user data. Publish only evidence you can verify.

### Source quality

For each factual standard or formula:

- cite a standards body, government source, research institution, or manufacturer
- distinguish primary sources from explanatory secondary sources
- state the edition or publication date when relevant
- avoid presenting a retailer approximation as a universal standard
- check that outbound references still resolve

### Page-level authorship and review

Each major guide should identify:

- who reviewed it
- what qualification or practical experience supports the review
- the last substantive review date
- the calculation or measurement method
- how readers can report an error

Change a review date only after a real review. Automatic fresh dates can reduce trust.

### Advertising restraint

Before AdSense approval and during the next review:

- keep content visible without dismissing overlays
- avoid empty ad containers
- avoid placing ads where they resemble converter controls or navigation
- keep ads away from buttons, dropdowns, and result panels
- do not add more ad code or aggressive placements to solve a content rejection

The content and tool must remain the primary page experience.

## Phase 3: run a controlled three-page experiment

Do not rewrite all excluded pages at once. Start with:

1. `/country/japan/`
2. `/india-to-us-shoe-size/`
3. `/eu-to-cm-shoe-size/`

These pages previously earned meaningful impressions and represent different content types.

### Japan country guide

Add:

- Japanese centimeter-label conventions for adults and children
- differences between labeled foot length, internal length, and recommended fit
- verified examples from Japanese retailers or manufacturers
- half-centimeter behavior and common availability gaps
- original examples or measurements specific to Japanese labeling

### India to US converter

Add:

- separate men’s, women’s, and children’s buying flows
- a sourced explanation of India and UK labeling equivalence
- verified box-label or marketplace examples
- width and imported-brand caveats
- worked examples based on an Indian shopper buying US-labeled footwear

### EU to CM guide

Add:

- the Paris Point relationship with a worked calculation
- separate definitions for foot length, last length, and insole length
- rounding behavior and reasons retail charts differ
- verified manufacturer examples
- a clear boundary between standard relationships and approximations

### Measure the experiment

After publishing:

1. Test each page with Search Console’s **Test live URL**
2. Confirm that Google-selected and user-declared canonicals match
3. Request indexing once per page
4. Record status after 3, 7, 14, and 28 days
5. Compare the test pages with untouched excluded pages

Apply the pattern to another batch only if at least two test pages return to the index or show sustained relevant impressions.

## Phase 4: demonstrate ongoing curation and user interest

AdSense asks for a consistent web presence. Build evidence before requesting another review.

### Publish a maintenance record

Record each substantive change in the changelog:

- affected pages
- source or measurement added
- factual correction
- consolidation or redirect
- review date

Do not fill the changelog with styling-only updates. It should demonstrate editorial maintenance.

### Collect genuine user signals

Use Google Analytics and Search Console to monitor:

- returning visitors
- converter completion events
- engagement with measurement guides
- clicks to related pages
- search queries that match each page’s purpose
- broken or unused navigation paths

Do not buy traffic, exchange clicks, automate visits, or incentivize ad interaction.

### Add a correction workflow

The Contact page should let readers report:

- incorrect conversion values
- missing gender or age context
- brand-specific differences
- broken sources
- accessibility or interaction problems

Log corrections and publish meaningful fixes in the changelog.

## Pages to protect during recovery

Search Console appears to have retained these 10 sitemap pages:

- `/`
- `/country/`
- `/country/mexico/`
- `/editorial-policy/`
- `/eu-to-india-shoe-size/`
- `/india-to-uk-shoe-size/`
- `/kids-shoe-size-by-age/`
- `/shoe-size-by-foot-length/`
- `/shoe-size-in-inches/`
- `/us-to-mexico-shoe-size/`

Keep these pages stable unless a factual or usability problem requires a change. Use them as controls while testing excluded pages.

## AdSense review readiness gate

Do not request another review until every required item passes.

### Content

- [ ] Every indexable page has a distinct user task
- [ ] Reciprocal and overlapping pages have been merged or differentiated
- [ ] The three-page test batch contains original, verifiable evidence
- [ ] Repeated introductions and frequently asked questions have been reduced
- [ ] Claims have primary or authoritative sources
- [ ] Page-level limitations and approximation notes are visible
- [ ] No copied, lightly rewritten, or fabricated material remains

### Trust and maintenance

- [ ] About, Contact, Editorial Policy, Privacy, and Terms pages are complete
- [ ] Author or reviewer identity is consistent
- [ ] Substantive review dates are accurate
- [ ] The changelog records real editorial work
- [ ] Readers have a working correction channel
- [ ] The site has remained structurally stable for at least 2 weeks

### Technical quality

- [ ] Homepage and sitemap pages return 200
- [ ] Sitemap includes only canonical pages intended for indexing
- [ ] HTTP, `www`, and production `pages.dev` variants redirect to apex HTTPS
- [ ] Preview and machine-resource URLs are non-indexable
- [ ] No invalid search-template URL is emitted
- [ ] Navigation works on mobile and desktop
- [ ] Converter controls and results work without console errors
- [ ] No broken internal links remain

### Audience evidence

- [ ] Search Console shows crawling after the content changes
- [ ] Revised pages show indexing or improving relevant impressions
- [ ] Analytics records genuine converter use
- [ ] Traffic has not been purchased or automated
- [ ] Returning-user and engagement trends have been observed long enough to interpret

## Request the AdSense review

Once the readiness gate passes:

1. Open AdSense
2. Select **Sites**
3. Open `allshoesizeconverter.com`
4. Confirm the site is connected and `ads.txt` is authorized
5. Select the option confirming that the issues are fixed
6. Request a review once
7. Do not deploy broad template or URL changes during review
8. Monitor AdSense, Search Console, uptime, and server responses

Google says reviews usually take a few days, but timing varies. Do not repeatedly remove and re-add the site.

## If Google rejects the site again

Do not resubmit immediately. Record the rejection date and exact message, then:

1. Compare the site against the readiness gate
2. Check whether the revised pages entered the index
3. Identify pages with no distinct task, impressions, links, or usage
4. Consolidate the weakest remaining cluster
5. Add another small batch of original evidence
6. Observe the result for at least 2 weeks
7. Request review only after measurable improvement

A second rejection means the site still lacks enough demonstrated value or audience maturity. More pages and more words are not the solution. A smaller, stronger site is preferable to a large network of repetitive converters.

## Recommended release order

Use this order to keep results measurable:

1. Version 2.1.1 technical hygiene, completed 14 November 2026
2. Three-page original-content experiment
3. Two-week observation period
4. Reciprocal-page consolidation based on inventory evidence
5. Another observation period
6. AdSense readiness review
7. AdSense resubmission

## Expected outcome

The plan succeeds when the site demonstrates three qualities:

- **Unique value**: retained pages contain original evidence and distinct outcomes
- **Editorial maturity**: sources, limitations, corrections, and updates are maintained consistently
- **Genuine interest**: people discover, use, and revisit the tools without artificial traffic

Approval remains Google’s decision. This plan removes the most plausible rejection causes and creates evidence for a stronger review.