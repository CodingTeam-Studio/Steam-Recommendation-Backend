function discountGameInfo(req,res) {
  console.log("discountGameInfo.js is loading.\n");
  var discountGameInfoList = [
    {
      'name': "flying bird",
      'price': 50,
    },
    {
      'name': "biubiubiu",
      'price':100,
    }
  ]

  res.jsonp(discountGameInfoList);
}

module.exports = discountGameInfo;
