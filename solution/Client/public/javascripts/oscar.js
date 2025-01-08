// Dati fittizi per prova
const oscarData = [
    { year: 2023, category: "Best Picture", winner: "Everything Everywhere All at Once", film: "Everything Everywhere All at Once", isWinner: true },
    { year: 2023, category: "Best Actor", winner: "Brendan Fraser", film: "The Whale", isWinner: true },
    { year: 2022, category: "Best Picture", winner: "CODA", film: "CODA", isWinner: true },
    { year: 2022, category: "Best Actor", winner: "Will Smith", film: "King Richard", isWinner: true },
    { year: 2022, category: "Best Director", winner: "Jane Campion", film: "The Power of the Dog", isWinner: false },
];

// Funzione per aggiornare i risultati
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
            card.innerHTML = `
                <h5>${entry.category}</h5>
                <p><strong>Candidato:</strong> ${entry.winner}</p>
                <p><strong>Film:</strong> ${entry.film || "N/A"}</p>
                ${filters.year ? "" : `<p><strong>Anno:</strong> ${entry.year}</p>`}
                ${entry.isWinner ? '<span class="winner-badge">Vincitore</span>' : ""}
            `;
            resultsDiv.appendChild(card);
        });
    } else {
        resultsDiv.innerHTML = `<p class="text-center text-danger">Nessun dato trovato per i criteri specificati.</p>`;
    }
}

// Event Listener per il form
document.getElementById("filterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const year = document.getElementById("yearInput").value;
    const name = document.getElementById("nameInput").value;
    updateOscarResults({ year, name });
});

