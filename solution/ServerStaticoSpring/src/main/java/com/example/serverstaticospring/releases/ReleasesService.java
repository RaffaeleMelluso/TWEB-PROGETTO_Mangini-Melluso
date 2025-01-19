package com.example.serverstaticospring.releases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReleasesService {
    @Autowired
    private ReleasesRepository releasesRepository;

    public List<Releases> getByFilmId(Integer film_id) {
        return releasesRepository.findByFilmId(film_id);
    }
}