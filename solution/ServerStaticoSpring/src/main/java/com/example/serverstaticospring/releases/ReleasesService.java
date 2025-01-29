package com.example.serverstaticospring.releases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReleasesService {
    @Autowired
    private ReleasesRepository releasesRepository;

    /**
     * Retrieves releases by film ID.
     * Calls the ReleasesRepository to get the data.
     * @param film_id the ID of the film.
     * @return a list of releases associated with the film.
     */
    public List<Releases> getByFilmId(Integer film_id) {
        return releasesRepository.findByFilmId(film_id);
    }
}