// Dati fittizi per prova
const oscarData = {
    2023: [
        { category: "Best Picture", winner: "Everything Everywhere All at Once", film: "Everything Everywhere All at Once" },
        { category: "Best Actor", winner: "Brendan Fraser", film: "The Whale" },
        { category: "Best Actress", winner: "Michelle Yeoh", film: "Everything Everywhere All at Once" }
    ],
    2022: [
        { category: "Best Picture", winner: "CODA", film: "CODA" },
        { category: "Best Actor", winner: "Will Smith", film: "King Richard" },
        { category: "Best Actress", winner: "Jessica Chastain", film: "The Eyes of Tammy Faye" }
    ]
};

// Funzione per aggiornare i risultati
function updateOscarResults(year) {
    const resultsDiv = document.getElementById("oscarResults");
    resultsDiv.innerHTML = ""; // Svuota i risultati precedenti

    if (oscarData[year]) {
        oscarData[year].forEach(entry => {
            const card = document.createElement("div");
            card.className = "col-12 winner-card";
            card.innerHTML = `
                <h5>${entry.category}</h5>
                <p><strong>Vincitore:</strong> ${entry.winner}</p>
                <p><strong>Film:</strong> ${entry.film || "N/A"}</p>
            `;
            resultsDiv.appendChild(card);
        });
    } else {
        resultsDiv.innerHTML = `<p class="text-center text-danger">Nessun dato disponibile per l'anno ${year}. Prova con un altro anno</p>`;
    }
}

// Event Listener per il pulsante di filtro
document.getElementById("filterButton").addEventListener("click", () => {
    const year = document.getElementById("yearInput").value;
    if (year) {
        updateOscarResults(year);
    } else {
        alert("Inserisci un anno valido.");
    }
});

// Gestione della navbar
document.addEventListener("DOMContentLoaded", function () {
    // Seleziona tutti i link della navbar
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Aggiungi un gestore di eventi click per ciascun link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Prevenire il comportamento predefinito dei link
            event.preventDefault();

            // Verifica l'ancora dell'attributo href del link cliccato
            switch (link.getAttribute("href")) {
                case "#home":
                    window.location.href = "index.html";
                    break;
                case "#latest":
                    window.location.href = "latest.html";
                    break;
                case "#top":
                    window.location.href = "top.html";
                    break;
                case "#oscar":
                    window.location.href = "oscar.html";
                    break;
                default:
                    console.log("Nessuna azione per questo link.");
            }
        });
    });
});
