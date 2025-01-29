package com.example.serverstaticospring.releases;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ReleasesRepository extends JpaRepository<Releases, Integer> {
    /**
     * Finds releases by film ID.
     * @param film_id the ID of the film.
     * @return a list of releases associated with the film.
     */
    @Query("SELECT r FROM Releases r WHERE r.film_id = ?1")
    List<Releases> findByFilmId(Integer film_id);
}