const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:filmId', async (req, res) => {
    try {
        const filmId = req.params.filmId;
        const response = await axios.get('http://localhost:8080/movies/details/' + filmId);
        if (!response.data || response.data.error) {
            res.status(404).render('error', { message: 'Film non trovato' });
            return;
        }
        res.render('moviePage', { movie: response.data });
    } catch (error) {
        console.error('Errore nel caricamento del film:', error.message);
        res.status(500).render('error', { message: 'Errore durante il caricamento del film.' });
    }
});

module.exports = router;