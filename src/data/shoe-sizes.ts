// ============================================================
// shoe-sizes.ts: Centralized shoe size data and page metadata
// ============================================================

// ── Size Types ──────────────────────────────────────────────
export type Gender = 'men' | 'women' | 'kids';
export type SizeSystem = 'us' | 'uk' | 'eu' | 'india' | 'jp' | 'cm' | 'inches' | 'china' | 'korea' | 'australia' | 'mexico';

export const SYSTEM_LABELS: Record<string, string> = {
  us:        'US',
  uk:        'UK',
  eu:        'EU',
  india:     'India',
  jp:        'Japan',
  cm:        'CM',
  inches:    'Inches',
  china:     'China',
  korea:     'Korea',
  australia: 'Australia',
  mexico:    'Mexico',
};

// ── Structured Table Row Interface ──────────────────────────
export interface SizeRow {
  us: number | string;
  uk: number | string;
  eu: number | string;
  india: number | string;
  cm: number;
  inch: number;
  jp?: number;
  china?: number | string;
  korea?: number | string;
  australia?: number | string;
  mexico?: number | string;
  stage?: string;
}

// Single source of truth for all size charts
// Rule: India shoe size equals UK shoe size (1:1 length equivalence)
// Standard ISO/TS 19407 offset: US Men = UK + 0.5; US Women = UK + 2
// EU shoe sizing is unisex: EU 41 = 26.5 cm, EU 42 = 27.0 cm, EU 44 = 28.0 cm
export const MEN_SIZE_ROWS: SizeRow[] = [
  { us: 6.0,  uk: 5.5,  india: 5.5,  eu: 38.5, cm: 24.0, inch: 9.4,  jp: 24.0, china: 38.5, korea: 240, australia: 5.5,  mexico: 5.0 },
  { us: 6.5,  uk: 6.0,  india: 6.0,  eu: 39.0, cm: 24.5, inch: 9.6,  jp: 24.5, china: 39.0, korea: 245, australia: 6.0,  mexico: 5.5 },
  { us: 7.0,  uk: 6.5,  india: 6.5,  eu: 40.0, cm: 25.0, inch: 9.8,  jp: 25.0, china: 40.0, korea: 250, australia: 6.5,  mexico: 6.0 },
  { us: 7.5,  uk: 7.0,  india: 7.0,  eu: 40.5, cm: 25.5, inch: 10.0, jp: 25.5, china: 40.5, korea: 255, australia: 7.0,  mexico: 6.5 },
  { us: 8.0,  uk: 7.5,  india: 7.5,  eu: 41.0, cm: 26.0, inch: 10.2, jp: 26.0, china: 41.0, korea: 260, australia: 7.5,  mexico: 7.0 },
  { us: 8.5,  uk: 8.0,  india: 8.0,  eu: 41.5, cm: 26.5, inch: 10.4, jp: 26.5, china: 41.5, korea: 265, australia: 8.0,  mexico: 7.5 },
  { us: 9.0,  uk: 8.5,  india: 8.5,  eu: 42.0, cm: 27.0, inch: 10.6, jp: 27.0, china: 42.0, korea: 270, australia: 8.5,  mexico: 8.0 },
  { us: 9.5,  uk: 9.0,  india: 9.0,  eu: 42.5, cm: 27.5, inch: 10.8, jp: 27.5, china: 42.5, korea: 275, australia: 9.0,  mexico: 8.5 },
  { us: 10.0, uk: 9.5,  india: 9.5,  eu: 44.0, cm: 28.0, inch: 11.0, jp: 28.0, china: 44.0, korea: 280, australia: 9.5,  mexico: 9.0 },
  { us: 10.5, uk: 10.0, india: 10.0, eu: 44.5, cm: 28.5, inch: 11.2, jp: 28.5, china: 44.5, korea: 285, australia: 10.0, mexico: 9.5 },
  { us: 11.0, uk: 10.5, india: 10.5, eu: 45.0, cm: 29.0, inch: 11.4, jp: 29.0, china: 45.0, korea: 290, australia: 10.5, mexico: 10.0 },
  { us: 11.5, uk: 11.0, india: 11.0, eu: 45.5, cm: 29.5, inch: 11.6, jp: 29.5, china: 45.5, korea: 295, australia: 11.0, mexico: 10.5 },
  { us: 12.0, uk: 11.5, india: 11.5, eu: 46.0, cm: 30.0, inch: 11.8, jp: 30.0, china: 46.0, korea: 300, australia: 11.5, mexico: 11.0 },
  { us: 13.0, uk: 12.5, india: 12.5, eu: 47.0, cm: 31.0, inch: 12.2, jp: 31.0, china: 47.0, korea: 310, australia: 12.5, mexico: 12.0 },
  { us: 14.0, uk: 13.5, india: 13.5, eu: 48.0, cm: 32.0, inch: 12.6, jp: 32.0, china: 48.0, korea: 320, australia: 13.5, mexico: 13.0 },
];

export const WOMEN_SIZE_ROWS: SizeRow[] = [
  { us: 5.0,  uk: 3.0,  india: 3.0,  eu: 35.5, cm: 22.0, inch: 8.7,  jp: 22.0, china: 35.5, korea: 220, australia: 5.0,  mexico: 2.5 },
  { us: 5.5,  uk: 3.5,  india: 3.5,  eu: 36.0, cm: 22.5, inch: 8.9,  jp: 22.5, china: 36.0, korea: 225, australia: 5.5,  mexico: 3.0 },
  { us: 6.0,  uk: 4.0,  india: 4.0,  eu: 36.5, cm: 23.0, inch: 9.1,  jp: 23.0, china: 36.5, korea: 230, australia: 6.0,  mexico: 3.5 },
  { us: 6.5,  uk: 4.5,  india: 4.5,  eu: 37.0, cm: 23.5, inch: 9.3,  jp: 23.5, china: 37.0, korea: 235, australia: 6.5,  mexico: 4.0 },
  { us: 7.0,  uk: 5.0,  india: 5.0,  eu: 37.5, cm: 24.0, inch: 9.4,  jp: 24.0, china: 37.5, korea: 240, australia: 7.0,  mexico: 4.5 },
  { us: 7.5,  uk: 5.5,  india: 5.5,  eu: 38.0, cm: 24.5, inch: 9.6,  jp: 24.5, china: 38.0, korea: 245, australia: 7.5,  mexico: 5.0 },
  { us: 8.0,  uk: 6.0,  india: 6.0,  eu: 38.5, cm: 25.0, inch: 9.8,  jp: 25.0, china: 38.5, korea: 250, australia: 8.0,  mexico: 5.5 },
  { us: 8.5,  uk: 6.5,  india: 6.5,  eu: 39.0, cm: 25.5, inch: 10.0, jp: 25.5, china: 39.0, korea: 255, australia: 8.5,  mexico: 6.0 },
  { us: 9.0,  uk: 7.0,  india: 7.0,  eu: 40.0, cm: 26.0, inch: 10.2, jp: 26.0, china: 40.0, korea: 260, australia: 9.0,  mexico: 6.5 },
  { us: 9.5,  uk: 7.5,  india: 7.5,  eu: 40.5, cm: 26.5, inch: 10.4, jp: 26.5, china: 40.5, korea: 265, australia: 9.5,  mexico: 7.0 },
  { us: 10.0, uk: 8.0,  india: 8.0,  eu: 41.0, cm: 27.0, inch: 10.6, jp: 27.0, china: 41.0, korea: 270, australia: 10.0, mexico: 7.5 },
  { us: 10.5, uk: 8.5,  india: 8.5,  eu: 42.0, cm: 27.5, inch: 10.8, jp: 27.5, china: 42.0, korea: 275, australia: 10.5, mexico: 8.0 },
  { us: 11.0, uk: 9.0,  india: 9.0,  eu: 42.5, cm: 28.0, inch: 11.0, jp: 28.0, china: 42.5, korea: 280, australia: 11.0, mexico: 8.5 },
];

