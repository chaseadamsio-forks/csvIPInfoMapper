var request = require('request');

const _IpAddressApiUrl = "http://ip-api.com/json/";

// getIpAddressInfo("70.180.245.229");
function getIpAddressInfo(ipAddress, done) {
  var url = _IpAddressApiUrl + ipAddress;

  request.get(url, function(err, resp) {
    if (err) throw Error(err);

    if (err) throw err;

    done(null, JSON.parse(resp.body));
  });
}

module.exports = {
  getIpAddressInfo: getIpAddressInfo
};
