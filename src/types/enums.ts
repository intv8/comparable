/**
 * This file exports enums used by the the intv8 comparable package
 * and its peer and dependant packages.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/** Specifies the comparison result of two values. */
export enum ComparisonResult {
  /** First value is less than the second value. */
  Lesser = -1,

  /** Two values are equal. */
  Equal = 0,

  /** First value is greater than the second value. */
  Greater = 1,
}
