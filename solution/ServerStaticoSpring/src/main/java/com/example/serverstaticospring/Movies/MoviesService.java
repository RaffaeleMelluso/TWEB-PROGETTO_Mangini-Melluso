package com.example.serverstaticospring.Movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MoviesService {
    @Autowired
    private MoviesRepository movieRepository;

    public List<Object[]> getLast5ByGenreWithDetails(String genre) {
        return movieRepository.findLast5ByGenreWithDetails(genre, PageRequest.of(0, 5)).getContent();
    }
}