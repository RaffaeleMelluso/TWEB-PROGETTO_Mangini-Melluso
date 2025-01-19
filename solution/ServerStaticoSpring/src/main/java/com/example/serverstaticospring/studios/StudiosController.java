package com.example.serverstaticospring.studios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/studios")
public class StudiosController {
    @Autowired
    private StudiosService studiosService;

    @GetMapping("/film/{film_id}")
    public List<String> getStudiosByFilmId(@PathVariable Integer film_id) {
        return studiosService.getStudiosByFilmId(film_id);
    }
}