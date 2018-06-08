#! /usr/bin/env node

const program = require('commander'),
  index = require('../lib/index'),
  packageJson = require('../package.json')


program
  .version(packageJson.version)

program
  .command('fromRaw [guid...]')
  .description('converts raw guid to string format')
  .action((guids) => 
  guids.forEach(guid => console.log(index.convertRaw(guid)))
)

program
  .command('fromString [guid...]')
  .description('converts string guid to raw format')
  .action((guids) => 
  guids.forEach(guid => console.log(index.convertString(guid)))
)
  
  program.parse(process.argv)