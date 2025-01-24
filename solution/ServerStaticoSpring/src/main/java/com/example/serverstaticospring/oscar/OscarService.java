package com.example.serverstaticospring.oscar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OscarService {
    @Autowired
    private OscarRepository oscarRepository;

    public List<Oscar> getOscarsByYearAndName(Integer year, String name) {
        System.out.println("Cercando per anno: " + year + ", nome: " + name);
        return oscarRepository.findByYearAndName(year, name);
    }
}
