package univesp.ferias_hub.dto.usuario;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import univesp.ferias_hub.domain.usuario.Usuario;
import univesp.ferias_hub.model.usuario.ECargo;

import java.time.LocalDate;


@JsonIgnoreProperties(ignoreUnknown = true)
public record UsuarioResponseDTO(
    Integer id,
    String nome,
    String email,
    String cpf,
    ECargo cargo,
    LocalDate dataAdmissao
){
    public static UsuarioResponseDTO from(Usuario usuario){
        return new UsuarioResponseDTO(
                usuario.getId(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getCpf(),
                usuario.getCargo(),
                usuario.getDataAdmissao()
        );
    }
}
