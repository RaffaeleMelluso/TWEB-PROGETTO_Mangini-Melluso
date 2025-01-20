package com.example.serverstaticospring.crew;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrewService {
    @Autowired
    private CrewRepository crewRepository;

    public Crew getFirstCrew() {
        // Recupera direttamente il primo membro della crew tramite il repository
        return crewRepository.findFirstCrew();
    }
}