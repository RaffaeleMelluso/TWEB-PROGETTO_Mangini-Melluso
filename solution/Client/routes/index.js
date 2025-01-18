var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
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

/* GET movie page */
router.get('/movie/:id', function (req, res, next) {
  const movies = {
    1: {
      poster: '/images/dune.jpeg',
      title: 'Dune',
      year: 2021,
      tagline: 'Un pianeta, una spezia, un destino.',
      description: 'Un film epico di fantascienza ambientato su un pianeta desertico.',
      duration: 155,
      rating: 8.2,
      reviews: [
        {
          link: '#',
          critic: 'John Doe',
          topCritic: true,
          review_percentage: 90,
          review_date: '2023-10-01',
          review_content: 'An epic and visually stunning film.'
        },
        {
          link: '#',
          critic: 'Jane Smith',
          topCritic: false,
          review_percentage: 85,
          review_date: '2023-10-02',
          review_content: 'A compelling story with great performances.'
        }
      ]
    },
    2: {
      poster: '/images/pulpfiction.jpg',
      title: 'Pulp Fiction',
      year: 1994,
      tagline: 'Storie che si intrecciano.',
      description: 'Un capolavoro di Tarantino che intreccia storie di crimine e redenzione.',
      duration: 154,
      rating: 8.9,
      reviews: [
        {
          link: '#',
          critic: 'Alice Johnson',
          topCritic: true,
          review_percentage: 95,
          review_date: '2023-10-03',
          review_content: 'A masterpiece of storytelling and direction.'
        }
      ]
    },
    3: {
      poster: '/images/tenet.jpeg',
      title: 'Tenet',
      year: 2020,
      tagline: 'Non cercare di capirlo, sentilo.',
      description: 'Un thriller che gioca con il tempo, firmato Christopher Nolan.',
      duration: 150,
      rating: 7.8,
      reviews: [
        {
          link: '#',
          critic: 'Bob Brown',
          topCritic: false,
          review_percentage: 80,
          review_date: '2023-10-04',
          review_content: 'A mind-bending experience with stunning visuals.'
        }
      ]
    }
  };

  const movie = movies[req.params.id] || { reviews: [] }; // Aggiunto fallback per reviews
  res.render('moviePage', movie);
});

module.exports = router;
