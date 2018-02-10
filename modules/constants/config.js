const port = 6953;

const corOptions = {
    "origin": "http://127.0.0.1:6953",
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
        //本地开发我没设置user,所以这里的user和pw都用不上
        //user: 'root',
        //password: '123456',
        databaseFree: 'steamcn1',//存储免费游戏信息的数据库
        databaseDiscount: 'steam1',
        port: 27017
    }
};

module.exports = {
    port,
    corOptions,
    sessionOptions,
    databaseOptions
};
