const express = require('express');
const router = express.Router();
const Review = require('../databases/rotten_tomatoes_reviews');

// Route to get reviews by film name
router.get('/film/:id/reviews', async (req, res) => {
    try {
        const filmName = req.params.id;
        const reviews = await Review.find({ movie_title: filmName });
        if (!reviews || reviews.length === 0) {
            return res.status(404).json({ message: 'Film not found' });
        }
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;