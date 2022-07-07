import { capitalize } from "../functions/capitalize";

test('first char capitalized', () => {
  expect(capitalize('ab')).toBe('Ab');
});

test('non letter char', () => {
  expect(capitalize('1')).toBe('1');
});