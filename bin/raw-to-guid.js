#! /usr/bin/env node

const program = require('commander'),
  index = require('../lib/index'),
  packageJson = require('../package.json')


program
  .version(packageJson.version)

program
  .command('fromRaw [rawGuids...]')
  .description('converts raw guid to string format')
  .action((guids) => 
  guids.forEach(guid => console.log(index.convertRaw(guid)))
)
  
  program.parse(process.argv)