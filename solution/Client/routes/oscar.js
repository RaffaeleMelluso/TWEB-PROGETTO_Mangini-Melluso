/**
 * Oscar Router
 *
 * This module defines routes for handling requests related to the Oscar awards.
 * It provides an endpoint to fetch filtered Oscar award data from a Spring Boot backend
 * and a route to render the Oscar awards page.
 */

const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * GET /
 *
 * Renders the Oscar Awards page.
 * This serves the HTML interface where users can search for Oscar winners.
 */
router.get('/', function (req, res, next) {
    res.render('oscar', { title: 'Oscar Awards' });
});

/**
 * GET /searchtool
 *
 * Fetches filtered Oscar award data from the Spring Boot backend.
 * Users can filter results based on the year and name parameters.
 *
 * @query {string} year - The year of the Oscar awards.
 * @query {string} name - The name of the nominee or winner.
 *
 * If the backend request fails, a 500 error is returned with an error message.
 */
router.get('/searchtool', async function (req, res) {
    const year = req.query.year;
    const name = req.query.name;

    try {
        const response = await axios.get('http://localhost:8080/oscar/search', {
            params: { year: year, name: name }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Errore durante la richiesta al server Spring Boot:', error.message);
        res.status(500).json({ error: 'Errore nel caricamento dei dati' });
    }
});

module.exports = router;