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

    // Endpoint per gli ultimi 10 film usciti in USA
    @GetMapping("/last10inusa")
    public Map<String, List<Object[]>> getLast10MoviesInUSA() {
        Map<String, List<Object[]>> result = new HashMap<>();
        result.put("USA", movieService.getLast10MoviesInUSA());
        return result;
    }

    // Endpoint per i top 5 film con rating più alto per genere
    @GetMapping("/top5bygenre")
    public Map<String, List<Object[]>> getTop5ByGenreWithDetails() {
        Map<String, List<Object[]> > result = new HashMap<>();
        result.put("Action", movieService.getTop5ByGenreWithDetails("Action"));
        result.put("Horror", movieService.getTop5ByGenreWithDetails("Horror"));
        result.put("Thriller", movieService.getTop5ByGenreWithDetails("Thriller"));
        result.put("Comedy", movieService.getTop5ByGenreWithDetails("Comedy"));
        result.put("Drama", movieService.getTop5ByGenreWithDetails("Drama"));
        return result;
    }

    // Endpoint per i dettagli di un film
    @GetMapping("/details/{filmId}")
    public ResponseEntity<Map<String, Object>> getMovieDetails(@PathVariable("filmId") Integer filmId) {
        if (filmId == null || filmId <= 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "ID del film non valido"));
        }

        Map<String, Object> details = movieService.getMovieDetails(filmId);
        if (details == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Film non trovato"));
        }

        return ResponseEntity.ok(details);
    }

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

    @GetMapping("/search")
    public List<Map<String, Object>> searchMovies(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String genre) {
        return movieService.searchMovies(name, genre);
    }



}
