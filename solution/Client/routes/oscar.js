const express = require('express');
const router = express.Router();

// Rotta per la pagina degli oscar
router.get('/', function (req, res, next) {
    res.render('oscar', { title: 'Oscar Awards' });
});

module.exports = router;