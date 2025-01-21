package com.example.serverstaticospring.Movies;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MoviesRepository extends JpaRepository<Movies, Integer> {
    @Query("SELECT m.name, m.description, m.rating, m.tagline, m.year " +
            "FROM Movies m " +
            "JOIN Genres g ON m.id = g.film_id " +
            "WHERE g.genre = ?1 " +
            "ORDER BY m.year DESC")
    Page<Object[]> findLast5ByGenreWithDetails(String genre, Pageable pageable);

}