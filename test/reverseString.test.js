import { reverseString } from "../functions/reverseString";

test('reversed string', () => {
  expect(reverseString('ab')).toBe('ba');
});