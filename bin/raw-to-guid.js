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
  guids.forEach(guid => {
    try {
      console.log(index.convertRaw(guid))
    } catch (_) {
      console.log(`${guid}: is not a valid raw format for a guid`)
    }
  })
)

program
  .command('fromString [guid...]')
  .description('converts string guid to raw format')
  .action((guids) => 
    guids.forEach(guid => {
      try {
        console.log(index.convertString(guid))
      } catch (_) {
        console.log(`${guid}: is not a valid string format for a guid`)
      }
    }
  ))
  
  program.parse(process.argv)