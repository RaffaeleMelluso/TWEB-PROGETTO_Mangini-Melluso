document.getElementById('searchForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchText = document.getElementById('searchText').value;
    const category = document.getElementById('categoryDropdown').value;

    if (!searchText) {
        alert('Inserisci un testo di ricerca!');
        return;
    }

    try {
        const response = await axios.get('/search/results', { // Updated endpoint
            params: { query: searchText, category: category },
        });

        const results = Array.isArray(response.data) ? response.data : []; // Ensure results is an array
        displayResults(results);
    } catch (error) {
        console.error('Errore nella richiesta:', error);
        alert('Errore durante la ricerca. Riprova più tardi.');
    }
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="text-center">Nessun risultato trovato.</p>';
        return;
    }

    results.forEach(function(item) {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'col-12 mb-3'; // Full width and margin bottom

        const card = document.createElement('div');
        card.className = 'card d-flex flex-row';

        card.innerHTML =
            '<div class="card-img-left">' +
            '<img src="' + item.image + '" class="img-fluid" alt="' + item.title + '">' +
            '</div>' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + item.title + '</h5>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div>';

        cardWrapper.appendChild(card);
        resultsContainer.appendChild(cardWrapper);
    });
}