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

    @GetMapping("/first")
    public Crew getFirstCrew() {
        // Restituisce il primo membro della crew come JSON
        return crewService.getFirstCrew();
    }
}