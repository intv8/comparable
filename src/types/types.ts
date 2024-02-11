/**
 * This file exports type aliases used by the the intv8 compare package
 * and its peer and dependant packages.
 *
 * For type aliases, see ./interfaces.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import type { ComparisonResult } from './enums.ts';
import type { TComparer } from './interfaces.ts';

/** A function that compares two values and returns a {@link ComparisonResult}. */
export type ComparerFn<T> = (a: T, b: T, reverse: boolean) => ComparisonResult;

/** A {@link TComparer} or {@link ComparerFn} to compare two values. */
export type Comparer<T> = TComparer<T> | ComparerFn<T>;
