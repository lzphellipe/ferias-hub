package com.br.univesp.feriashub.controller;

import com.br.univesp.feriashub.model.Ferias;
import com.br.univesp.feriashub.service.GestaoFeriasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/ferias")
public class FeriasController {

    @Autowired
    private GestaoFeriasService gestaoFeriasService;

    @PostMapping("/solicitar")
    public Ferias solicitarFerias(@RequestParam Long operadorId,
                                  @RequestParam String dataInicio,
                                  @RequestParam String dataFim) {
        LocalDate inicio = LocalDate.parse(dataInicio);
        LocalDate fim = LocalDate.parse(dataFim);
        return gestaoFeriasService.solicitarFerias(operadorId, inicio, fim);
    }

    @PutMapping("/aprovar/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Ferias aprovarFerias(@PathVariable Long id) {
        return gestaoFeriasService.aprovarFerias(id);
    }

    @GetMapping("/operador/{operadorId}")
    public List<Ferias> listarFeriasPorOperador(@PathVariable Long operadorId) {
        return gestaoFeriasService.listarFeriasPorOperador(operadorId);
    }
}