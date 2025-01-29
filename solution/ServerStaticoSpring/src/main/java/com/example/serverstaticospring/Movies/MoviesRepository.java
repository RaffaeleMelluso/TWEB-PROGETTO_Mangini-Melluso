package com.example.serverstaticospring.Movies;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MoviesRepository extends JpaRepository<Movies, Integer> {

    /**
     * Finds the last 10 movies released in the USA, their posters, and release dates.
     * Does many control operations to ensure that the data is consistent, like checking if the rating is -1.
     * If the movie does not have a poster, a default image is used.
     * Used in the MoviesService.getLast10MoviesInUSA method.
     * @return a list of the last 10 movies released in the USA.
     */
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

    /**
     * Finds the top 5 movies by genre with details.
     * Used in the MoviesService.getTop5ByGenreWithDetails method.
     * Does many control operations to ensure that the data is consistent, like checking if the tagline is null.
     * If the tagline is null, a default value is used.
     * Note: ?1 is a placeholder for the genre parameter.
     * @param genre the genre of the movies.
     * @param pageable the pagination information.
     * @return a page of the top 5 movies by genre with details.
     */
    @Query("SELECT m.id, m.name, m.description, m.rating, COALESCE(m.tagline, 'Non disponibile')\n, m.year, p.link " +
            "FROM Movies m " +
            "JOIN Genres g ON m.id = g.film_id " +
            "LEFT JOIN Posters p ON m.id = p.film_id " +
            "WHERE g.genre = ?1 " +
            "ORDER BY m.rating DESC")
    Page<Object[]> findTop5ByGenreWithDetails(String genre, Pageable pageable);

    /**
     * Finds the posters of the 5 most recent movies.
     * Used in the MoviesService.getRecentMoviePosters method.
     * Uses many control operations to ensure that the data is consistent, like the date being in the past.
     * Note: uses native SQL query.
     * @return a list of the posters of the 5 most recent movies.
     */
    @Query(value = "SELECT m.id, p.link " +
            "FROM Movies m " +
            "JOIN Posters p ON m.id = p.film_id " +
            "JOIN Releases r ON m.id = r.film_id " +
            "WHERE r.date < CURRENT_DATE " +
            "AND p.link IS NOT NULL " +
            "ORDER BY r.date DESC " +
            "LIMIT 5", nativeQuery = true)
    List<Object[]> findRecentMoviePosters();


    /**
     * Finds the top 3 movies by rating.
     * Used in the MoviesService.getTop3MoviesByRating method.
     * @return a list of the top 3 movies by rating.
     */
    @Query(value = "SELECT m.id, m.name, m.description, m.rating, p.link " +
            "FROM Movies m " +
            "LEFT JOIN Posters p ON m.id = p.film_id " +
            "WHERE m.rating IS NOT NULL " +
            "ORDER BY m.rating DESC, m.id ASC " +
            "LIMIT 3", nativeQuery = true)
    List<Object[]> findTop3MoviesByRating();

    /**
     * Finds movies by name and genre with poster.
     * Used in the MoviesService.searchMovies method.
     * @param name the name of the movie.
     * @param genre the genre of the movie.
     * @param pageable the pagination information.
     * @return a list of movies by name and genre with poster.
     */
    @Query("SELECT DISTINCT m, p.link FROM Movies m " +
            "LEFT JOIN Posters p ON m.id = p.film_id " +
            "JOIN Genres g ON m.id = g.film_id " +
            "WHERE (:name IS NULL OR LOWER(m.name) LIKE LOWER(CONCAT('%', :name, '%'))) " +
            "AND (:genre IS NULL OR LOWER(g.genre) LIKE LOWER(CONCAT('%', :genre, '%')))")
    List<Object[]> findByNameAndGenreWithPoster(@Param("name") String name, @Param("genre") String genre, Pageable pageable);


}
