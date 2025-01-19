package com.example.serverstaticospring.releases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/releases")
public class ReleasesController {
    @Autowired
    private ReleasesService releasesService;

    @GetMapping("/film/{film_id}")
    public List<Releases> getByFilmId(@PathVariable Integer film_id) {
        return releasesService.getByFilmId(film_id);
    }
}