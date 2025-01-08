// routes/top.js
const express = require('express');
const router = express.Router();

// Rotta per la pagina della top 10
router.get('/top', function (req, res, next) {
    res.render('top');
});

module.exports = router;