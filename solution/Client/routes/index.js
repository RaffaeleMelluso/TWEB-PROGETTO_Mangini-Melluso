var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function (req, res, next) {
  res.render('index', {
    carousel: [
      { image: '/images/dune.jpeg', alt: 'Dune Poster' },
      { image: '/images/pulpfiction.jpg', alt: 'Pulp Fiction Poster' },
      { image: '/images/tenet.jpeg', alt: 'Tenet Poster' }
    ],
    features: [
      { id: 1, image: '/images/dune.jpeg', title: 'Dune', description: 'Un film epico di fantascienza ambientato su un pianeta desertico.' },
      { id: 2, image: '/images/pulpfiction.jpg', title: 'Pulp Fiction', description: 'Un capolavoro di Tarantino che intreccia storie di crimine e redenzione.' },
      { id: 3, image: '/images/tenet.jpeg', title: 'Tenet', description: 'Un thriller che gioca con il tempo, firmato Christopher Nolan.' }
    ]
  });
});

/* GET Movie page. */
router.get('/movie/:id', function (req, res, next) {
  const movies = {
    1: {
      poster: '/images/dune.jpeg',
      title: 'Dune',
      year: 2021,
      tagline: 'Un pianeta, una spezia, un destino.',
      description: 'Un film epico di fantascienza ambientato su un pianeta desertico.',
      duration: 155,
      rating: 8.2
    },
    2: {
      poster: '/images/pulpfiction.jpg',
      title: 'Pulp Fiction',
      year: 1994,
      tagline: 'Storie che si intrecciano.',
      description: 'Un capolavoro di Tarantino che intreccia storie di crimine e redenzione.',
      duration: 154,
      rating: 8.9
    },
    3: {
      poster: '/images/tenet.jpeg',
      title: 'Tenet',
      year: 2020,
      tagline: 'Non cercare di capirlo, sentilo.',
      description: 'Un thriller che gioca con il tempo, firmato Christopher Nolan.',
      duration: 150,
      rating: 7.8
    }
  };

  const movie = movies[req.params.id] || {};
  res.render('moviePage', movie);
});

module.exports = router;
