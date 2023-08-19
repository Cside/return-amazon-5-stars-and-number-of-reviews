#!/usr/bin/env bash
set -eux

pnpm install
pnpm run build:firefox
rm -rf dist-firefox-*.zip source-code source-code-*.zip

version=$(jq -r .version <manifest.json | sed 's/\./-/g')

(
    cd dist-firefox
    zip -r -FS ../dist-firefox-"${version}".zip *
)

mkdir source-code
for file in $(git ls-files . | sed 's|/.*||' | uniq); do
    cp -r "$file" source-code/
done

zip -r source-code-"${version}".zip source-code

rm -rf dist-firefox source-code
