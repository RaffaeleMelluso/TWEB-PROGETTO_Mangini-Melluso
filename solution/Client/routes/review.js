/**
 * Film Review Router
 *
 * This module defines routes for handling user-submitted movie reviews.
 * It retrieves movie details from a Spring Boot backend and forwards
 * review submissions to an Express.js review microservice.
 */

const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * POST /:filmId/reviews
 *
 * Handles the submission of a new review for a specific movie.
 *
 * - Retrieves movie details from a Spring Boot backend using the film ID.
 * - Converts the review score percentage into a scaled rating (0-5).
 * - Constructs the review payload and sends it to the Express.js review service.
 * - Returns a success response if the review is successfully stored.
 *
 * @param {string} filmId - The unique identifier of the movie.
 * @body {string} critic_name - The name of the reviewer.
 * @body {number} review_score_percentage - The rating percentage (0-100).
 * @body {string} review_content - The content of the review.
 * @body {boolean} top_critic - Whether the reviewer is a top critic.
 *
 * @returns {Object} JSON response with review status.
 */
router.post('/:filmId/reviews', async (req, res) => {
    const filmId = req.params.filmId;
    const reviewData = req.body;

    // Convert review score percentage to a 0-5 scale rating
    const reviewScorePercentage = reviewData.review_score_percentage;
    const reviewScore = Math.round(reviewScorePercentage / 20).toString();
    const reviewDate = new Date().toISOString().split('T')[0]; // Format review date

    try {
        // Fetch movie details from the Spring Boot backend
        const movieResponse = await axios.get('http://localhost:8080/movies/details/' + filmId);
        if (!movieResponse.data || movieResponse.data.error) {
            return res.status(404).json({ message: 'Film not found.' });
        }
        console.log('Film ID:', filmId);
        console.log('movieTitle:', movieResponse.data.name);

        // Construct the review payload
        const reviewPayload = {
            critic_name: reviewData.critic_name,
            review_score_percentage: reviewScorePercentage,
            review_score: reviewScore,
            review_content: reviewData.review_content,
            top_critic: reviewData.top_critic,
            review_date: reviewDate,
            movie_title: movieResponse.data.name,
            rotten_tomatoes_link: 'm/' + filmId
        };

        // Send review data to the Express.js review microservice
        const response = await axios.post('http://localhost:3002/reviews/film/' + filmId + '/reviews', reviewPayload);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error forwarding review data:', error.message);
        res.status(500).json({ message: 'Error forwarding review data' });
    }
});

module.exports = router;