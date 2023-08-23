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
