const Review = require('../models/Review');

async function getReviewsByFilmName(filmName) {
    try {
        console.log('Nome del film ricevuto:', filmName); // Debug
        const reviews = await Review.find({ movie_title: filmName });
        console.log('Recensioni trovate:', reviews); // Debug

        // Replace "nan" strings with an empty string or a specific placeholder
        const sanitizedReviews = reviews.map(review => {
            for (const key in review._doc) {
                if (review._doc[key] === 'nan') {
                    review._doc[key] = ''; // Replace with an empty string or a specific placeholder
                }
            }
            return review;
        });

        return sanitizedReviews;
    } catch (error) {
        console.error('Errore durante il recupero delle recensioni:', error.message);
        throw new Error('Errore durante il recupero delle recensioni');
    }
}

async function addReview(filmId, filmName, reviewData) {
    try {
        console.log('Dati della recensione ricevuti:', reviewData); // Debug
        const newReview = new Review({
            rotten_tomatoes_link: 'm/' + filmId,
            movie_title: filmName,
            ...reviewData
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