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

    /**
     * Route called via an HTTP GET request to /actors/first.
     * This method calls the ActorsService to get the first actor.
     * @return the first actor found in the database.
     */
    @GetMapping("/first")
    public Actors getFirstActor() {
        // Returns the result as JSON instead of printing it to the console
        return actorsService.getFirstActor();
    }
}