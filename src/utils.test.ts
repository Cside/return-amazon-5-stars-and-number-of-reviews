import { rateToClassSuffix } from "./utils";

test.each([
  { input: 0.0, expected: "0" },
  { input: 0.1, expected: "0" },
  { input: 0.2, expected: "0" },
  { input: 0.3, expected: "0-5" },
  { input: 0.4, expected: "0-5" },
  { input: 0.5, expected: "0-5" },
  { input: 0.6, expected: "0-5" },
  { input: 0.7, expected: "0-5" },
  { input: 0.8, expected: "1" },
  { input: 0.9, expected: "1" },
  { input: 1.0, expected: "1" },
  { input: 4.0, expected: "4" },
  { input: 4.1, expected: "4" },
  { input: 4.2, expected: "4" },
  { input: 4.3, expected: "4-5" },
  { input: 4.4, expected: "4-5" },
  { input: 4.5, expected: "4-5" },
  { input: 4.6, expected: "4-5" },
  { input: 4.7, expected: "4-5" },
  { input: 4.8, expected: "5" },
  { input: 4.9, expected: "5" },
  { input: 5.0, expected: "5" },
])("$input -> $expected", ({ input, expected }) => {
  expect(rateToClassSuffix(input)).toBe(expected);
});
