package com.example.serverstaticospring.countries;

import jakarta.persistence.*;

@Entity
public class Countries {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Auto-generated primary key
    private Integer film_id;

    @Column(columnDefinition = "TEXT")
    private String country;

    // Getters and Setters

    /**
     * Gets the ID of the country.
     * @return the ID of the country.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the ID of the country.
     * @param id the ID to set.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the film ID associated with the country.
     * @return the film ID.
     */
    public Integer getFilm_id() {
        return film_id;
    }

    /**
     * Sets the film ID associated with the country.
     * @param film_id the film ID to set.
     */
    public void setFilm_id(Integer film_id) {
        this.film_id = film_id;
    }

    /**
     * Gets the name of the country.
     * @return the name of the country.
     */
    public String getCountry() {
        return country;
    }

    /**
     * Sets the name of the country.
     * @param country the name to set.
     */
    public void setCountry(String country) {
        this.country = country;
    }
}