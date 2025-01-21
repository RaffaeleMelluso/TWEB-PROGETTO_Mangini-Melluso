document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById('topMovies');

    try {
        console.log('Effettuando la richiesta a /latest/data...');
        const response = await axios.get('/latest/data'); // Richiesta all'endpoint
        console.log('Risposta ricevuta:', response.data);

        const movies = response.data;

        if (!movies || Object.keys(movies).length === 0) {
            container.innerHTML = '<p class="text-center text-danger">Nessun dato trovato.</p>';
            return;
        }

        // Genera le card
        container.innerHTML = Object.entries(movies).map(([genre, films]) => `
            <div class="col-12 mb-4">
                <h3>${genre}</h3>
                <div class="row">
                    ${films.map(film => `
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <img src="${film[3]}" class="card-img-top" alt="${film[0]}">
                                <div class="card-body">
                                    <h5 class="card-title">${film[0]} (${film[4]})</h5>
                                    <p class="card-text">${film[1]}</p>
                                    <p class="card-text"><small class="text-muted">Rating: ${film[2]}</small></p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Errore nel caricamento dei film:', error);
        container.innerHTML = '<p class="text-center text-danger">Errore durante il caricamento dei dati.</p>';
    }
});
