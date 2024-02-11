/**
 * Tests TSortable interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import {
  comparer1,
  comparer2,
  sortableFixture1,
  sortableFixture2,
} from './fixtures/t_sortable.fixtures.ts';

describe('TSortable', () => {
  it('should sort using a ComparerFn', () => {
    sortableFixture1.sort(comparer1);
    assertEquals([...sortableFixture1], [1, 2, 3]);
  });

  it('should sort using a TComparer', () => {
    sortableFixture2.sort(comparer2);
    assertEquals([...sortableFixture2].map((x) => x.id), [1, 2, 3]);
  });

  it('should sort in reverse using a ComparerFn', () => {
    sortableFixture1.sort(comparer1, true);
    assertEquals([...sortableFixture1], [3, 2, 1]);
  });

  it('should sort in reverse using a TComparer', () => {
    sortableFixture2.sort(comparer2, true);
    assertEquals([...sortableFixture2].map((x) => x.id), [3, 2, 1]);
  });
});
