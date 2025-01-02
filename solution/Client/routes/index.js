var express = require('express');
var path = require('path'); // Importa il modulo path
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

/* GET search page. */
router.get('/search', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/search.html'));
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

module.exports = router;