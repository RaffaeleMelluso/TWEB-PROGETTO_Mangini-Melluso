document.addEventListener("DOMContentLoaded", function () {
    console.log("Carousel configurato correttamente!");

    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const filmId = window.location.pathname.split('/').pop();
            const criticName = document.getElementById('criticName').value;
            const reviewScore = document.getElementById('reviewScore').value;
            const reviewContent = document.getElementById('reviewContent').value;

            const reviewData = {
                critic_name: criticName,
                review_score: reviewScore,
                review_content: reviewContent
            };

            try {
                const response = await axios.post(`/reviews/film/${filmId}/reviews`, reviewData);
                if (response.status === 201) {
                    alert('Recensione aggiunta con successo!');
                    window.location.reload();
                }
            } catch (error) {
                console.error('Errore durante l\'aggiunta della recensione:', error.message);
                alert('Errore durante l\'aggiunta della recensione.');
            }
        });
    }
});
