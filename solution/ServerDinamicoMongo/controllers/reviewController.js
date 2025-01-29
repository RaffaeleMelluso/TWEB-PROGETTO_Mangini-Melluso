const Review = require('../models/Review');

/***
 * Function to get reviews by film name.
 * Called by: GET /film/:id/reviews route in routes/reviews.js
 * @param {string} filmName - The name of the film to get reviews for.
 * @returns {Array} - An array of reviews for the specified film.
 */
async function getReviewsByFilmName(filmName) {
    try {
        console.log('Received film name:', filmName); // Debug
        const reviews = await Review.find({ movie_title: filmName });
        console.log('Found reviews:', reviews); // Debug

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
        console.error('Error retrieving reviews:', error.message);
        throw new Error('Error retrieving reviews');
    }
}

/***
 * Function to add a new review.
 * Called by: POST /film/:id/reviews route in routes/reviews.js
 * @param {string} filmId - The ID of the film to add a review for.
 * @param {string} filmName - The name of the film to add a review for.
 * @param {Object} reviewData - The data of the review to be added.
 * @returns {Object} - The newly added review.
 */
async function addReview(filmId, filmName, reviewData) {
    try {
        console.log('Received review data:', reviewData); // Debug
        const newReview = new Review({
            rotten_tomatoes_link: 'm/' + filmId,
            movie_title: filmName,
            ...reviewData
        });

        await newReview.save();
        console.log('New review added:', newReview); // Debug
        return newReview;
    } catch (error) {
        console.error('Error adding review:', error.message);
        throw new Error('Error adding review');
    }
}

module.exports = { getReviewsByFilmName, addReview };