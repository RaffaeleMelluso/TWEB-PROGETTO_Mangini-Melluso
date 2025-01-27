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

module.exports = router;