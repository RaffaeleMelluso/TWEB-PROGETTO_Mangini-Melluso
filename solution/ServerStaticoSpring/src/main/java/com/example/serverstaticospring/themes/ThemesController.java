package com.example.serverstaticospring.themes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/themes")
public class ThemesController {
    @Autowired
    private ThemesService themesService;

    @GetMapping("/film/{film_id}")
    public List<String> getThemesByFilmId(@PathVariable Integer film_id) {
        return themesService.getThemesByFilmId(film_id);
    }
}