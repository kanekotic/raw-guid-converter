#! /usr/bin/env node

const program = require('commander'),
  index = require('../lib/index'),
  packageJson = require('../package.json')


program
  .version(packageJson.version)

program
  .command('fromRaw <rawGuid>')
  .description('converts raw guid to string format')
  .action((rawGuid) => console.log(index.convertRaw(rawGuid)))
  
  program.parse(process.argv)