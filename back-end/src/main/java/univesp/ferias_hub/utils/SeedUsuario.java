package univesp.ferias_hub.utils;

import com.password4j.Password;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import univesp.ferias_hub.domain.usuario.Usuario;
import univesp.ferias_hub.dto.usuario.UsuarioRequestDTO;
import univesp.ferias_hub.model.usuario.ECargo;
import univesp.ferias_hub.model.usuario.EStatus;
import univesp.ferias_hub.repository.UserRepository;

import java.time.LocalDate;
import java.util.Optional;

@Slf4j
@Component
@RequiredArgsConstructor
public class SeedUsuario {

    private final UserRepository repository;

    @EventListener(ApplicationReadyEvent.class)
    public void criarUsuarioAdm(){
        Optional<Usuario> usuarioDB = repository.findById(1);
        if(usuarioDB.isEmpty()){
            UsuarioRequestDTO usuarioRequestDTO = new UsuarioRequestDTO(
                    "Administrador",
                    "adm@adm.com",
                    Password.hash("Administrador@123").withBcrypt().getResult(),
                    "111.111.111.11",
                    "19-11111-1111",
                    ECargo.Administrador,
                    LocalDate.now());
            try{
                Usuario usuario = Usuario.builder()
                        .nome(usuarioRequestDTO.nome())
                        .email(usuarioRequestDTO.email())
                        .senha(usuarioRequestDTO.senha())
                        .cargo(usuarioRequestDTO.cargo())
                        .cpf(usuarioRequestDTO.cpf())
                        .telefone(usuarioRequestDTO.telefone())
                        .dataAdmissao(usuarioRequestDTO.dataAdmissao())
                        .Status(EStatus.ATIVO)
                        .dataCadastro(LocalDate.now().atStartOfDay())
                        .dataAtualizacao(LocalDate.now().atStartOfDay())
                        .build();

                repository.save(usuario);
                log.info("Usuario Adm criado com sucesso.");
            } catch (RuntimeException e) {
                throw new RuntimeException(e);
            }
        }else{
            log.info("Usuario Adm existente no banco de dados.");
        }
    }
}
