const express = require('express');
const router = express.Router();
const axios = require('axios');

// Rotta per la pagina degli oscar
router.get('/', function (req, res, next) {
    res.render('oscar', { title: 'Oscar Awards' });
});

// Endpoint per ottenere i dati filtrati degli Oscar
router.get('/searchtool', async function (req, res) {
    const year = req.query.year;
    const name = req.query.name;

    try {
        const response = await axios.get('http://localhost:8080/oscar/search', {
            params: { year: year, name: name }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Errore durante la richiesta al server Spring Boot:', error.message);
        res.status(500).json({ error: 'Errore nel caricamento dei dati' });
    }
});

module.exports = router;