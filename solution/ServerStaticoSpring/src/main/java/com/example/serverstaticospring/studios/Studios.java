package com.example.serverstaticospring.studios;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Studios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Auto-generated primary key
    private Integer film_id;

    @Column(columnDefinition = "TEXT")
    private String studio;

    // Getters and setters

    /**
     * Gets the ID of the studio.
     * @return the ID of the studio.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the ID of the studio.
     * @param id the ID to set.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the film ID associated with the studio.
     * @return the film ID.
     */
    public Integer getFilm_id() {
        return film_id;
    }

    /**
     * Sets the film ID associated with the studio.
     * @param film_id the film ID to set.
     */
    public void setFilm_id(Integer film_id) {
        this.film_id = film_id;
    }

    /**
     * Gets the name of the studio.
     * @return the name of the studio.
     */
    public String getStudio() {
        return studio;
    }

    /**
     * Sets the name of the studio.
     * @param studio the name to set.
     */
    public void setStudio(String studio) {
        this.studio = studio;
    }
}