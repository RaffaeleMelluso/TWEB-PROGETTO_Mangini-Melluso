package com.example.serverstaticospring.themes;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Themes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Auto-generated primary key
    private Integer film_id;

    @Column(columnDefinition = "TEXT")
    private String theme;

    // Getters and setters

    /**
     * Gets the ID of the theme.
     * @return the ID of the theme.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the ID of the theme.
     * @param id the ID to set.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the film ID associated with the theme.
     * @return the film ID.
     */
    public Integer getFilm_id() {
        return film_id;
    }

    /**
     * Sets the film ID associated with the theme.
     * @param film_id the film ID to set.
     */
    public void setFilm_id(Integer film_id) {
        this.film_id = film_id;
    }

    /**
     * Gets the theme.
     * @return the theme.
     */
    public String getTheme() {
        return theme;
    }

    /**
     * Sets the theme.
     * @param theme the theme to set.
     */
    public void setTheme(String theme) {
        this.theme = theme;
    }
}