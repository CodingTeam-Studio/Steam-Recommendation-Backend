const controller = require('../controllers');
const multerMiddleware = require('../utils/multerMiddleware');

let router = require('express').Router();

router.get('/discount', controller.discountGameInfo);
router.get('/free', controller.freeGameInfo);

module.exports = router;
