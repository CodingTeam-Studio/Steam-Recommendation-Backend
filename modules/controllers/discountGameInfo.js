const discountGameInfoList = require('../../app')
function discountGameInfo(req,res) {
  console.log("discountGameInfo.js is loading.\n");

  res.jsonp(discountGameInfoList);
}

module.exports = discountGameInfo;
