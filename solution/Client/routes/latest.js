const express = require('express');
const router = express.Router();

// Rotta per la pagina delle ultime uscite
router.get('/', function (req, res, next) {
    res.render('latest', { title: 'Ultime Uscite' });
});

module.exports = router;