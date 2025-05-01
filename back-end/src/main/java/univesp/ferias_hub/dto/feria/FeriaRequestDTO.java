package univesp.ferias_hub.dto.feria;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

@JsonIgnoreProperties(ignoreUnknown = true)
public record FeriaRequestDTO(
        @NotBlank(message = "Codigo de usuario é obrigatorio")
        @Positive(message = "Codigo de usuario não pode ser negativo")
        Integer cod_usuario,

        @NotBlank(message = "Data de inicio de ferias é obrigatorio")
        LocalDate dataInicio,

        @NotBlank(message = "Data de fim de ferias é obrigatorio")
        LocalDate dataFim,

        @NotBlank(message = "Observacao das ferias é obrigatorio")
        @Size(min = 10, message = "Observação maior que 10 caracteres")
        String observacao
){}
