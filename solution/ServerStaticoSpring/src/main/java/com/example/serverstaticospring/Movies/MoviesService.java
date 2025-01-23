package com.example.serverstaticospring.Movies;

import com.example.serverstaticospring.actors.ActorsRepository;
import com.example.serverstaticospring.crew.CrewRepository;
import com.example.serverstaticospring.posters.PostersRepository;
import com.example.serverstaticospring.studios.StudiosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MoviesService {

    @Autowired
    private MoviesRepository movieRepository;

    @Autowired
    private CrewRepository crewRepository;

    @Autowired
    private ActorsRepository actorsRepository;

    @Autowired
    private StudiosRepository studiosRepository;

    @Autowired
    private PostersRepository postersRepository;

    // Metodo per ottenere gli ultimi 10 film in USA
    public List<Object[]> getLast10MoviesInUSA() {
        return movieRepository.findLast10MoviesInUSA();
    }

    // Metodo per ottenere i top 5 film per genere
    public List<Object[]> getTop5ByGenreWithDetails(String genre) {
        return movieRepository.findTop5ByGenreWithDetails(genre, PageRequest.of(0, 5)).getContent();
    }

    // Metodo per ottenere i dettagli del film
    public Map<String, Object> getMovieDetails(Integer filmId) {
        Map<String, Object> details = new HashMap<>();

        // Ottieni i dati base del film
        Movies movie = movieRepository.findById(filmId).orElse(null);
        if (movie == null) {
            return null;
        }

        details.put("name", movie.getName());
        details.put("description", movie.getDescription());
        details.put("rating", movie.getRating() == -1 ? "Sconosciuto" : movie.getRating().toString());
        details.put("tagline", movie.getTagline());
        details.put("year", movie.getYear());

        // Ottieni il regista
        String director = crewRepository.findDirectorByFilmId(filmId);
        details.put("director", director != null ? director : "Non disponibile");

        // Ottieni i primi 3 attori
        List<Object[]> actors = actorsRepository.findTop3ActorsByFilmId(filmId);
        List<Map<String, String>> actorDetails = new ArrayList<>();
        for (Object[] actor : actors) {
            Map<String, String> actorMap = new HashMap<>();
            actorMap.put("name", (String) actor[0]);
            actorMap.put("role", (String) actor[1]);
            actorDetails.add(actorMap);
        }
        details.put("actors", actorDetails.size() > 3 ? actorDetails.subList(0, 3) : actorDetails);

        // Ottieni gli studios
        List<String> studios = studiosRepository.findStudiosByFilmId(filmId);
        details.put("studios", studios.isEmpty() ? List.of("Non disponibile") : studios);

        // Ottieni il link del poster
        List<String> posters = postersRepository.findLinksByFilmId(filmId);
        String posterLink = posters.isEmpty() ? "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg" : posters.get(0);
        details.put("image", posterLink);

        return details;
    }


}
