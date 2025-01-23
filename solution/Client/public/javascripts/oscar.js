// Sample data for oscarData
const oscarData = [
    { year: 2021, category: 'Best Picture', winner: 'Nomadland', film: 'Nomadland', isWinner: true },
    { year: 2020, category: 'Best Picture', winner: 'Parasite', film: 'Parasite', isWinner: true },
    // Add more data as needed
];

document.getElementById("filterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const year = document.getElementById("yearInput").value;
    const name = document.getElementById("nameInput").value;
    updateOscarResults({ year, name });
});

function updateOscarResults(filters) {
    const resultsDiv = document.getElementById("oscarResults");
    resultsDiv.innerHTML = "";

    const filteredData = oscarData.filter(entry => {
        const matchesYear = filters.year ? entry.year === Number(filters.year) : true;
        const matchesName = filters.name ? entry.winner.toLowerCase().includes(filters.name.toLowerCase()) : true;
        return matchesYear && matchesName;
    });

    if (filteredData.length > 0) {
        filteredData.forEach(entry => {
            const card = document.createElement("div");
            card.className = "col-12 winner-card";
            card.innerHTML =
                '<h5>' + entry.category + '</h5>' +
                '<p><strong>Candidato:</strong> ' + entry.winner + '</p>' +
                '<p><strong>Film:</strong> ' + (entry.film || "N/A") + '</p>' +
                (filters.year ? "" : '<p><strong>Anno:</strong> ' + entry.year + '</p>') +
                (entry.isWinner ? '<span class="winner-badge">Vincitore</span>' : "");
            resultsDiv.appendChild(card);
        });
    } else {
        resultsDiv.innerHTML = '<p class="text-center text-danger">Nessun dato trovato per i criteri specificati.</p>';
    }
}