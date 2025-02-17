package com.cinema.cinema.controller;

import com.cinema.cinema.entity.Cinemas;
import com.cinema.cinema.service.CinemaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Autoriser les requêtes venant de http://localhost:5173
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/cinemas")
public class CinemaController {
    private final CinemaService cinemaService;

    public CinemaController(CinemaService cinemaService) {
        this.cinemaService = cinemaService;
    }

    // Get all cinemas
    @GetMapping("/all")
    public List<Cinemas> getCinemas() {
        return cinemaService.getAllCinemas();
    }


    // Get cinemas by region
    @GetMapping("/region")
    public List<Cinemas> getCinemaByRegion(@RequestParam String region) {
        return cinemaService.getCinemasByRegion(region);
    }

    // Get all the region available
    @GetMapping("/listRegion")
    public List<String> getAllRegion() {
        return cinemaService.getAllRegions();
    }

}
