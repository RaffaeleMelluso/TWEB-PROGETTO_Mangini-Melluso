package com.example.serverstaticospring.oscar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/oscar")
public class OscarController {
    @Autowired
    private OscarService oscarService;

    @GetMapping("/search")
    public List<Oscar> searchOscars(
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) String name
    ) {
        System.out.println("Parametri ricevuti - year: " + year + ", name: " + name);
        return oscarService.getOscarsByYearAndName(year, name);
    }
}
