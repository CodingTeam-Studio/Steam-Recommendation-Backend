const port = 9973;

const corOptions = {
    "origin": "http://localhost:9973",
    "methods": "GET, POST",
    "credentials": true
};

const sessionOptions = {
    resave: true,
    saveUninitialized: true,
    secret: 'ssshhhhh',
    cookie: {
        maxAge: 60 * 60 * 24 * 7 * 30,
        secure: false
    }
};

const databaseOptions = {
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database: 'example',
        port: 3306
    },
    mongodb: {
        host: '127.0.0.1',
        //本地开发我没设置user
        user: 'root',
        password: '123456',
        database: 'steamcn1',
        port: 27017
    }
};

module.exports = {
    port,
    corOptions,
    sessionOptions,
    databaseOptions
};
