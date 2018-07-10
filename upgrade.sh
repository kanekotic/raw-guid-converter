#!/bin/sh

set -e

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git remote add origin-master https://${GH_TOKEN}@github.com/MVSE-outreach/resources.git > /dev/null 2>&1

git checkout -b master origin-master/master

yarn upgrade --latest
git add .
git commit --allow-empty -m "updated dependencies"

yarn test
# yarn deploy:patch 


git push --quiet master
git push --quiet master --tags