// External references cited on content pages. Each entry was opened and checked against our
// chart on the date in SOURCES_CHECKED. ISO pages block automated fetching; their titles and
// numbers were confirmed through ISO's catalogue listing.
export const SOURCES_CHECKED = '2026-11-18';

export interface Source {
  title: string;
  publisher: string;
  url: string;
  /** What the source supports on our pages, in one or two sentences. */
  note: string;
}

export const SOURCES = {
  iso19407: {
    title: 'ISO 19407:2023 Footwear — Sizing — Conversion of sizing systems',
    publisher: 'International Organization for Standardization (ISO)',
    url: 'https://www.iso.org/standard/83106.html',
    note: 'Foot-length conversion tables linking Mondopoint, EU, UK, US, Japan, China and Korea sizes, including a children\'s table. It replaced ISO/TS 19407:2015 and describes its adult tables as a consumer guideline, not exact equivalents.',
  },
  iso9407: {
    title: 'ISO 9407:2019 Footwear sizing — Mondopoint system of sizing and marking',
    publisher: 'International Organization for Standardization (ISO)',
    url: 'https://www.iso.org/standard/71594.html',
    note: 'Defines Mondopoint, which marks a shoe by foot length in millimetres. It is the reason we treat centimetre foot length as the common reference between systems.',
  },
  nikeMen: {
    title: "Men's Footwear Size Chart",
    publisher: 'Nike',
    url: 'https://www.nike.com/size-fit/mens-footwear',
    note: "Our men's EU and centimetre columns match this chart (US 9 = EU 42.5 = 27 cm). Nike's UK column sits a full size below US (US 9 = UK 8), half a size lower than the ISO-style UK column we use.",
  },
  nikeWomen: {
    title: "Women's Footwear Size Chart",
    publisher: 'Nike',
    url: 'https://www.nike.com/size-fit/womens-footwear',
    note: "Our women's EU and centimetre columns match this chart (US 8 = EU 39 = 25 cm). Nike's women's UK column runs half a size below ours.",
  },
  nikeKids: {
    title: "Kids' Footwear Size Chart",
    publisher: 'Nike',
    url: 'https://www.nike.com/size-fit/kids-footwear',
    note: 'A brand reference for children\'s sizes. It agrees with our EU column at most sizes but lists some toddler sizes shorter in centimetres; the comparison on this page shows where and by how much.',
  },
  satra: {
    title: 'The diversity of footwear sizing systems',
    publisher: 'SATRA Bulletin, December 2023',
    url: 'https://www.satra.com/bulletin/article.php?id=3230',
    note: 'Background from the footwear research body SATRA on how the UK barleycorn system and the continental Paris Point system developed separately, which is why no single offset converts between them exactly.',
  },
} satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;

/** Values read from Nike's published charts on SOURCES_CHECKED, used for side-by-side checks. */
export const NIKE_CHART = {
  men: [
    { us: 8, uk: 7, eu: 41, cm: 26 },
    { us: 8.5, uk: 7.5, eu: 42, cm: 26.5 },
    { us: 9, uk: 8, eu: 42.5, cm: 27 },
    { us: 9.5, uk: 8.5, eu: 43, cm: 27.5 },
    { us: 10, uk: 9, eu: 44, cm: 28 },
  ],
  women: [
    { us: 7, uk: 4.5, eu: 38, cm: 24 },
    { us: 8, uk: 5.5, eu: 39, cm: 25 },
    { us: 9, uk: 6.5, eu: 40.5, cm: 26 },
    { us: 10, uk: 7.5, eu: 42, cm: 27 },
  ],
  kids: [
    { us: '8C', uk: '7.5', eu: 25, cm: 14 },
    { us: '10C', uk: '9.5', eu: 27, cm: 16 },
    { us: '12C', uk: '11.5', eu: 29.5, cm: 18 },
    { us: '1Y', uk: '13.5', eu: 32, cm: 20 },
    { us: '3Y', uk: '2.5', eu: 35, cm: 22 },
  ],
};
