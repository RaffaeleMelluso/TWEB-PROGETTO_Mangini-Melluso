package com.example.serverstaticospring.studios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface StudiosRepository extends JpaRepository<Studios, Integer> {
    // query per trovare lo studio di un film
    @Query("SELECT s.studio FROM Studios s WHERE s.film_id = ?1")
    List<String> findStudiosByFilmId(Integer film_id);
}