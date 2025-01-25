package com.example.serverstaticospring.Movies;

import com.example.serverstaticospring.actors.ActorsRepository;
import com.example.serverstaticospring.countries.CountriesRepository;
import com.example.serverstaticospring.crew.CrewRepository;
import com.example.serverstaticospring.languages.LanguagesRepository;
import com.example.serverstaticospring.posters.PostersRepository;
import com.example.serverstaticospring.studios.StudiosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

    @Autowired
    private CountriesRepository countriesRepository;

    @Autowired
    private LanguagesRepository languagesRepository;

    // Metodo per ottenere gli ultimi 10 film in USA
    public List<Object[]> getLast10MoviesInUSA() {
        return movieRepository.findLast10MoviesInUSA();
    }

    // Metodo per ottenere i top 5 film per genere
    public List<Object[]> getTop5ByGenreWithDetails(String genre) {
        return movieRepository.findTop5ByGenreWithDetails(genre, PageRequest.of(0, 5)).getContent();
    }

    // Metodo per ottenere i top 3 film recenti con poster
    public List<Object[]> getRecentMoviePosters() {
        return movieRepository.findRecentMoviePosters();
    }


    // Metodo per ottenere i top 3 film per rating
    public List<Object[]> getTop3MoviesByRating() {
        return movieRepository.findTop3MoviesByRating();
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
        details.put("description", movie.getDescription().equals("nan") ? "Non disponibile" : movie.getDescription());
        details.put("rating", movie.getRating() == -1 ? "Sconosciuto" : movie.getRating().toString());
        details.put("tagline", movie.getTagline().equals("nan") ? "Non disponibile" : movie.getTagline());
        details.put("year", movie.getYear());

        // Ottieni i registi
        List<String> directors = crewRepository.findDirectorByFilmId(filmId);
        details.put("directors", directors.isEmpty() ? List.of("Non disponibile") : directors);

        // Ottieni i paesi
        List<String> countries = countriesRepository.findCountriesByFilmId(filmId);
        details.put("countries", countries.isEmpty() ? List.of("Non disponibile") : countries);

        // Ottieni le lingue
        List<Object[]> languages = languagesRepository.findLanguagesByFilmId(filmId);
        List<Map<String, String>> languageDetails = new ArrayList<>();
        for (Object[] lang : languages) {
            Map<String, String> langMap = new HashMap<>();
            langMap.put("language", (String) lang[1]);
            langMap.put("type", (String) lang[2]);
            languageDetails.add(langMap);
        }
        details.put("languages", languageDetails);

        // Ottieni tutti gli attori
        List<Object[]> actors = actorsRepository.findAllActorsByFilmId(filmId);
        List<Map<String, String>> actorDetails = new ArrayList<>();
        for (Object[] actor : actors) {
            Map<String, String> actorMap = new HashMap<>();
            actorMap.put("name", (String) actor[0]);
            actorMap.put("role", (String) actor[1]);
            actorDetails.add(actorMap);
        }
        details.put("actors", actorDetails);

        // Ottieni gli studios
        List<String> studios = studiosRepository.findStudiosByFilmId(filmId);
        details.put("studios", studios.isEmpty() ? List.of("Non disponibile") : studios);

        // Ottieni il link del poster
        List<String> posters = postersRepository.findLinksByFilmId(filmId);
        String posterLink = posters.isEmpty() ? "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg" : posters.get(0);
        details.put("image", posterLink);

        return details;
    }

    public List<Map<String, Object>> searchMovies(String name, String genre) {
        Pageable limit = PageRequest.of(0, 20);
        List<Object[]> results = movieRepository.findByNameAndGenreWithPoster(name, genre, limit);
        List<Map<String, Object>> movies = new ArrayList<>();

        for (Object[] result : results) {
            Movies movie = (Movies) result[0];
            String posterLink = (String) result[1];

            Map<String, Object> movieDetails = new HashMap<>();
            movieDetails.put("id", movie.getId());
            movieDetails.put("name", movie.getName());
            movieDetails.put("year", movie.getYear());
            movieDetails.put("tagline", movie.getTagline());
            movieDetails.put("description", movie.getDescription());
            movieDetails.put("minute", movie.getMinute());
            movieDetails.put("rating", movie.getRating());
            movieDetails.put("poster", posterLink != null ? posterLink : "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg");

            movies.add(movieDetails);
        }

        return movies;
    }





}
