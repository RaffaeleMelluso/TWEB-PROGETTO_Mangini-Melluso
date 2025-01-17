// Aspetta che il DOM sia completamente caricato
document.addEventListener("DOMContentLoaded", function () {
    // Seleziona il contenitore delle card
    const topMoviesContainer = document.getElementById("topMovies");

    // Aggiungi eventi di interattività, ad esempio per filtrare le card
    const filterInput = document.getElementById("filterInput");
    if (filterInput) {
        filterInput.addEventListener("input", (e) => {
            const filterValue = e.target.value.toLowerCase();

            // Filtra le card in base al titolo o al tagline
            const movieCards = topMoviesContainer.querySelectorAll(".movie-card");
            movieCards.forEach(card => {
                const title = card.querySelector("h5").textContent.toLowerCase();
                const tagline = card.querySelector(".movie-details p:nth-child(2)").textContent.toLowerCase();

                // Mostra o nasconde la card in base al filtro
                if (title.includes(filterValue) || tagline.includes(filterValue)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // Eventuale logica per animazioni o altre interazioni
    const movieCards = document.querySelectorAll(".movie-card");
    movieCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.classList.add("highlight"); // Classe CSS per evidenziare la card
        });

        card.addEventListener("mouseout", () => {
            card.classList.remove("highlight");
        });
    });

    console.log("Interattività lato client configurata correttamente.");
});
