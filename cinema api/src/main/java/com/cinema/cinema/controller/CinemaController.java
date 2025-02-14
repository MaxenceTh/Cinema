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

    // Récupère tout les cinémas
    @GetMapping("/all")
    public List<Cinemas> getCinemas() {
        return cinemaService.getAllCinemas();
    }
}
