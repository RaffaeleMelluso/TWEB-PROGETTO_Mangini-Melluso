/**
 * Top Movies Display Script
 *
 * This script dynamically loads and displays the top-rated movies
 * categorized by genre. It fetches data from the server endpoint `/top/data`
 * and updates the webpage accordingly.
 */

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById('topMovies'); // Selects the container where movies will be displayed

    try {
        // Fetches movie data from the backend API
        const response = await axios.get('/top/data');
        const movies = response.data;

        // Handles the case where no movie data is available
        if (!movies || Object.keys(movies).length === 0) {
            container.innerHTML = '<p class="text-center text-danger">No data found.</p>';
            return;
        }

        let htmlContent = '';

        // Iterates over movie genres and their respective films
        Object.entries(movies).forEach(function ([genre, films]) {
            htmlContent += '<div class="col-12 mb-4">';
            htmlContent += '<h3>' + genre + '</h3>';
            htmlContent += '<div class="row">';

            films.forEach(function (film) {
                // Handles cases where the tagline is "nan" (not available)
                const tagline = film[4] === "nan" ? "Not available" : film[4];

                htmlContent += '<div class="col-md-4">';
                htmlContent += '<div class="card mb-3">';
                htmlContent += '<img src="' + film[6] + '" class="card-img-top" alt="' + film[1] + '">';
                htmlContent += '<div class="card-body">';
                htmlContent += '<h5 class="card-title">' + film[1] + ' (' + film[5] + ')</h5>';
                htmlContent += '<p class="card-text">' + film[2] + '</p>';
                htmlContent += '<p class="card-text"><small class="text-muted">Rating: ' + film[3] + '</small></p>';
                htmlContent += '<p class="card-text"><small class="text-muted">' + tagline + '</small></p>';
                htmlContent += '<a href="/film/' + film[0] + '" class="btn btn-primary mt-2">View Details</a>';
                htmlContent += '</div></div></div>';
            });

            htmlContent += '</div></div>';
        });

        // Inserts the generated HTML content into the container
        container.innerHTML = htmlContent;
    } catch (error) {
        console.error('Error loading movies:', error);
        container.innerHTML = '<p class="text-center text-danger">Error loading data.</p>';
    }
});