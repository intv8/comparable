/**
 * This file exports interfaces used by the the intv8 compare package
 * and its peer and dependant packages.
 *
 * For type aliases, see ./types.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { Comparer } from './types.ts';

import type { ComparisonResult } from './enums.ts';

/** Provides a mechanism to compare the current class instance to another instance. */
export interface TComparable<T> {
  /** Compare the current instance to an `other` instance, optionally reversing the equality check. */
  compareTo(other: ThisType<this>, reverse: boolean): ComparisonResult;
}

/** Provides a mechanism to compare two values of type `T`. */
export interface TComparer<T> {
  /** Compare two values of type `T`, returning a {@link ComparisonResult}. */
  compare(a: T, b: T, reverse: boolean): ComparisonResult;
}

/** Provides a mechanism to sort an instances properties or indices. */
export interface TSortable<T> extends Iterable<T> {
  /** Sort or reverse sort properties or indices using a {@link Comparer}. */
  sort(comparer: Comparer<T>, reverse: boolean): void;
}
