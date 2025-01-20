package com.example.serverstaticospring.actors;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ActorsRepository extends JpaRepository<Actors, Integer> {
    // Ottimizzato per recuperare direttamente il primo attore senza caricare tutto il database
    @Query(value = "SELECT * FROM actors LIMIT 1", nativeQuery = true)
    Actors findFirstActor();
}
