package com.example.serverstaticospring.crew;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CrewRepository extends JpaRepository<Crew, Integer> {
    // Query ottimizzata per ottenere il primo record
    @Query(value = "SELECT * FROM crew LIMIT 1", nativeQuery = true)
    Crew findFirstCrew();
}