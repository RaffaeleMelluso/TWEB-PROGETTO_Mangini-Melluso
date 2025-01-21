package com.example.serverstaticospring.genres;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface GenresRepository extends JpaRepository<Genres, Integer> {
    @Query("SELECT g FROM Genres g WHERE g.film_id = ?1")
    List<Genres> findGenresByFilmId(Integer film_id);
}
