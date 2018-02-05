const controller = require('../controllers');
const multerMiddleware = require('../utils/multerMiddleware');

let router = require('express').Router();

router.get('/', controller.helloWorld);

module.exports = router;
