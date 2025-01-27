const Review = require('../models/Review');

async function getReviewsByFilmName(filmName) {
    try {
        console.log('Nome del film ricevuto:', filmName); // Debug
        // Query per trovare le recensioni nel database
        const reviews = await Review.find({ movie_title: filmName });
        console.log('Recensioni trovate:', reviews); // Debug
        return reviews;
    } catch (error) {
        console.error('Errore durante il recupero delle recensioni:', error.message);
        throw new Error('Errore durante il recupero delle recensioni');
    }
}

async function addReview(filmName, reviewData) {
    try {
        const newReview = new Review({
            ...reviewData,
            movie_title: filmName
        });

        await newReview.save();
        console.log('Nuova recensione aggiunta:', newReview); // Debug
        return newReview;
    } catch (error) {
        console.error('Errore durante l\'aggiunta della recensione:', error.message);
        throw new Error('Errore durante l\'aggiunta della recensione');
    }
}

module.exports = { getReviewsByFilmName, addReview };