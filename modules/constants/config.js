const port = 4000;

const corOptions = {
    "origin": "http://localhost:8000",
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
        user: 'root',
        password: '123456',
        database: 'example',
        port: 27017
    }
};

module.exports = {
    port,
    corOptions,
    sessionOptions,
    databaseOptions
};
