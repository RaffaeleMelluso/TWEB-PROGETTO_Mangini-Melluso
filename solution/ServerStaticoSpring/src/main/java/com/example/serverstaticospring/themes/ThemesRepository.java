package com.example.serverstaticospring.themes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ThemesRepository extends JpaRepository<Themes, Integer> {
    @Query("SELECT t.theme FROM Themes t WHERE t.film_id = ?1")
    List<String> findThemesByFilmId(Integer film_id);
}