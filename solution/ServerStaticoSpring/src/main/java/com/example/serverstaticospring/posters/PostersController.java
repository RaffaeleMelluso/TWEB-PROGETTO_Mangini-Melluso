package com.example.serverstaticospring.posters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/posters")
public class PostersController {
    @Autowired
    private PostersService postersService;

    @GetMapping("/link/{film_id}")
    public List<String> getLinksByFilmId(@PathVariable Integer film_id) {
        return postersService.getLinksByFilmId(film_id);
    }
}