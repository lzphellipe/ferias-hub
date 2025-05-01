package univesp.ferias_hub.dto.feria;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import univesp.ferias_hub.model.feria.ESituacao;

import java.time.LocalDate;

public record FeriaUpdateDTO(

        @Positive(message = "Codigo de usuario não pode ser negativo")
        Integer cod_usuario,

        LocalDate dataInicio,

        LocalDate dataFim,

        ESituacao situacao,

        @Size(min = 10, message = "Observação maior que 10 caracteres")
        String observacao
) {
}
