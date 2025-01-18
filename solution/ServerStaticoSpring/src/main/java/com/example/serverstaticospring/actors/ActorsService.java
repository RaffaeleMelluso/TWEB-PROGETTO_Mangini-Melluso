package com.example.serverstaticospring.actors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActorsService {
    @Autowired
    private ActorsRepository actorsRepository;

    public Actors getFirstActor() {
        // Utilizza direttamente la query ottimizzata nel repository
        return actorsRepository.findFirstActor();
    }
}