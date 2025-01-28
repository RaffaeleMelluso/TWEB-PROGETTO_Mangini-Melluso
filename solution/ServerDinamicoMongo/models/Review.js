const mongoose = require('../databases/database');

const reviewSchema = new mongoose.Schema({
    rotten_tomatoes_link: String,
    movie_title: String,
    critic_name: String,
    top_critic: Boolean,
    publisher_name: String,
    review_type: String,
    review_score: String,
    review_score_percentage: Number, // Add this line
    review_date: String,
    review_content: String,
}, { collection: 'Review' });

module.exports = mongoose.model('Review', reviewSchema);