/**
 * Test fixtures for the TSortable interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { type Comparer, ComparisonResult, type TSortable } from '../../mod.ts';

class Sortable<T> implements TSortable<T> {
  constructor(public values: T[]) {}

  [Symbol.iterator](): Iterator<T> {
    return this.values[Symbol.iterator]();
  }

  sort(comparer: Comparer<T>, reverse = false): void {
    this.values = this.values.sort((a, b) => {
      if (typeof comparer === 'function') return comparer(a, b, reverse);

      return comparer.compare(a, b, reverse);
    });
  }
}

export const sortableFixture1 = new Sortable([3, 2, 1]);
export const comparer1 = (a: number, b: number, reverse = false) => {
  if (reverse) [a, b] = [b, a];

  return a > b
    ? ComparisonResult.Greater
    : a < b
    ? ComparisonResult.Lesser
    : ComparisonResult.Equal;
};

export const sortableFixture2 = new Sortable([{ id: 3 }, { id: 2 }, { id: 1 }]);
export const comparer2 = {
  compare(
    a: { id: number },
    b: { id: number },
    reverse = false,
  ): ComparisonResult {
    if (reverse) [a, b] = [b, a];

    return a.id > b.id
      ? ComparisonResult.Greater
      : a.id < b.id
      ? ComparisonResult.Lesser
      : ComparisonResult.Equal;
  },
};
