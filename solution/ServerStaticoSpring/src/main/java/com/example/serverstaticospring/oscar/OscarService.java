package com.example.serverstaticospring.oscar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OscarService {
    @Autowired
    private OscarRepository oscarRepository;

    /**
     * Retrieves a list of Oscars by year and name.
     * Calls the OscarRepository to get the data.
     * @param year the year of the ceremony (optional).
     * @param name the name of the recipient (optional).
     * @return a list of Oscars matching the search criteria.
     */
    public List<Oscar> getOscarsByYearAndName(Integer year, String name) {
        List<Oscar> oscars = oscarRepository.findByYearAndName(year, name);

        // Replace special values
        for (Oscar oscar : oscars) {
            if ("nan".equalsIgnoreCase(oscar.getName())) {
                oscar.setName("Non applicabile");
            }
        }

        return oscars;
    }
}