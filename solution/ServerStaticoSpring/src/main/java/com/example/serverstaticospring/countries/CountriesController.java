package com.example.serverstaticospring.countries;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountriesController {
    @Autowired
    private CountriesService countriesService;

    @GetMapping("/{filmId}")
    public List<String> getCountriesByFilmId(@PathVariable Integer filmId) {
        return countriesService.getCountriesByFilmId(filmId);
    }
}
