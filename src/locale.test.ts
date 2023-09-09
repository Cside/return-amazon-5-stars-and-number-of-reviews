import fs from 'fs';

const localesDir = './public/_locales';
const defaultLocale = 'en';

const locales = fs.readdirSync(localesDir).filter((dir) => dir !== defaultLocale);

const getKeys = (locale: string) => {
  const text = fs.readFileSync(`${localesDir}/${locale}/messages.json`).toString();
  return Object.keys(JSON.parse(text));
};

const expectedKeys = getKeys('en');

test.each(locales)('%s', (locale) => {
  expect(getKeys(locale)).toEqual(expectedKeys);
});
