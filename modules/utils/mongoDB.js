const MongoClient = require('mongodb').MongoClient;
const config = require('../constants/config');
const mongoConf = config.databaseOptions.mongodb;

//非本地开发
//const url = 'mongodb://' + mongoConf.user + ':' + mongoConf.password + '@' + mongoConf.host + ':' + mongoConf.port + '/' + mongoConf.database;

//本地开发
const url = 'mongodb://' + mongoConf.host + ':' + mongoConf.port + '/'


let connect = function (func) {
    MongoClient.connect(url, function (err, db) {
        module.exports.database = db;
        module.exports.collection = db.collection(mongoConf.database);
        func(err, db);
    });
};

module.exports.connect = connect;
