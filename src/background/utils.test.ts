import { matchPatternsToHostSuffix } from './utils';

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
