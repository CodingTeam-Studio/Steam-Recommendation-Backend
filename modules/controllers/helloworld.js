function helloWorld(req, res) {
    res.jsonp({'message': 'helloWorld'});
}

module.exports = helloWorld;
