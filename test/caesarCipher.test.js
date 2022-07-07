import { caesarCipher } from "./caesarCipher";

test('shift chars by 1', () => {
  expect(caesarCipher('abcd')).toBe('bcde');
});

test('wrapping from z, Z to a, A', () => {
  expect(caesarCipher('zZ')).toBe('aA');
});

test('works on uppercase letters', () => {
  expect(caesarCipher('AB')).toBe('BC');
});

test('works with punctuation', () => {
  expect(caesarCipher('ab.c#d')).toBe('bc.d#e');
});