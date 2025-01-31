/**
 * Search Form Submission Handler
 *
 * This script manages the search functionality, allowing users to look up
 * movies and related information based on user-provided criteria.
 * The form submission triggers a request to the backend, retrieves matching
 * results, and dynamically updates the page with search results.
 */

document.getElementById("searchForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevents default form submission
    const name = document.getElementById("nameInput").value;
    const category = document.getElementById("categoryInput").value;
    await updateSearchResults({ name: name, category: category }); // Calls function to fetch and display results
});

/**
 * Fetches search results from the backend and updates the page.
 *
 * @param {Object} filters - The search criteria containing name and category.
 */
async function updateSearchResults(filters) {
    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = ""; // Clears previous search results

    try {
        // Sends a GET request to the search API endpoint with filters
        const response = await fetch('/search/searchtoolpage?name=' + filters.name + '&category=' + filters.category);
        const data = await response.json();

        // Checks if results are found and dynamically generates result cards
        if (data.length > 0) {
            data.forEach(function (entry) {
                const card = document.createElement("div");
                card.className = "col-12 card-horizontal";
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
            // Displays a message when no results match the search criteria
            resultsDiv.innerHTML = '<p class="text-center text-danger">No results found for the specified criteria.</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        resultsDiv.innerHTML = '<p class="text-center text-danger">Error retrieving data.</p>';
    }
}