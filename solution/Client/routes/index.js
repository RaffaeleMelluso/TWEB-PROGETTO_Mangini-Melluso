const express = require('express');
const router = express.Router(); // Inizializza il router
const axios = require('axios');

router.get('/', async function (req, res, next) {
  try {
    const response = await axios.get('http://localhost:8080/movies/recentWithPosters');
    const movies = response.data;

    // Log for debugging
    console.log('Data received from backend:', movies);

    const carouselData = movies.map(movie => ({
      image: movie.poster, // Link to the poster
      alt: `Movie ${movie.id}` // ID as alt text
    }));

    res.render('index', { carousel: carouselData });
  } catch (error) {
    console.error('Error loading recent movies:', error.message);
    res.status(500).send('Server error');
  }
});



module.exports = router;