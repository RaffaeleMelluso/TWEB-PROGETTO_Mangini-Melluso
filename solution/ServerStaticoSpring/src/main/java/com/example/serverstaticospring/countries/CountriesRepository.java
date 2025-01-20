package com.example.serverstaticospring.countries;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CountriesRepository extends JpaRepository<Countries, Integer> {
    // Query ottimizzata per ottenere il primo record
    @Query(value = "SELECT * FROM countries LIMIT 1", nativeQuery = true)
    Countries findFirstCountry();
}
