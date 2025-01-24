const express = require('express');
const router = express.Router();
const axios = require('axios');

// Rotta per la pagina di ricerca
router.get('/', function (req, res, next) {
    res.render('search', { title: 'Search Page' });
});

// Endpoint per ottenere i dati filtrati dei film
router.get('/searchtoolpage', async function (req, res) {
    const name = req.query.name;
    const genre = req.query.category;

    try {
        const response = await axios.get('http://localhost:8080/movies/search', {
            params: {name: name, genre: genre }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Errore durante la richiesta al server Spring Boot:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        }
        res.status(500).json({ error: 'Errore nel caricamento dei dati' });
    }
});

module.exports = router;