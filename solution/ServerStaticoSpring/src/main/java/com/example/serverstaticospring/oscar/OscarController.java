package com.example.serverstaticospring.oscar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/oscar")
public class OscarController {
    @Autowired
    private OscarService oscarService;

    @GetMapping("/first")
    public Oscar getFirstOscar() {
        // Restituisce il primo oscar come JSON
        return oscarService.getFirstOscar();
    }
}