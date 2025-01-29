package com.example.serverstaticospring.genres;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface GenresRepository extends JpaRepository<Genres, Integer> {

    /**
     * Finds genres by the film ID.
     * @param film_id the ID of the film.
     * @return a list of genres associated with the film.
     */
    @Query("SELECT g FROM Genres g WHERE g.film_id = ?1")
    List<Genres> findGenresByFilmId(Integer film_id);
}