export const KIDS_SIZE_ROWS: SizeRow[] = [
  { us: '2C',   uk: '1.5C', india: '1.5C', eu: 17, cm: 10.5, inch: 4.1, stage: 'Toddler' },
  { us: '3C',   uk: '2.5C', india: '2.5C', eu: 18, cm: 11.5, inch: 4.5, stage: 'Toddler' },
  { us: '4C',   uk: '3.5C', india: '3.5C', eu: 19, cm: 12.0, inch: 4.7, stage: 'Toddler' },
  { us: '5C',   uk: '4.5C', india: '4.5C', eu: 20, cm: 13.0, inch: 5.1, stage: 'Toddler' },
  { us: '6C',   uk: '5.5C', india: '5.5C', eu: 22, cm: 14.0, inch: 5.5, stage: 'Toddler' },
  { us: '7C',   uk: '6.5C', india: '6.5C', eu: 23, cm: 14.5, inch: 5.7, stage: 'Toddler' },
  { us: '8C',   uk: '7.5C', india: '7.5C', eu: 25, cm: 15.5, inch: 6.1, stage: 'Toddler' },
  { us: '9C',   uk: '8.5C', india: '8.5C', eu: 26, cm: 16.0, inch: 6.3, stage: 'Little Kid' },
  { us: '10C',  uk: '9.5C', india: '9.5C', eu: 27, cm: 17.0, inch: 6.7, stage: 'Little Kid' },
  { us: '11C',  uk: '10.5C',india: '10.5C',eu: 28, cm: 17.5, inch: 6.9, stage: 'Little Kid' },
  { us: '12C',  uk: '11.5C',india: '11.5C',eu: 30, cm: 18.5, inch: 7.3, stage: 'Little Kid' },
  { us: '13C',  uk: '12.5C',india: '12.5C',eu: 31, cm: 19.5, inch: 7.7, stage: 'Little Kid' },
  { us: '1Y',   uk: '13.5C',india: '13.5C',eu: 32, cm: 20.0, inch: 7.9, stage: 'Big Kid' },
  { us: '2Y',   uk: '1Y',   india: '1Y',   eu: 33, cm: 21.0, inch: 8.3, stage: 'Big Kid' },
  { us: '3Y',   uk: '2Y',   india: '2Y',   eu: 35, cm: 22.0, inch: 8.7, stage: 'Big Kid' },
];

export const SIZE_DATA: Record<Gender, Record<string, (number | string)[]>> = {
  men: {
    us:        MEN_SIZE_ROWS.map(r => r.us),
    uk:        MEN_SIZE_ROWS.map(r => r.uk),
    eu:        MEN_SIZE_ROWS.map(r => r.eu),
    india:     MEN_SIZE_ROWS.map(r => r.india),
    jp:        MEN_SIZE_ROWS.map(r => r.jp ?? r.cm),
    cm:        MEN_SIZE_ROWS.map(r => r.cm),
    inches:    MEN_SIZE_ROWS.map(r => r.inch),
    china:     MEN_SIZE_ROWS.map(r => r.china ?? r.eu),
    korea:     MEN_SIZE_ROWS.map(r => r.korea ?? (r.cm * 10)),
    australia: MEN_SIZE_ROWS.map(r => r.australia ?? r.uk),
    mexico:    MEN_SIZE_ROWS.map(r => r.mexico ?? r.uk),
  },
  women: {
    us:        WOMEN_SIZE_ROWS.map(r => r.us),
    uk:        WOMEN_SIZE_ROWS.map(r => r.uk),
    eu:        WOMEN_SIZE_ROWS.map(r => r.eu),
    india:     WOMEN_SIZE_ROWS.map(r => r.india),
    jp:        WOMEN_SIZE_ROWS.map(r => r.jp ?? r.cm),
    cm:        WOMEN_SIZE_ROWS.map(r => r.cm),
    inches:    WOMEN_SIZE_ROWS.map(r => r.inch),
    china:     WOMEN_SIZE_ROWS.map(r => r.china ?? r.eu),
    korea:     WOMEN_SIZE_ROWS.map(r => r.korea ?? (r.cm * 10)),
    australia: WOMEN_SIZE_ROWS.map(r => r.australia ?? r.us),
    mexico:    WOMEN_SIZE_ROWS.map(r => r.mexico ?? r.us),
  },
  kids: {
    us:        KIDS_SIZE_ROWS.map(r => r.us),
    uk:        KIDS_SIZE_ROWS.map(r => r.uk),
    eu:        KIDS_SIZE_ROWS.map(r => r.eu),
    india:     KIDS_SIZE_ROWS.map(r => r.india),
    jp:        KIDS_SIZE_ROWS.map(r => r.cm),
    cm:        KIDS_SIZE_ROWS.map(r => r.cm),
    inches:    KIDS_SIZE_ROWS.map(r => r.inch),
    china:     KIDS_SIZE_ROWS.map(r => r.eu),
    korea:     KIDS_SIZE_ROWS.map(r => r.cm * 10),
    australia: KIDS_SIZE_ROWS.map(r => r.uk),
    mexico:    KIDS_SIZE_ROWS.map(r => r.uk),
  }
};

// ── Country Metadata ────────────────────────────────────────
export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  system: string;
  systemLabel: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  explanation: string;
  tips: string[];
  faqs: { q: string; a: string }[];
  relatedConversions: string[];
  relatedCountries: string[];
}

