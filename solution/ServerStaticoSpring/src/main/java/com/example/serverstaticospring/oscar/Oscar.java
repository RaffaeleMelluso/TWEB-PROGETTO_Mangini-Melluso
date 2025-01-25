package com.example.serverstaticospring.oscar;

import jakarta.persistence.*;

@Entity
public class Oscar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Chiave primaria autogenerata
    private Integer year_film;
    private Integer year_ceremony;
    private Integer ceremony;

    @Column(columnDefinition = "TEXT")
    private String category;

    @Column(columnDefinition = "TEXT")
    private String name;

    @Column(columnDefinition = "TEXT")
    private String film;

    private Boolean winner; // Tipo corretto per un valore booleano in Java

    // Getters e Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getYear_film() {
        return year_film;
    }

    public void setYear_film(Integer year_film) {
        this.year_film = year_film;
    }

    public Integer getYear_ceremony() {
        return year_ceremony;
    }

    public void setYear_ceremony(Integer year_ceremony) {
        this.year_ceremony = year_ceremony;
    }

    public Integer getCeremony() {
        return ceremony;
    }

    public void setCeremony(Integer ceremony) {
        this.ceremony = ceremony;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public Boolean getWinner() {
        return winner;
    }

    public void setWinner(Boolean winner) {
        this.winner = winner;
    }
}