package com.example.serverstaticospring.oscar;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OscarRepository extends JpaRepository<Oscar, Integer> {
    // Query ottimizzata per ottenere il primo record
    @Query(value = "SELECT * FROM oscar LIMIT 1", nativeQuery = true)
    Oscar findFirstOscar();
}