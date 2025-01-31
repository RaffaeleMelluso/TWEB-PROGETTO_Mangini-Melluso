/**
 * Top Movies Router
 *
 * This module defines routes for retrieving and displaying top-rated movies.
 * The movie data is fetched from a Spring Boot backend, categorized by genre.
 * The retrieved data is used to populate the 'Top Movies' page.
 */

const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * GET /data
 *
 * Fetches the top 5 movies per genre from the Spring Boot backend.
 * Returns a JSON response containing the list of top-rated movies.
 *
 * If the backend request fails, a 500 error is returned with an error message.
 */
router.get('/data', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8080/movies/top5bygenre');
        res.json(response.data);
    } catch (error) {
        console.error('Error while requesting data from the Spring Boot server:', error.message);
        res.status(500).json({ error: 'Error loading data' });
    }
});

/**
 * GET /
 *
 * Renders the 'Top Movies' page.
 * This serves the HTML interface where users can view the top-rated movies.
 */
router.get('/', (req, res) => {
    res.render('top', { title: 'Top Movies' });
});

module.exports = router;