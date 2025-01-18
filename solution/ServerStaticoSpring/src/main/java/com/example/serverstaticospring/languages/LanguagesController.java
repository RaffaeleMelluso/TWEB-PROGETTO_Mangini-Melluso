package com.example.serverstaticospring.languages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/languages")
public class LanguagesController {
    @Autowired
    private LanguagesService languagesService;

    @GetMapping("/first")
    public Languages getFirstLanguage() {
        // Restituisce il primo linguaggio come JSON
        return languagesService.getFirstLanguage();
    }
}