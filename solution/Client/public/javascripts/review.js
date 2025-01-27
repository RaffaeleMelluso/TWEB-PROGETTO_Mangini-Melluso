document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const filmId = window.location.pathname.split('/').pop();
            const filmName = document.getElementById('filmName').textContent;
            const criticName = document.getElementById('criticName').value;
            const reviewScorePercentage = document.getElementById('reviewScorePercentage').value;
            const reviewContent = document.getElementById('reviewContent').value;
            const topCritic = document.getElementById('topCritic').checked;

            const reviewData = {
                critic_name: criticName,
                review_score_percentage: reviewScorePercentage,
                review_content: reviewContent,
                top_critic: topCritic,
                movie_title: filmName
            };

            try {
                const response = await fetch('/film/' + filmId + '/reviews', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reviewData)
                });
                if (response.status === 201) {
                    alert('Review added successfully!');
                    window.location.reload();
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.message);
                }
            } catch (error) {
                console.error('Error adding review:', error.message);
                alert('Error adding review.');
            }
        });
    }
});