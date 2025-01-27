const mongoose = require('../databases/database');

const reviewSchema = new mongoose.Schema({
    rotten_tomatoes_link: String,
    movie_title: String,
    critic_name: String,
    top_critic: Boolean,
    publisher_name: String,
    review_type: String,
    review_score: String,
    review_date: String,
    review_content: String,
}, { collection: 'Review' }); // Specifica il nome esatto della collezione

module.exports = mongoose.model('Review', reviewSchema);
