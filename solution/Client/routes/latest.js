/**
 * Latest Movies Router
 *
 * This module defines routes for handling requests related to the latest movie releases.
 * It fetches movie data from a Spring Boot backend and serves it as JSON,
 * as well as rendering the 'latest' page for the user interface.
 */

const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * GET /data
 *
 * Retrieves the last 10 movie releases in the USA from the Spring Boot backend.
 * Responds with a JSON object containing movie data.
 *
 * If the backend request fails, a 500 error is returned with an error message.
 */
router.get('/data', async (req, res, next) => {
    try {
        const response = await axios.get('http://localhost:8080/movies/last10inusa');
        res.json(response.data);
    } catch (error) {
        console.error('Error while requesting data from the Spring Boot server:', error.message);
        res.status(500).json({ error: 'Error loading data' });
    }
});

/**
 * GET /
 *
 * Renders the 'Latest Releases' page.
 * This serves the HTML interface where users can view the latest movies.
 */
router.get('/', (req, res) => {
    res.render('latest', { title: 'Latest Releases' });
});

module.exports = router;
