package com.example.serverstaticospring.crew;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CrewRepository extends JpaRepository<Crew, Integer> {

    @Query(value = "SELECT * FROM crew LIMIT 1", nativeQuery = true)
    Crew findFirstCrew();

    @Query("SELECT c.name FROM Crew c WHERE c.film_id = ?1 AND c.role = 'Director'")
    List<String> findDirectorByFilmId(Integer filmId);
}