const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:filmId', async (req, res) => {
    try {
        const filmId = req.params.filmId;

        // Fetch movie details using filmId
        const movieResponse = await axios.get(`http://localhost:8080/movies/details/${filmId}`);
        if (!movieResponse.data || movieResponse.data.error) {
            return res.status(404).render('error', { message: 'Film not found.' });
        }

        const movie = movieResponse.data;

        // Debug: verify movie details
        console.log('Movie details:', movie);

        // Fetch reviews using movie name
        let reviews = [];
        try {
            const reviewsResponse = await axios.get(`http://localhost:3002/reviews/film/${movie.name}/reviews`);
            reviews = reviewsResponse.data;
            console.log('Fetched reviews:', reviews); // Debug
        } catch (reviewsError) {
            console.error('Error fetching reviews:', reviewsError.message);
        }

        // Add reviews to movie
        movie.reviews = reviews;

        // Render movie page
        res.render('moviePage', { movie });
    } catch (error) {
        console.error('Error loading movie:', error.message);
        res.status(500).render('error', { message: 'Error loading movie.' });
    }
});
router.post('/:filmId/reviews', async (req, res) => {
    const filmId = req.params.filmId;
    const reviewData = req.body;

    // Convert review score percentage to a scale of 5
    const reviewScorePercentage = reviewData.review_score_percentage;
    const reviewScore = (reviewScorePercentage / 20).toFixed(1) + '/5';

    // Get the current date
    const reviewDate = new Date().toISOString().split('T')[0];

    // Construct the review payload
    const reviewPayload = {
        critic_name: reviewData.critic_name,
        review_score_percentage: reviewScorePercentage,
        review_score: reviewScore,
        review_content: reviewData.review_content,
        top_critic: reviewData.top_critic,
        review_date: reviewDate,
        rotten_tomatoes_link: `m/${filmId}` // Assuming filmId is used for the link
    };

    try {
        const response = await axios.post(`http://localhost:3002/reviews/film/${filmId}/reviews`, reviewPayload);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error forwarding review data:', error.message);
        res.status(500).json({ message: 'Error forwarding review data' });
    }
});
module.exports = router;