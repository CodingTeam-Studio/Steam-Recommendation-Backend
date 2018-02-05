#!/usr/bin/env node

const bodyParser = require('body-parser');
const config = require('./modules/constants/config');
const cookieParser = require('cookie-parser');
const cor = require('cors');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const mongoDB = require('./modules/utils/mongoDB');
const router = require('./modules/routes');
const session = require('express-session');

let app = express();

// 使用 CORS
app.use(cor(config.corOptions));

// 使用 express-session
app.use(session(config.sessionOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(logger('dev'));

app.use('/api', router);

mongoDB.connect(function (err, db) {
    if (err) {
        console.log('MongoDB  error:' + err + '\n process exit!');
        process.exit();
    }
    else {
        console.log('Server start!');
        http.createServer(app).listen(config.port);
    }
});
