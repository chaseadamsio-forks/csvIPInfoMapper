#!/usr/bin/env node

var commander = require('commander');
var pkgvrsn = require('../package.json').version;
var Program = require('../lib/program');

commander
  .version(pkgvrsn)
  .option('-k, --field [field]', 'name of ip address field')
  .option('-f, --file [fileName]', 'CSV file containing ip addresses')
  .parse(process.argv);

if (!commander.file) {
  console.error('Please pass in a filename containing ip address -f <fileName>')
  process.exit(1)
}

if(!commander.field) {
  console.error('Please provide a fieldname -k <fieldname>')
  process.exit(1)
}

new Program({
  filePath: process.cwd() + '/' + commander.file,
  field: commander.field
});
