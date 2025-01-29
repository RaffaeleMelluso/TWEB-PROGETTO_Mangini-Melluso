package com.example.serverstaticospring.releases;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import java.util.Date;

@Entity
public class Releases {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Auto-generated primary key
    private Integer film_id;

    @Column(columnDefinition = "TEXT")
    private String country;

    private Date date;

    @Column(columnDefinition = "TEXT")
    private String type;

    @Column(columnDefinition = "TEXT")
    private String rating;

    // Getters and setters

    /**
     * Gets the ID of the release.
     * @return the ID of the release.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the ID of the release.
     * @param id the ID to set.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the film ID associated with the release.
     * @return the film ID.
     */
    public Integer getFilm_id() {
        return film_id;
    }

    /**
     * Sets the film ID associated with the release.
     * @param film_id the film ID to set.
     */
    public void setFilm_id(Integer film_id) {
        this.film_id = film_id;
    }

    /**
     * Gets the country of the release.
     * @return the country of the release.
     */
    public String getCountry() {
        return country;
    }

    /**
     * Sets the country of the release.
     * @param country the country to set.
     */
    public void setCountry(String country) {
        this.country = country;
    }

    /**
     * Gets the date of the release.
     * @return the date of the release.
     */
    public Date getDate() {
        return date;
    }

    /**
     * Sets the date of the release.
     * @param date the date to set.
     */
    public void setDate(Date date) {
        this.date = date;
    }

    /**
     * Gets the type of the release.
     * @return the type of the release.
     */
    public String getType() {
        return type;
    }

    /**
     * Sets the type of the release.
     * @param type the type to set.
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * Gets the rating of the release.
     * @return the rating of the release.
     */
    public String getRating() {
        return rating;
    }

    /**
     * Sets the rating of the release.
     * @param rating the rating to set.
     */
    public void setRating(String rating) {
        this.rating = rating;
    }
}