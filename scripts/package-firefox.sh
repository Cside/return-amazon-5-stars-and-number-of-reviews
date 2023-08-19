#!/usr/bin/env bash
set -eux

pnpm install
pnpm run build:firefox
npx rimraf dist-firefox-*.zip source-code source-code-*.zip

version=$(jq -r .version <package.json | sed 's/\./-/g')

(
    cd dist-firefox
    zip -r -FS ../dist-firefox-"${version}".zip *
)

mkdir source-code
for file in $(git ls-files . | sed 's|/.*||' | uniq); do
    cp -r "$file" source-code/
done

zip -r source-code-"${version}".zip source-code

npx rimraf dist-firefox source-code
