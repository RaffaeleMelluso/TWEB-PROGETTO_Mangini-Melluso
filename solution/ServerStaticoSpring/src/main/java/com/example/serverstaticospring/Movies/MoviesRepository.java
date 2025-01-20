package com.example.serverstaticospring.Movies;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MoviesRepository extends JpaRepository<Movies, Integer> {
    @Query("SELECT m.name, m.description, m.rating, c.name, r.date " +
            "FROM Movies m " +
            "JOIN Genres g ON m.id = g.film_id " +
            "JOIN Crew c ON m.id = c.film_id " +
            "JOIN Releases r ON m.id = r.film_id " +
            "WHERE g.genre = ?1 AND r.country = 'USA' " +
            "ORDER BY r.date DESC")
    Page<Object[]> findLast5ByGenreWithDetails(String genre, Pageable pageable);
}