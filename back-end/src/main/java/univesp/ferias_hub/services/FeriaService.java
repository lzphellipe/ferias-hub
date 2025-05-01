package univesp.ferias_hub.services;

import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univesp.ferias_hub.dto.feria.FeriaRequestDTO;
import univesp.ferias_hub.dto.feria.FeriaResponseDTO;
import univesp.ferias_hub.dto.feria.FeriaUpdateDTO;
import univesp.ferias_hub.dto.feria.FeriasStatusDTO;
import univesp.ferias_hub.domain.feria.Feria;
import univesp.ferias_hub.domain.feria.exceptions.DiasInsuficienteException;
import univesp.ferias_hub.domain.feria.exceptions.FeriaNaoExisteException;
import univesp.ferias_hub.domain.usuario.Usuario;
import univesp.ferias_hub.domain.usuario.exceptions.UsuarioNaoEncontradoException;
import univesp.ferias_hub.model.feria.ESituacao;
import univesp.ferias_hub.repository.FeriasRepository;
import univesp.ferias_hub.repository.UserRepository;
import univesp.ferias_hub.utils.FeriasCalculator;

import java.util.List;

import static java.time.temporal.ChronoUnit.DAYS;

@Service
@RequiredArgsConstructor
@Transactional
public class FeriaService {
    private final FeriasRepository feriasRepository;
    private final UsuarioService usuarioService;

    public FeriaResponseDTO criarFeria(FeriaRequestDTO body) {
        Usuario usuario = usuarioService.buscarUsuarioPeloId(body.cod_usuario());

        List<FeriaResponseDTO> ferias = consultarFeriasUsuario(usuario.getId());

        int diasDisponiveis = FeriasCalculator.calcular(usuario, ferias);
        int diasSolic = (int) DAYS.between(body.dataInicio(), body.dataFim());

        if (diasDisponiveis < diasSolic) {
            throw new DiasInsuficienteException("Dias de férias insuficientes.");
        }
        Feria novaFeria = Feria.builder()
                        .usuario(usuario)
                        .dataInicio(body.dataInicio())
                        .dataFim(body.dataFim())
                        .situacao(ESituacao.PENDENTE)
                        .observacao(body.observacao()).build();
        novaFeria = feriasRepository.save(novaFeria);

        return new FeriaResponseDTO(
                novaFeria.getId(),
                novaFeria.getUsuario().getId(),
                novaFeria.getDataInicio(),
                novaFeria.getDataFim(),
                novaFeria.getSituacao(),
                novaFeria.getObservacao()
        );
    }

    public FeriaResponseDTO consultarEspecifica(Integer id) {
        Feria feria = consultaFeriaPeloId(id);

        return new FeriaResponseDTO(
                feria.getId(),
                feria.getUsuario().getId(),
                feria.getDataInicio(),
                feria.getDataFim(),
                feria.getSituacao(),
                feria.getObservacao()
        );

    }

    public List<FeriaResponseDTO> consultarFeriasUsuario(Integer id) {
        List<Feria> ferias = feriasRepository.findAllByUsuario_Id(id);

        return ferias.stream()
                .map(FeriaResponseDTO::from)
                .toList();
    }

    public void alterarInfoFerias(Integer id, FeriaUpdateDTO feriaUpdateDTO) {
        Feria feriaAtual = consultaFeriaPeloId(id);
        if(feriaUpdateDTO.dataFim() != null){
            feriaAtual.setDataFim(feriaUpdateDTO.dataFim());
        }
        if(feriaUpdateDTO.dataInicio() != null){
            feriaAtual.setDataInicio(feriaUpdateDTO.dataInicio());
        }
        if(feriaUpdateDTO.situacao() != null){
            feriaAtual.setSituacao(feriaUpdateDTO.situacao());
        }
        if(feriaUpdateDTO.observacao() != null){
            feriaAtual.setObservacao(feriaAtual.getObservacao());
        }

        feriasRepository.save(feriaAtual);
    }

    private Feria consultaFeriaPeloId(Integer id) {
        return feriasRepository.findById(id).orElseThrow(() -> new FeriaNaoExisteException("Ferias não localizada!"));
    }

    public ObjectNode statusFeria(Integer idUser){
        Usuario usuario = usuarioService.buscarUsuarioPeloId(idUser);
        List<FeriaResponseDTO> ferias = consultarFeriasUsuario(usuario.getId());

        int diasRestantes = FeriasCalculator.calcular(usuario,ferias);

        return FeriasCalculator.feriasStatusJson(diasRestantes, usuario.getNome());
    }
}
