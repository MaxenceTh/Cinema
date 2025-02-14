package com.cinema.cinema.repository;

import com.cinema.cinema.entity.Cinemas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CinemaRepository extends JpaRepository<Cinemas, Long> {
}