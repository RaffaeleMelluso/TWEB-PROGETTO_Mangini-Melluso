package com.example.serverstaticospring.countries;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountriesService {
    @Autowired
    private CountriesRepository countriesRepository;

    /**
     * Retrieves a list of countries by the film ID.
     * @param filmId the ID of the film.
     * @return a list of country names associated with the film.
     */
    public List<String> getCountriesByFilmId(Integer filmId) {
        return countriesRepository.findCountriesByFilmId(filmId);
    }
}