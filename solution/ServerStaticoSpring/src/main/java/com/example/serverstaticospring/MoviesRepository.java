package com.example.serverstaticospring;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MoviesRepository extends JpaRepository<Movies, Integer> {
    @Query(value = "SELECT * FROM movies LIMIT 1", nativeQuery = true)
    Movies findFirstMovie();
}