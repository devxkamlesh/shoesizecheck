// ============================================================
// shoe-sizes.ts — Centralized shoe size data & page metadata
// ============================================================

// ── Size Arrays ─────────────────────────────────────────────
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

export const SIZE_DATA: Record<Gender, Record<string, (number | string)[]>> = {
  men: {
    us:        [6,   6.5, 7,   7.5, 8,   8.5, 9,   9.5, 10,  10.5, 11,  11.5, 12,  13,  14,  15,  16],
    uk:        [5.5, 6,   6.5, 7,   7.5, 8,   8.5, 9,   9.5, 10,   10.5,11,   11.5,12.5,13.5,14.5,15.5],
    eu:        [39,  39,  40,  40,  41,  41,  42,  42,  43,  43,   44,  44,   45,  46,  47,  48,  49],
    india:     [5,   5.5, 6,   6.5, 7,   7.5, 8,   8.5, 9,   9.5,  10,  10.5, 11,  12,  13,  14,  15],
    jp:        [24,  24.5,25,  25.5,26,  26.5,27,  27.5,28,  28.5, 29,  29.5, 30,  31,  32,  33,  34],
    cm:        [24,  24.5,25,  25.5,26,  26.5,27,  27.5,28,  28.5, 29,  29.5, 30,  31,  32,  33,  34],
    inches:    [9.3, 9.5, 9.6, 9.8, 9.9, 10.1,10.3,10.4,10.6,10.8, 10.9,11.1, 11.3,11.6,11.9,12.2,12.5],
    china:     [39,  39,  40,  40,  41,  41,  42,  42,  43,  43,   44,  44,   45,  46,  47,  48,  49],
    korea:     [240, 245, 250, 255, 260, 265, 270, 275, 280, 285,  290, 295,  300, 310, 320, 330, 340],
    australia: [5.5, 6,   6.5, 7,   7.5, 8,   8.5, 9,   9.5, 10,   10.5,11,   11.5,12.5,13.5,14.5,15.5],
    mexico:    [5,   5.5, 6,   6.5, 7,   7.5, 8,   8.5, 9,   9.5,  10,  10.5, 11,  12,  13,  14,  15],
  },
  women: {
    us:        [4,   4.5, 5,   5.5, 6,   6.5, 7,   7.5, 8,   8.5, 9,   9.5, 10,  10.5,11,  11.5,12],
    uk:        [2,   2.5, 3,   3.5, 4,   4.5, 5,   5.5, 6,   6.5, 7,   7.5, 8,   8.5, 9,   9.5, 10],
    eu:        [35,  35,  35,  36,  36,  37,  37,  38,  38,  39,  39,  40,  40,  41,  41,  42,  42],
    india:     [2,   2.5, 3,   3.5, 4,   4.5, 5,   5.5, 6,   6.5, 7,   7.5, 8,   8.5, 9,   9.5, 10],
    jp:        [21,  21.5,22,  22.5,23,  23,  23.5,24,  24,  24.5,25,  25,  25.5,26,  26,  26.5,27],
    cm:        [21,  21.5,22,  22.5,23,  23,  23.5,24,  24,  24.5,25,  25,  25.5,26,  26,  26.5,27],
    inches:    [8.2, 8.3, 8.5, 8.8, 8.9, 9.1, 9.3, 9.4, 9.5, 9.7, 9.9, 10,  10.2,10.3,10.5,10.7,10.9],
    china:     [35,  35,  35,  36,  36,  37,  37,  38,  38,  39,  39,  40,  40,  41,  41,  42,  42],
    korea:     [210, 215, 220, 225, 230, 230, 235, 240, 240, 245, 250, 250, 255, 260, 260, 265, 270],
    australia: [2,   2.5, 3,   3.5, 4,   4.5, 5,   5.5, 6,   6.5, 7,   7.5, 8,   8.5, 9,   9.5, 10],
    mexico:    [2,   2.5, 3,   3.5, 4,   4.5, 5,   5.5, 6,   6.5, 7,   7.5, 8,   8.5, 9,   9.5, 10],
  },
  kids: {
    us:        [1,   2,   3,   4,   5,   6,   7,   8,   9,   10,  11,  12,  13,  '1Y','2Y','3Y'],
    uk:        [0.5, 1,   2,   3,   4,   5,   6,   7,   8,   9,   10,  11,  12,  13,  '1Y','2Y'],
    eu:        [17,  18,  19,  20,  21,  22,  23,  25,  26,  27,  28,  30,  31,  32,  33,  35],
    india:     [1,   2,   3,   3,   4,   5,   5,   6,   7,   8,   9,   10,  11,  12,  13,  1],
    jp:        [11,  12,  13,  13,  14,  14,  15,  15,  16,  17,  17,  18,  19,  20,  21,  22],
    cm:        [11,  12,  13,  13,  14,  14,  15,  15,  16,  17,  17,  18,  19,  20,  21,  22],
    inches:    [4.3, 4.7, 5.1, 5.5, 5.9, 6.1, 6.3, 6.5, 6.7, 6.9, 7.1, 7.3, 7.7, 7.9, 8.3, 8.7],
    china:     [17,  18,  19,  20,  21,  22,  23,  25,  26,  27,  28,  30,  31,  32,  33,  35],
    korea:     [110, 120, 130, 130, 140, 140, 150, 150, 160, 170, 170, 180, 190, 200, 210, 220],
    australia: [0.5, 1,   2,   3,   4,   5,   6,   7,   8,   9,   10,  11,  12,  13,  '1Y','2Y'],
    mexico:    [1,   2,   3,   3,   4,   5,   5,   6,   7,   8,   9,   10,  11,  12,  13,  1],
  }
};

// ── Country Metadata ────────────────────────────────────────
export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  system: string;          // primary size system key
  systemLabel: string;
  title: string;
  description: string;
  h1: string;
  intro: string;           // unique content paragraph
  explanation: string;     // how the system works
  tips: string[];          // sizing tips specific to country
  faqs: { q: string; a: string }[];
  relatedConversions: string[];  // slugs of conversion pages
  relatedCountries: string[];   // slugs of other country pages
}

