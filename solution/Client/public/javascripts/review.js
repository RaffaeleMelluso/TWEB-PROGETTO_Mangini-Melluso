/**
 * Review Submission Script
 *
 * This script manages the submission of movie reviews by users.
 * It collects form input, formats the data, and sends it to the server
 * via an asynchronous POST request.
 */

document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById('reviewForm');

    // Checks if the review form exists on the page before adding event listeners
    if (reviewForm) {
        reviewForm.addEventListener('submit', async function (event) {
            event.preventDefault(); // Prevents default form submission behavior

            // Extracts necessary data from the form and current page
            const filmId = window.location.pathname.split('/').pop(); // Gets the movie ID from URL
            const filmName = document.getElementById('filmName').textContent;
            const criticName = document.getElementById('criticName').value;
            const reviewScorePercentage = document.getElementById('reviewScorePercentage').value;
            const reviewContent = document.getElementById('reviewContent').value;
            const topCritic = document.getElementById('topCritic').checked;

            // Constructs the review data object to be sent in the request
            const reviewData = {
                critic_name: criticName,
                review_score_percentage: reviewScorePercentage,
                review_content: reviewContent,
                top_critic: topCritic,
                movie_title: filmName,
                rotten_tomatoes_link: 'm/' + filmId
            };

            try {
                // Sends the review data to the server via POST request
                const response = await fetch('/film/' + filmId + '/reviews', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reviewData)
                });

                // Handles the server response
                if (response.status === 201) {
                    alert('Review added successfully!'); // Notifies the user of success
                    window.location.reload(); // Refreshes the page to show the new review
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.message);
                }
            } catch (error) {
                console.error('Error adding review:', error.message);
                alert('Error adding review.'); // Displays error alert to the user
            }
        });
    }
});