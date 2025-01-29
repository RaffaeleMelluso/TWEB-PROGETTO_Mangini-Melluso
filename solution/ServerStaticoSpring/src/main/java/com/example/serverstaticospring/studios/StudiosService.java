package com.example.serverstaticospring.studios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudiosService {
    @Autowired
    private StudiosRepository studiosRepository;

    /**
     * Retrieves studios by film ID.
     * Calls the StudiosRepository to get the data.
     * @param film_id the ID of the film.
     * @return a list of studios associated with the film.
     */
    public List<String> getStudiosByFilmId(Integer film_id) {
        return studiosRepository.findStudiosByFilmId(film_id);
    }
}