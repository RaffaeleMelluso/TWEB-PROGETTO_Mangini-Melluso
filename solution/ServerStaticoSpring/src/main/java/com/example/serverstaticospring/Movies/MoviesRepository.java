package com.example.serverstaticospring.Movies;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MoviesRepository extends JpaRepository<Movies, Integer> {

    // Query per gli ultimi 5 film per genere
    @Query("SELECT m.name, m.description, m.rating, m.tagline, m.year " +
            "FROM Movies m " +
            "JOIN Genres g ON m.id = g.film_id " +
            "WHERE g.genre = ?1 " +
            "ORDER BY m.year DESC")
    Page<Object[]> findLast5ByGenreWithDetails(String genre, Pageable pageable);

    // Query per i top 5 film con rating più alto per genere
    @Query("SELECT m.id, m.name, m.description, m.rating, m.tagline, m.year, p.link " +
            "FROM Movies m " +
            "JOIN Genres g ON m.id = g.film_id " +
            "LEFT JOIN Posters p ON m.id = p.film_id " +
            "WHERE g.genre = ?1 " +
            "ORDER BY m.rating DESC")
    Page<Object[]> findTop5ByGenreWithDetails(String genre, Pageable pageable);
}
