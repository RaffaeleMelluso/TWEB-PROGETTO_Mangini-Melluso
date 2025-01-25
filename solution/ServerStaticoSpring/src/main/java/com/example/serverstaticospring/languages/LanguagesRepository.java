package com.example.serverstaticospring.languages;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LanguagesRepository extends JpaRepository<Languages, Integer> {
    @Query("SELECT l.id, l.language, l.type FROM Languages l WHERE l.film_id = :filmId")
    List<Object[]> findLanguagesByFilmId(@Param("filmId") Integer filmId);
}