function freeGameInfo(req,res) {
  console.log("freeGameInfo.js is loading.\n");
  var freeGameInfoList = [
    {
      'name': "flying bird",
      'price': 50,
    },
    {
      'name': "biubiubiu",
      'price':100,
    }
  ]

  res.jsonp(freeGameInfoList);

}

module.exports = freeGameInfo;
