document.getElementById("filterForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const year = document.getElementById("yearInput").value;
    const name = document.getElementById("nameInput").value;
    await updateOscarResults({ year: year, name: name });
});

async function updateOscarResults(filters) {
    const resultsDiv = document.getElementById("oscarResults");
    resultsDiv.innerHTML = "";

    try {
        const response = await fetch('/oscar/search?year=' + filters.year + '&name=' + filters.name);
        const data = await response.json();

        if (data.length > 0) {
            data.forEach(function (entry) {
                const card = document.createElement("div");
                card.className = "col-12 winner-card";
                card.innerHTML =
                    '<h5>' + entry.category + '</h5>' +
                    '<p><strong>Candidato:</strong> ' + entry.name + '</p>' +
                    '<p><strong>Film:</strong> ' + (entry.film || "N/A") + '</p>' +
                    '<p><strong>Anno della cerimonia:</strong> ' + entry.year_ceremony + '</p>' +
                    (entry.winner ? '<span class="winner-badge">Vincitore</span>' : "");
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
