package com.example.serverstaticospring.Movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/movies")
public class MoviesController {
    @Autowired
    private MoviesService movieService;

    // Endpoint per gli ultimi 5 film per genere
    @GetMapping("/last5bygenre")
    public Map<String, List<Object[]>> getLast5ByGenreWithDetails() {
        Map<String, List<Object[]>> result = new HashMap<>();
        result.put("Action", movieService.getLast5ByGenreWithDetails("Action"));
        result.put("Horror", movieService.getLast5ByGenreWithDetails("Horror"));
        result.put("Thriller", movieService.getLast5ByGenreWithDetails("Thriller"));
        result.put("Comedy", movieService.getLast5ByGenreWithDetails("Comedy"));
        result.put("Drama", movieService.getLast5ByGenreWithDetails("Drama"));
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


}
