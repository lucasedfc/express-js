var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' ,
    name: 'Lucas',
    lastName: 'Heim',
    gender: 'Male'
  });
});

module.exports = router;
