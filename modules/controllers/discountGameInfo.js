function discountGameInfo(req,res) {
  console.log("discountGameInfo.js is loading.\n");
  res.jsonp({
    'name':"flying bird",
    'price':50,
    })
}

module.exports = discountGameInfo;
