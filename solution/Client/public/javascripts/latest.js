/**
 * Script to fetch and display the latest movies categorized by genre.
 *
 * This script waits for the DOM to fully load, then fetches movie data
 * from the endpoint `/latest/data`. The received data is dynamically
 * inserted into the `#topMovies` container as categorized movie cards.
 */

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById('topMovies');

    try {
        console.log('Fetching data from /latest/data...');
        const response = await axios.get('/latest/data');
        console.log('Response received:', response.data);

        const movies = response.data;

        // Handle case where no movies are available
        if (!movies || Object.keys(movies).length === 0) {
            container.innerHTML = '<p class="text-center text-danger">No data found.</p>';
            return;
        }

        let htmlContent = '';

        // Iterate over movie genres and their respective films
        Object.entries(movies).forEach(function([genre, films]) {
            htmlContent += '<div class="col-12 mb-4">';
            htmlContent += '<h3>' + genre + '</h3>';
            htmlContent += '<div class="row">';

            // Generate movie cards for each film in the genre
            films.forEach(function(film) {
                htmlContent += '<div class="col-md-4">';
                htmlContent += '<div class="card mb-3">';
                htmlContent += '<img src="' + film[4] + '" class="card-img-top" alt="' + film[1] + '">';
                htmlContent += '<div class="card-body">';
                htmlContent += '<h5 class="card-title">' + film[1] + ' (' + film[5] + ')</h5>';
                htmlContent += '<p class="card-text">' + film[2] + '</p>';
                htmlContent += '<p class="card-text"><small class="text-muted">Rating: ' + film[3] + '</small></p>';
                htmlContent += '<a href="/film/' + film[0] + '" class="btn btn-primary mt-2">View Details</a>';
                htmlContent += '</div></div></div>';
            });

            htmlContent += '</div></div>';
        });

        // Insert generated HTML content into the container
        container.innerHTML = htmlContent;
    } catch (error) {
        console.error('Error loading movies:', error);
        container.innerHTML = '<p class="text-center text-danger">Error loading data.</p>';
    }
});