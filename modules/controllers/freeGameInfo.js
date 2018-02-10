const mongoDB = require('../utils/mongoDB');
const freeGameInfoList = require('../../app')

function freeGameInfo(req,res) {
  console.log("freeGameInfo.js is loading.\n");
  res.jsonp(freeGameInfoList);
  console.log(freeGameInfoList);
}

module.exports = freeGameInfo;
