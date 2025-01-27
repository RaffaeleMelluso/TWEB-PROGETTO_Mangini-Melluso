const express = require('express');
const router = express.Router();
const { getReviewsByFilmName, addReview } = require('../controllers/reviewController');

router.get('/film/:id/reviews', async (req, res) => {
    try {
        const filmName = req.params.id; // Nome del film
        console.log('Richiesta per recensioni del film:', filmName); // Debug

        // Ottieni le recensioni dal controller
        const reviews = await getReviewsByFilmName(filmName);

        if (!reviews || reviews.length === 0) {
            console.log('Nessuna recensione trovata per:', filmName); // Debug
            return res.status(404).json({ message: 'Film non trovato' });
        }

        // Restituisci i dati in formato JSON
        res.json(reviews);
    } catch (error) {
        console.error('Errore durante il recupero delle recensioni:', error.message);
        res.status(500).json({ message: 'Errore durante il recupero delle recensioni' });
    }
});

router.post('/film/:id/reviews', async (req, res) => {
    try {
        const filmName = req.params.movie_title
        const reviewData = req.body; // Dati della recensione
        const filmId = req.params.id; // ID del film
        // Aggiungi la recensione tramite il controller
        const newReview = await addReview(filmId, filmName, reviewData);

        res.status(201).json(newReview);
    } catch (error) {
        console.error('Errore durante l\'aggiunta della recensione:', error.message);
        res.status(500).json({ message: 'Errore durante l\'aggiunta della recensione' });
    }
});

module.exports = router;