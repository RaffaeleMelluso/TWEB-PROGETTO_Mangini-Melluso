/**
 * Search Route and Film Data Endpoint
 *
 * This module defines routes for handling movie search functionality.
 * It provides an interface for users to search for movies by name and genre.
 * The search results are fetched from a Spring Boot backend.
 */

const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * GET /
 *
 * Renders the search page.
 * This serves the HTML interface where users can perform movie searches.
 */
router.get('/', function (req, res, next) {
    res.render('search', { title: 'Search Page' });
});

/**
 * GET /searchtoolpage
 *
 * Fetches filtered movie data from the Spring Boot backend based on user input.
 * Users can filter movies by name and genre.
 *
 * @query {string} name - The name of the movie to search.
 * @query {string} genre - The genre of the movie to filter by.
 *
 * If the backend request fails, a 500 error is returned with an error message.
 */
router.get('/searchtoolpage', async function (req, res) {
    const name = req.query.name;
    const genre = req.query.category;

    try {
        const response = await axios.get('http://localhost:8080/movies/search', {
            params: { name: name, genre: genre }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error while requesting data from the Spring Boot server:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        }
        res.status(500).json({ error: 'Error loading data' });
    }
});

module.exports = router;