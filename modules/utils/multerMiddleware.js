const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'images/');
    },
    filename: function (req, file, callback) {
        // 这里可添加文件命名的处理
        callback(null, file.originalname);
    }
});

let multerMiddleware = multer({ storage: storage });

module.exports = multerMiddleware;
