import _querySelectorAllWithHas from './hasPolyfill';

export const rateToClassNameSuffix = (rate: number) => {
  const tenfold = rate * 10;
  const ten = Math.floor(tenfold / 10);
  const one = tenfold % 10;
  if (one <= 2) {
    return `${ten}`;
  } else if (one <= 7) {
    return `${ten}-5`;
  } else {
    return `${ten + 1}`;
  }
};

export const isValidRate = (rateStr: string) => {
  if (rateStr === '') return false;

  const number = Number(rateStr);
  return (
    !Number.isNaN(number) &&
    0 <= number &&
    number <= 5 &&
    (number * 10) % 1 === 0
  );
};

// match patterns: https://developer.chrome.com/docs/extensions/mv3/match_patterns/
export const matchPatternsToHostSuffix = (matchPatterns: string[]) => {
  const suffixes = [];
  for (const matchPattern of matchPatterns) {
    const matched = matchPattern.match(/^.+:\/\/(.+?)\//);
    if (!matched || matched[1] === undefined)
      throw new Error(`Invalid match pattern: ${matchPattern}`);

    suffixes.push(matched[1].replaceAll('*.', ''));
  }
  return [...new Set(suffixes)];
};

export const querySelectorAllWithHas = (
  ...params: Parameters<typeof _querySelectorAllWithHas>
) => _querySelectorAllWithHas(...params) as Element[];

export const querySelectorWithHas = (
  ...params: Parameters<typeof _querySelectorAllWithHas>
) => querySelectorAllWithHas(...params)[0] ?? null;

export const querySelectorAllWithRegexp = (
  tagName: string,
  attrNameRegExp: [string, RegExp],
  dom?: Element,
) => {
  const [attrName, attrRegExp] = attrNameRegExp;
  return [
    ...(dom ?? document).querySelectorAll(`${tagName}[${attrName}]`),
  ].filter((element) => element.getAttribute(attrName)?.match(attrRegExp));
};

export const querySelectorWithRegexp = (
  ...params: Parameters<typeof querySelectorAllWithRegexp>
) => querySelectorAllWithRegexp(...params)[0] ?? null;
