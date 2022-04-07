import { test, expect } from '@jest/globals';
import add from './add';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds 1 + 3 to not be 5', () => {
  expect(add(1, 3)).not.toBe(5);
});
