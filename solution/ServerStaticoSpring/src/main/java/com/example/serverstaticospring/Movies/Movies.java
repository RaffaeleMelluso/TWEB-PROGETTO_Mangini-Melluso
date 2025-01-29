package com.example.serverstaticospring.Movies;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Movies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "TEXT")
    private String name;
    private Integer year;

    @Column(columnDefinition = "TEXT")
    private String tagline;

    @Column(columnDefinition = "TEXT") // Increase the length to 1000
    private String description;

    private Integer minute;
    private Float rating;

    // Getters and setters

    /**
     * Gets the ID of the movie.
     * Used in various parts of the application to retrieve the movie ID.
     * @return the ID of the movie.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the ID of the movie.
     * Typically used when creating or updating a movie record.
     * @param id the ID to set.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the name of the movie.
     * Used in search and display functionalities.
     * @return the name of the movie.
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name of the movie.
     * Typically used when creating or updating a movie record.
     * @param name the name to set.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the release year of the movie.
     * Used in search and display functionalities.
     * @return the release year of the movie.
     */
    public Integer getYear() {
        return year;
    }

    /**
     * Sets the release year of the movie.
     * Typically used when creating or updating a movie record.
     * @param year the release year to set.
     */
    public void setYear(Integer year) {
        this.year = year;
    }

    /**
     * Gets the tagline of the movie.
     * Used in display functionalities.
     * @return the tagline of the movie.
     */
    public String getTagline() {
        return tagline;
    }

    /**
     * Sets the tagline of the movie.
     * Typically used when creating or updating a movie record.
     * @param tagline the tagline to set.
     */
    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    /**
     * Gets the description of the movie.
     * Used in display functionalities.
     * @return the description of the movie.
     */
    public String getDescription() {
        return description;
    }

    /**
     * Sets the description of the movie.
     * Typically used when creating or updating a movie record.
     * @param description the description to set.
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Gets the duration of the movie in minutes.
     * Used in display functionalities.
     * @return the duration of the movie in minutes.
     */
    public Integer getMinute() {
        return minute;
    }

    /**
     * Sets the duration of the movie in minutes.
     * Typically used when creating or updating a movie record.
     * @param minute the duration to set.
     */
    public void setMinute(Integer minute) {
        this.minute = minute;
    }

    /**
     * Gets the rating of the movie.
     * Used in search and display functionalities.
     * @return the rating of the movie.
     */
    public Float getRating() {
        return rating;
    }

    /**
     * Sets the rating of the movie.
     * Typically used when creating or updating a movie record.
     * @param rating the rating to set.
     */
    public void setRating(Float rating) {
        this.rating = rating;
    }
}