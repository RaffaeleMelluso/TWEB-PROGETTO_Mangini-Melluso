package com.example.serverstaticospring.languages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LanguagesService {
    @Autowired
    private LanguagesRepository languagesRepository;

    public Languages getFirstLanguage() {
        // Recupera direttamente il primo linguaggio tramite il repository
        return languagesRepository.findFirstLanguage();
    }
}