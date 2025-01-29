package com.example.serverstaticospring.studios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface StudiosRepository extends JpaRepository<Studios, Integer> {
    /**
     * Finds studios by film ID.
     * @param film_id the ID of the film.
     * @return a list of studios associated with the film.
     */
    @Query("SELECT s.studio FROM Studios s WHERE s.film_id = ?1")
    List<String> findStudiosByFilmId(Integer film_id);
}