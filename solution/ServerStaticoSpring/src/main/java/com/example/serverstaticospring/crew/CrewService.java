package com.example.serverstaticospring.crew;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrewService {
    @Autowired
    private CrewRepository crewRepository;

    /**
     * Retrieves the first crew member.
     * @return the first crew member found in the database.
     */
    public Crew getFirstCrew() {
        return crewRepository.findFirstCrew();
    }
}