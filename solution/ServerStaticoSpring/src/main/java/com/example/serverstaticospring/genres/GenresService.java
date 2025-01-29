package com.example.serverstaticospring.genres;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GenresService {
    @Autowired
    private GenresRepository genresRepository;

    /**
     * Retrieves a list of genres by the film ID.
     * @param film_id the ID of the film.
     * @return a list of genres associated with the film.
     */
    public List<Genres> getGenresByFilmId(Integer film_id) {
        return genresRepository.findGenresByFilmId(film_id);
    }
}