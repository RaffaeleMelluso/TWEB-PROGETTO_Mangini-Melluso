const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:filmId', async function (req, res) {
    try {
        const filmId = req.params.filmId;

        // Fetch movie details using filmId
        const movieUrl = 'http://localhost:8080/movies/details/' + filmId;
        const movieResponse = await axios.get(movieUrl);
        if (!movieResponse.data || movieResponse.data.error) {
            return res.status(404).render('error', { message: 'Film not found.' });
        }

        const movie = movieResponse.data;

        // Debug: verify movie details
        console.log('Movie details:', movie);

        // Fetch reviews using movie name
        let reviews = [];
        try {
            const reviewsUrl = 'http://localhost:3002/reviews/film/' + encodeURIComponent(movie.name) + '/reviews';
            const reviewsResponse = await axios.get(reviewsUrl);
            reviews = reviewsResponse.data;
            console.log('Fetched reviews:', reviews); // Debug
        } catch (reviewsError) {
            console.error('Error fetching reviews:', reviewsError.message);
        }

        // Add reviews to movie
        movie.reviews = reviews;

        // Render movie page
        res.render('moviePage', { movie: movie });
    } catch (error) {
        console.error('Error loading movie:', error.message);
        res.status(500).render('error', { message: 'Error loading movie.' });
    }
});

module.exports = router;
