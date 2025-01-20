package com.example.serverstaticospring.genres;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GenresService {
    @Autowired
    private GenresRepository genresRepository;

    public List<Genres> getGenresByFilmId(Integer film_id) {
        return genresRepository.findGenresByFilmId(film_id);
    }
}