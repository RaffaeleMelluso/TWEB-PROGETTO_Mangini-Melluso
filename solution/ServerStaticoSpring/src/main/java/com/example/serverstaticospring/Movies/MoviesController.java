package com.example.serverstaticospring.Movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}