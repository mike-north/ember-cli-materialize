#!/bin/bash
echo "Attempting to generate pages"
if [[ "${TRAVIS_PULL_REQUEST}" = "false" && "${TRAVIS_BRANCH}" == 'master' ]]; then
  ember github-pages:commit --message "New release" --branch "${GH_DEST_BRANCH}"
  git push deploy gh-pages 2>&1 >/dev/null
else
  echo "Not a main build -- no deploy"
fi