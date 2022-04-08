import { test, expect } from '@jest/globals';
import subtract from './subtract';

test('subtract 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});
