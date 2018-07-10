#!/bin/sh

set -e

REPO= cut -d "/" -f 2 <<< ${TRAVIS_REPO_SLUG}

git clone https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git
cd ${REPO}
git remote
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

yarn upgrade --latest
git add .
git commit --allow-empty -m "updated dependencies"

yarn test
yarn deploy:patch

git push https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git master >/dev/null 2>&1
git push https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git master --tags >/dev/null 2>&1