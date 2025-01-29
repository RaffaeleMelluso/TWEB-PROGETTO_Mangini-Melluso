package com.example.serverstaticospring.oscar;

import jakarta.persistence.*;

@Entity
public class Oscar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Auto-generated primary key
    private Integer year_film;
    private Integer year_ceremony;
    private Integer ceremony;

    @Column(columnDefinition = "TEXT")
    private String category;

    @Column(columnDefinition = "TEXT")
    private String name;

    @Column(columnDefinition = "TEXT")
    private String film;

    private Boolean winner; // Correct type for a boolean value in Java

    // Getters and setters

    /**
     * Gets the ID of the Oscar.
     * @return the ID of the Oscar.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the ID of the Oscar.
     * @param id the ID to set.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the year of the film.
     * @return the year of the film.
     */
    public Integer getYear_film() {
        return year_film;
    }

    /**
     * Sets the year of the film.
     * @param year_film the year to set.
     */
    public void setYear_film(Integer year_film) {
        this.year_film = year_film;
    }

    /**
     * Gets the year of the ceremony.
     * @return the year of the ceremony.
     */
    public Integer getYear_ceremony() {
        return year_ceremony;
    }

    /**
     * Sets the year of the ceremony.
     * @param year_ceremony the year to set.
     */
    public void setYear_ceremony(Integer year_ceremony) {
        this.year_ceremony = year_ceremony;
    }

    /**
     * Gets the ceremony number.
     * @return the ceremony number.
     */
    public Integer getCeremony() {
        return ceremony;
    }

    /**
     * Sets the ceremony number.
     * @param ceremony the ceremony number to set.
     */
    public void setCeremony(Integer ceremony) {
        this.ceremony = ceremony;
    }

    /**
     * Gets the category of the Oscar.
     * @return the category of the Oscar.
     */
    public String getCategory() {
        return category;
    }

    /**
     * Sets the category of the Oscar.
     * @param category the category to set.
     */
    public void setCategory(String category) {
        this.category = category;
    }

    /**
     * Gets the name of the recipient.
     * @return the name of the recipient.
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name of the recipient.
     * @param name the name to set.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the film associated with the Oscar.
     * @return the film associated with the Oscar.
     */
    public String getFilm() {
        return film;
    }

    /**
     * Sets the film associated with the Oscar.
     * @param film the film to set.
     */
    public void setFilm(String film) {
        this.film = film;
    }

    /**
     * Gets the winner status.
     * @return the winner status.
     */
    public Boolean getWinner() {
        return winner;
    }

    /**
     * Sets the winner status.
     * @param winner the winner status to set.
     */
    public void setWinner(Boolean winner) {
        this.winner = winner;
    }
}