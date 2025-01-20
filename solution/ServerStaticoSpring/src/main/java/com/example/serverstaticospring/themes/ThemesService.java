package com.example.serverstaticospring.themes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ThemesService {
    @Autowired
    private ThemesRepository themesRepository;

    public List<String> getThemesByFilmId(Integer film_id) {
        return themesRepository.findThemesByFilmId(film_id);
    }
}