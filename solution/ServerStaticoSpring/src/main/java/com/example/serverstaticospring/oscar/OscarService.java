package com.example.serverstaticospring.oscar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class   OscarService {
    @Autowired
    private OscarRepository oscarRepository;

    public List<Oscar> getOscarsByYearAndName(Integer year, String name) {
        List<Oscar> oscars = oscarRepository.findByYearAndName(year, name);

        // Sostituisci i valori speciali
        for (Oscar oscar : oscars) {
            if ("nan".equalsIgnoreCase(oscar.getName())) {
                oscar.setName("Non applicabile");
            }
        }

        return oscars;
    }
}
