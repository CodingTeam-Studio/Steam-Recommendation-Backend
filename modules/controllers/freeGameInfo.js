function freeGameInfo(req,res) {
  console.log("freeGameInfo.js is loading.\n");
  res.jsonp({
    'name':"flying bird",
    'price':50,
    })
}

module.exports = freeGameInfo;
