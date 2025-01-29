package com.example.serverstaticospring.languages;

import jakarta.persistence.*;

@Entity
public class Languages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Auto-generated primary key
    private Integer film_id;

    @Column(columnDefinition = "TEXT")
    private String type;

    @Column(columnDefinition = "TEXT")
    private String language;

    // Getters and Setters

    /**
     * Retrieves the ID of the language.
     * @return the ID of the language.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the ID of the language.
     * @param id the ID to set.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Retrieves the film ID associated with the language.
     * @return the film ID.
     */
    public Integer getFilm_id() {
        return film_id;
    }

    /**
     * Sets the film ID associated with the language.
     * @param film_id the film ID to set.
     */
    public void setFilm_id(Integer film_id) {
        this.film_id = film_id;
    }

    /**
     * Retrieves the type of the language.
     * @return the type of the language.
     */
    public String getType() {
        return type;
    }

    /**
     * Sets the type of the language.
     * @param type the type to set.
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * Retrieves the language name.
     * @return the language name.
     */
    public String getLanguage() {
        return language;
    }

    /**
     * Sets the language name.
     * @param language the language name to set.
     */
    public void setLanguage(String language) {
        this.language = language;
    }
}