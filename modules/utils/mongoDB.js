const MongoClient = require('mongodb').MongoClient;
const config = require('../constants/config');
const mongoConf = config.databaseOptions.mongodb;

//非本地开发
//const url = 'mongodb://' + mongoConf.user + ':' + mongoConf.password + '@' + mongoConf.host + ':' + mongoConf.port + '/' + mongoConf.database;

//本地开发
const urlFree = 'mongodb://' + mongoConf.host + ':' + mongoConf.port + '/' + mongoConf.databaseFree

const urlDiscount = 'mongodb://' + mongoConf.host + ':' + mongoConf.port + '/' + mongoConf.databaseDiscount


let connect = function (funcFree,funcDiscount) {
    MongoClient.connect(urlFree, function (err, dbFree) {
        module.exports.databaseFree = dbFree;
        module.exports.collectionFree = dbFree.collection(mongoConf.databaseFree);
        //console.log(db);
        funcFree(err, dbFree);
    });
    MongoClient.connect(urlDiscount, function (err, dbDiscount) {
        module.exports.databaseDiscount = dbDiscount;
        module.exports.collectionDiscount = dbDiscount.collection(mongoConf.databaseDiscount);
        //console.log(db);
        funcDiscount(err, dbDiscount);
    });
};

let select = function (db,database, callback) {
  var collections = db.collection(database);
  collections.find({}).toArray(function(err,result){
    if(err){
      console.log("Error:" + err);
      return;
    }
  //  console.log(result);
    callback(result);
  });
};

module.exports.connect = connect;
module.exports.select = select;
