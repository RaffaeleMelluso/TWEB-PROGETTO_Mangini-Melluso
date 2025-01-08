// routes/latest.js
const express = require('express');
const router = express.Router();

// Rotta per la pagina delle ultime uscite
router.get('/latest', function (req, res, next) {
    res.render('latest');
});

module.exports = router;