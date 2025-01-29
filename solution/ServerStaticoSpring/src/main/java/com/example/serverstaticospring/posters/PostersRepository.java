package com.example.serverstaticospring.posters;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface PostersRepository extends JpaRepository<Posters, Integer> {
    /**
     * Finds links to posters by film ID.
     * @param film_id the ID of the film.
     * @return a list of links to posters associated with the film.
     */
    @Query("SELECT p.link FROM Posters p WHERE p.film_id = ?1")
    List<String> findLinksByFilmId(Integer film_id);
}