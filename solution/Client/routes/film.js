/**
 * Movie Details Router
 *
 * This module handles routes related to retrieving and displaying
 * detailed information about a specific movie, including user reviews.
 *
 * The movie details are fetched from a Spring Boot server,
 * while the reviews are retrieved from an Express.js server.
 * The aggregated data is then used to render the movie details page.
 */

const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * GET /film/:filmId
 *
 * Retrieves movie details from a Spring Boot server and associated reviews
 * from an Express.js server based on the provided film ID.
 * If the movie is found, it is rendered on the movie details page.
 * If the movie does not exist, an error page is displayed.
 *
 * @param {string} filmId - The unique identifier of the movie.
 */
router.get('/:filmId', async function (req, res) {
    try {
        const filmId = req.params.filmId;

        // Fetch movie details from the Spring Boot backend API
        const movieUrl = 'http://localhost:8080/movies/details/' + filmId;
        const movieResponse = await axios.get(movieUrl);

        // Handle case where movie data is missing or contains an error
        if (!movieResponse.data || movieResponse.data.error) {
            return res.status(404).render('error', { message: 'Film not found.' });
        }

        const movie = movieResponse.data;

        // Debug: Log movie details for verification
        console.log('Movie details:', movie);

        // Fetch reviews for the movie from the Express.js reviews service
        let reviews = [];
        try {
            const reviewsUrl = 'http://localhost:3002/reviews/film/' + encodeURIComponent(movie.name) + '/reviews';
            const reviewsResponse = await axios.get(reviewsUrl);
            reviews = reviewsResponse.data;
            console.log('Fetched reviews:', reviews); // Debug
        } catch (reviewsError) {
            console.error('Error fetching reviews:', reviewsError.message);
        }

        // Attach reviews to the movie object
        movie.reviews = reviews;

        // Render the movie details page with the fetched movie and reviews data
        res.render('moviePage', { movie: movie });
    } catch (error) {
        console.error('Error loading movie:', error.message);
        res.status(500).render('error', { message: 'Error loading movie.' });
    }
});

module.exports = router;