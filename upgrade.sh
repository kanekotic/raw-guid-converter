#!/bin/sh

set -e

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git config remote.origin.url https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git master >/dev/null 2>&1

yarn upgrade --latest
git add .
git commit --allow-empty -m "updated dependencies"

yarn test
yarn --non-interactive deploy:patch 

git push --quiet master
git push --quiet master --tags