package com.example.serverstaticospring.oscar;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OscarRepository extends JpaRepository<Oscar, Integer> {
    @Query("SELECT o FROM Oscar o " +
            "WHERE (:year IS NULL OR o.year_ceremony = :year) " +
            "AND (:name IS NULL OR LOWER(o.name) LIKE LOWER(CONCAT('%', :name, '%')))")
    List<Oscar> findByYearAndName(@Param("year") Integer year, @Param("name") String name);

}