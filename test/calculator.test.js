import { calculator } from "../functions/calculator";

test('add 2 numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract 2 numbers', () => {
  expect(calculator.subtract(1, 4)).toBe(-3);
});

test('divide 2 numbers', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('multiply 2 numbers', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
