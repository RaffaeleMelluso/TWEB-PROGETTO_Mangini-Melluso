package com.example.serverstaticospring.oscar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OscarService {
    @Autowired
    private OscarRepository oscarRepository;

    public Oscar getFirstOscar() {
        // Recupera direttamente il primo oscar tramite il repository
        return oscarRepository.findFirstOscar();
    }
}