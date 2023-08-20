#!/usr/bin/env bash
set -eux

rm -rf dist-firefox
npx vite build --outDir dist-firefox

cat dist-firefox/manifest.json | node ./scripts/manifest-firefox.js >manifest_firefox.json
mv manifest_firefox.json dist-firefox/manifest.json
