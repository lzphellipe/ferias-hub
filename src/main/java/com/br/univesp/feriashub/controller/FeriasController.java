package com.br.univesp.feriashub.controller;

import com.br.univesp.feriashub.model.Ferias;
import com.br.univesp.feriashub.service.GestaoFeriasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.access.prepost.PreAuthorize;

import java.time.LocalDate;
import java.util.Optional;

@RestController
@RequestMapping("/api/ferias")
public class FeriasController {

    @Autowired
    private GestaoFeriasService gestaoFeriasService;

    // Solicitar férias - exige autenticação
    @PostMapping("/solicitar")
    public Ferias solicitarFerias(@RequestParam Long funcionarioId,
                                  @RequestParam String dataInicio,
                                  @RequestParam String dataFim,
                                  @AuthenticationPrincipal OidcUser user) {
        LocalDate inicio = LocalDate.parse(dataInicio);
        LocalDate fim = LocalDate.parse(dataFim);
        return gestaoFeriasService.solicitarFerias(funcionarioId, inicio, fim);
    }

    // Aprovar férias - exige autenticação e papel "ROLE_ADMIN"
    @PutMapping("/aprovar/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Ferias aprovarFerias(@PathVariable Long id) {
        return gestaoFeriasService.aprovarFerias(id);
    }

    // Listar férias por funcionário - exige autenticação
    @GetMapping("/funcionario/{funcionarioId}")
    public Optional<Ferias> listarFeriasPorFuncionario(@PathVariable Long funcionarioId) {
        return gestaoFeriasService.listarFeriasPorFuncionario(funcionarioId);
    }
}
