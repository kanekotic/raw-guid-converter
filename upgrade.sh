#!/bin/sh

yarn upgrade:local || { echo 'upgrade failed' ; exit 1; }
yarn test || { echo 'test failed' ; exit 1; }
yarn deploy:patch || { echo 'deploy failed' ; exit 1; }

#git config --global user.email "travis@travis-ci.org"
#git config --global user.name "Travis CI"

#git remote add origin-master https://${GH_TOKEN}@github.com/kanekotic/raw-guid-converter.git > /dev/null 2>&1 
#git push --quiet --set-upstream origin-master master
#git push --quiet --set-upstream origin-master master --tags