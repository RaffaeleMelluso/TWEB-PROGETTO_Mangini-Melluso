package com.example.serverstaticospring.Movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MoviesService {
    @Autowired
    private MoviesRepository movieRepository;

    public Movies getFirstMovie() {
        return movieRepository.findAll().stream().findFirst().orElse(null);
    }
}