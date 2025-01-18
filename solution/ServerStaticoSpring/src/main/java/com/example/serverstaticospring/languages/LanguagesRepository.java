package com.example.serverstaticospring.languages;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LanguagesRepository extends JpaRepository<Languages, Integer> {
    // Query ottimizzata per ottenere il primo record
    @Query(value = "SELECT * FROM languages LIMIT 1", nativeQuery = true)
    Languages findFirstLanguage();
}