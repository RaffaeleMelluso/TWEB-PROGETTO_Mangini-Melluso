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

    /**
     * Retrieves the last 10 movies released in the USA.
     * Calls the MoviesRepository to get the data.
     * @return a list of the last 10 movies released in the USA.
     */
    public List<Object[]> getLast10MoviesInUSA() {
        return movieRepository.findLast10MoviesInUSA();
    }

    /**
     * Retrieves the top 5 movies by genre with details.
     * Calls the MoviesRepository to get the data.
     * @param genre the genre of the movies.
     * @return a list of the top 5 movies by genre with details.
     */
    public List<Object[]> getTop5ByGenreWithDetails(String genre) {
        return movieRepository.findTop5ByGenreWithDetails(genre, PageRequest.of(0, 5)).getContent();
    }

    /**
     * Retrieves the posters of the 5 most recent movies.
     * Calls the MoviesRepository to get the data.
     * @return a list of the posters of the 5 most recent movies.
     */
    public List<Object[]> getRecentMoviePosters() {
        return movieRepository.findRecentMoviePosters();
    }

    /**
     * Retrieves the top 3 movies by rating.
     * Calls the MoviesRepository to get the data.
     * @return a list of the top 3 movies by rating.
     */
    public List<Object[]> getTop3MoviesByRating() {
        return movieRepository.findTop3MoviesByRating();
    }

    /**
     * Retrieves the details of a specific movie.
     * Calls various repositories to get the data.
     * @param filmId the ID of the movie.
     * @return a map containing the movie details.
     */
    public Map<String, Object> getMovieDetails(Integer filmId) {
        Map<String, Object> details = new HashMap<>();

        // Get basic movie data
        Movies movie = movieRepository.findById(filmId).orElse(null);
        if (movie == null) {
            return null;
        }
        // Gets some movie data after some checks
        details.put("name", movie.getName());
        details.put("description", movie.getDescription().equals("nan") ? "Non disponibile" : movie.getDescription());
        details.put("rating", movie.getRating() == -1 ? "Sconosciuto" : movie.getRating().toString());
        details.put("tagline", movie.getTagline().equals("nan") ? "Non disponibile" : movie.getTagline());
        details.put("year", movie.getYear());

        // Get directors
        List<String> directors = crewRepository.findDirectorByFilmId(filmId);
        details.put("directors", directors.isEmpty() ? List.of("Non disponibile") : directors);

        // Get countries
        List<String> countries = countriesRepository.findCountriesByFilmId(filmId);
        details.put("countries", countries.isEmpty() ? List.of("Non disponibile") : countries);

        // Get languages
        List<Object[]> languages = languagesRepository.findLanguagesByFilmId(filmId);
        List<Map<String, String>> languageDetails = new ArrayList<>();
        for (Object[] lang : languages) {
            Map<String, String> langMap = new HashMap<>();
            langMap.put("language", (String) lang[1]);
            langMap.put("type", (String) lang[2]);
            languageDetails.add(langMap);
        }
        details.put("languages", languageDetails);

        // Get actors
        List<Object[]> actors = actorsRepository.findAllActorsByFilmId(filmId);
        List<Map<String, String>> actorDetails = new ArrayList<>();
        for (Object[] actor : actors) {
            Map<String, String> actorMap = new HashMap<>();
            actorMap.put("name", (String) actor[0]);
            actorMap.put("role", (String) actor[1]);
            actorDetails.add(actorMap);
        }
        details.put("actors", actorDetails);

        // Get studios
        List<String> studios = studiosRepository.findStudiosByFilmId(filmId);
        details.put("studios", studios.isEmpty() ? List.of("Non disponibile") : studios);

        // Get poster link
        List<String> posters = postersRepository.findLinksByFilmId(filmId);
        String posterLink = posters.isEmpty() ? "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg" : posters.get(0);
        details.put("image", posterLink);

        return details;
    }

    /**
     * Searches for movies by name and genre.
     * Calls the MoviesRepository to get the data.
     * @param name the name of the movie (optional).
     * @param genre the genre of the movie (optional).
     * @return a list of movies matching the search criteria.
     */
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