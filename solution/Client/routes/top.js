const express = require('express');
const router = express.Router();
const axios = require('axios');

// Endpoint per ottenere i migliori film
router.get('/data', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8080/movies/top5bygenre');
        res.json(response.data);
    } catch (error) {
        console.error('Errore durante la richiesta al server Spring Boot:', error.message);
        res.status(500).json({ error: 'Errore nel caricamento dei dati' });
    }
});

// Rotta principale per la pagina HTML
router.get('/', (req, res) => {
    res.render('top', { title: 'Top Movies' });
});

module.exports = router;
