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

export const isValidRate = (rateStr: string) =>
  !!rateStr.match(/^[0-9](?:\.[0-9])?$/);

// match patterns: https://developer.chrome.com/docs/extensions/mv3/match_patterns/
export const matchPatternsToHostSuffix = (matchPatterns: string[]) => {
  const suffixes = [];
  for (const matchPattern of matchPatterns) {
    const matched = matchPattern.match(/^.+:\/\/(.+?)\//);
    if (!matched || matched[1] === undefined)
      throw new Error(`Invalid match pattern: ${matchPattern}`);

    suffixes.push(matched[1].replaceAll("*.", ""));
  }
  return [...new Set(suffixes)];
};
