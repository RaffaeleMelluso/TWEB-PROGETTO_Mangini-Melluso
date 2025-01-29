package com.example.serverstaticospring.crew;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/crew")
public class CrewController {
    @Autowired
    private CrewService crewService;

    /**
     * Route called via a GET request to /crew/first.
     * This method calls the CrewService to get the first crew member.
     * @return the first crew member found in the database via json.
     */
    @GetMapping("/first")
    public Crew getFirstCrew() {
        return crewService.getFirstCrew();
    }
}