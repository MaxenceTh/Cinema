package com.cinema.cinema.repository;

import com.cinema.cinema.entity.Cinemas;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CinemaRepository extends JpaRepository<Cinemas, Long> {

    // Cinemas list by region
    List<Cinemas> findByRegion(String region);

    // list of all region available
    @Query("SELECT DISTINCT c.region FROM Cinemas c")
    List<String> findAllRegion();
}