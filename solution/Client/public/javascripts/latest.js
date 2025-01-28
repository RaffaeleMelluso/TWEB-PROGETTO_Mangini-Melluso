document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const pathSegments = window.location.pathname.split('/');
            const filmId = pathSegments[pathSegments.length - 1];
            const criticName = document.getElementById('criticName').value;
            const reviewScorePercentage = document.getElementById('reviewScorePercentage').value;
            const reviewContent = document.getElementById('reviewContent').value;
            const topCritic = document.getElementById('topCritic').checked;

            const reviewData = {
                critic_name: criticName,
                review_score_percentage: reviewScorePercentage,
                review_content: reviewContent,
                top_critic: topCritic
            };

            try {
                const url = '/film/' + filmId + '/reviews';
                const response = await fetch(url, {
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
