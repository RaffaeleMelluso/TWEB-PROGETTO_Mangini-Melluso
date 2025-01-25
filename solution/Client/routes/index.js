const express = require('express');
const router = express.Router(); // Inizializza il router
const axios = require('axios');

router.get('/', async function (req, res, next) {
  try {
    const response = await axios.get('http://localhost:8080/movies/recentWithPosters');
    const movies = response.data;

    const top3Response = await axios.get('http://localhost:8080/movies/top3byrating');
    const top3Movies = top3Response.data;

    console.log('Top 3 Movies:', top3Movies);

    const carouselData = movies.map(movie => ({
      id: movie.id, // Aggiungi l'ID
      image: movie.poster,
      alt: "Movie" + movie.id
    }));

    res.render('index', { carousel: carouselData, features: top3Movies });
  } catch (error) {
    console.error('Error loading recent movies:', error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;