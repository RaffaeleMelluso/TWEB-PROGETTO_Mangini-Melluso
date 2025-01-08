// routes/oscar.js
const express = require('express');
const router = express.Router();

// Rotta per la pagina degli oscar
router.get('/latest', function (req, res, next) {
    res.render('latest');
});

module.exports = router;