export const COUNTRIES: CountryData[] = [
  {
    slug: 'us',
    name: 'United States',
    flag: '🇺🇸',
    system: 'us',
    systemLabel: 'US',
    title: 'US Shoe Size Chart & Converter – Men, Women & Kids',
    description: 'Convert US shoe sizes to UK, EU, India, Japan, CM and more. Complete US shoe size chart for men, women and kids with instant converter.',
    h1: 'US Shoe Size Converter',
    intro: 'The United States uses a unique shoe sizing system based on the Brannock Device, developed in 1927 by Charles Brannock. US sizes differ for men and women — a women\'s US 8 fits the same foot length as a men\'s US 6.5. This system is also used in Canada.',
    explanation: 'US shoe sizes are based on the barleycorn measurement (1/3 inch = one full size). Men\'s sizes start from size 1 = 7.67 inches, and each full size adds 1/3 inch. Women\'s sizes use a different offset, starting higher. Half sizes exist between every full size, adding 1/6 inch. The system is not metric-based, which is why conversions to EU or CM are never exact round numbers.',
    tips: [
      'US Women\'s sizes are 1.5–2 sizes larger than US Men\'s for the same foot length',
      'US Kids sizes transition to adult sizing at around size 13C → 1Y',
      'Most US brands include half sizes for a more precise fit',
      'When buying from European brands online, use EU as the primary reference, not US',
    ],
    faqs: [
      { q: 'What US shoe size is a 27 cm foot?', a: 'A 27 cm foot is approximately US Men\'s 9 or US Women\'s 10.5. Use our converter for precise results based on gender.' },
      { q: 'Is US shoe size the same as Canada?', a: 'Yes, the United States and Canada use the same shoe sizing system. A US 9 is exactly the same as a Canada 9.' },
      { q: 'How do US kids shoe sizes work?', a: 'US kids sizes run from 0C (infant) through 13C, then restart at 1Y (Youth). Youth sizes overlap with small adult sizes — a Youth 7 is approximately a Women\'s 8.5.' },
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
    title: 'UK Shoe Size Chart & Converter – Men, Women & Kids',
    description: 'Convert UK shoe sizes to US, EU, India, Japan and CM. Complete UK shoe size chart for men, women and kids with instant conversion tool.',
    h1: 'UK Shoe Size Converter',
    intro: 'The United Kingdom uses a sizing system also based on barleycorn measurements, similar to the US but with a different starting point. UK sizes are approximately 0.5 sizes smaller than US men\'s and 2 sizes smaller than US women\'s. This system is widely used across the Commonwealth including Australia, New Zealand, and South Africa.',
    explanation: 'The UK system uses the same 1/3 inch (barleycorn) increment as the US, but starts from a different base length. For men, UK sizes run about 0.5 lower than US. For women, the gap is larger — about 2 sizes. Many Indian brands like Bata, Liberty, and Woodland also use UK-based sizing, making UK knowledge essential for Indian shoppers.',
    tips: [
      'UK Men\'s are 0.5 smaller than US Men\'s (US 10 = UK 9.5)',
      'UK Women\'s are 2 sizes smaller than US Women\'s (US 8 = UK 6)',
      'Many Indian brands use UK sizing — always check the label',
      'Australian sizes are nearly identical to UK sizes',
    ],
    faqs: [
      { q: 'What is the difference between UK and US shoe sizes?', a: 'For men, UK sizes are 0.5 smaller than US (US 10 = UK 9.5). For women, the gap is 2 sizes (US 8 = UK 6). For kids, the offset varies but is generally about 0.5–1 size.' },
      { q: 'Is UK shoe size the same as Indian shoe size?', a: 'For men, UK and Indian sizes are approximately the same — a UK 8 is roughly India 8. For women, they align closely too. Many Indian brands like Bata use UK-based sizing.' },
      { q: 'Are UK and Australian shoe sizes the same?', a: 'Practically yes. Australian shoe sizes follow the UK system with minimal deviation. A UK 9 is an Australian 9 for men.' },
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
    title: 'India Shoe Size Chart & Converter – Men, Women & Kids',
    description: 'Convert Indian shoe sizes to US, UK, EU, Japan and CM. Complete India shoe size chart for men, women and kids. Includes Bata, Liberty and brand-specific notes.',
    h1: 'India Shoe Size Converter',
    intro: 'Indian shoe sizing closely follows the UK system, with men\'s sizes typically running 1 size smaller than US. Brands like Bata, Liberty, Red Tape, and Woodland use this system across India. When shopping on Flipkart, Myntra, or Amazon India, sizes are usually listed in UK/India format.',
    explanation: 'India doesn\'t have its own official shoe size standard — most brands follow UK sizing. This means India 8 ≈ UK 8 ≈ US 9 for men. However, some international brands sold in India may label sizes in EU, causing confusion. Always check whether the listing says "UK" or "EU" on Indian e-commerce platforms.',
    tips: [
      'India sizes ≈ UK sizes for most brands (India 8 = UK 8 = US 9 for men)',
      'On Flipkart and Myntra, check if the size is listed as UK or EU',
      'Bata, Liberty, and Red Tape use India/UK sizing',
      'Nike and Adidas in India often show both UK and EU sizes',
      'For women, India sizes are approximately equal to UK sizes',
    ],
    faqs: [
      { q: 'What is India shoe size 8 in US?', a: 'India size 8 for men is approximately US 9. India sizes are about 1 size smaller than US men\'s sizes.' },
      { q: 'Is Indian shoe size same as UK?', a: 'Yes, for most purposes. Indian shoe sizing follows the UK system. India 8 = UK 8 for both men and women.' },
      { q: 'What is India shoe size 6 in EU?', a: 'India 6 for men is approximately EU 40. India 6 for women is approximately EU 39.' },
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
    title: 'EU Shoe Size Chart & Converter – European Sizing',
    description: 'Convert EU (European) shoe sizes to US, UK, India, Japan and CM. Complete EU size chart for men, women and kids. Covers France, Germany, Italy, Spain sizing.',
    h1: 'EU Shoe Size Converter',
    intro: 'The European (EU) shoe size system is based on the Paris Point, where 1 point equals 2/3 of a centimeter of inner shoe length. EU sizes are unisex — a size 42 refers to the same foot length whether for men or women. This system is used across France, Germany, Italy, Spain, and most of continental Europe.',
    explanation: 'The Paris Point formula is: EU size = (foot length in cm + 1.5) × 1.5. The "+1.5 cm" accounts for toe room. This means EU 42 corresponds to a foot of about 27 cm (42 ÷ 1.5 − 1.5 = 26.5). The key advantage of EU sizing is that it\'s gender-neutral — the same number means the same length for everyone. European brands like Adidas, Puma, and ECCO use EU as their primary size reference.',
    tips: [
      'EU sizes are the same for men and women — only the shoe width/last differs',
      'EU 42 ≈ US Men\'s 9 ≈ UK 8.5 ≈ foot length 27 cm',
      'France, Germany, Italy, Spain all use the same EU system',
      'When buying European brands, trust the EU size over any US/UK conversion on the label',
    ],
    faqs: [
      { q: 'What does EU 42 mean?', a: 'EU 42 is a European shoe size corresponding to a foot length of approximately 26.5–27 cm. It equals US Men\'s 9, UK 8.5, or India 8.' },
      { q: 'Are EU sizes the same for men and women?', a: 'Yes, EU sizes are unisex. EU 40 means the same foot length regardless of gender. Only the shoe width and fit differ between men\'s and women\'s versions of the same EU size.' },
      { q: 'What is my EU shoe size?', a: 'Measure your foot in cm and multiply by 1.5, then add 2. For example: 27 cm × 1.5 + 2 = 42.5, so your EU size is approximately 42–43.' },
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
    title: 'Japan Shoe Size Chart & Converter – JP/CM Sizing',
    description: 'Convert Japanese shoe sizes to US, UK, EU, India and more. Japan uses centimeter-based sizing making it the simplest system. Full chart for men and women.',
    h1: 'Japan Shoe Size Converter',
    intro: 'Japan uses the simplest shoe sizing system in the world — it\'s based directly on foot length in centimeters. A JP size 27 means the shoe is designed for a 27 cm foot. This system (called Mondopoint in ISO standards) is also used in Korea (in millimeters) and is gaining adoption globally for its clarity.',
    explanation: 'Japanese shoe sizing measures the foot length in centimeters, rounded to the nearest 0.5 cm. JP 27 = 27 cm foot. There\'s no gender offset — the same number means the same length. Width is handled separately with letter codes: from A (narrowest) through EEEE (widest). Standard width is EE for men and E for women in Japan.',
    tips: [
      'JP size = your foot length in cm (JP 27 = 27 cm foot)',
      'No gender offset — JP 27 for men and women is the same length',
      'Japanese width codes: A (narrow) → E → EE → EEE → EEEE (wide)',
      'Korean sizes are JP × 10 in millimeters (JP 27 = KR 270)',
    ],
    faqs: [
      { q: 'How do Japanese shoe sizes work?', a: 'Japanese sizes equal your foot length in centimeters. JP 27 means the shoe fits a 27 cm foot. It\'s the simplest system — just measure your foot and that\'s your size.' },
      { q: 'What is JP 27 in US size?', a: 'JP 27 (27 cm) is approximately US Men\'s 9 or US Women\'s 10.5.' },
      { q: 'Are Japanese and Korean shoe sizes the same?', a: 'They measure the same way but use different units. Japanese sizes are in centimeters (JP 27), Korean sizes are in millimeters (KR 270). JP 27 = KR 270.' },
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
    title: 'China Shoe Size Chart & Converter – Chinese Sizing',
    description: 'Convert Chinese shoe sizes to US, UK, EU, India, Japan and CM. China uses the EU (European) system. Full chart and instant converter for men and women.',
    h1: 'China Shoe Size Converter',
    intro: 'China primarily uses the European (EU) shoe sizing system, also known as the "new standard" adopted in 1998. Chinese size 42 = EU 42. Before 1998, China used an older system based on centimeters, but today virtually all Chinese shoe brands and e-commerce platforms (Taobao, JD.com, AliExpress) use EU sizing.',
    explanation: 'The Chinese "new standard" shoe size system is identical to EU/French sizing. It uses the Paris Point (2/3 cm per size). So China 42 = EU 42 = approximately 27 cm foot length. When shopping on AliExpress or buying Chinese brands, treat the size number as an EU size. Some older or budget manufacturers may still use the old CM-based system, but this is increasingly rare.',
    tips: [
      'China sizes = EU sizes (China 42 = EU 42)',
      'On AliExpress and Taobao, sizes follow the EU system',
      'Some sellers show both EU and CM — always check both',
      'Chinese shoe widths tend to run slightly narrower than Western brands',
    ],
    faqs: [
      { q: 'Is Chinese shoe size the same as EU?', a: 'Yes, since 1998 China has adopted the EU/French sizing system. China 42 = EU 42. They are interchangeable.' },
      { q: 'What is China shoe size 42 in US?', a: 'China 42 (which equals EU 42) is approximately US Men\'s 9 or US Women\'s 11.' },
      { q: 'How do I convert AliExpress shoe sizes?', a: 'AliExpress uses EU sizing. A size 42 on AliExpress = EU 42 = US Men\'s 9. Always check if the seller provides a CM measurement in the listing for the most accurate fit.' },
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
    title: 'Korean Shoe Size Chart & Converter – KR/mm Sizing',
    description: 'Convert Korean shoe sizes to US, UK, EU, Japan and CM. Korea uses millimeter-based sizing (KR 270 = 27 cm). Full chart and converter for men and women.',
    h1: 'Korean Shoe Size Converter',
    intro: 'South Korea uses a Mondopoint-based sizing system measured in millimeters. KR 270 means the shoe fits a 270 mm (27 cm) foot. This is the same principle as the Japanese system but expressed in millimeters instead of centimeters. Korean brands like Samsung C&T, Fila Korea, and New Balance Korea all use this system.',
    explanation: 'Korean shoe sizes are foot length in millimeters, typically in 5 mm increments: 250, 255, 260, 265, 270, etc. To convert to Japanese/CM: divide by 10. KR 270 = JP 27 = 27 cm. To convert to US Men\'s from KR: (KR − 170) ÷ 10 gives an approximate US size. The system is very intuitive once you know your foot measurement.',
    tips: [
      'KR 270 = JP 27 = 27 cm foot length',
      'To convert KR → JP: divide by 10 (KR 270 ÷ 10 = JP 27)',
      'Standard Korean shoe size range for men: KR 250–300',
      'Width is typically standard in Korean sizing; specify wide if needed',
    ],
    faqs: [
      { q: 'What does KR 270 mean?', a: 'KR 270 means the shoe fits a foot that is 270 millimeters (27 cm) long. It equals JP 27, US Men\'s 9, or EU 42.' },
      { q: 'How do I convert Korean shoe sizes to US?', a: 'Divide the Korean size by 10 to get centimeters (KR 270 = 27 cm), then use our converter to find US, EU, UK, or India sizes.' },
      { q: 'Is Korean shoe size the same as Japanese?', a: 'Same principle, different unit. Japan uses centimeters (JP 27), Korea uses millimeters (KR 270). Divide KR by 10 to get JP.' },
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
    title: 'Australian Shoe Size Chart & Converter – AU Sizing',
    description: 'Convert Australian shoe sizes to US, UK, EU, India and CM. Australian sizes follow the UK system. Full chart for men, women and kids.',
    h1: 'Australian Shoe Size Converter',
    intro: 'Australia uses a shoe sizing system that is virtually identical to the UK system. For men, AU = UK (AU 9 = UK 9). For women, AU = US (AU 8 = US 8). This dual alignment can cause confusion, but it\'s consistent across all major Australian retailers like The Iconic, Hype DC, and Platypus Shoes.',
    explanation: 'Australian men\'s sizes follow the UK barleycorn system exactly: AU Men\'s 9 = UK 9 = US 9.5. Australian women\'s sizes, however, align with US women\'s sizing: AU Women\'s 8 = US Women\'s 8 = UK 6. This split between men (UK-based) and women (US-based) is unique to Australia and New Zealand.',
    tips: [
      'AU Men\'s = UK Men\'s (AU 9 = UK 9 = US 9.5)',
      'AU Women\'s = US Women\'s (AU 8 = US 8 = UK 6)',
      'Australian kids sizes follow the UK system',
      'New Zealand uses the same system as Australia',
    ],
    faqs: [
      { q: 'Is Australian shoe size the same as UK?', a: 'For men, yes — AU Men\'s sizes are identical to UK sizes. For women, AU sizes align with US sizes instead of UK.' },
      { q: 'What is AU 10 in US?', a: 'For men: AU 10 = US 10.5 (since AU men\'s = UK, and US is 0.5 larger than UK). For women: AU 10 = US 10 (AU women\'s = US women\'s).' },
      { q: 'Are New Zealand and Australian shoe sizes the same?', a: 'Yes, New Zealand and Australia use the same shoe sizing system for both men and women.' },
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
    title: 'Mexico Shoe Size Chart & Converter – MX Sizing',
    description: 'Convert Mexican shoe sizes to US, UK, EU, and CM. Mexican men\'s sizes follow a unique offset from US. Full chart for men, women and kids.',
    h1: 'Mexico Shoe Size Converter',
    intro: 'Mexico uses a shoe sizing system that is closely related to the US system but with a different offset. For men, Mexican sizes are approximately 1.5 sizes smaller than US (US 9 = Mexico 7.5). For women, Mexican sizes are approximately equal to US sizes. This system is also used across several Latin American countries.',
    explanation: 'Mexican shoe sizes for men use a centimeter-based approach similar to the Mondopoint system, but the numbers don\'t directly correspond to foot length. The offset from US is roughly: MX Men\'s = US Men\'s − 1.5. For women, MX ≈ US. Some Mexican brands may also show US or EU sizes alongside the Mexican size for international shoppers.',
    tips: [
      'MX Men\'s ≈ US Men\'s − 1.5 (US 9 = MX 7.5)',
      'MX Women\'s ≈ US Women\'s for most brands',
      'Some Mexican brands show both MX and US sizes',
      'Brazilian and Argentine sizing may differ from Mexican',
    ],
    faqs: [
      { q: 'What is Mexico shoe size 8 in US?', a: 'Mexico Men\'s 8 is approximately US Men\'s 9.5. Add about 1.5 to convert Mexican men\'s sizes to US.' },
      { q: 'Is Mexican shoe size the same as US?', a: 'No, Mexican men\'s sizes are about 1.5 sizes smaller than US. Mexican women\'s sizes, however, are roughly equal to US women\'s sizes.' },
      { q: 'How do I convert Mexican shoe sizes?', a: 'For men: add 1.5 to get US size (MX 8 + 1.5 = US 9.5). For women: MX and US are approximately equal. Use our converter for precise results.' },
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
  // US →
  {
    slug: 'us-to-eu-shoe-size',
    fromSystem: 'us', toSystem: 'eu', fromLabel: 'US', toLabel: 'EU',
    title: 'US to EU Shoe Size Conversion – Chart & Calculator',
    description: 'Convert US shoe sizes to EU (European) sizes instantly. Full US to EU conversion chart for men, women and kids with accurate results.',
    h1: 'US to EU Shoe Size Converter',
    intro: 'Converting US to EU shoe sizes is one of the most common conversions needed when shopping from European brands like Adidas, Puma, or Zara. The EU system is gender-neutral, so EU 42 means the same foot length for both men and women.',
    formula: 'Approximate formula: EU ≈ US Men\'s + 33 (e.g. US 9 → EU 42). For women: EU ≈ US Women\'s + 31 (e.g. US 8 → EU 39). These are approximations — half sizes may vary.',
    menExamples: ['US 7 → EU 40', 'US 8 → EU 41', 'US 9 → EU 42', 'US 10 → EU 43', 'US 11 → EU 44', 'US 12 → EU 45'],
    womenExamples: ['US 6 → EU 36', 'US 7 → EU 37', 'US 8 → EU 38–39', 'US 9 → EU 39–40', 'US 10 → EU 40–41'],
    tips: ['EU sizes are unisex — the same number means the same foot length for men and women', 'When buying Adidas, Puma, or Nike EU editions, trust the EU size over any US label conversion', 'EU half sizes are rare — most EU sizes are whole numbers'],
    faqs: [
      { q: 'What is US 10 in EU?', a: 'US Men\'s 10 is approximately EU 43. US Women\'s 10 is approximately EU 40–41.' },
      { q: 'What is US 9 in EU?', a: 'US Men\'s 9 is approximately EU 42. US Women\'s 9 is approximately EU 39–40.' },
    ],
    relatedConversions: ['eu-to-us-shoe-size', 'us-to-uk-shoe-size', 'us-to-india-shoe-size', 'us-to-cm-shoe-size'],
  },
  {
    slug: 'us-to-uk-shoe-size',
    fromSystem: 'us', toSystem: 'uk', fromLabel: 'US', toLabel: 'UK',
    title: 'US to UK Shoe Size Conversion – Chart & Calculator',
    description: 'Convert US shoe sizes to UK sizes instantly. US to UK chart for men, women and kids. Men: subtract 0.5. Women: subtract 2.',
    h1: 'US to UK Shoe Size Converter',
    intro: 'Converting US to UK shoe sizes is straightforward. For men, subtract 0.5 from your US size. For women, subtract 2. Both systems use the barleycorn increment but start from different base points.',
    formula: 'Men: UK = US − 0.5 (US 10 → UK 9.5). Women: UK = US − 2 (US 8 → UK 6). Kids: UK ≈ US − 0.5 to 1.',
    menExamples: ['US 7 → UK 6.5', 'US 8 → UK 7.5', 'US 9 → UK 8.5', 'US 10 → UK 9.5', 'US 11 → UK 10.5', 'US 12 → UK 11.5'],
    womenExamples: ['US 6 → UK 4', 'US 7 → UK 5', 'US 8 → UK 6', 'US 9 → UK 7', 'US 10 → UK 8'],
    tips: ['Men: UK is consistently 0.5 smaller than US', 'Women: UK is consistently 2 sizes smaller than US', 'UK sizes are used in the UK, Australia (men), India, and many Commonwealth countries'],
    faqs: [
      { q: 'What is US 10 in UK?', a: 'US Men\'s 10 = UK 9.5. US Women\'s 10 = UK 8.' },
      { q: 'What is US 8 in UK women\'s?', a: 'US Women\'s 8 = UK 6.' },
    ],
    relatedConversions: ['uk-to-us-shoe-size', 'us-to-eu-shoe-size', 'us-to-india-shoe-size'],
  },
  {
    slug: 'us-to-india-shoe-size',
    fromSystem: 'us', toSystem: 'india', fromLabel: 'US', toLabel: 'India',
    title: 'US to India Shoe Size Conversion – Chart & Calculator',
    description: 'Convert US shoe sizes to Indian sizes. India sizes are ~1 smaller than US men\'s. Full chart for men, women and kids.',
    h1: 'US to India Shoe Size Converter',
    intro: 'Converting US to Indian shoe sizes is essential for shopping on Flipkart, Myntra, and Amazon India. Indian sizing closely follows the UK system, meaning India sizes are approximately 1 size smaller than US men\'s.',
    formula: 'Men: India ≈ US − 1 (US 9 → India 8). Women: India ≈ US − 2 (US 8 → India 6). These align closely with UK sizing.',
    menExamples: ['US 7 → India 6', 'US 8 → India 7', 'US 9 → India 8', 'US 10 → India 9', 'US 11 → India 10', 'US 12 → India 11'],
    womenExamples: ['US 6 → India 4', 'US 7 → India 5', 'US 8 → India 6', 'US 9 → India 7', 'US 10 → India 8'],
    tips: ['India sizes ≈ UK sizes for most brands', 'Bata, Liberty, Red Tape, Woodland use India/UK sizing', 'On Flipkart/Myntra, check if the size label says UK or EU', 'Nike and Adidas India often show both UK and EU'],
    faqs: [
      { q: 'What is US 9 in India shoe size?', a: 'US Men\'s 9 = India 8. US Women\'s 9 = India 7.' },
      { q: 'Is India size same as UK?', a: 'Yes, Indian shoe sizes follow the UK system closely. India 8 = UK 8 for men.' },
    ],
    relatedConversions: ['india-to-us-shoe-size', 'us-to-uk-shoe-size', 'us-to-eu-shoe-size'],
  },
  {
    slug: 'us-to-japan-shoe-size',
    fromSystem: 'us', toSystem: 'jp', fromLabel: 'US', toLabel: 'Japan',
    title: 'US to Japan Shoe Size Conversion – Chart & Calculator',
    description: 'Convert US shoe sizes to Japanese (JP/CM) sizes. Japan uses centimeter-based sizing. Full chart for men and women.',
    h1: 'US to Japan Shoe Size Converter',
    intro: 'Japanese shoe sizes are based directly on foot length in centimeters, making them the most intuitive system. Converting from US to Japan simply means finding the corresponding CM measurement for your US size.',
    formula: 'US Men\'s 9 → JP 27 (27 cm foot). US Women\'s 8 → JP 24 (24 cm foot). JP size = foot length in centimeters.',
    menExamples: ['US 7 → JP 25', 'US 8 → JP 26', 'US 9 → JP 27', 'US 10 → JP 28', 'US 11 → JP 29', 'US 12 → JP 30'],
    womenExamples: ['US 6 → JP 23', 'US 7 → JP 23.5', 'US 8 → JP 24', 'US 9 → JP 25', 'US 10 → JP 25.5'],
    tips: ['JP size = your foot length in cm', 'Also used for Korean sizes: multiply JP by 10 (JP 27 = KR 270)', 'Width codes in Japan: A (narrow) to EEEE (extra wide)'],
    faqs: [
      { q: 'What is US 9 in Japanese size?', a: 'US Men\'s 9 = JP 27 (27 cm). US Women\'s 9 = JP 25 (25 cm).' },
      { q: 'How do Japanese shoe sizes work?', a: 'Japanese sizes equal foot length in centimeters. JP 27 = 27 cm foot. No gender offset — the number is the measurement.' },
    ],
    relatedConversions: ['us-to-eu-shoe-size', 'us-to-cm-shoe-size'],
  },
  {
    slug: 'us-to-cm-shoe-size',
    fromSystem: 'us', toSystem: 'cm', fromLabel: 'US', toLabel: 'CM',
    title: 'US to CM Shoe Size – Foot Length Chart & Calculator',
    description: 'Convert US shoe sizes to foot length in centimeters. Full US to CM chart for men, women and kids.',
    h1: 'US to CM Shoe Size Converter',
    intro: 'Knowing your foot length in centimeters is the most universal way to find your shoe size in any system. This converter translates US sizes to the corresponding foot length in CM.',
    formula: 'US Men\'s 9 = 27 cm. US Men\'s 10 = 28 cm. US Women\'s 8 = 24 cm. Each half size ≈ 0.5 cm.',
    menExamples: ['US 7 → 25 cm', 'US 8 → 26 cm', 'US 9 → 27 cm', 'US 10 → 28 cm', 'US 11 → 29 cm', 'US 12 → 30 cm'],
    womenExamples: ['US 6 → 23 cm', 'US 7 → 23.5 cm', 'US 8 → 24 cm', 'US 9 → 25 cm', 'US 10 → 25.5 cm'],
    tips: ['CM measurements are the same as Japanese (JP) sizes', 'Knowing your CM lets you buy from any country accurately', 'Measure both feet and use the larger measurement'],
    faqs: [
      { q: 'What is US 10 in CM?', a: 'US Men\'s 10 corresponds to approximately 28 cm foot length.' },
      { q: 'What is US 8 women\'s in CM?', a: 'US Women\'s 8 corresponds to approximately 24 cm foot length.' },
    ],
    relatedConversions: ['us-to-eu-shoe-size', 'us-to-japan-shoe-size', 'eu-to-cm-shoe-size', 'us-to-mexico-shoe-size'],
  },
  {
    slug: 'us-to-mexico-shoe-size',
    fromSystem: 'us', toSystem: 'mexico', fromLabel: 'US', toLabel: 'Mexico',
    title: 'US to Mexico Shoe Size Conversion – Chart & Calculator',
    description: 'Convert US shoe sizes to Mexico sizes instantly. Full US to Mexico conversion chart for men, women and kids with Punto Calzado guidelines.',
    h1: 'US to Mexico Shoe Size Converter',
    intro: 'Converting US shoe sizes to Mexican footwear sizes is essential for cross-border shopping and authentic Mexican leather boots from León. Mexico uses the metric Punto Calzado system.',
    formula: 'Men: Mexico ≈ US − 1.5 (US 9.5 → Mexico 8 / Punto 27.5 cm). Women: Mexico ≈ US − 3 (US 8 → Mexico 5 / Punto 25 cm).',
    menExamples: ['US 7 → MX 5.5', 'US 8 → MX 6.5', 'US 9 → MX 7.5', 'US 9.5 → MX 8.0', 'US 10 → MX 8.5', 'US 11 → MX 9.5'],
    womenExamples: ['US 5 → MX 2', 'US 6 → MX 3', 'US 7 → MX 4', 'US 8 → MX 5', 'US 9 → MX 6', 'US 10 → MX 7'],
    tips: ['Mexican sizes are based on foot length in centimetres (Punto Calzado)', 'In Mexico, sizes are colloquially called by their single digit (e.g., Talla 7 for 27 cm)', 'Handcrafted Mexican cowboy boots often require half a size up for pointed toes'],
    faqs: [
      { q: 'What is US shoe size 9 in Mexico?', a: 'A US Men\'s 9 corresponds to approximately Mexico 7.5 (Punto 27.0–27.5 cm). For women, a US 9 is approximately Mexico 6 (Punto 26 cm).' },
      { q: 'What is Mexico shoe size 8 in US?', a: 'Mexico size 8 (Talla 8 or Punto 28) corresponds to US Men\'s 9.5 to 10.0.' },
    ],
    relatedConversions: ['us-to-eu-shoe-size', 'us-to-uk-shoe-size', 'us-to-cm-shoe-size'],
  },
  // EU →
  {
    slug: 'eu-to-us-shoe-size',
    fromSystem: 'eu', toSystem: 'us', fromLabel: 'EU', toLabel: 'US',
    title: 'EU to US Shoe Size Conversion – Chart & Calculator',
    description: 'Convert EU (European) shoe sizes to US sizes. Full EU to US chart for men, women and kids with instant results.',
    h1: 'EU to US Shoe Size Converter',
    intro: 'Converting EU to US shoe sizes is essential when shopping from American brands or retailers. Remember that US sizes differ for men and women, while EU sizes are unisex.',
    formula: 'Men: US ≈ EU − 33 (EU 42 → US 9). Women: US ≈ EU − 31 (EU 39 → US 8). These are approximations.',
    menExamples: ['EU 40 → US 7', 'EU 41 → US 8', 'EU 42 → US 9', 'EU 43 → US 10', 'EU 44 → US 11', 'EU 45 → US 12'],
    womenExamples: ['EU 36 → US 5.5–6', 'EU 37 → US 6.5–7', 'EU 38 → US 7.5–8', 'EU 39 → US 8.5–9', 'EU 40 → US 9.5–10'],
    tips: ['EU sizes are unisex but US sizes split by gender — always specify', 'EU half sizes are rare; US half sizes are common', 'Trust the EU size over a US conversion label on European brands'],
    faqs: [
      { q: 'What is EU 42 in US?', a: 'EU 42 = US Men\'s 9 approximately. For women, EU 42 ≈ US 11.' },
      { q: 'What is EU 40 in US?', a: 'EU 40 = US Men\'s 7 or US Women\'s 9.5 approximately.' },
    ],
    relatedConversions: ['us-to-eu-shoe-size', 'eu-to-uk-shoe-size', 'eu-to-india-shoe-size', 'eu-to-cm-shoe-size'],
  },
  {
    slug: 'eu-to-uk-shoe-size',
    fromSystem: 'eu', toSystem: 'uk', fromLabel: 'EU', toLabel: 'UK',
    title: 'EU to UK Shoe Size Conversion – Chart & Calculator',
    description: 'Convert European (EU) shoe sizes to British (UK) sizes instantly. Full conversion chart for men, women, and kids with accurate sizing guidelines.',
    h1: 'EU to UK Shoe Size Converter',
    intro: 'The EU and UK systems use completely different measurement principles — EU uses the Paris Point while UK uses the barleycorn. This converter bridges both systems accurately.',
    formula: 'Men: UK ≈ EU − 33.5 (EU 42 → UK 8.5). Women: UK ≈ EU − 33 (EU 38 → UK 5).',
    menExamples: ['EU 40 → UK 6.5', 'EU 41 → UK 7.5', 'EU 42 → UK 8.5', 'EU 43 → UK 9.5', 'EU 44 → UK 10.5', 'EU 45 → UK 11.5'],
    womenExamples: ['EU 36 → UK 3.5', 'EU 37 → UK 4.5', 'EU 38 → UK 5.5', 'EU 39 → UK 6.5', 'EU 40 → UK 7'],
    tips: ['UK and India sizes are nearly identical — converting EU to UK also gives you India', 'EU sizes are whole numbers; UK uses half sizes for precision'],
    faqs: [
      { q: 'What is EU 42 in UK?', a: 'EU 42 = UK 8 to 8.5 for men.' },
      { q: 'What is EU 39 in UK women\'s?', a: 'EU 39 = UK 6 to 6.5 for women.' },
    ],
    relatedConversions: ['uk-to-eu-shoe-size', 'eu-to-us-shoe-size', 'eu-to-india-shoe-size'],
  },

  {
    slug: 'eu-to-india-shoe-size',
    fromSystem: 'eu', toSystem: 'india', fromLabel: 'EU', toLabel: 'India',
    title: 'EU to India Shoe Size Conversion – Chart & Calculator',
    description: 'Convert EU shoe sizes to Indian sizes. Essential for buying European brands in India. Full chart for men and women.',
    h1: 'EU to India Shoe Size Converter',
    intro: 'When buying European brands like Adidas, Puma, or Zara in India, you need to convert EU sizes to India/UK sizes. Since India follows UK sizing, EU to India is the same as EU to UK.',
    formula: 'Men: India ≈ EU − 33.5 (EU 42 → India 8). Women: India ≈ EU − 33 (EU 38 → India 5.5).',
    menExamples: ['EU 40 → India 6', 'EU 41 → India 7', 'EU 42 → India 8', 'EU 43 → India 9', 'EU 44 → India 10'],
    womenExamples: ['EU 36 → India 3.5', 'EU 37 → India 4.5', 'EU 38 → India 5.5', 'EU 39 → India 6.5', 'EU 40 → India 7.5'],
    tips: ['EU to India ≈ EU to UK (India follows UK sizing)', 'On Indian e-commerce sites showing EU sizes, subtract 33–34 for men to get your India size'],
    faqs: [
      { q: 'What is EU 42 in India?', a: 'EU 42 = India 8 for men approximately.' },
      { q: 'What is EU 39 in India women\'s?', a: 'EU 39 = India 6–6.5 for women.' },
    ],
    relatedConversions: ['india-to-eu-shoe-size', 'eu-to-us-shoe-size', 'eu-to-uk-shoe-size'],
  },
  {
    slug: 'eu-to-cm-shoe-size',
    fromSystem: 'eu', toSystem: 'cm', fromLabel: 'EU', toLabel: 'CM',
    title: 'EU to CM Shoe Size – Foot Length Chart & Calculator',
    description: 'Convert EU shoe sizes to foot length in centimeters. EU size to CM conversion chart for men, women and kids.',
    h1: 'EU to CM Shoe Size Converter',
    intro: 'The EU system is based on the Paris Point (2/3 cm per size). This converter shows the corresponding foot length in centimeters for each EU size.',
    formula: 'Approximate: CM ≈ (EU size ÷ 1.5) − 1. EU 42 → approximately 27 cm. EU 39 → approximately 24.5 cm.',
    menExamples: ['EU 40 → 25–25.5 cm', 'EU 41 → 26–26.5 cm', 'EU 42 → 27 cm', 'EU 43 → 28 cm', 'EU 44 → 29 cm', 'EU 45 → 30 cm'],
    womenExamples: ['EU 36 → 22.5 cm', 'EU 37 → 23–23.5 cm', 'EU 38 → 24 cm', 'EU 39 → 24.5 cm', 'EU 40 → 25 cm'],
    tips: ['CM foot length is the most universal measurement', 'CM = JP (Japanese) size', 'Measure your foot to verify your EU size is correct'],
    faqs: [
      { q: 'What is EU 42 in CM?', a: 'EU 42 corresponds to approximately 27 cm foot length.' },
      { q: 'What is EU 38 in CM?', a: 'EU 38 corresponds to approximately 24 cm foot length.' },
    ],
    relatedConversions: ['us-to-cm-shoe-size', 'eu-to-us-shoe-size'],
  },
  // UK →
  {
    slug: 'uk-to-us-shoe-size',
    fromSystem: 'uk', toSystem: 'us', fromLabel: 'UK', toLabel: 'US',
    title: 'UK to US Shoe Size Conversion – Chart & Calculator',
    description: 'Convert UK shoe sizes to US sizes. Men: add 0.5. Women: add 2. Full chart for men, women and kids.',
    h1: 'UK to US Shoe Size Converter',
    intro: 'Converting UK to US sizes is one of the simplest conversions. For men, add 0.5 to your UK size. For women, add 2. Both systems use the same barleycorn increment.',
    formula: 'Men: US = UK + 0.5 (UK 9 → US 9.5). Women: US = UK + 2 (UK 6 → US 8).',
    menExamples: ['UK 6 → US 6.5', 'UK 7 → US 7.5', 'UK 8 → US 8.5', 'UK 9 → US 9.5', 'UK 10 → US 10.5', 'UK 11 → US 11.5'],
    womenExamples: ['UK 3 → US 5', 'UK 4 → US 6', 'UK 5 → US 7', 'UK 6 → US 8', 'UK 7 → US 9'],
    tips: ['Men: add 0.5 (UK 9 = US 9.5)', 'Women: add 2 (UK 6 = US 8)', 'This also works for Australian men\'s sizes since AU men\'s = UK'],
    faqs: [
      { q: 'What is UK 9 in US?', a: 'UK 9 = US Men\'s 9.5 or US Women\'s 11.' },
      { q: 'What is UK 6 in US women\'s?', a: 'UK 6 = US Women\'s 8.' },
    ],
    relatedConversions: ['us-to-uk-shoe-size', 'uk-to-eu-shoe-size', 'uk-to-india-shoe-size'],
  },
  {
    slug: 'uk-to-eu-shoe-size',
    fromSystem: 'uk', toSystem: 'eu', fromLabel: 'UK', toLabel: 'EU',
    title: 'UK to EU Shoe Size Conversion – Chart & Calculator',
    description: 'Convert British (UK) shoe sizes to European (EU) sizes instantly. Full conversion chart for men, women, and kids with Paris Point sizing guidelines.',
    h1: 'UK to EU Shoe Size Converter',
    intro: 'Converting UK to EU involves bridging two fundamentally different systems. Use this converter for accurate results.',
    formula: 'Men: EU ≈ UK + 33.5 (UK 8.5 → EU 42). Women: EU ≈ UK + 33 (UK 5 → EU 38).',
    menExamples: ['UK 6.5 → EU 40', 'UK 7.5 → EU 41', 'UK 8.5 → EU 42', 'UK 9.5 → EU 43', 'UK 10.5 → EU 44'],
    womenExamples: ['UK 3 → EU 35–36', 'UK 4 → EU 36–37', 'UK 5 → EU 37–38', 'UK 6 → EU 38–39', 'UK 7 → EU 39–40'],
    tips: ['EU sizes are whole numbers; UK uses half sizes', 'EU is gender-neutral; UK has gender-specific offsets'],
    faqs: [
      { q: 'What is UK 8 in EU?', a: 'UK 8 = EU 41–42 for men.' },
      { q: 'What is UK 5 in EU women\'s?', a: 'UK 5 = EU 37–38 for women.' },
    ],
    relatedConversions: ['eu-to-uk-shoe-size', 'uk-to-us-shoe-size', 'uk-to-india-shoe-size', 'eu-to-cm-shoe-size'],
  },

  {
    slug: 'uk-to-india-shoe-size',
    fromSystem: 'uk', toSystem: 'india', fromLabel: 'UK', toLabel: 'India',
    title: 'UK to India Shoe Size Conversion – Chart & Calculator',
    description: 'Convert UK shoe sizes to Indian sizes. UK and India sizes are nearly identical. Full chart for men and women.',
    h1: 'UK to India Shoe Size Converter',
    intro: 'UK and Indian shoe sizes are essentially the same system. India 8 = UK 8 for men. This is the simplest conversion — they\'re practically interchangeable.',
    formula: 'India ≈ UK for both men and women. UK 8 = India 8. UK 5 = India 5.',
    menExamples: ['UK 6 → India 6', 'UK 7 → India 7', 'UK 8 → India 8', 'UK 9 → India 9', 'UK 10 → India 10'],
    womenExamples: ['UK 3 → India 3', 'UK 4 → India 4', 'UK 5 → India 5', 'UK 6 → India 6', 'UK 7 → India 7'],
    tips: ['UK = India for most brands (Bata, Liberty, Red Tape)', 'Some variation exists in women\'s sizing for certain brands', 'Always check the brand\'s specific chart for precision'],
    faqs: [
      { q: 'Is UK shoe size the same as India?', a: 'Yes, for practical purposes UK and Indian shoe sizes are the same for both men and women.' },
    ],
    relatedConversions: ['india-to-uk-shoe-size', 'uk-to-us-shoe-size', 'uk-to-eu-shoe-size'],
  },
  // India →
  {
    slug: 'india-to-us-shoe-size',
    fromSystem: 'india', toSystem: 'us', fromLabel: 'India', toLabel: 'US',
    title: 'India to US Shoe Size Conversion – Chart & Calculator',
    description: 'Convert Indian shoe sizes to US sizes. India sizes are ~1 smaller than US men\'s. Full chart for men and women.',
    h1: 'India to US Shoe Size Converter',
    intro: 'Need to buy from a US brand? Indian shoe sizes are approximately 1 size smaller than US for men and 2 sizes smaller for women. This converter gives you exact US equivalents.',
    formula: 'Men: US = India + 1 (India 8 → US 9). Women: US = India + 2 (India 6 → US 8).',
    menExamples: ['India 6 → US 7', 'India 7 → US 8', 'India 8 → US 9', 'India 9 → US 10', 'India 10 → US 11'],
    womenExamples: ['India 4 → US 6', 'India 5 → US 7', 'India 6 → US 8', 'India 7 → US 9', 'India 8 → US 10'],
    tips: ['Add 1 for men (India 8 = US 9)', 'Add 2 for women (India 6 = US 8)', 'Nike and Adidas India labels usually show UK — convert from UK, not India'],
    faqs: [
      { q: 'What is India 8 in US?', a: 'India 8 for men = US 9. India 8 for women = US 10.' },
      { q: 'What is India 7 in US?', a: 'India 7 for men = US 8. India 7 for women = US 9.' },
    ],
    relatedConversions: ['us-to-india-shoe-size', 'india-to-uk-shoe-size', 'india-to-eu-shoe-size'],
  },
  {
    slug: 'india-to-uk-shoe-size',
    fromSystem: 'india', toSystem: 'uk', fromLabel: 'India', toLabel: 'UK',
    title: 'India to UK Shoe Size Conversion – Chart & Calculator',
    description: 'Convert Indian shoe sizes to UK sizes. India and UK sizes are virtually identical. Full chart.',
    h1: 'India to UK Shoe Size Converter',
    intro: 'Indian and UK shoe sizes are practically the same — India 8 = UK 8. This page confirms the equivalence and provides a full reference chart.',
    formula: 'UK = India for both men and women.',
    menExamples: ['India 6 → UK 6', 'India 7 → UK 7', 'India 8 → UK 8', 'India 9 → UK 9', 'India 10 → UK 10'],
    womenExamples: ['India 3 → UK 3', 'India 4 → UK 4', 'India 5 → UK 5', 'India 6 → UK 6', 'India 7 → UK 7'],
    tips: ['India = UK for all practical purposes', 'This holds true for Bata, Liberty, Red Tape, and Woodland'],
    faqs: [
      { q: 'Is India shoe size same as UK?', a: 'Yes, Indian shoe sizes are based on the UK system and are virtually identical.' },
    ],
    relatedConversions: ['uk-to-india-shoe-size', 'india-to-us-shoe-size', 'india-to-eu-shoe-size'],
  },
  {
    slug: 'india-to-eu-shoe-size',
    fromSystem: 'india', toSystem: 'eu', fromLabel: 'India', toLabel: 'EU',
    title: 'India to EU Shoe Size Conversion – Chart & Calculator',
    description: 'Convert Indian shoe sizes to EU sizes. Full chart for men and women. Essential for buying European brands in India.',
    h1: 'India to EU Shoe Size Converter',
    intro: 'When buying European brands sold in India, you often see EU sizes on the label. Converting India to EU helps you pick the right size for brands like Adidas, Puma, Zara, and H&M.',
    formula: 'Men: EU ≈ India + 34 (India 8 → EU 42). Women: EU ≈ India + 33 (India 5 → EU 38).',
    menExamples: ['India 6 → EU 40', 'India 7 → EU 41', 'India 8 → EU 42', 'India 9 → EU 43', 'India 10 → EU 44'],
    womenExamples: ['India 3 → EU 36', 'India 4 → EU 37', 'India 5 → EU 38', 'India 6 → EU 39', 'India 7 → EU 40'],
    tips: ['India to EU is the same as UK to EU since India = UK', 'On Flipkart/Myntra, EU sizes are common for international brands'],
    faqs: [
      { q: 'What is India 8 in EU?', a: 'India 8 for men = EU 42. India 8 for women = EU 41.' },
      { q: 'What is India 6 in EU women\'s?', a: 'India 6 for women = EU 39.' },
    ],
    relatedConversions: ['eu-to-india-shoe-size', 'india-to-us-shoe-size', 'india-to-uk-shoe-size'],
  },
];

// ── Helper: get country by slug ─────────────────────────────
export function getCountry(slug: string): CountryData | undefined {
  return COUNTRIES.find(c => c.slug === slug);
}

// ── Helper: get conversion by slug ──────────────────────────
export function getConversion(slug: string): ConversionData | undefined {
  return CONVERSIONS.find(c => c.slug === slug);
}
