package com.example.serverstaticospring.themes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ThemesRepository extends JpaRepository<Themes, Integer> {
    /**
     * Finds themes by film ID.
     * @param film_id the ID of the film.
     * @return a list of themes associated with the film.
     */
    @Query("SELECT t.theme FROM Themes t WHERE t.film_id = ?1")
    List<String> findThemesByFilmId(Integer film_id);
}