package com.example.serverstaticospring.actors;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ActorsRepository extends JpaRepository<Actors, Integer> {
    /**
     * Optimized to directly retrieve the first actor without loading the entire database.
     * @return the first actor found in the database.
     */
    @Query(value = "SELECT * FROM actors LIMIT 1", nativeQuery = true)
    Actors findFirstActor();

    /**
     * Finds the top 3 main actors of a specific film.
     * @param filmId the ID of the film.
     * @return a list of object arrays containing the names and roles of the actors.
     */
    @Query("SELECT a.name, a.role FROM Actors a WHERE a.film_id = ?1")
    List<Object[]> findAllActorsByFilmId(Integer filmId);
}