package com.example.serverstaticospring.crew;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CrewRepository extends JpaRepository<Crew, Integer> {

    /**
     * Retrieves the first crew member.
     * @return the first crew member found in the database.
     */
    @Query(value = "SELECT * FROM crew LIMIT 1", nativeQuery = true)
    Crew findFirstCrew();

    /**
     * Finds the director of a specific film by film ID.
     * @param filmId the ID of the film.
     * @return a list of director names associated with the film.
     */
    @Query("SELECT c.name FROM Crew c WHERE c.film_id = ?1 AND c.role = 'Director'")
    List<String> findDirectorByFilmId(Integer filmId);
}