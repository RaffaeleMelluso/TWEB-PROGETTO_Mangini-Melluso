document.getElementById("searchForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("nameInput").value;
    const category = document.getElementById("categoryInput").value;
    await updateSearchResults({ name: name, category: category });
});

async function updateSearchResults(filters) {
    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    try {
        const response = await fetch('/search/searchtoolpage?name=' + filters.name + '&category=' + filters.category);
        const data = await response.json();

        if (data.length > 0) {
            data.forEach(function (entry) {
                const card = document.createElement("div");
                card.className = "col-12 card-horizontal"; // Full width
                card.innerHTML =
                    '<div class="card mb-3" onclick="window.location.href=\'/film/' + entry.id + '\'">' +
                    '<div class="row g-0">' +
                    '<div class="col-md-4 card-img-left">' +
                    '<img src="' + entry.poster + '" class="img-fluid rounded-start" alt="' + entry.name + '">' +
                    '</div>' +
                    '<div class="col-md-8">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + entry.name + ' (' + entry.year + ')</h5>' +
                    '<p class="card-text">' + entry.description.substring(0, 100) + '...</p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                resultsDiv.appendChild(card);
            });
        } else {
            resultsDiv.innerHTML = '<p class="text-center text-danger">Nessun dato trovato per i criteri specificati.</p>';
        }
    } catch (error) {
        console.error('Errore nel caricamento dei dati:', error);
        resultsDiv.innerHTML = '<p class="text-center text-danger">Errore durante il recupero dei dati.</p>';
    }
}