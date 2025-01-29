package com.example.serverstaticospring.genres;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/genres")
public class GenresController {
    @Autowired
    private GenresService genresService;

    /**
     * Route called via a GET request to /genres/film/{film_id}.
     * Calls the GenresService to get a list of genres by the film ID.
     * @param film_id the ID of the film.
     * @return a list of genres associated with the film.
     */
    @GetMapping("/film/{film_id}")
    public List<Genres> getGenresByFilmId(@PathVariable Integer film_id) {
        return genresService.getGenresByFilmId(film_id);
    }
}