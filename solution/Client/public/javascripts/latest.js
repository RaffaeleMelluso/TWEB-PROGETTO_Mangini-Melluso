document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById('topMovies');

    try {
        // Effettua la richiesta all'endpoint del main server
        const response = await fetch('/latest/data');
        const movies = await response.json();

        // Controlla se i dati sono validi
        if (!movies || Object.keys(movies).length === 0) {
            container.innerHTML = '<p class="text-center text-danger">Nessun dato trovato.</p>';
            return;
        }

        // Genera dinamicamente le card dei film
        container.innerHTML = Object.entries(movies).map(([genre, films]) => {
            return `
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
            `;
        }).join('');
    } catch (error) {
        console.error('Errore nel caricamento dei film:', error);
        container.innerHTML = '<p class="text-center text-danger">Errore durante il caricamento dei dati.</p>';
    }
});