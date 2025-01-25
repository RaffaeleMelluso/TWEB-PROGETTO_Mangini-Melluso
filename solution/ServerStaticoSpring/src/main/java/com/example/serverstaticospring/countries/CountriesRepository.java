package com.example.serverstaticospring.countries;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CountriesRepository extends JpaRepository<Countries, Integer> {
    @Query("SELECT c.country FROM Countries c WHERE c.film_id = :filmId")
    List<String> findCountriesByFilmId(@Param("filmId") Integer filmId);
}
