#!/usr/bin/env bash
set -eu

if git grep -rE "console\.(log|dir)|FIXME" -- ":!$0"; then
  exit 1
else
  echo "All good"
fi
