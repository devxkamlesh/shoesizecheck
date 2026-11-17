// Site releases, newest first. This list is the single source for release dates:
// the changelog badges, the footer's "Last reviewed" line, the editorial policy date and
// structured-data dateModified all read from it.
// To ship a new version: add an entry at the top (and its write-up in src/pages/changelog.astro).
export interface Release {
  version: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
}

export const RELEASES: Release[] = [
  { version: '2.2.0', date: '2026-11-18' },
  { version: '2.1.1', date: '2026-11-14' },
  { version: '2.1.0', date: '2026-10-31' },
  { version: '2.0.0', date: '2026-10-02' },
  { version: '1.0.0', date: '2026-09-15' },
];

export const LATEST_RELEASE = RELEASES[0];

/** "November 18, 2026" */
export function formatReleaseDate(iso: string): string {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function release(version: string): Release {
  const r = RELEASES.find(x => x.version === version);
  if (!r) throw new Error(`releases.ts: no release ${version}`);
  return r;
}
