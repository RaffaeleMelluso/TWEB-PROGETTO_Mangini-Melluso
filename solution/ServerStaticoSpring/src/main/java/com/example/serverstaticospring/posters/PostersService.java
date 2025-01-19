package com.example.serverstaticospring.posters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PostersService {
    @Autowired
    private PostersRepository postersRepository;

    public List<String> getLinksByFilmId(Integer film_id) {
        return postersRepository.findLinksByFilmId(film_id);
    }
}