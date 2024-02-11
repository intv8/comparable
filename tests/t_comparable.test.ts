/**
 * Tests TSortable interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import {
  comparableFixture1,
  comparableFixture2,
  comparableFixture3,
  comparableFixture4,
  comparableFixture5,
  comparableFixture6,
} from './fixtures/t_comparable.fixtures.ts';

describe('TComparable', () => {
  it('should compare using a Comparable', () => {
    assertEquals(comparableFixture1.compareTo(comparableFixture2), 1);
    assertEquals(comparableFixture1.compareTo(comparableFixture3), 1);
    assertEquals(comparableFixture2.compareTo(comparableFixture1), -1);
    assertEquals(comparableFixture2.compareTo(comparableFixture3), 1);
    assertEquals(comparableFixture3.compareTo(comparableFixture1), -1);
    assertEquals(comparableFixture3.compareTo(comparableFixture2), -1);
    assertEquals(comparableFixture1.compareTo(comparableFixture1), 0);
    assertEquals(comparableFixture2.compareTo(comparableFixture2), 0);
    assertEquals(comparableFixture3.compareTo(comparableFixture3), 0);
  });

  it('should compare in reverse using a Comparable', () => {
    assertEquals(comparableFixture1.compareTo(comparableFixture2, true), -1);
    assertEquals(comparableFixture1.compareTo(comparableFixture3, true), -1);
    assertEquals(comparableFixture2.compareTo(comparableFixture1, true), 1);
    assertEquals(comparableFixture2.compareTo(comparableFixture3, true), -1);
    assertEquals(comparableFixture3.compareTo(comparableFixture1, true), 1);
    assertEquals(comparableFixture3.compareTo(comparableFixture2, true), 1);
    assertEquals(comparableFixture1.compareTo(comparableFixture1, true), 0);
    assertEquals(comparableFixture2.compareTo(comparableFixture2, true), 0);
    assertEquals(comparableFixture3.compareTo(comparableFixture3, true), 0);
  });

  it('should compare using a TComparable', () => {
    assertEquals(comparableFixture4.compareTo(comparableFixture5), 1);
    assertEquals(comparableFixture4.compareTo(comparableFixture6), 1);
    assertEquals(comparableFixture5.compareTo(comparableFixture4), -1);
    assertEquals(comparableFixture5.compareTo(comparableFixture6), 1);
    assertEquals(comparableFixture6.compareTo(comparableFixture4), -1);
    assertEquals(comparableFixture6.compareTo(comparableFixture5), -1);
    assertEquals(comparableFixture4.compareTo(comparableFixture4), 0);
    assertEquals(comparableFixture5.compareTo(comparableFixture5), 0);
    assertEquals(comparableFixture6.compareTo(comparableFixture6), 0);
  });

  it('should compare in reverse using a TComparable', () => {
    assertEquals(comparableFixture4.compareTo(comparableFixture5, true), -1);
    assertEquals(comparableFixture4.compareTo(comparableFixture6, true), -1);
    assertEquals(comparableFixture5.compareTo(comparableFixture4, true), 1);
    assertEquals(comparableFixture5.compareTo(comparableFixture6, true), -1);
    assertEquals(comparableFixture6.compareTo(comparableFixture4, true), 1);
    assertEquals(comparableFixture6.compareTo(comparableFixture5, true), 1);
    assertEquals(comparableFixture4.compareTo(comparableFixture4, true), 0);
    assertEquals(comparableFixture5.compareTo(comparableFixture5, true), 0);
    assertEquals(comparableFixture6.compareTo(comparableFixture6, true), 0);
  });
});
