package com.example.serverstaticospring.Movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/movies")
public class MoviesController {
    @Autowired
    private MoviesService movieService;

    /**
     * Endpoint to get the last 10 movies released in the USA.
     * Calls the MoviesService to retrieve the data.
     * @return a map containing the list of the last 10 movies released in the USA.
     */
    @GetMapping("/last10inusa")
    public Map<String, List<Object[]>> getLast10MoviesInUSA() {
        Map<String, List<Object[]>> result = new HashMap<>();
        result.put("USA", movieService.getLast10MoviesInUSA());
        return result;
    }

    /**
     * Endpoint to get the top 5 movies by genre with the highest rating.
     * Calls the MoviesService to retrieve the data.
     * @return a map containing the top 5 movies for each genre.
     */
    @GetMapping("/top5bygenre")
    public Map<String, List<Object[]>> getTop5ByGenreWithDetails() {
        Map<String, List<Object[]>> result = new HashMap<>();
        result.put("Action", movieService.getTop5ByGenreWithDetails("Action"));
        result.put("Horror", movieService.getTop5ByGenreWithDetails("Horror"));
        result.put("Thriller", movieService.getTop5ByGenreWithDetails("Thriller"));
        result.put("Comedy", movieService.getTop5ByGenreWithDetails("Comedy"));
        result.put("Drama", movieService.getTop5ByGenreWithDetails("Drama"));
        return result;
    }

    /**
     * Endpoint to get the details of a specific movie.
     * Calls the MoviesService to retrieve the data.
     * @param filmId the ID of the movie.
     * @return a ResponseEntity containing the movie details or an error message.
     */
    @GetMapping("/details/{filmId}")
    public ResponseEntity<Map<String, Object>> getMovieDetails(@PathVariable("filmId") Integer filmId) {
        if (filmId == null || filmId <= 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid movie ID"));
        }

        Map<String, Object> details = movieService.getMovieDetails(filmId);
        if (details == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Movie not found"));
        }

        return ResponseEntity.ok(details);
    }

    /**
     * Endpoint to get the posters of the 5 most recent movies.
     * Calls the MoviesService to retrieve the data.
     * @return a ResponseEntity containing the list of recent movie posters.
     */
    @GetMapping("/recentWithPosters")
    public ResponseEntity<List<Map<String, String>>> getRecentMoviePosters() {
        List<Object[]> movies = movieService.getRecentMoviePosters();
        List<Map<String, String>> result = new ArrayList<>();

        for (Object[] movie : movies) {
            Map<String, String> movieData = new HashMap<>();
            movieData.put("id", movie[0].toString());
            movieData.put("poster", movie[1].toString());
            result.add(movieData);
        }

        return ResponseEntity.ok(result);
    }

    /**
     * Endpoint to get the top 3 movies by rating.
     * Calls the MoviesService to retrieve the data.
     * @return a ResponseEntity containing the list of top 3 movies by rating.
     */
    @GetMapping("/top3byrating")
    public ResponseEntity<List<Map<String, String>>> getTop3MoviesByRating() {
        List<Object[]> movies = movieService.getTop3MoviesByRating();
        List<Map<String, String>> result = new ArrayList<>();

        for (Object[] movie : movies) {
            Map<String, String> movieData = new HashMap<>();
            movieData.put("id", movie[0].toString());
            movieData.put("name", movie[1].toString());
            movieData.put("description", movie[2].toString());
            movieData.put("rating", movie[3].toString());
            movieData.put("poster", movie[4].toString());
            result.add(movieData);
        }

        return ResponseEntity.ok(result);
    }

    /**
     * Endpoint to search for movies by name and genre.
     * Calls the MoviesService to retrieve the data.
     * @param name the name of the movie (optional).
     * @param genre the genre of the movie (optional).
     * @return a list of movies matching the search criteria.
     */
    @GetMapping("/search")
    public List<Map<String, Object>> searchMovies(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String genre) {
        return movieService.searchMovies(name, genre);
    }
}