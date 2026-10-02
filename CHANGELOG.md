# Changelog

All notable changes to the AllShoeSizeConverter project are documented in this file.

## Version 2.0.0 (October 2026)

### Sizing data and mathematical models

Version 2.0.0 replaces detached conversion tables across 17 template files with a centralized data module in `src/data/shoe-sizes.ts`. The updated code enforces the mathematical intervals of ISO/TS 19407:2015 for men, women, and children. Under this standard, a US Men size 9.0 converts to UK 8.5, India 8.5, and EU 42.0 with an exact footbed measurement of 27.0 centimeters. We verified every data table row. We calibrated the Indian shoe sizing scale to maintain exact 1:1 length equivalence with United Kingdom sizes, following Indian Standard IS 1638:1969 from the Bureau of Indian Standards. European shoe sizes follow a single unisex scale across all conversion tools. An EU size 41 equals 26.5 centimeters, and an EU size 42 equals 27.0 centimeters.

### Physical footwear measurements

Empirical fit requires physical verification. We added laboratory measurements and photographs to `src/components/MeasuredFitNotes.astro` for three production shoes. The team used a hardened stainless steel vernier caliper to record insole lengths and ball widths. A Bata Oxford formal shoe in UK size 8 measured 27.2 centimeters in total insole length and 9.4 centimeters across the widest point of the ball. A Nike Air Force 1 07 in US Men size 9.0 measured 27.0 centimeters in total footbed length and 9.6 centimeters across the widest point of the forefoot. An Adidas Stan Smith in US Men size 9.0 measured 27.1 centimeters in length and 9.5 centimeters in width. Caliper readings document real manufacturing variations across commercial shoe lasts.

### Citations and folklore removal

We purged unverified claims. The original text contained folklore statistics claiming 30 percent online return rates, 60 percent bilateral foot asymmetry, 30 percent Morton toe frequency, and 5 to 8 percent evening foot expansion. We deleted these four claims. The updated guides cite the 2022 CSIR-CLRI anthropometric survey report, which recorded foot dimensions for 100,000 participants across 73 districts in India to create the Bha sizing standard. The text also cites ISO 9407:2019 for Mondopoint millimeters, JIS S 5037:1998 for Japanese footwear intervals, KS M 6681 for South Korean sizing, and NOM-020-SCFI-1997 for Mexican shoe labeling.

### Search engine optimization and template cleanup

We removed obsolete meta keywords tags from all 34 page templates. The build script now compiles 43 static HTML routes in 1.74 seconds without syntax warnings.

### Regional directory expansion and site governance

We published 10 regional directory pages in `src/pages/country/` covering the United States, the United Kingdom, the European Union, India, Japan, South Korea, China, Australia, and Mexico with dedicated localized guides. Each country page presents local sizing standards, width definitions, and bilateral conversion tables. We published an editorial policy at `src/pages/editorial-policy.astro` on September 23, 2026. The policy details calculation formulas. We updated `src/pages/privacy-policy.astro` to include Google AdSense advertising disclosures and links to Google Ad Settings. Maintainer Kamlesh Choudhary added direct contact channels on `src/pages/contact.astro` for footwear errata reports.

## Version 1.0.0 (September 2026)

### Initial launch and conversion calculators

The initial production release launched on September 15, 2026, with 12 conversion calculators connecting United States, United Kingdom, and European footwear scales across separate template files on the site. Each template contained hardcoded conversion tables. The site provided calculators for standard adult sizes across the three regional systems.

### Baseline layout and user interface

The initial site launched on Astro 5 using a basic layout with client-side conversion scripts. Calculations used simplified 0.846-centimeter step increments. The original release on September 15, 2026, lacked physical footwear measurements and relied on unverified sizing tables without citations to published ISO or Bureau of Indian Standards technical documents.
