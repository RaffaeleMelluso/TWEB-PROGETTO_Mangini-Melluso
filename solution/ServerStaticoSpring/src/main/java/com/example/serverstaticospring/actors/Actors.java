package com.example.serverstaticospring.actors;

import jakarta.persistence.*;

@Entity
public class Actors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Auto-generated ID
    private Integer film_id;

    @Column(columnDefinition = "TEXT")
    private String name;

    @Column(columnDefinition = "TEXT")
    private String role;

    // Getters and Setters

    /**
     * Gets the ID of the actor.
     * @return the ID of the actor.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the ID of the actor.
     * @param id the ID to set.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the film ID associated with the actor.
     * @return the film ID.
     */
    public Integer getFilm_id() {
        return film_id;
    }

    /**
     * Sets the film ID associated with the actor.
     * @param film_id the film ID to set.
     */
    public void setFilm_id(Integer film_id) {
        this.film_id = film_id;
    }

    /**
     * Gets the name of the actor.
     * @return the name of the actor.
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name of the actor.
     * @param name the name to set.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the role of the actor.
     * @return the role of the actor.
     */
    public String getRole() {
        return role;
    }

    /**
     * Sets the role of the actor.
     * @param role the role to set.
     */
    public void setRole(String role) {
        this.role = role;
    }
}