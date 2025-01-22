package com.example.serverstaticospring.actors;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ActorsRepository extends JpaRepository<Actors, Integer> {
    // Ottimizzato per recuperare direttamente il primo attore senza caricare tutto il database
    @Query(value = "SELECT * FROM actors LIMIT 1", nativeQuery = true)
    Actors findFirstActor();
    // trova i primi 3 attori principali
    @Query("SELECT a.name, a.role FROM Actors a WHERE a.film_id = ?1 ORDER BY a.id ASC")
    List<Object[]> findTop3ActorsByFilmId(Integer filmId);


}
