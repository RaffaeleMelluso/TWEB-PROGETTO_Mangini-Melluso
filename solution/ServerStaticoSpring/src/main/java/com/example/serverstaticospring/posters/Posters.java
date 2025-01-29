package com.example.serverstaticospring.posters;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Posters {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Auto-generated primary key
    private Integer film_id;

    @Column(columnDefinition = "TEXT")
    private String link;

    // Getters and setters

    /**
     * Gets the ID of the poster.
     * @return the ID of the poster.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the ID of the poster.
     * @param id the ID to set.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the film ID associated with the poster.
     * @return the film ID.
     */
    public Integer getFilm_id() {
        return film_id;
    }

    /**
     * Sets the film ID associated with the poster.
     * @param film_id the film ID to set.
     */
    public void setFilm_id(Integer film_id) {
        this.film_id = film_id;
    }

    /**
     * Gets the link to the poster image.
     * @return the link to the poster image.
     */
    public String getLink() {
        return link;
    }

    /**
     * Sets the link to the poster image.
     * @param link the link to set.
     */
    public void setLink(String link) {
        this.link = link;
    }
}