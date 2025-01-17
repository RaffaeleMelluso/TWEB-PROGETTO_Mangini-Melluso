package com.example.serverstaticospring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies")
public class MoviesController {
    @Autowired
    private MoviesService movieService;

    @GetMapping("/first")
    public void getFirstMovie() {
        Movies movie = movieService.getFirstMovie();
        if (movie != null) {
            System.out.println("First movie: " + movie.getName() + ", " + movie.getYear() + ", " + movie.getTagline() + ", " + movie.getDescription() + ", " + movie.getMinute() + ", " + movie.getRating());
        } else {
            System.out.println("No movies found");
        }
    }
}