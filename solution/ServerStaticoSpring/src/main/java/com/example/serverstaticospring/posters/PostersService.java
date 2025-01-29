package com.example.serverstaticospring.posters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PostersService {
    @Autowired
    private PostersRepository postersRepository;

    /**
     * Retrieves links to posters by film ID.
     * Calls the PostersRepository to get the data.
     * @param film_id the ID of the film.
     * @return a list of links to posters associated with the film.
     */
    public List<String> getLinksByFilmId(Integer film_id) {
        return postersRepository.findLinksByFilmId(film_id);
    }
}