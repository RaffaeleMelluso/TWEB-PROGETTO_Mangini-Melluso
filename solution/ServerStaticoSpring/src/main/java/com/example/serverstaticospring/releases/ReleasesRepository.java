package com.example.serverstaticospring.releases;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ReleasesRepository extends JpaRepository<Releases, Integer> {
    @Query("SELECT r FROM Releases r WHERE r.film_id = ?1")
    List<Releases> findByFilmId(Integer film_id);
}