const express = require('express');
const router = express.Router();

const movies = [
    {
        id: 1,
        title: "Dune",
        poster: "images/dune.jpeg",
        year: 2021,
        tagline: "Fear is the mind-killer.",
        description: "A mythic and emotionally charged hero's journey.",
        minutes: 155,
        rating: 8.3
    },
    {
        id: 2,
        title: "Pulp Fiction",
        poster: "images/pulpfiction.jpg",
        year: 1994,
        tagline: "Just because you are a character doesn't mean you have character.",
        description: "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in a tale of violence and redemption.",
        minutes: 154,
        rating: 8.9
    },
    {
        id: 3,
        title: "Tenet",
        poster: "images/tenet.jpeg",
        year: 2020,
        tagline: "Time runs out.",
        description: "Armed with only one word, Tenet, a protagonist journeys through a twilight world of international espionage.",
        minutes: 150,
        rating: 7.5
    }
];

router.get('/', function (req, res, next) {
    res.render('latest', { title: 'Ultime Uscite', movies });
});

module.exports = router;
