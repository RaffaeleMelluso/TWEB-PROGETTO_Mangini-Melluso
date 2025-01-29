package com.example.serverstaticospring.actors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActorsService {
    @Autowired
    private ActorsRepository actorsRepository;

    /**
     * Method called by the ActorsController via the /actors/first route.
     * This method uses the ActorsRepository to retrieve the first actor from the database.
     * @return the first actor found in the database.
     */
    public Actors getFirstActor() {
        // Directly uses the optimized query in the repository
        return actorsRepository.findFirstActor();
    }
}