var commander = require('commander');
var pkgvrsn = require('./package.json').version;
var Program = require('./lib/program');

commander
  .version(pkgvrsn)
  .option('-f, --file [fileName]', 'CSV file containing ip addresses')
  .parse(process.argv);

if (!commander.file) {
  throw Error('Please pass in a filename containing ip address');
}

new Program({
  filePath: process.cwd() + '/' + commander.file
});
