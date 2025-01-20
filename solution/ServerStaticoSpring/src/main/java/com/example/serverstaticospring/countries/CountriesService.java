package com.example.serverstaticospring.countries;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountriesService {
    @Autowired
    private CountriesRepository countriesRepository;

    public Countries getFirstCountry() {
        // Recupera direttamente il primo paese tramite il repository
        return countriesRepository.findFirstCountry();
    }
}
