const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/:filmId/reviews', async (req, res) => {
    const filmId = req.params.filmId;
    const reviewData = req.body;

    const reviewScorePercentage = reviewData.review_score_percentage;
    const reviewScore = Math.round(reviewScorePercentage / 20).toString();
    const reviewDate = new Date().toISOString().split('T')[0];

    try {
        // Fetch movie details using filmId
        const movieResponse = await axios.get('http://localhost:8080/movies/details/' + filmId);
        if (!movieResponse.data || movieResponse.data.error) {
            return res.status(404).json({ message: 'Film not found.' });
        }
        console.log('Film ID:', filmId);
        console.log('movieTitle:', movieResponse.data.name);

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

        const response = await axios.post('http://localhost:3002/reviews/film/' + filmId + '/reviews', reviewPayload);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error forwarding review data:', error.message);
        res.status(500).json({ message: 'Error forwarding review data' });
    }
});

module.exports = router;