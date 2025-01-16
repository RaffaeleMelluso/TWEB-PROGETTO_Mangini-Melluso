const express = require('express');
const router = express.Router();

// Rotta per la pagina della top 10
router.get('/', function (req, res, next) {
    res.render('top', { title: 'Top Movies' });
});

module.exports = router;