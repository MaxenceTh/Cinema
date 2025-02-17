package com.cinema.cinema.service;

import com.cinema.cinema.entity.Cinemas;
import com.cinema.cinema.repository.CinemaRepository;

import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class CinemaService {
    private final CinemaRepository cinemaRepository;

    public CinemaService(CinemaRepository cinemaRepository) {
        this.cinemaRepository = cinemaRepository;
    }

    public List<Cinemas> getAllCinemas() {
        return cinemaRepository.findAll();
    }

    public List<Cinemas> getCinemasByRegion(String region){
        return cinemaRepository.findByRegion(region);
    }

    public List<String> getAllRegions(){
        return cinemaRepository.findAllRegion();
    }

   
}
