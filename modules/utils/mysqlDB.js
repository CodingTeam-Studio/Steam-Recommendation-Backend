const mysql = require('mysql');
const config = require('../constants/config');

let pool = mysql.createPool(config.databaseOptions.mysql);

function query(sql, options, callback) {
    pool.query(sql, options, (err, results, fields) => {
        if (typeof callback === 'function') {
            callback(err, results, fields);
        }
    });
}

module.exports.query = query;
