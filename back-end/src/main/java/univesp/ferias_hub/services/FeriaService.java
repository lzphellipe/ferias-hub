package univesp.ferias_hub.services;

import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univesp.ferias_hub.dto.feria.FeriaRequestDTO;
import univesp.ferias_hub.dto.feria.FeriaResponseDTO;
import univesp.ferias_hub.dto.feria.FeriaUpdateDTO;
import univesp.ferias_hub.domain.feria.Feria;
import univesp.ferias_hub.domain.feria.exceptions.DiasInsuficienteException;
import univesp.ferias_hub.domain.feria.exceptions.FeriaNaoExisteException;
import univesp.ferias_hub.domain.usuario.Usuario;
import univesp.ferias_hub.model.feria.ESituacao;
import univesp.ferias_hub.repository.FeriasRepository;
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

        List<FeriaResponseDTO> ferias = consultarFeriasUsuario(usuario.getId(),null);

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

        return FeriaResponseDTO.from(novaFeria);
    }

    public FeriaResponseDTO consultarEspecifica(Integer id, ESituacao status) {
        Feria feria;
        if(status == null){
            feria = consultaFeriaPeloId(id);
        }else{
            feria = feriasRepository.findByIdAndSituacao(id, status).orElseThrow(() -> new FeriaNaoExisteException("Ferias não localizada!"));
        }
        return FeriaResponseDTO.from(feria);

    }

    public List<FeriaResponseDTO> consultarFeriasUsuario(Integer id, ESituacao status) {
        List<Feria> ferias;
        if( status == null ){
            ferias = feriasRepository.findAllByUsuario_Id(id);
        }else{
            ferias = feriasRepository.findAllByUsuario_IdAndSituacao(id, status);
        }

        return ferias.stream()
                .map(FeriaResponseDTO::from)
                .toList();
    }

    public List<FeriaResponseDTO> consultaSituacao(ESituacao status){
        List<Feria> ferias = feriasRepository.findBySituacao(status);

        return ferias.stream().map(FeriaResponseDTO::from).toList();
    }

    //public List<FeriaResponseDTO> consultaTotalFiltros(Integer id, Integer idUser, ESituacao status){
    //    List<Feria> ferias = feriasRepository.findByIdAndUsuario_IdAndSituacao(id, idUser, status);
    //    return ferias.stream().map(FeriaResponseDTO::from).toList();
    //}

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
        List<FeriaResponseDTO> ferias = consultarFeriasUsuario(usuario.getId(),ESituacao.APROVADO);

        int diasRestantes = FeriasCalculator.calcular(usuario,ferias);

        return FeriasCalculator.feriasStatusJson(diasRestantes, usuario.getNome());
    }
}
