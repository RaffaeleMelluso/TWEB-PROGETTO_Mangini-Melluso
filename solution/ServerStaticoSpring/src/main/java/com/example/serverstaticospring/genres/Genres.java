package com.example.serverstaticospring.genres;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Genres {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Auto-generated primary key
    private Integer film_id;

    @Column(columnDefinition = "TEXT")
    private String genre;

    // Getters and setters
    /**
     * Gets the ID of the genre.
     * @return the ID of the genre.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the ID of the genre.
     * @param id the ID to set.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the ID of the film.
     * @return the ID of the film.
     */
    public Integer getFilm_id() {
        return film_id;
    }

    /**
     * Sets the ID of the film.
     * @param film_id the ID to set.
     */
    public void setFilm_id(Integer film_id) {
        this.film_id = film_id;
    }

    /**
     * Gets the genre.
     * @return the genre.
     */
    public String getGenre() {
        return genre;
    }

    /**
     * Sets the genre.
     * @param genre the genre to set.
     */
    public void setGenre(String genre) {
        this.genre = genre;
    }
}