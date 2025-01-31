/**
 * Oscar Search Functionality
 *
 * This script enables users to search for Oscar nominees and winners
 * by filtering results based on year and name.
 * It interacts with the backend endpoint `/oscar/searchtool` to fetch
 * and display relevant data dynamically on the webpage.
 */

document.getElementById("filterForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const year = document.getElementById("yearInput").value;
    const name = document.getElementById("nameInput").value;
    await updateOscarResults({ year: year, name: name });
});

/**
 * Fetches and updates the Oscar results based on the provided filters.
 *
 * @param {Object} filters - The filter criteria containing year and name.
 */
async function updateOscarResults(filters) {
    const resultsDiv = document.getElementById("oscarResults");
    resultsDiv.innerHTML = '<p class="text-center text-info">Caricamento in corso...</p>'; // Loading message

    try {
        const response = await fetch('/oscar/searchtool?year=' + filters.year + '&name=' + filters.name);
        const data = await response.json();

        resultsDiv.innerHTML = ""; // Clear previous content after fetching

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
        resultsDiv.innerHTML = '<p class="text-center text-danger">Errore durante il recupero dei dati. Verifica la connessione o riprova più tardi.</p>';
    }
}