const express = require('express');
const router = express.Router();
const { getReviewsByFilmName, addReview } = require('../controllers/reviewController');

/***
 * Route to get all reviews for a specific film.
 * Calls: getReviewsByFilmName function in controllers/reviewController.js
 * @route GET /film/:id/reviews
 */
router.get('/film/:id/reviews', async (req, res) => {
    try {
        const filmName = req.params.id; // Film name
        console.log('Request for reviews of film:', filmName); // Debug

        const reviews = await getReviewsByFilmName(filmName);

        if (!reviews || reviews.length === 0) {
            console.log('No reviews found for:', filmName); // Debug
            return res.status(404).json({ message: 'Film not found' });
        }

        res.json(reviews);
    } catch (error) {
        console.error('Error retrieving reviews:', error.message);
        res.status(500).json({ message: 'Error retrieving reviews' });
    }
});

/***
 * Route to add a new review for a specific film.
 * Calls: addReview function in controllers/reviewController.js
 * @route POST /film/:id/reviews
 */
router.post('/film/:id/reviews', async (req, res) => {
    try {
        /**
         * req.params.id is the formatted name of the film, retrieved from the URL.
         * req.body.movie_title is a redundant field, just to be sure the film name is passed.
         * req.body contains all the review data.
         */
        const filmName = req.body.movie_title;
        const reviewData = req.body; // Review data
        const filmId = req.params.id; // Film ID

        /**
         * calling the addReview in controllers/reviewController.js to add the review.
        */

        const newReview = await addReview(filmId, filmName, reviewData);

        res.status(201).json(newReview);
    } catch (error) {
        console.error('Error adding review:', error.message);
        res.status(500).json({ message: 'Error adding review' });
    }
});

module.exports = router;