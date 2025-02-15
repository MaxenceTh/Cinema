package com.cinema.cinema.entity;

import jakarta.persistence.*;
// import org.locationtech.jts.geom.Point;

@Entity
public class Cinemas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "nom")
    private String nom;

    @Column(columnDefinition = "region")
    private String region;

    @Column(columnDefinition = "adresse")
    private String adresse;

    @Column(columnDefinition = "code_insee")
    private String code_insee;

    @Column(columnDefinition = "commune")
    private String commune;

    @Column(columnDefinition = "population_commune")
    private Float population_commune;

    @Column(columnDefinition = "dep")
    private String dep;

    @Column(columnDefinition = "ecrans")
    private Integer ecrans;

    @Column(columnDefinition = "fauteuils")
    private Integer fauteuils;

    @Column(columnDefinition = "entrees_2022")
    private Float entrees_2022;

    @Column(columnDefinition = "entrees_2021")
    private Float entrees_2021;

    @Column(columnDefinition = "evolution_entrees")
    private Float evolution_entrees;

    @Column(columnDefinition = "multiplexe")
    private String multiplexe;

    @Column(columnDefinition = "latitude")
    private Float latitude;

    @Column(columnDefinition = "longitude")
    private Float longitude;

    // @Column(columnDefinition = "geom(Point,4326)")
    // private Point geom;

    // ⚡ Constructeur par défaut (obligatoire pour JPA)
    public Cinemas() {
    }

    // ⚡ Constructeur avec paramètres pour l'import CSV
    public Cinemas(String nom, String region, String adresse, String commune, Integer ecrans, Integer fauteuils, Float latitude,
            Float longitude) {
        this.nom = nom;
        this.adresse = adresse;
        this.commune = commune;
        this.ecrans = ecrans;
        this.fauteuils = fauteuils;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // Getters et Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getCode_insee() {
        return code_insee;
    }

    public void setCode_insee(String code_insee) {
        this.code_insee = code_insee;
    }

    public String getCommune() {
        return commune;
    }

    public void setCommune(String commune) {
        this.commune = commune;
    }

    public Float getPopulation_commune() {
        return population_commune;
    }

    public void setPopulation_commune(Float population_commune) {
        this.population_commune = population_commune;
    }

    public String getDep() {
        return dep;
    }

    public void setDep(String dep) {
        this.dep = dep;
    }

    public Integer getEcrans() {
        return ecrans;
    }

    public void setEcrans(Integer ecrans) {
        this.ecrans = ecrans;
    }

    public Integer getFauteuils() {
        return fauteuils;
    }

    public void setFauteuils(Integer fauteuils) {
        this.fauteuils = fauteuils;
    }

    public Float getEntrees_2022() {
        return entrees_2022;
    }

    public void setEntrees_2022(Float entrees_2022) {
        this.entrees_2022 = entrees_2022;
    }

    public Float getEntrees_2021() {
        return entrees_2021;
    }

    public void setEntrees_2021(Float entrees_2021) {
        this.entrees_2021 = entrees_2021;
    }

    public Float getEvolution_entrees() {
        return evolution_entrees;
    }

    public void setEvolution_entrees(Float evolution_entrees) {
        this.evolution_entrees = evolution_entrees;
    }

    public String getMultiplexe() {
        return multiplexe;
    }

    public void setMultiplexe(String multiplexe) {
        this.multiplexe = multiplexe;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }

    // public Point getLocalisation() {
    // return geom;
    // }

    // public void setLocalisation(Point localisation) {
    // this.geom = localisation;
    // }

}
