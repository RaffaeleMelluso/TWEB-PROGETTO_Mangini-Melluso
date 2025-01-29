package com.example.serverstaticospring.languages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LanguagesService {
    @Autowired
    private LanguagesRepository languagesRepository;

    /**
     * Retrieves a list of languages by the film ID.
     * @param filmId the ID of the film.
     * @return a list of languages associated with the film.
     */
    public List<Map<String, String>> getLanguagesByFilmId(Integer filmId) {
        List<Object[]> results = languagesRepository.findLanguagesByFilmId(filmId);
        List<Map<String, String>> languages = new ArrayList<>();

        for (Object[] result : results) {
            Map<String, String> language = new HashMap<>();
            language.put("language", (String) result[1]);
            language.put("type", (String) result[2]);
            languages.add(language);
        }

        return languages;
    }
}