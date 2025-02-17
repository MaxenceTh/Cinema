package com.cinema.cinema.repository;

import com.cinema.cinema.entity.Cinemas;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CinemaRepository extends JpaRepository<Cinemas, Long> {

    // Liste des cinémas par région
    List<Cinemas> findByRegion(String region);
}