// Attendi che il DOM sia completamente caricato
document.addEventListener("DOMContentLoaded", function () {

    // Dati fittizi per i top 10 film
    const topMovies = [
        {
            title: "Dune",
            poster: "images/dune.jpeg",
            year: 2021,
            tagline: "Fear is the mind-killer.",
            description: "A mythic and emotionally charged hero's journey.",
            minutes: 155,
            rating: 8.3
        },
        {
            title: "Pulp Fiction",
            poster: "images/pulpfiction.jpg",
            year: 1994,
            tagline: "Just because you are a character doesn't mean you have character.",
            description: "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in a tale of violence and redemption.",
            minutes: 154,
            rating: 8.9
        },
        {
            title: "Tenet",
            poster: "images/tenet.jpeg",
            year: 2020,
            tagline: "Time runs out.",
            description: "Armed with only one word, Tenet, a protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
            minutes: 150,
            rating: 7.5
        },
        // Altri 7 film...
    ];

    // Seleziona il contenitore dei film
    const topMoviesContainer = document.getElementById("topMovies");

    // Genera i card per ogni film
    topMovies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "col-12 col-md-6 col-lg-4 movie-card";

        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-details">
                <h5>${movie.title} (${movie.year})</h5>
                <p><strong>Tagline:</strong> ${movie.tagline}</p>
                <p>${movie.description}</p>
                <p><strong>Duration:</strong> ${movie.minutes} minutes</p>
                <p class="movie-rating">Rating: ${movie.rating}</p>
            </div>
        `;

        topMoviesContainer.appendChild(movieCard);
    });
});
