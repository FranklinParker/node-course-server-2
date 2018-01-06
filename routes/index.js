var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('get /');
    res.render('index', {title: 'Express', person: {firstName: 'joe', lastName: 'smith'}});
});

module.exports = router;
