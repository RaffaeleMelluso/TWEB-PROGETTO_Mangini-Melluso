package com.example.serverstaticospring.Movies;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MoviesRepository extends JpaRepository<Movies, Integer> {

    // Query per gli ultimi 10 film in usa
    @Query(value = "SELECT m.id, m.name, m.description, " +
            "CASE WHEN m.rating = -1 THEN 'Sconosciuto' ELSE CAST(m.rating AS VARCHAR) END AS rating, " +
            "COALESCE(p.link, 'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg') AS link, " +
            "TO_CHAR(r.date, 'YYYY-MM-DD') AS date " +
            "FROM Movies m " +
            "LEFT JOIN Posters p ON m.id = p.film_id " +
            "JOIN Releases r ON m.id = r.film_id " +
            "WHERE r.country = 'USA' AND r.date <= CURRENT_DATE " +
            "ORDER BY r.date DESC " +
            "LIMIT 10",
            nativeQuery = true)
    List<Object[]> findLast10MoviesInUSA();

    // Query per i top 5 film con rating più alto per genere
    @Query("SELECT m.id, m.name, m.description, m.rating, m.tagline, m.year, p.link " +
            "FROM Movies m " +
            "JOIN Genres g ON m.id = g.film_id " +
            "LEFT JOIN Posters p ON m.id = p.film_id " +
            "WHERE g.genre = ?1 " +
            "ORDER BY m.rating DESC")
    Page<Object[]> findTop5ByGenreWithDetails(String genre, Pageable pageable);

    // query per il poster dei 5 film più recenti
    @Query(value = "SELECT m.id, p.link " +
            "FROM Movies m " +
            "JOIN Posters p ON m.id = p.film_id " +
            "JOIN Releases r ON m.id = r.film_id " +
            "WHERE r.date < CURRENT_DATE " +
            "AND p.link IS NOT NULL " +
            "ORDER BY r.date DESC " +
            "LIMIT 5", nativeQuery = true)
    List<Object[]> findRecentMoviePosters();


    // Query per i top 3 con valutazione più alta
    @Query(value = "SELECT m.id, m.name, m.description, m.rating, p.link " +
            "FROM Movies m " +
            "LEFT JOIN Posters p ON m.id = p.film_id " +
            "WHERE m.rating IS NOT NULL " +
            "ORDER BY m.rating DESC, m.id ASC " +
            "LIMIT 3", nativeQuery = true)
    List<Object[]> findTop3MoviesByRating();

}
