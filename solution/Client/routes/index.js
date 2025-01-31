/**
 * Homepage Router
 *
 * This module defines the main route for the homepage of the movie application.
 * It fetches recent movies with posters and the top 3 highest-rated movies
 * from a Spring Boot backend before rendering the main index page.
 */

const express = require('express');
const router = express.Router(); // Initializes the router
const axios = require('axios');

/**
 * GET /
 *
 * Fetches recent movies with posters and the top 3 highest-rated movies.
 * The retrieved data is used to populate the homepage carousel and feature section.
 *
 * If the data cannot be retrieved, an error response is sent.
 */
router.get('/', async function (req, res, next) {
  try {
    // Fetch recent movies with posters from the Spring Boot backend
    const response = await axios.get('http://localhost:8080/movies/recentWithPosters');
    const movies = response.data;

    // Fetch the top 3 highest-rated movies from the backend
    const top3Response = await axios.get('http://localhost:8080/movies/top3byrating');
    const top3Movies = top3Response.data;

    console.log('Top 3 Movies:', top3Movies); // Debugging log

    // Format the movie data for the carousel display
    const carouselData = movies.map(movie => ({
      id: movie.id,
      image: movie.poster,
      alt: "Movie" + movie.id
    }));

    // Render the homepage with carousel and featured movies data
    res.render('index', { carousel: carouselData, features: top3Movies });
  } catch (error) {
    console.error('Error loading recent movies:', error.message);
    res.status(500).send('Server error'); // Sends a 500 response in case of failure
  }
});

module.exports = router;