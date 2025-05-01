package univesp.ferias_hub.dto.feria;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import univesp.ferias_hub.domain.feria.Feria;
import univesp.ferias_hub.model.feria.ESituacao;

import java.time.LocalDate;


@JsonIgnoreProperties(ignoreUnknown = true)
public record FeriaResponseDTO(
    Integer id,
    Integer idUsuario,
    LocalDate dataInicio,
    LocalDate dataFim,
    ESituacao situacao,
    String observacao
){
    public static FeriaResponseDTO from(Feria feria){
        return new FeriaResponseDTO(
                feria.getId(),
                feria.getUsuario().getId(),
                feria.getDataInicio(),
                feria.getDataFim(),
                feria.getSituacao(),
                feria.getObservacao()
        );
    }
}