export const COUNTRIES: CountryData[] = [
  {
    slug: 'us',
    name: 'United States',
    flag: '🇺🇸',
    system: 'us',
    systemLabel: 'US',
    title: 'US Shoe Size Chart & Converter for Men, Women & Kids',
    description: 'Convert US shoe sizes to UK, EU, India, Japan, CM and more. Complete US shoe size chart for men, women and kids with instant converter.',
    h1: 'US shoe size converter',
    intro: 'The United States uses a shoe sizing system formalized by Charles Brannock in 1927. US sizes differ for men and women. A women\'s US 8 fits the same foot length as a men\'s US 6.5. This system is also standard in Canada.',
    explanation: 'US shoe sizes use the barleycorn increment of one-third of an inch (8.46 mm) for each full size step. Men\'s sizes start from size 1 at 7.67 inches. Women\'s sizes start from a shorter baseline, which produces a numerical offset. Half sizes add one-sixth of an inch (4.23 mm).',
    tips: [
      'US women\'s sizes are 1.5 to 2 sizes larger numerically than US men\'s for identical foot length',
      'US children\'s sizes transition from 13C to 1Y',
      'Most footwear brands offer half sizes for closer fitting',
      'Check the manufacturer chart when buying imported European footwear',
    ],
    faqs: [
      { q: 'What US shoe size fits a 27 cm foot?', a: 'A 27 cm foot corresponds to US Men\'s 9 or US Women\'s 10.5.' },
      { q: 'Is US shoe size identical to Canada?', a: 'Yes. Footwear sold in Canada uses the US Brannock scale.' },
      { q: 'How do US children\'s shoe sizes progress?', a: 'Sizes run from 0C through 13C, then restart at 1Y through 7Y. Size 7Y equals an adult Men\'s 7.' },
    ],
    relatedConversions: ['us-to-eu-shoe-size', 'us-to-uk-shoe-size', 'us-to-india-shoe-size', 'us-to-japan-shoe-size', 'us-to-cm-shoe-size'],
    relatedCountries: ['uk', 'europe', 'india', 'japan', 'mexico'],
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    system: 'uk',
    systemLabel: 'UK',
    title: 'UK Shoe Size Chart & Converter for Men, Women & Kids',
    description: 'Convert UK shoe sizes to US, EU, India, Japan and CM. Complete UK shoe size chart for men, women and kids with instant conversion tool.',
    h1: 'UK shoe size converter',
    intro: 'The United Kingdom sizing scale uses the 1/3-inch barleycorn increment. UK adult men\'s sizes run 0.5 size smaller than US men\'s under ISO/TS 19407. UK women\'s sizes run 2 sizes smaller than US women\'s. India and Australia use this length scale.',
    explanation: 'King Edward II recognized the barleycorn as a standard unit in 1324. In footwear manufacturing, three barleycorns equal one inch. A half size equals 1/6 inch (4.23 mm). UK sizing starts size 0 at 4 inches for children and size 1 at 8.67 inches for adults.',
    tips: [
      'UK Men\'s sizes are 0.5 smaller than US Men\'s (US 9 = UK 8.5)',
      'UK Women\'s sizes are 2 sizes smaller than US Women\'s (US 8 = UK 6)',
      'Indian domestic footwear brands use UK length measurements',
      'Australian men\'s footwear uses UK sizing numbers',
    ],
    faqs: [
      { q: 'What is the relationship between UK and US shoe sizes?', a: 'Under ISO/TS 19407, US Men\'s sizes are 0.5 larger than UK (UK 8.5 = US 9). US Women\'s sizes are 2 sizes larger than UK (UK 6 = US 8).' },
      { q: 'Is UK shoe size identical to Indian shoe size?', a: 'Yes. Indian footwear manufacturing follows the British length scale directly under IS 1638:1969. UK 8.5 equals India 8.5.' },
      { q: 'Are UK and Australian shoe sizes identical?', a: 'Australian men\'s shoes use UK numbers. Australian women\'s shoes typically follow US numbering.' },
    ],
    relatedConversions: ['uk-to-us-shoe-size', 'uk-to-eu-shoe-size', 'uk-to-india-shoe-size'],
    relatedCountries: ['us', 'australia', 'india', 'europe', 'mexico'],
  },
  {
    slug: 'india',
    name: 'India',
    flag: '🇮🇳',
    system: 'india',
    systemLabel: 'India',
    title: 'India Shoe Size Chart & Converter for Men, Women & Kids',
    description: 'Convert Indian shoe sizes to US, UK, EU, Japan and CM. Complete India shoe size chart for men, women and kids with brand notes.',
    h1: 'India shoe size converter',
    intro: 'Indian footwear manufacturing follows the British UK sizing system codified in Bureau of Indian Standards IS 1638:1969. Size 8 in India equals UK 8 in footbed length. Major Indian manufacturers including Bata India, Liberty, Campus, and Red Tape use this scale.',
    explanation: 'Because Indian footwear standards adopted the British scale, India sizes match UK sizes one-to-one. For adult men, an Indian size 8.5 equals US Men\'s 9 (27.0 cm foot length). For women, Indian size 6 equals US Women\'s 8. The CSIR-Central Leather Research Institute (CSIR-CLRI) completed a nationwide digital 3D foot scanning survey in 2022 to develop the "Bha" standard for wider forefoot lasts.',
    tips: [
      'Indian shoe sizes match UK sizes directly (India 8.5 = UK 8.5 = US Men 9)',
      'Online marketplaces like Myntra and Flipkart list sizes in UK/India format',
      'Bata India and Relaxo use UK/India sizing on boxes',
      'Check whether imported shoes show UK or US numbers on the tongue label',
    ],
    faqs: [
      { q: 'What is Indian shoe size 8.5 in US?', a: 'An Indian size 8.5 for men equals US Men\'s 9 (27.0 cm foot length).' },
      { q: 'Is Indian shoe size identical to UK?', a: 'Yes. Both systems share identical footbed lengths based on the 1/3-inch barleycorn increment.' },
      { q: 'What is Indian size 6 in European sizing?', a: 'Indian size 6 for men corresponds to EU 40. Indian size 6 for women corresponds to EU 38.5.' },
    ],
    relatedConversions: ['india-to-us-shoe-size', 'india-to-uk-shoe-size', 'india-to-eu-shoe-size'],
    relatedCountries: ['us', 'uk', 'europe', 'japan', 'mexico'],
  },
  {
    slug: 'europe',
    name: 'Europe',
    flag: '🇪🇺',
    system: 'eu',
    systemLabel: 'EU',
    title: 'EU Shoe Size Chart & Converter for European Sizing',
    description: 'Convert EU shoe sizes to US, UK, India, Japan and CM. Complete EU size chart for men, women and kids covering continental Europe.',
    h1: 'EU shoe size converter',
    intro: 'Continental European shoe sizing is based on the Paris Point, where one size step equals 2/3 of a centimeter (6.67 mm). EU sizes are unisex: EU 42 indicates the same interior length whether labeled for men or women.',
    explanation: 'The Paris Point was established in France in the early 19th century. Foot length in centimeters relates to EU sizing by adding 1.5 cm for toe clearance and multiplying by 1.5. For example, a 27.0 cm foot fits EU 42 (27.0 + 1.5 = 28.5 cm last length; 28.5 × 1.5 = 42.75). German, Italian, French, and Spanish manufacturers use this scale.',
    tips: [
      'EU sizes are unisex: EU 41 represents 26.5 cm foot length for both men and women',
      'EU 42 corresponds to US Men\'s 9 and UK 8.5 (27.0 cm foot length)',
      'Continental European dress shoes are often built on longer lasts than athletic sneakers',
      'Check manufacturer specifications when choosing between whole EU numbers',
    ],
    faqs: [
      { q: 'What foot length does EU 42 accommodate?', a: 'EU 42 accommodates a foot length of 27.0 cm. It corresponds to US Men\'s 9, UK 8.5, and India 8.5.' },
      { q: 'Are EU sizes unisex?', a: 'Yes. The numerical scale is identical across genders. Men\'s and women\'s models differ only in last width.' },
      { q: 'How do I calculate my EU shoe size from centimeters?', a: 'A foot measuring 26.5 cm corresponds to EU 41. A foot measuring 27.0 cm corresponds to EU 42.' },
    ],
    relatedConversions: ['eu-to-us-shoe-size', 'eu-to-uk-shoe-size', 'eu-to-india-shoe-size', 'eu-to-cm-shoe-size'],
    relatedCountries: ['us', 'uk', 'india', 'japan', 'mexico'],
  },
  {
    slug: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    system: 'jp',
    systemLabel: 'Japan',
    title: 'Japan Shoe Size Chart & Converter for JP/CM Sizing',
    description: 'Convert Japanese shoe sizes to US, UK, EU, India and more. Metric foot length sizing for men and women.',
    h1: 'Japan shoe size converter',
    intro: 'Japan uses shoe sizing based on anatomical foot length in centimeters, codified under Japanese Industrial Standard JIS S 5037. A JP size 27 indicates a last designed for a 27.0 cm foot.',
    explanation: 'JIS S 5037 specifies linear foot length in 0.5 cm increments. The system has no gender offset in length: size 24.5 indicates a 24.5 cm foot for both men and women. Width is designated by letter codes from A through EEEE.',
    tips: [
      'JP size equals bare foot length in centimeters (JP 27 = 27 cm foot)',
      'The length scale has zero gender offset',
      'Standard width is EE for men and E for women in Japan',
      'Korean Mondopoint sizes equal JP size multiplied by 10 (JP 27 = KR 270)',
    ],
    faqs: [
      { q: 'How does Japanese shoe sizing work?', a: 'Japanese sizes match foot length in centimeters. JP 27 fits a 27.0 cm foot.' },
      { q: 'What is JP 27 in US sizes?', a: 'JP 27 corresponds to US Men\'s 9 or US Women\'s 10.5.' },
      { q: 'How do Japanese and Korean sizing compare?', a: 'Japan measures in centimeters (27.0) and Korea measures in millimeters (270). The physical dimensions are identical.' },
    ],
    relatedConversions: ['us-to-japan-shoe-size'],
    relatedCountries: ['china', 'korea', 'us', 'europe'],
  },
  {
    slug: 'china',
    name: 'China',
    flag: '🇨🇳',
    system: 'china',
    systemLabel: 'China',
    title: 'China Shoe Size Chart & Converter for Chinese Sizing',
    description: 'Convert Chinese shoe sizes to US, UK, EU, India, Japan and CM. China uses the European Paris Point system.',
    h1: 'China shoe size converter',
    intro: 'China uses European Paris Point sizing as standard across domestic brands like Li-Ning and Anta. Chinese size 42 corresponds directly to EU 42.',
    explanation: 'China adopted the European Paris Point standard (GB/T 3293.1) in 1998 for retail footwear. One size step equals 6.67 mm. A size 42 shoe fits a 27.0 cm foot. Some technical footwear references also list Mondopoint millimeter measurements.',
    tips: [
      'Chinese retail sizes equal European EU sizes (China 42 = EU 42)',
      'AliExpress and Taobao product listings display EU numbers as primary sizes',
      'Check the seller measurement table for millimeter footbed dimensions',
      'Chinese shoes often feature a slightly narrower heel cup',
    ],
    faqs: [
      { q: 'Is Chinese shoe sizing identical to EU sizing?', a: 'Yes. China standardized on the European Paris Point system in 1998. China 42 equals EU 42.' },
      { q: 'What is China size 42 in US sizes?', a: 'China 42 corresponds to US Men\'s 9 or US Women\'s 10.5.' },
    ],
    relatedConversions: ['eu-to-us-shoe-size', 'eu-to-uk-shoe-size'],
    relatedCountries: ['japan', 'korea', 'europe', 'us'],
  },
  {
    slug: 'korea',
    name: 'South Korea',
    flag: '🇰🇷',
    system: 'korea',
    systemLabel: 'Korea',
    title: 'Korean Shoe Size Chart & Converter for KR/mm Sizing',
    description: 'Convert Korean shoe sizes to US, UK, EU, Japan and CM. Millimeter foot length sizing for men and women.',
    h1: 'Korean shoe size converter',
    intro: 'South Korea specifies shoe sizes in millimeters under the Korean Agency for Technology and Standards (KS M 6681). A KR 270 shoe fits a 270 mm (27.0 cm) foot.',
    explanation: 'Korean sizing uses 5 mm increments: 250, 255, 260, 265, 270, and upward. Dividing the millimeter number by 10 yields the foot length in centimeters. KR 270 equals 27.0 cm, matching US Men\'s 9 or EU 42.',
    tips: [
      'KR 270 indicates a 270 mm (27.0 cm) foot length',
      'Divide the Korean size by 10 to obtain centimeters (KR 270 = 27.0 cm)',
      'Korean sizes have no gender offset in length',
    ],
    faqs: [
      { q: 'What does Korean size 270 mean?', a: 'KR 270 designates a shoe engineered for a 270 millimeter (27 cm) foot. It equals US Men\'s 9.' },
      { q: 'How do I convert Korean shoe sizes to US?', a: 'Divide the Korean size by 10 to get centimeters, then reference our conversion table. KR 270 = 27 cm = US Men\'s 9.' },
    ],
    relatedConversions: ['us-to-japan-shoe-size'],
    relatedCountries: ['japan', 'china', 'us', 'europe'],
  },
  {
    slug: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    system: 'australia',
    systemLabel: 'Australia',
    title: 'Australian Shoe Size Chart & Converter for AU Sizing',
    description: 'Convert Australian shoe sizes to US, UK, EU, India and CM. Men follow UK scale; women follow US scale.',
    h1: 'Australian shoe size converter',
    intro: 'Australia uses a dual-alignment sizing system. Australian men\'s shoes follow the British UK system (AU 8.5 = UK 8.5 = US 9). Australian women\'s footwear follows the US scale (AU 8 = US 8 = UK 6).',
    explanation: 'The Australian retail market adopted British imperial sizing for men\'s footwear and American sizing for women\'s fashion. A man wearing size 8.5 in Sydney wears a UK 8.5. A woman wearing size 8 in Melbourne wears a US 8.',
    tips: [
      'Australian Men\'s sizes equal UK Men\'s sizes (AU 8.5 = UK 8.5 = US 9)',
      'Australian Women\'s sizes equal US Women\'s sizes (AU 8 = US 8 = UK 6)',
      'Australian children\'s footwear follows the UK scale',
    ],
    faqs: [
      { q: 'Does Australian shoe sizing match the UK?', a: 'For men, Australian sizes match UK sizes. For women, Australian sizes match US sizes.' },
      { q: 'What is AU 8.5 in US Men\'s?', a: 'AU Men\'s 8.5 equals US Men\'s 9.' },
    ],
    relatedConversions: ['uk-to-us-shoe-size', 'uk-to-eu-shoe-size'],
    relatedCountries: ['uk', 'us', 'india', 'europe'],
  },
  {
    slug: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    system: 'mexico',
    systemLabel: 'Mexico',
    title: 'Mexico Shoe Size Chart & Converter for MX Sizing',
    description: 'Convert Mexican shoe sizes to US, UK, EU, and CM. Full chart for men, women and kids.',
    h1: 'Mexico shoe size converter',
    intro: 'Mexican shoe sizing (Punto Calzado) uses centimeters with numerical adjustments. Mexican men\'s sizes run 1.0 to 1.5 sizes smaller than US men\'s. León in Guanajuato produces a large share of handcrafted leather boots using this standard.',
    explanation: 'A Mexican size labeled "Punto 27" indicates a last accommodating a 27.0 cm foot. Mexican men\'s size 7.5 to 8.0 corresponds to US Men\'s 9 (27.0 cm). Mexican women\'s sizes typically run 2.5 to 3 sizes below US women\'s tags.',
    tips: [
      'Mexican Men\'s sizes run approximately 1.0 size below US Men\'s',
      'In Mexican retail, sellers often drop the initial 2 (saying "7" instead of "27")',
      'León leather boots feature sturdy construction and true centimeter last measurements',
    ],
    faqs: [
      { q: 'What is Mexico size 8 in US Men\'s?', a: 'Mexico Men\'s 8 corresponds to US Men\'s 9 (27.0 cm foot length).' },
      { q: 'How do I convert Mexican shoe sizes to US?', a: 'Add 1 to Mexican men\'s sizes to find the approximate US Men\'s equivalent. MX 8 equals US 9.' },
    ],
    relatedConversions: ['us-to-cm-shoe-size'],
    relatedCountries: ['us', 'europe', 'uk'],
  },
];

