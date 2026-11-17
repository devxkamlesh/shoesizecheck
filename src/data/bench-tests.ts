// First-hand insole measurements recorded by Kamlesh Choudhary in September 2026 with a steel
// ruler and calipers. Same records and photos as the homepage MeasuredFitNotes section; pages
// that cite them compare each box label with our chart (BenchEvidence.astro).
export interface BenchTest {
  id: 'bata' | 'nike' | 'adidas';
  shoe: string;
  image: string;
  alt: string;
  /** Sizes printed on the box label. EU is the label text because Adidas prints thirds. */
  label: { us?: number; uk: number; eu: string; euValue: number; cm?: number };
  insoleCm: number;
}

export const BENCH_MEASURED = 'September 2026';

export const BENCH_TESTS: Record<BenchTest['id'], BenchTest> = {
  bata: {
    id: 'bata',
    shoe: 'Bata India Oxford Derby',
    image: '/images/measured-bata.jpg',
    alt: 'Bata dress shoe insole measured at 27.2 centimeters with a measuring tape',
    label: { uk: 8, eu: '42', euValue: 42 },
    insoleCm: 27.2,
  },
  nike: {
    id: 'nike',
    shoe: 'Nike Air Max 90',
    image: '/images/measured-nike.jpg',
    alt: 'Nike Air sneaker insole measured at 27.4 centimeters with a steel ruler',
    label: { us: 9, uk: 8, eu: '42.5', euValue: 42.5, cm: 27 },
    insoleCm: 27.4,
  },
  adidas: {
    id: 'adidas',
    shoe: 'Adidas Stan Smith',
    image: '/images/measured-adidas.jpg',
    alt: 'Adidas Stan Smith insole measured at 27.3 centimeters with a metal ruler',
    label: { us: 9, uk: 8.5, eu: '42 2/3', euValue: 42 + 2 / 3, cm: 27 },
    insoleCm: 27.3,
  },
};
