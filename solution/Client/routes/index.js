var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

/* GET Ultime Uscite page. */
router.get('/latest', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/latest.html'));
});

/* GET Top 10 page. */
router.get('/top', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/top.html'));
});

/* GET Oscar page. */
router.get('/oscar', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/oscar.html'));
});
/* GET login page. */
router.get('/chat', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/chat.html'));
});

module.exports = router;
