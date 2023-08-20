#!/usr/bin/env bash
set -eux

pnpm install
pnpm run build:chrome
rm -f dist-chrome-*.zip

version=$(jq -r .version <manifest.json | sed 's/\./-/g')

zip -r dist-chrome-"$version".zip dist
