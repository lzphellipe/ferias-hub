package com.br.univesp.feriashub.service;


import com.br.univesp.feriashub.enums.Status;
import com.br.univesp.feriashub.exception.FeriasNaoEncontradasException;
import com.br.univesp.feriashub.exception.OperadorNaoEncontradoException;
import com.br.univesp.feriashub.exception.ValidacaoException;
import com.br.univesp.feriashub.model.Ferias;
import com.br.univesp.feriashub.model.Operador;
import com.br.univesp.feriashub.repository.FeriasRepository;
import com.br.univesp.feriashub.repository.OperadorRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;

@Service
public class GestaoFeriasService {

    private final FeriasRepository feriasRepository;
    private final OperadorRepository operadorRepository;


    public GestaoFeriasService(FeriasRepository feriasRepository, OperadorRepository operadorRepository) {
        this.feriasRepository = feriasRepository;
        this.operadorRepository = operadorRepository;
    }

    /**
     * Solicita férias para um operador.
     *
     * @param operadorId ID do operador que está solicitando as férias
     * @param dataInicio Data de início das férias
     * @param dataFim Data de fim das férias
     * @return A solicitação de férias criada
     * @throws OperadorNaoEncontradoException se o operador não for encontrado
     * @throws ValidacaoException se as datas forem inválidas
     */
    public Ferias solicitarFerias(Long operadorId, LocalDate dataInicio, LocalDate dataFim) {
        Operador operador = operadorRepository.findById(operadorId.intValue())
                .orElseThrow(() -> new OperadorNaoEncontradoException(operadorId));

        // Valida as datas
        if (dataInicio == null || dataFim == null) {
            throw new ValidacaoException("As datas de início e fim não podem ser nulas.");
        }
        if (dataFim.isBefore(dataInicio)) {
            throw new ValidacaoException("A data de fim deve ser posterior à data de início.");
        }
        if (dataInicio.isBefore(LocalDate.now())) {
            throw new ValidacaoException("A data de início não pode ser no passado.");
        }


        Ferias ferias = new Ferias();
        ferias.setOperador(operador);
        ferias.setDtInicio(dataInicio);
        ferias.setDtFim(dataFim);
        ferias.setStatus(Status.PENDENTE);
        ferias.setMotivo("Solicitação de férias");
        ferias.setResponsavel(null);


        return feriasRepository.save(ferias);
    }

    /**
     * Aprova uma solicitação de férias.
     *
     * @param feriasId ID da solicitação de férias a ser aprovada
     * @return A solicitação de férias atualizada
     * @throws FeriasNaoEncontradasException se a solicitação de férias não for encontrada
     * @throws ValidacaoException se a solicitação já estiver aprovada ou rejeitada
     */
    public Ferias aprovarFerias(Long feriasId) {

        Ferias ferias = feriasRepository.findById(feriasId.intValue())
                .orElseThrow(() -> new FeriasNaoEncontradasException(feriasId));


        if (ferias.getStatus() != Status.PENDENTE) {
            throw new ValidacaoException("A solicitação de férias já foi processada (status: " + ferias.getStatus() + ").");
        }

        ferias.setStatus(Status.APROVADA);
        return feriasRepository.save(ferias);
    }

    /**
     * Lista todas as férias de um operador.
     *
     * @param operadorId ID do operador cujas férias serão listadas
     * @return Lista de solicitações de férias do operador
     * @throws OperadorNaoEncontradoException se o operador não for encontrado
     */
    public List<Ferias> listarFeriasPorOperador(Long operadorId) {
        Operador operador = operadorRepository.findById(operadorId.intValue())
                .orElseThrow(() -> new OperadorNaoEncontradoException(operadorId));
        return feriasRepository.findByOperador(operador);
    }
}