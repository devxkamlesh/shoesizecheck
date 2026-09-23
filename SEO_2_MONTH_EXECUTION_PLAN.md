# AllShoeSizeConverter: 2-Month SEO Execution Plan

**Site:** https://allshoesizeconverter.com  
**Data source:** Search Console export in `Test Data/`  
**Starting date:** September 23, 2026

## Current Baseline

Search Console data for the last 28 days shows:

| Metric | Current value |
|---|---:|
| Impressions | 4,230 |
| Organic clicks | 2 |
| Average CTR | About 0.05% |
| India impressions | 1,049 |
| India average position | 12.3 |
| Mobile average position | 11.03 |
| Desktop average position | 45.07 |

The strongest opportunity is India-focused mobile search. The site already appears near page one for several specific conversion queries, but the broad converter terms are still mostly on pages 3-10.

## Priority Search Opportunities

Work on these existing pages first:

1. `/india-to-uk-shoe-size/`
2. `/us-to-cm-shoe-size/`
3. `/india-to-us-shoe-size/`
4. `/eu-to-india-shoe-size/`
5. `/kids-shoe-size-by-age/`
6. `/country/india/`
7. `/country/australia/`

Important queries from the export:

- `uk and india shoe size`
- `indian 9 size in uk`
- `india 9 size in uk`
- `indian 10 size in uk`
- `indian shoe size 5 in uk`
- `indian shoe size 6 in uk`
- `us 10.5 to cm`
- `us10 to cm`
- `us 10 to cm`
- `us 9.5 to cm`
- `eu40 to au`
- `toddler shoe sizes`

## Cloudflare Canonical Host Setup

Use one canonical hostname: `allshoesizeconverter.com`.

Create a Cloudflare **Single Redirect** rule:

- **Rule name:** `Redirect www to canonical domain`
- **Match type:** `Wildcard pattern`
- **Request URL:** `https://www.allshoesizeconverter.com/*`
- **Target URL:** `https://allshoesizeconverter.com/${1}`
- **Status code:** `301 - Permanent Redirect`
- **Preserve query string:** Enabled
- **Order:** First

Test with:

```powershell
Invoke-WebRequest `
  -Uri "https://www.allshoesizeconverter.com/india-to-uk-shoe-size/?test=1" `
  -Method Head `
  -MaximumRedirection 0 `
  -ErrorAction SilentlyContinue
```

Expected result:

```text
Status: 301
Location: https://allshoesizeconverter.com/india-to-uk-shoe-size/?test=1
```

The site also has a Pages middleware redirect in `functions/_middleware.js`. Keep it as a fallback unless Cloudflare confirms that the Single Redirect rule handles all traffic. Do not create redirect chains.

## Week 1: Technical Consolidation

- Confirm the `www` to non-`www` redirect returns `301`.
- Confirm the canonical URL remains `https://allshoesizeconverter.com`.
- Confirm `/robots.txt` and `/sitemap.xml` return `200`.
- Resubmit `https://allshoesizeconverter.com/sitemap.xml` in Search Console.
- Request indexing for the five priority pages.
- Check that Search Console lists only the canonical host after recrawling.
- Test priority pages on a mobile device.

## Week 2: India-to-UK Page

Improve `/india-to-uk-shoe-size/` with answer-first content:

> Indian size 9 is usually UK size 9. Indian and UK adult sizes generally use the same numeric scale, but check the brand's CM measurement for the best fit.

Ensure the page contains:

- A visible India-to-UK table for sizes 5-12.
- Men, women, and kids sections.
- CM, US, and EU equivalents.
- An answer to whether Indian and UK sizes are the same.
- Exact FAQ questions for Indian sizes 5, 6, 8, 9, and 10.
- Links to India-to-US, India-to-EU, and the India country guide.

## Week 3: US-to-CM Page

Improve `/us-to-cm-shoe-size/` with a quick-answer table:

| US men's size | CM |
|---:|---:|
| 8 | 26.0 |
| 8.5 | 26.5 |
| 9 | 27.0 |
| 9.5 | 27.5 |
| 10 | 28.0 |
| 10.5 | 28.5 |

Also include:

- Separate men's and women's tables.
- A clear explanation that CM values differ by category.
- Exact answers for `US 10 to CM`, `US 10.5 to CM`, and `US 9.5 to CM`.
- Links to shoe size in CM and foot-length pages.

## Week 4: Australia Opportunity

Create a useful page for the query that is already near page one:

- **URL:** `/eu-40-to-au-shoe-size/`
- **Title:** `EU 40 to AU Shoe Size: Men's and Women's Conversion`

Include EU 40 equivalents for:

- Australian men's sizing.
- Australian women's sizing.
- US and UK sizing.
- Foot length in CM.
- Brand-specific variation disclaimer.

Link it from `/country/australia/`, `/eu-to-cm-shoe-size/`, and the converters directory.

## Week 5: Internal Linking

Add contextual links using descriptive anchor text:

- Homepage -> `India to UK shoe size converter`
- Homepage -> `US shoe size to CM chart`
- `/country/india/` -> India-to-UK and India-to-US pages.
- `/country/uk/` -> India-to-UK and UK-to-India pages.
- `/country/australia/` -> EU 40 to AU page.
- `/shoe-size-in-cm/` -> US-to-CM page.
- `/kids-shoe-size-by-age/` -> What Is My Shoe Size page.

Avoid adding links that feel forced or repeating the same anchor text excessively.

## Week 6: Authority and Distribution

Earn a small number of relevant links through useful contributions:

- Indian footwear and fashion websites.
- Parenting and children’s shopping guides.
- Shoe retailers and sizing resources.
- Footwear communities and genuine answers on Reddit or Quora.
- Local or regional shopping guides.

Do not buy bulk backlinks, use automated directories, or spam comments. Record each link and its source.

## Week 7: Improve Click-Through Rate

In Search Console, filter pages with:

- Average position between 5 and 20.
- At least 10 impressions.
- Few or zero clicks.

Rewrite titles and descriptions around the exact query. Examples:

```text
India to UK Shoe Size: Indian Size Chart and Converter
US to CM Shoe Size Chart: Men, Women and Kids
EU 40 to AU Shoe Size: Australian Conversion Chart
```

Descriptions should provide the answer and promise the chart:

```text
Indian size 9 is usually UK size 9. View the complete India-to-UK chart with CM, US, EU, men's, women's and kids' sizes.
```

## Week 8: Measure and Refine

Compare a new 28-day Search Console export with the baseline. Record:

- Total impressions.
- Organic clicks.
- CTR.
- Average position.
- India clicks and position.
- Mobile clicks and position.
- Pages ranking in positions 5-20.
- New queries.
- Indexed pages.
- Redirect and canonical status.

Keep improving pages that gain impressions. Do not make major changes based on one or two days of data.

## Weekly Operating Rules

- Publish or substantially improve one useful page section per week.
- Request indexing only after meaningful content changes.
- Check Search Console once per week, not several times per day.
- Use the real query and page data before creating new pages.
- Avoid fake reviews, unverified ratings, copied content, and keyword stuffing.
- Keep sizing claims qualified because brands and shoe lasts vary.
- Prioritize mobile layout because mobile visibility is currently much stronger.

## Two-Month Success Targets

These are working targets, not ranking guarantees:

- More pages ranking in the top 20.
- First-page visibility for specific India-to-UK and US-to-CM queries.
- CTR above the current near-zero baseline.
- More than the current two organic clicks.
- Consistent canonical non-`www` URLs in Search Console.
- Improved mobile engagement with the converter.
