import { isValidRate, matchPatternsToHostSuffix } from './utils';

/*
describe(rateToClassNameSuffix.name + '()', () => {
  test.each([
    { input: 0.0, expected: '0' },
    { input: 0.1, expected: '0' },
    { input: 0.2, expected: '0' },
    { input: 0.3, expected: '0-5' },
    { input: 0.4, expected: '0-5' },
    { input: 0.5, expected: '0-5' },
    { input: 0.6, expected: '0-5' },
    { input: 0.7, expected: '0-5' },
    { input: 0.8, expected: '1' },
    { input: 0.9, expected: '1' },
    { input: 1.0, expected: '1' },
    { input: 4.0, expected: '4' },
    { input: 4.1, expected: '4' },
    { input: 4.2, expected: '4' },
    { input: 4.3, expected: '4-5' },
    { input: 4.4, expected: '4-5' },
    { input: 4.5, expected: '4-5' },
    { input: 4.6, expected: '4-5' },
    { input: 4.7, expected: '4-5' },
    { input: 4.8, expected: '5' },
    { input: 4.9, expected: '5' },
    { input: 5.0, expected: '5' },
  ])('$input -> $expected', ({ input, expected }) =>
    expect(rateToClassNameSuffix(input)).toBe(expected),
  );
});
*/

describe.only(isValidRate.name + '()', () => {
  test.each([
    { input: '0', expected: true },
    { input: '0.1', expected: true },
    { input: '1', expected: true },
    { input: '1.1', expected: true },
    { input: '-0.1', expected: false },
    { input: '5.1', expected: false },
    { input: '0.12', expected: false },
    { input: '1,1', expected: false },
    { input: '', expected: false },
    { input: '.', expected: false },
    { input: '1.1.', expected: false },
    { input: '1.1.1', expected: false },
  ])('$input -> $expected', ({ input, expected }) =>
    expect(isValidRate(input)).toBe(expected),
  );
});

describe(matchPatternsToHostSuffix.name + '()', () => {
  test.each([
    {
      name: 'glob',
      input: ['*://*.amazon.co.uk/*', '*://*.amazon.de/*', '*://*.amazon.fr/*'],
      expected: ['amazon.co.uk', 'amazon.de', 'amazon.fr'],
    },
    {
      name: 'uniq',
      input: [
        'https://b.hatena.ne.jp/',
        'https://b.hatena.ne.jp/?*',
        'https://b.hatena.ne.jp/hotentry*',
        'https://b.hatena.ne.jp/entrylist*',
      ],
      expected: ['b.hatena.ne.jp'],
    },
    {
      name: 'long path',
      input: ['https://b.hatena.ne.jp/foo/bar'],
      expected: ['b.hatena.ne.jp'],
    },
  ])('$name', ({ input, expected }) =>
    expect(matchPatternsToHostSuffix(input)).toEqual(expected),
  );
});
