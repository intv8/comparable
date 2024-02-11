/**
 * Test fixtures for the TComparable interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ComparisonResult, type TComparable } from '../../mod.ts';

export class Comparable<T> implements TComparable<T> {
  constructor(public value: T) {}

  compareTo(other: typeof this, reverse = false): ComparisonResult {
    const [a, b] = reverse
      ? [other.value, this.value]
      : [this.value, other.value];

    return a > b
      ? ComparisonResult.Greater
      : a < b
      ? ComparisonResult.Lesser
      : ComparisonResult.Equal;
  }
}

export class Comparable2 implements TComparable<{ id: number }> {
  constructor(public value: { id: number }) {}

  compareTo(other: typeof this, reverse = false): ComparisonResult {
    const [a, b] = reverse
      ? [other.value.id, this.value.id]
      : [this.value.id, other.value.id];

    return a > b
      ? ComparisonResult.Greater
      : a < b
      ? ComparisonResult.Lesser
      : ComparisonResult.Equal;
  }
}

export const comparableFixture1 = new Comparable(3);
export const comparableFixture2 = new Comparable(2);
export const comparableFixture3 = new Comparable(1);

export const comparableFixture4 = new Comparable2({ id: 3 });
export const comparableFixture5 = new Comparable2({ id: 2 });
export const comparableFixture6 = new Comparable2({ id: 1 });
