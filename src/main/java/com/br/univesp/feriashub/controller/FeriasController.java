package com.br.univesp.feriashub.controller;

import com.br.univesp.feriashub.model.Ferias;
import com.br.univesp.feriashub.service.GestaoFeriasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/ferias")
public class FeriasController {

    @Autowired
    private GestaoFeriasService gestaoFeriasService;

    @PostMapping("/solicitar")
    public Ferias solicitarFerias(@RequestParam Long funcionarioId,
                                  @RequestParam String dataInicio,
                                  @RequestParam String dataFim) {
        LocalDate inicio = LocalDate.parse(dataInicio);
        LocalDate fim = LocalDate.parse(dataFim);
        return gestaoFeriasService.solicitarFerias(funcionarioId, inicio, fim);
    }

    @PutMapping("/aprovar/{id}")
    public Ferias aprovarFerias(@PathVariable Long id) {
        return gestaoFeriasService.aprovarFerias(id);
    }

    @GetMapping("/funcionario/{funcionarioId}")
    public List<Ferias> listarFeriasPorFuncionario(@PathVariable Long funcionarioId) {
        return gestaoFeriasService.listarFeriasPorFuncionario(funcionarioId);
    }
}
