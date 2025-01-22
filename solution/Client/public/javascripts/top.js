document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById('topMovies');

    try {
        const response = await axios.get('/top/data');
        const movies = response.data;

        if (!movies || Object.keys(movies).length === 0) {
            container.innerHTML = '<p class="text-center text-danger">Nessun dato trovato.</p>';
            return;
        }

        container.innerHTML = Object.entries(movies).map(([genre, films]) => `
            <div class="col-12 mb-4">
                <h3>${genre}</h3>
                <div class="row">
                    ${films.map(film => {
            const id = film[0]; // Assumi che l'ID sia film[0]
            const title = film[1] || "Non disponibile";
            const description = film[2] !== "nan" ? film[2] : "Non disponibile";
            const rating = film[3] !== -1 ? film[3] : "Non disponibile";
            const tagline = film[4] !== "nan" ? film[4] : "Non disponibile";
            const year = film[5] || "Non disponibile";

            return `
                            <div class="col-md-4">
                                <div class="card mb-3">
                                    <img src="${film[6] || '/path/to/default/image.jpg'}" class="card-img-top" alt="${title}">
                                    <div class="card-body">
                                        <h5 class="card-title">${title} (${year})</h5>
                                        <p class="card-text">${description}</p>
                                        <p class="card-text"><small class="text-muted">Rating: ${rating}</small></p>
                                        <p class="card-text"><small class="text-muted">${tagline}</small></p>
                                        <a href="/film/${id}" class="btn btn-primary mt-2">Visualizza Dettagli</a>
                                    </div>
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Errore nel caricamento dei film:', error);
        container.innerHTML = '<p class="text-center text-danger">Errore durante il caricamento dei dati.</p>';
    }
});
