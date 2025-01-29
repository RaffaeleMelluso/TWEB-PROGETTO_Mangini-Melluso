package com.example.serverstaticospring.themes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ThemesService {
    @Autowired
    private ThemesRepository themesRepository;

    /**
     * Retrieves themes by film ID.
     * Calls the ThemesRepository to get the data.
     * @param film_id the ID of the film.
     * @return a list of themes associated with the film.
     */
    public List<String> getThemesByFilmId(Integer film_id) {
        return themesRepository.findThemesByFilmId(film_id);
    }
}