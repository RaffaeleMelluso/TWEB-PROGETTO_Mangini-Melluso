package com.example.serverstaticospring.crew;

import jakarta.persistence.*;

@Entity
public class Crew {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Auto-generated primary key
    private Integer film_id;

    @Column(columnDefinition = "TEXT")
    private String name;

    @Column(columnDefinition = "TEXT")
    private String role;

    // Getters and Setters

    /**
     * Gets the ID of the crew member.
     * @return the ID of the crew member.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the ID of the crew member.
     * @param id the ID to set.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the film ID associated with the crew member.
     * @return the film ID.
     */
    public Integer getFilm_id() {
        return film_id;
    }

    /**
     * Sets the film ID associated with the crew member.
     * @param film_id the film ID to set.
     */
    public void setFilm_id(Integer film_id) {
        this.film_id = film_id;
    }

    /**
     * Gets the name of the crew member.
     * @return the name of the crew member.
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name of the crew member.
     * @param name the name to set.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the role of the crew member.
     * @return the role of the crew member.
     */
    public String getRole() {
        return role;
    }

    /**
     * Sets the role of the crew member.
     * @param role the role to set.
     */
    public void setRole(String role) {
        this.role = role;
    }
}