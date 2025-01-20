package com.example.serverstaticospring.posters;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface PostersRepository extends JpaRepository<Posters, Integer> {
    @Query("SELECT p.link FROM Posters p WHERE p.film_id = ?1")
    List<String> findLinksByFilmId(Integer film_id);
}