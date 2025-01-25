package com.example.serverstaticospring.languages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/languages")
public class LanguagesController {
    @Autowired
    private LanguagesService languagesService;

    @GetMapping("/{filmId}")
    public List<Map<String, String>> getLanguagesByFilmId(@PathVariable Integer filmId) {
        return languagesService.getLanguagesByFilmId(filmId);
    }
}
