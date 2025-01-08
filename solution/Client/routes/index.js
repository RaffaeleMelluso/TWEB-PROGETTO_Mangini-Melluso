var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

/* GET Ultime Uscite page.*/
/*
router.get('/latest', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/latest.html'));
});*/

/* GET Top 10 page. */
/*
router.get('/top', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/top.html'));
});*/

/* GET Oscar page. */
/*
router.get('/oscar', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/oscar.html'));
});
 */

/* GET Chat page. */
/*
router.get('/chat', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/chat.html'));
});
*/
/* GET Search page. */
/*
router.get('/search', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/search.html'));
});
*/
module.exports = router;
