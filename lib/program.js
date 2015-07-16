var Converter = require('csvtojson').core.Converter;
var ipaddresses = require('./ipaddresses');
var csv = require('csv');
var makedirp = require('mkdirp')
var generate = csv.generate;
var stringify = csv.stringify;
var options;

var fs = require('fs');

var Program = function(ctx) {
  options = ctx;
  createCSV();
};

module.exports = Program;

var count = 0;
var cursor = 0;

function createCSV(fileName) {
  if (!fileName) fileName = 'ipInfo.csv';

  var contents = ["ID", options.field, "city", "state", "zip"].join(",") + '\n';
  var path = process.cwd() + '/data/output/' 

  makedirp(path, writeFile) 

  function writeFile(err) {
    if(err) {
      console.error(err)
      process.exit(1)
    }

    fs.writeFile(path + fileName, contents, function(err) {
      if (err) throw err;
      generateFileContents(fileName);
    });
  }
}

function generateFileContents(fileName) {
  var fstream = fs.createReadStream(options.filePath);

  var csvConverter = new Converter({ constructResult: true });

  csvConverter.on('end_parsed', function(jsonObj) {
    generateIpAddressInfo(jsonObj);
  });

  fstream.pipe(csvConverter);
}

function generateIpAddressInfo(jsonData) {
  var handle = setInterval(function() {
    doSomething(jsonData);
  }, 500);

  function doSomething(jsonData) {
    if (jsonData.length === cursor) {
      clearInterval(handle);
      handle = 0;
    } else {
      getItem(jsonData[cursor++]);
    }
  }
}

function getItem(item) {
  ipaddresses.getIpAddressInfo(item[options.field], function(err, resp) {
    if (err) throw err;

    var infoObj = [ item.ID, item[options.field], resp.city, resp.regionName, resp.zip ];

    var ipInfoStr = infoObj.join(',') + '\n';

    fs.appendFile(process.cwd() + '/data/output/ipInfo.csv', ipInfoStr, function(err) {
      if (err) throw err;
      console.log('wrote entry to data/output/ipInfo.csv for', item.ID, 'at cursor', cursor);
    });
  });
}
