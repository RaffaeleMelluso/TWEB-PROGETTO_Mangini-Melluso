package com.example.serverstaticospring.actors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/actors")
public class ActorsController {
    @Autowired
    private ActorsService actorsService;

    @GetMapping("/first")
    public Actors getFirstActor() {
        // Restituisce il risultato come JSON anziché stamparlo in console
        return actorsService.getFirstActor();
    }
}