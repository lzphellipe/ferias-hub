package com.br.univesp.feriashub.service;


import com.br.univesp.feriashub.model.Ferias;
import com.br.univesp.feriashub.model.Funcionario;
import com.br.univesp.feriashub.repository.FeriasRepository;
import com.br.univesp.feriashub.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GestaoFeriasService {

    @Autowired
    private FeriasRepository feriasRepository;
    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public Ferias solicitarFerias(Long funcionarioId, LocalDate dataInicio, LocalDate dataFim) {
        Funcionario funcionario = funcionarioRepository.findById(funcionarioId)
                .orElseThrow(() -> new RuntimeException("Funcionário não encontrado"));

        Ferias ferias = new Ferias();
        ferias.setFuncionario(funcionario);
        ferias.setDataInicio(dataInicio);
        ferias.setDataFim(dataFim);
        ferias.setStatus("PENDENTE");

        return feriasRepository.save(ferias);
    }

    public Ferias aprovarFerias(Long feriasId) {
        Ferias ferias = feriasRepository.findById(feriasId)
                .orElseThrow(() -> new RuntimeException("Férias não encontradas"));

        ferias.setStatus("APROVADA");
        return feriasRepository.save(ferias);
    }

    public Optional<Ferias> listarFeriasPorFuncionario(Long funcionarioId) {
        return feriasRepository.findById(funcionarioId);
    }

}
