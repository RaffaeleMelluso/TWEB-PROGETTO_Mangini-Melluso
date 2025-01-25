package com.example.serverstaticospring.countries;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountriesService {
    @Autowired
    private CountriesRepository countriesRepository;

    public List<String> getCountriesByFilmId(Integer filmId) {
        return countriesRepository.findCountriesByFilmId(filmId);
    }
}


