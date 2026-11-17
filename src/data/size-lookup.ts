// Lookups for writing sizes into page text from the shared rows instead of typing numbers.
// A lookup that matches no row throws, so a data change that orphans a sentence fails the build
// instead of publishing a wrong number.
import { MEN_SIZE_ROWS, WOMEN_SIZE_ROWS } from './shoe-sizes';
import type { SizeRow } from './shoe-sizes';

export type AdultGender = 'men' | 'women';
type Key = 'us' | 'uk' | 'india' | 'eu' | 'cm';

const ROWS: Record<AdultGender, SizeRow[]> = { men: MEN_SIZE_ROWS, women: WOMEN_SIZE_ROWS };

/** The row where `key` equals `value`, e.g. size('men', 'us', 9). */
export function size(gender: AdultGender, key: Key, value: number): SizeRow {
  const row = ROWS[gender].find(r => Number(r[key]) === value);
  if (!row) throw new Error(`size-lookup: no ${gender} row with ${key} = ${value}`);
  return row;
}

/** Centimetres with one decimal, as the charts print them ("27.0"). */
export const cm = (row: SizeRow) => row.cm.toFixed(1);
