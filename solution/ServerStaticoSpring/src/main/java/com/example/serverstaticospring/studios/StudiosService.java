package com.example.serverstaticospring.studios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudiosService {
    @Autowired
    private StudiosRepository studiosRepository;

    public List<String> getStudiosByFilmId(Integer film_id) {
        return studiosRepository.findStudiosByFilmId(film_id);
    }
}