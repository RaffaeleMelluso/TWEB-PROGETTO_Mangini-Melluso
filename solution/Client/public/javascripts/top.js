document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById('topMovies');

    try {
        const response = await axios.get('/top/data');
        const movies = response.data;

        if (!movies || Object.keys(movies).length === 0) {
            container.innerHTML = '<p class="text-center text-danger">Nessun dato trovato.</p>';
            return;
        }

        let htmlContent = '';
        Object.entries(movies).forEach(function ([genre, films]) {
            htmlContent += '<div class="col-12 mb-4">';
            htmlContent += '<h3>' + genre + '</h3>';
            htmlContent += '<div class="row">';
            films.forEach(function (film) {
                // Controlla se la tagline è "nan"
                const tagline = film[4] === "nan" ? "Non disponibile" : film[4];

                htmlContent += '<div class="col-md-4">';
                htmlContent += '<div class="card mb-3">';
                htmlContent += '<img src="' + film[6] + '" class="card-img-top" alt="' + film[1] + '">';
                htmlContent += '<div class="card-body">';
                htmlContent += '<h5 class="card-title">' + film[1] + ' (' + film[5] + ')</h5>';
                htmlContent += '<p class="card-text">' + film[2] + '</p>';
                htmlContent += '<p class="card-text"><small class="text-muted">Rating: ' + film[3] + '</small></p>';
                htmlContent += '<p class="card-text"><small class="text-muted">' + tagline + '</small></p>';
                htmlContent += '<a href="/film/' + film[0] + '" class="btn btn-primary mt-2">Visualizza Dettagli</a>';
                htmlContent += '</div></div></div>';
            });
            htmlContent += '</div></div>';
        });
        container.innerHTML = htmlContent;
    } catch (error) {
        console.error('Errore nel caricamento dei film:', error);
        container.innerHTML = '<p class="text-center text-danger">Errore durante il caricamento dei dati.</p>';
    }
});
