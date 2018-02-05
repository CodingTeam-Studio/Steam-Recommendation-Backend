const MongoClient = require('mongodb').MongoClient;
const config = require('../constants/config');

const mongoConf = config.databaseOptions.mongodb;
const url = 'mongodb://' + mongoConf.user + ':' + mongoConf.password + '@' + mongoConf.host + ':' + mongoConf.port + '/' + mongoConf.database;

let connect = function (func) {
    MongoClient.connect(url, function (err, db) {
        module.exports.database = db;
        module.exports.collection = db.collection(mongoConf.database);
        func(err, db);
    });
};

module.exports.connect = connect;