// ── Conversion Page Metadata ────────────────────────────────
export interface ConversionData {
  slug: string;
  fromSystem: string;
  toSystem: string;
  fromLabel: string;
  toLabel: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  formula: string;
  menExamples: string[];
  womenExamples: string[];
  tips: string[];
  faqs: { q: string; a: string }[];
  relatedConversions: string[];
}

export const CONVERSIONS: ConversionData[] = [
  {
    slug: 'us-to-eu-shoe-size',
    fromSystem: 'us', toSystem: 'eu', fromLabel: 'US', toLabel: 'EU',
    title: 'US to EU Shoe Size Conversion: Chart and Calculator',
    description: 'Convert US shoe sizes to EU European sizes. Full US to EU conversion chart for men, women and kids with foot lengths.',
    h1: 'US to EU shoe size converter',
    intro: 'Converting US to EU shoe sizes connects the American barleycorn system with continental European Paris Points. The EU system is unisex: EU 42 represents the same 27.0 cm footbed length for both men and women.',
    formula: 'For men: EU size approximates US Men + 33 (US 9 -> EU 42). For women: EU size approximates US Women + 30.5 (US 8 -> EU 38.5).',
    menExamples: ['US 7 -> EU 40', 'US 8 -> EU 41', 'US 9 -> EU 42', 'US 10 -> EU 44', 'US 11 -> EU 45', 'US 12 -> EU 46'],
    womenExamples: ['US 6 -> EU 36.5', 'US 7 -> EU 37.5', 'US 8 -> EU 38.5', 'US 9 -> EU 40', 'US 10 -> EU 41'],
    tips: [
      'EU sizes are unisex: EU 41 indicates a 26.5 cm foot length for both men and women',
      'Check manufacturer specifications when sizing European athletic sneakers',
      'Most continental European dress shoe makers produce only whole integer sizes',
    ],
    faqs: [
      { q: 'What is US 10 in EU sizing?', a: 'US Men\'s 10 corresponds to EU 44 (28.0 cm foot length). US Women\'s 10 corresponds to EU 41 (27.0 cm).' },
      { q: 'What is US 9 in EU sizing?', a: 'US Men\'s 9 corresponds to EU 42 (27.0 cm foot length). US Women\'s 9 corresponds to EU 40 (26.0 cm).' },
    ],
    relatedConversions: ['eu-to-us-shoe-size', 'us-to-uk-shoe-size', 'us-to-india-shoe-size', 'us-to-cm-shoe-size'],
  },
  {
    slug: 'us-to-uk-shoe-size',
    fromSystem: 'us', toSystem: 'uk', fromLabel: 'US', toLabel: 'UK',
    title: 'US to UK Shoe Size Conversion: Chart and Calculator',
    description: 'Convert US shoe sizes to UK British sizes. Men: subtract 0.5. Women: subtract 2. Full chart for men, women and kids.',
    h1: 'US to UK shoe size converter',
    intro: 'Both the United States and the United Kingdom base their shoe sizing on the 1/3-inch barleycorn increment. The half-size offset in adult men\'s footwear stems from differing zero points established during 19th-century standardizations.',
    formula: 'For men: UK = US - 0.5 (US 9 -> UK 8.5). For women: UK = US - 2 (US 8 -> UK 6.0).',
    menExamples: ['US 7 -> UK 6.5', 'US 8 -> UK 7.5', 'US 9 -> UK 8.5', 'US 10 -> UK 9.5', 'US 11 -> UK 10.5'],
    womenExamples: ['US 6 -> UK 4', 'US 7 -> UK 5', 'US 8 -> UK 6', 'US 9 -> UK 7', 'US 10 -> UK 8'],
    tips: [
      'Standard ISO/TS 19407 conversion gives US Men - 0.5 = UK (US 9 = UK 8.5)',
      'Athletic brands like Nike use a 1.0-size offset for men (Nike US 10 = UK 9 = EU 44)',
      'For women, subtract 2 full sizes (US Women 8 = UK 6)',
    ],
    faqs: [
      { q: 'What is US 9 in UK shoe size?', a: 'US Men\'s 9 corresponds to UK 8.5 under ISO/TS 19407. US Women\'s 9 corresponds to UK 7.' },
      { q: 'Why do Nike and Adidas differ in UK conversion?', a: 'Nike applies a 1-size difference for men (US 9 = UK 8), while Adidas uses US 9 = UK 8.5 (EU 42 2/3).' },
    ],
    relatedConversions: ['uk-to-us-shoe-size', 'us-to-eu-shoe-size', 'us-to-india-shoe-size'],
  },
  {
    slug: 'us-to-india-shoe-size',
    fromSystem: 'us', toSystem: 'india', fromLabel: 'US', toLabel: 'India',
    title: 'US to India Shoe Size Conversion: Chart and Calculator',
    description: 'Convert US shoe sizes to Indian sizes. Detailed comparison chart for men, women and kids based on UK and BIS standards.',
    h1: 'US to India shoe size converter',
    intro: 'Indian footwear sizes follow the British UK measurement system codified under IS 1638:1969. An Indian shoe size matches a UK shoe size in length. For adult men, US Men\'s 9 corresponds to Indian size 8.5 under standard conversions, and Indian size 8 in athletic sneaker lines.',
    formula: 'Men: India = US - 0.5 (US 9 -> India 8.5; athletic sneakers often US - 1). Women: India = US - 2 (US 8 -> India 6).',
    menExamples: ['US 7 -> India 6.5', 'US 8 -> India 7.5', 'US 8.5 -> India 8.0', 'US 9 -> India 8.5', 'US 10 -> India 9.5'],
    womenExamples: ['US 6 -> India 4', 'US 7 -> India 5', 'US 8 -> India 6', 'US 9 -> India 7', 'US 10 -> India 8'],
    tips: [
      'India shoe sizes equal UK shoe sizes in length (India 8.5 = UK 8.5)',
      'Indian domestic manufacturers like Bata and Liberty use UK/India sizing',
      'For athletic sneakers from Nike or Converse, check the tag for the UK number',
    ],
    faqs: [
      { q: 'What is US 9 in Indian shoe size?', a: 'US Men\'s 9 equals Indian size 8.5 (27.0 cm foot length). In Nike and Converse, US 9 is labeled UK/India 8.' },
      { q: 'Is Indian shoe size identical to UK shoe size?', a: 'Yes. Both systems share identical footbed lengths based on the British imperial scale.' },
    ],
    relatedConversions: ['india-to-us-shoe-size', 'us-to-uk-shoe-size', 'uk-to-india-shoe-size'],
  },
  {
    slug: 'uk-to-india-shoe-size',
    fromSystem: 'uk', toSystem: 'india', fromLabel: 'UK', toLabel: 'India',
    title: 'UK to India Shoe Size Conversion: British to Indian Chart',
    description: 'Convert UK shoe sizes to Indian sizes. Detailed UK to India comparison chart for men, women, and kids with 1:1 length equivalence.',
    h1: 'UK to India shoe size converter',
    intro: 'UK shoe sizes and Indian shoe sizes share a 1:1 footbed length equivalence. Both systems trace their origins to the British imperial barleycorn measurement (1/3 inch). A UK size 8.5 equals an Indian size 8.5 for men, and a UK size 6 equals an Indian size 6 for women.',
    formula: 'India = UK for all categories (UK 8.5 = India 8.5; UK 6 = India 6).',
    menExamples: ['UK 6 -> India 6', 'UK 7 -> India 7', 'UK 8 -> India 8', 'UK 8.5 -> India 8.5', 'UK 9 -> India 9', 'UK 10 -> India 10'],
    womenExamples: ['UK 3 -> India 3', 'UK 4 -> India 4', 'UK 5 -> India 5', 'UK 6 -> India 6', 'UK 7 -> India 7'],
    tips: [
      'UK and Indian shoe sizes are identical in length (UK 8 = India 8)',
      'Bata India and Clarks UK use the same length scale',
      'Width fittings can vary between British lasts (F fitting) and Indian domestic lasts',
    ],
    faqs: [
      { q: 'Is UK shoe size identical to India shoe size?', a: 'Yes. In footbed length, UK and Indian shoe sizes are identical (1:1 equivalence). UK 8.5 equals India 8.5.' },
      { q: 'What is UK 8 in India shoe size?', a: 'UK 8 equals Indian size 8 directly. Both sizes fit a foot length of 26.5 cm.' },
    ],
    relatedConversions: ['india-to-uk-shoe-size', 'us-to-india-shoe-size', 'uk-to-us-shoe-size'],
  },
  {
    slug: 'india-to-us-shoe-size',
    fromSystem: 'india', toSystem: 'us', fromLabel: 'India', toLabel: 'US',
    title: 'India to US Shoe Size Conversion: Chart and Calculator',
    description: 'Convert Indian shoe sizes to US sizes. Full comparison chart for men and women.',
    h1: 'India to US shoe size converter',
    intro: 'Indian shoe sizes follow the UK scale under IS 1638:1969. To convert Indian sizes to American US sizes, add 0.5 for men under standard conversions (India 8.5 -> US 9), or add 1.0 for athletic sneaker models.',
    formula: 'Men: US = India + 0.5 (India 8.5 -> US 9; athletic sneakers often India + 1). Women: US = India + 2 (India 6 -> US 8).',
    menExamples: ['India 6.5 -> US 7', 'India 7.5 -> US 8', 'India 8.0 -> US 8.5', 'India 8.5 -> US 9.0', 'India 9.5 -> US 10.0'],
    womenExamples: ['India 4 -> US 6', 'India 5 -> US 7', 'India 6 -> US 8', 'India 7 -> US 9', 'India 8 -> US 10'],
    tips: [
      'Add 0.5 for men under ISO/TS 19407 (India 8.5 = US 9)',
      'Add 2 for women (India 6 = US 8)',
      'Check sneaker manufacturer tongue tags for the specific brand offset',
    ],
    faqs: [
      { q: 'What is Indian size 8.5 in US Men\'s?', a: 'Indian size 8.5 equals US Men\'s 9 (27.0 cm foot length).' },
      { q: 'What is Indian size 6 in US Women\'s?', a: 'Indian size 6 for women equals US Women\'s 8 (25.0 cm foot length).' },
    ],
    relatedConversions: ['us-to-india-shoe-size', 'india-to-uk-shoe-size', 'india-to-eu-shoe-size'],
  },
  {
    slug: 'india-to-uk-shoe-size',
    fromSystem: 'india', toSystem: 'uk', fromLabel: 'India', toLabel: 'UK',
    title: 'India to UK Shoe Size Conversion: Chart and Calculator',
    description: 'Convert Indian shoe sizes to UK sizes. India and UK sizes share 1:1 length equivalence.',
    h1: 'India to UK shoe size converter',
    intro: 'Indian footwear sizes match British UK sizes because Indian standard IS 1638:1969 adopted the UK barleycorn system directly. An Indian size 8.5 equals UK 8.5.',
    formula: 'UK = India (1:1 length equivalence).',
    menExamples: ['India 6 -> UK 6', 'India 7 -> UK 7', 'India 8 -> UK 8', 'India 8.5 -> UK 8.5', 'India 9 -> UK 9', 'India 10 -> UK 10'],
    womenExamples: ['India 3 -> UK 3', 'India 4 -> UK 4', 'India 5 -> UK 5', 'India 6 -> UK 6', 'India 7 -> UK 7'],
    tips: [
      'India and UK sizes are identical in length',
      'Both systems use the 1/3-inch barleycorn increment',
    ],
    faqs: [
      { q: 'Is Indian shoe size identical to UK shoe size?', a: 'Yes. Indian shoe sizes follow the UK scale and have identical footbed lengths.' },
    ],
    relatedConversions: ['uk-to-india-shoe-size', 'india-to-us-shoe-size', 'india-to-eu-shoe-size'],
  },
  {
    slug: 'eu-to-us-shoe-size',
    fromSystem: 'eu', toSystem: 'us', fromLabel: 'EU', toLabel: 'US',
    title: 'EU to US Shoe Size Conversion: Chart and Calculator',
    description: 'Convert European EU shoe sizes to US sizes for men, women and kids. Includes unisex EU foot length guidelines.',
    h1: 'EU to US shoe size converter',
    intro: 'European shoe sizing is unisex. EU 41 indicates a 26.5 cm foot length and EU 42 indicates a 27.0 cm foot length for both men and women. American sizing maintains separate baseline scales for men and women.',
    formula: 'Men: US ≈ EU - 33 (EU 42 -> US 9). Women: US ≈ EU - 30.5 (EU 38.5 -> US 8).',
    menExamples: ['EU 40 -> US 7', 'EU 41 -> US 8', 'EU 41.5 -> US 8.5', 'EU 42 -> US 9', 'EU 44 -> US 10'],
    womenExamples: ['EU 36.5 -> US 6', 'EU 37.5 -> US 7', 'EU 38.5 -> US 8', 'EU 40 -> US 9', 'EU 41 -> US 10'],
    tips: [
      'EU 41 corresponds to 26.5 cm foot length for both men and women',
      'EU 42 corresponds to 27.0 cm foot length (US Men 9)',
      'In athletic brands like Nike, EU 42 is labeled US Men 8.5 and EU 42.5 is labeled US Men 9',
    ],
    faqs: [
      { q: 'What is EU 42 in US Men\'s size?', a: 'In standard sizing, EU 42 corresponds to a 27.0 cm foot length, matching US Men\'s 9. Nike labels EU 42 as US Men\'s 8.5 and EU 42.5 as US Men\'s 9.' },
      { q: 'What is EU 41 in foot length?', a: 'EU 41 corresponds to a foot length of 26.5 cm in both men\'s and women\'s sizing.' },
    ],
    relatedConversions: ['us-to-eu-shoe-size', 'eu-to-uk-shoe-size', 'eu-to-india-shoe-size'],
  },
  {
    slug: 'uk-to-us-shoe-size',
    fromSystem: 'uk', toSystem: 'us', fromLabel: 'UK', toLabel: 'US',
    title: 'UK to US Shoe Size Conversion: Chart and Calculator',
    description: 'Convert UK shoe sizes to US sizes. Men: add 0.5. Women: add 2. Full chart for men, women and kids.',
    h1: 'UK to US shoe size converter',
    intro: 'Converting UK to US sizes uses the shared 1/3-inch barleycorn increment. For men, add 0.5 to your UK size under ISO/TS 19407. For women, add 2.',
    formula: 'Men: US = UK + 0.5 (UK 8.5 -> US 9). Women: US = UK + 2 (UK 6 -> US 8).',
    menExamples: ['UK 6.5 -> US 7', 'UK 7.5 -> US 8', 'UK 8.0 -> US 8.5', 'UK 8.5 -> US 9.0', 'UK 9.5 -> US 10.0'],
    womenExamples: ['UK 4 -> US 6', 'UK 5 -> US 7', 'UK 6 -> US 8', 'UK 7 -> US 9', 'UK 8 -> US 10'],
    tips: [
      'Men: add 0.5 under ISO/TS 19407 (UK 8.5 = US 9)',
      'Women: add 2 (UK 6 = US 8)',
      'Athletic sneakers like Nike use a 1-size offset for men (UK 8 = US 9)',
    ],
    faqs: [
      { q: 'What is UK 8.5 in US Men\'s?', a: 'UK 8.5 equals US Men\'s 9 (27.0 cm foot length).' },
      { q: 'What is UK 6 in US Women\'s?', a: 'UK 6 equals US Women\'s 8 (25.0 cm foot length).' },
    ],
    relatedConversions: ['us-to-uk-shoe-size', 'uk-to-eu-shoe-size', 'uk-to-india-shoe-size'],
  },
  {
    slug: 'uk-to-eu-shoe-size',
    fromSystem: 'uk', toSystem: 'eu', fromLabel: 'UK', toLabel: 'EU',
    title: 'UK to EU Shoe Size Conversion: Chart and Calculator',
    description: 'Convert British UK shoe sizes to European EU sizes. Full conversion chart for men, women, and kids.',
    h1: 'UK to EU shoe size converter',
    intro: 'Converting UK to EU connects the British barleycorn system with continental European Paris Points. UK 8.5 corresponds to EU 42 for men (27.0 cm foot length).',
    formula: 'Men: EU ≈ UK + 33.5 (UK 8.5 -> EU 42). Women: EU ≈ UK + 32.5 (UK 6 -> EU 38.5).',
    menExamples: ['UK 6.5 -> EU 40', 'UK 7.5 -> EU 41', 'UK 8.5 -> EU 42', 'UK 9.5 -> EU 44', 'UK 10.5 -> EU 45'],
    womenExamples: ['UK 4 -> EU 36.5', 'UK 5 -> EU 37.5', 'UK 6 -> EU 38.5', 'UK 7 -> EU 40', 'UK 8 -> EU 41'],
    tips: [
      'EU sizes are unisex: EU 42 fits a 27.0 cm foot',
      'Adidas uses one-third increments (UK 8.5 = EU 42 2/3)',
    ],
    faqs: [
      { q: 'What is UK 8.5 in EU size?', a: 'UK 8.5 corresponds to EU 42 (27.0 cm foot length).' },
    ],
    relatedConversions: ['eu-to-uk-shoe-size', 'uk-to-us-shoe-size', 'uk-to-india-shoe-size'],
  },
  {
    slug: 'india-to-eu-shoe-size',
    fromSystem: 'india', toSystem: 'eu', fromLabel: 'India', toLabel: 'EU',
    title: 'India to EU Shoe Size Conversion: Chart and Calculator',
    description: 'Convert Indian shoe sizes to EU sizes. Full chart for men and women.',
    h1: 'India to EU shoe size converter',
    intro: 'Because Indian footwear follows the UK scale under IS 1638:1969, converting India to EU uses the same formula as UK to EU. India 8.5 corresponds to EU 42 (27.0 cm foot length).',
    formula: 'Men: EU ≈ India + 33.5 (India 8.5 -> EU 42). Women: EU ≈ India + 32.5 (India 6 -> EU 38.5).',
    menExamples: ['India 6.5 -> EU 40', 'India 7.5 -> EU 41', 'India 8.5 -> EU 42', 'India 9.5 -> EU 44'],
    womenExamples: ['India 4 -> EU 36.5', 'India 5 -> EU 37.5', 'India 6 -> EU 38.5', 'India 7 -> EU 40'],
    tips: [
      'India to EU is identical to UK to EU since India equals UK in length',
      'EU sizes on Zara and H&M in India correspond directly to this chart',
    ],
    faqs: [
      { q: 'What is Indian size 8.5 in EU?', a: 'Indian size 8.5 equals EU 42 (27.0 cm foot length).' },
    ],
    relatedConversions: ['eu-to-india-shoe-size', 'india-to-us-shoe-size', 'india-to-uk-shoe-size'],
  },
  {
    slug: 'eu-to-india-shoe-size',
    fromSystem: 'eu', toSystem: 'india', fromLabel: 'EU', toLabel: 'India',
    title: 'EU to India Shoe Size Conversion: Chart and Calculator',
    description: 'Convert European EU shoe sizes to Indian sizes. Detailed chart for men and women.',
    h1: 'EU to India shoe size converter',
    intro: 'European apparel brands in India label footwear using Paris Points. An EU 42 corresponds to an Indian size 8.5 (or Indian size 8 in athletic sneaker lines) with a 27.0 cm foot length.',
    formula: 'Men: India ≈ EU - 33.5 (EU 42 -> India 8.5). Women: India ≈ EU - 32.5 (EU 38.5 -> India 6).',
    menExamples: ['EU 40 -> India 6.5', 'EU 41 -> India 7.5', 'EU 41.5 -> India 8.0', 'EU 42 -> India 8.5', 'EU 44 -> India 9.5'],
    womenExamples: ['EU 36.5 -> India 4', 'EU 37.5 -> India 5', 'EU 38.5 -> India 6', 'EU 40 -> India 7'],
    tips: [
      'EU 42 fits a 27.0 cm foot, matching Indian size 8.5',
      'Check whether the box lists UK/India or EU sizing as primary',
    ],
    faqs: [
      { q: 'What is EU 42 in Indian shoe size?', a: 'EU 42 corresponds to Indian size 8.5 (27.0 cm foot length). In athletic sneakers, EU 42 is often labeled size 8.' },
    ],
    relatedConversions: ['india-to-eu-shoe-size', 'eu-to-us-shoe-size', 'eu-to-uk-shoe-size'],
  },
  {
    slug: 'eu-to-uk-shoe-size',
    fromSystem: 'eu', toSystem: 'uk', fromLabel: 'EU', toLabel: 'UK',
    title: 'EU to UK Shoe Size Conversion: Chart and Calculator',
    description: 'Convert European EU shoe sizes to UK British sizes. Full conversion chart for men, women and kids.',
    h1: 'EU to UK shoe size converter',
    intro: 'Converting EU to UK sizes bridges continental Paris Points and British barleycorn increments. EU 42 corresponds to UK 8.5 for men.',
    formula: 'Men: UK ≈ EU - 33.5 (EU 42 -> UK 8.5). Women: UK ≈ EU - 32.5 (EU 38.5 -> UK 6).',
    menExamples: ['EU 40 -> UK 6.5', 'EU 41 -> UK 7.5', 'EU 42 -> UK 8.5', 'EU 44 -> UK 9.5'],
    womenExamples: ['EU 36.5 -> UK 4', 'EU 37.5 -> UK 5', 'EU 38.5 -> UK 6', 'EU 40 -> UK 7'],
    tips: [
      'EU 42 corresponds to UK 8.5 (27.0 cm foot length)',
      'EU sizing is unisex; UK sizing uses gender offsets',
    ],
    faqs: [
      { q: 'What is EU 42 in UK size?', a: 'EU 42 corresponds to UK 8.5 for men (27.0 cm foot length).' },
    ],
    relatedConversions: ['uk-to-eu-shoe-size', 'eu-to-us-shoe-size', 'eu-to-cm-shoe-size'],
  },
  {
    slug: 'us-to-cm-shoe-size',
    fromSystem: 'us', toSystem: 'cm', fromLabel: 'US', toLabel: 'CM',
    title: 'US to CM Shoe Size Conversion: Centimeters Chart',
    description: 'Convert US shoe sizes to centimeters. Metric foot length chart for men, women and kids.',
    h1: 'US to CM shoe size converter',
    intro: 'Centimeters represent physical foot length. Converting US shoe sizes to centimeters eliminates regional labeling discrepancies.',
    formula: 'Foot length in centimeters provides an objective measurement for cross-referencing brand charts.',
    menExamples: ['US 7 -> 25.0 cm', 'US 8 -> 26.0 cm', 'US 8.5 -> 26.5 cm', 'US 9 -> 27.0 cm', 'US 10 -> 28.0 cm'],
    womenExamples: ['US 6 -> 23.0 cm', 'US 7 -> 24.0 cm', 'US 8 -> 25.0 cm', 'US 9 -> 26.0 cm'],
    tips: [
      'Measure bare foot length in centimeters for the most reliable sizing baseline',
      'Leave 10 to 12 mm of space ahead of the longest toe for walking comfort',
    ],
    faqs: [
      { q: 'What is US Men\'s 9 in centimeters?', a: 'US Men\'s 9 corresponds to a foot length of 27.0 cm.' },
    ],
    relatedConversions: ['eu-to-cm-shoe-size', 'us-to-eu-shoe-size', 'us-to-uk-shoe-size'],
  },
  {
    slug: 'eu-to-cm-shoe-size',
    fromSystem: 'eu', toSystem: 'cm', fromLabel: 'EU', toLabel: 'CM',
    title: 'EU to CM Shoe Size Conversion: Centimeters Chart',
    description: 'Convert European EU shoe sizes to centimeters. Metric foot length chart for men, women and kids.',
    h1: 'EU to CM shoe size converter',
    intro: 'One European Paris Point equals 2/3 of a centimeter (6.67 mm). EU shoe sizes correlate directly with centimeter foot lengths across men and women.',
    formula: 'Foot length (cm) = (EU size / 1.5) - 1.5 (approximate formula accounting for toe allowance).',
    menExamples: ['EU 40 -> 25.0 cm', 'EU 41 -> 26.0 cm', 'EU 41.5 -> 26.5 cm', 'EU 42 -> 27.0 cm', 'EU 44 -> 28.0 cm'],
    womenExamples: ['EU 36.5 -> 23.0 cm', 'EU 37.5 -> 24.0 cm', 'EU 38.5 -> 25.0 cm', 'EU 40 -> 26.0 cm', 'EU 41 -> 26.5 cm'],
    tips: [
      'EU 41 corresponds to 26.5 cm foot length for both men and women',
      'EU 42 corresponds to 27.0 cm foot length',
    ],
    faqs: [
      { q: 'What is EU 42 in centimeters?', a: 'EU 42 corresponds to 27.0 cm foot length.' },
      { q: 'What is EU 41 in centimeters?', a: 'EU 41 corresponds to 26.5 cm foot length.' },
    ],
    relatedConversions: ['us-to-cm-shoe-size', 'eu-to-us-shoe-size'],
  },
  {
    slug: 'us-to-japan-shoe-size',
    fromSystem: 'us', toSystem: 'jp', fromLabel: 'US', toLabel: 'Japan',
    title: 'US to Japan Shoe Size Conversion: JP/CM Chart',
    description: 'Convert US shoe sizes to Japanese sizes. Metric foot length chart under JIS S 5037.',
    h1: 'US to Japan shoe size converter',
    intro: 'Japanese footwear sizing under JIS S 5037 equals foot length in centimeters. Converting US to Japan requires no scaling math beyond foot length.',
    formula: 'JP size = foot length in centimeters. US Men 9 = JP 27.0.',
    menExamples: ['US 7 -> JP 25.0', 'US 8 -> JP 26.0', 'US 9 -> JP 27.0', 'US 10 -> JP 28.0'],
    womenExamples: ['US 6 -> JP 23.0', 'US 7 -> JP 24.0', 'US 8 -> JP 25.0', 'US 9 -> JP 26.0'],
    tips: [
      'Japanese shoe sizes equal centimeters directly',
      'Asics and Mizuno use this system for domestic releases',
    ],
    faqs: [
      { q: 'What is US Men\'s 9 in Japanese shoe size?', a: 'US Men\'s 9 corresponds to JP 27.0 (27.0 cm foot length).' },
    ],
    relatedConversions: ['us-to-cm-shoe-size', 'us-to-eu-shoe-size'],
  },
  {
    slug: 'us-to-mexico-shoe-size',
    fromSystem: 'us', toSystem: 'mexico', fromLabel: 'US', toLabel: 'Mexico',
    title: 'US to Mexico Shoe Size Conversion: Mexican Chart',
    description: 'Convert US shoe sizes to Mexican sizes for men, women and kids. Includes Punto Calzado guide.',
    h1: 'US to Mexico shoe size converter',
    intro: 'Mexican footwear sizing uses the Punto Calzado system based on centimeters. Mexican men\'s sizes run approximately 1.0 size below US men\'s numbers.',
    formula: 'Men: Mexico ≈ US - 1.0 (US 9 -> MX 8.0). Women: Mexico ≈ US - 3.0 (US 8 -> MX 5.5).',
    menExamples: ['US 7 -> MX 6.0', 'US 8 -> MX 7.0', 'US 9 -> MX 8.0', 'US 10 -> MX 9.0'],
    womenExamples: ['US 6 -> MX 3.5', 'US 7 -> MX 4.5', 'US 8 -> MX 5.5', 'US 9 -> MX 6.5'],
    tips: [
      'Mexican men\'s sizes run 1.0 number smaller than US men\'s',
      'León bootmakers construct lasts in true centimeter steps',
    ],
    faqs: [
      { q: 'What is US Men\'s 9 in Mexican shoe size?', a: 'US Men\'s 9 corresponds to Mexico 8.0 (27.0 cm foot length).' },
    ],
    relatedConversions: ['us-to-cm-shoe-size', 'us-to-eu-shoe-size'],
  },
];

// ── Helper functions ────────────────────────────────────────
export function getCountry(slug: string): CountryData | undefined {
  return COUNTRIES.find(c => c.slug === slug);
}

export function getConversion(slug: string): ConversionData | undefined {
  return CONVERSIONS.find(c => c.slug === slug);
}
