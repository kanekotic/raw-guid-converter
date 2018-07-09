#!/bin/sh
set -e
yarn upgrade:local 
yarn test 
yarn deploy:patch
#git config --global user.email "travis@travis-ci.org"
#git config --global user.name "Travis CI"

#git remote add origin-master https://${GH_TOKEN}@github.com/kanekotic/raw-guid-converter.git > /dev/null 2>&1 
#git push --quiet --set-upstream origin-master master
#git push --quiet --set-upstream origin-master master --tags