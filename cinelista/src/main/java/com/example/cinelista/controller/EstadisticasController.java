
package com.example.cinelista.controller;

import com.example.cinelista.model.Estadistica;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class EstadisticasController {

    private static final List<Estadistica> ESTADISTICAS = List.of(
        new Estadistica(1L, "Nébula Roja", "Ciencia ficción", 82000000, 4),
        new Estadistica(2L, "El Último Faro", "Drama", 15000000, 5),
        new Estadistica(3L, "Código Fantasma", "Thriller", 47000000, 3),
        new Estadistica(4L, "Risas de Medianoche", "Comedia", 23000000, 2),
        new Estadistica(5L, "Fuego Cruzado", "Acción", 96000000, 4)
    );

    @GetMapping("/estadisticas")
    public String estadisticas(Model model) {
        model.addAttribute("currentPage", "estadisticas");
        return "estadisticas";
    }

    @GetMapping("/api/estadisticas")
    @ResponseBody
    public List<Estadistica> apiEstadisticas() {
        return ESTADISTICAS;
    }
}
