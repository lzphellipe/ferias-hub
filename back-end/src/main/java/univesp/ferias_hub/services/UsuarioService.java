package univesp.ferias_hub.services;

import com.password4j.Password;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univesp.ferias_hub.domain.usuario.exceptions.UsuarioCampoUnico;
import univesp.ferias_hub.domain.usuario.exceptions.UsuarioDesatiovadoException;
import univesp.ferias_hub.dto.usuario.UsuarioRequestDTO;
import univesp.ferias_hub.dto.usuario.UsuarioResponseDTO;
import univesp.ferias_hub.dto.usuario.UsuarioUpdateDTO;
import univesp.ferias_hub.model.usuario.EStatus;
import univesp.ferias_hub.domain.usuario.Usuario;
import univesp.ferias_hub.domain.usuario.exceptions.UsuarioNaoEncontradoException;
import univesp.ferias_hub.repository.UserRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class UsuarioService {

    private final UserRepository userRepository;

    public UsuarioResponseDTO criarUsuario(UsuarioRequestDTO usuarioRequestDTO){
        Optional<Usuario> usuarioComEmail = userRepository.findByEmail(usuarioRequestDTO.email());
        if(usuarioComEmail.isPresent()){
            throw new UsuarioCampoUnico("Email ja esta sendo utilizado em outro usuario");
        }
        Optional<Usuario> usuarioComCpf = userRepository.findByCpf(usuarioRequestDTO.cpf());
        if(usuarioComCpf.isPresent()){
            throw new UsuarioCampoUnico("CPF ja esta sendo utilizado em outro usuario");
        }
        Usuario usuario = Usuario.builder()
                .nome(usuarioRequestDTO.nome())
                .email(usuarioRequestDTO.email())
                .senha(criptografarSenha(usuarioRequestDTO.senha()))
                .cargo(usuarioRequestDTO.cargo())
                .cpf(usuarioRequestDTO.cpf())
                .telefone(usuarioRequestDTO.telefone())
                .dataAdmissao(usuarioRequestDTO.dataAdmissao())
                .Status(EStatus.ATIVO)
                .dataCadastro(LocalDate.now().atStartOfDay())
                .dataAtualizacao(LocalDate.now().atStartOfDay())
                .build();


        usuario = this.userRepository.save(usuario);
        return new UsuarioResponseDTO(
                usuario.getId(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getCpf(),
                usuario.getTelefone(),
                usuario.getCargo(),
                usuario.getDataAdmissao(),
                usuario.getStatus()
        );
    }

    public UsuarioResponseDTO buscarUsuario(Integer id) {
        Usuario usuario = buscarUsuarioPeloId(id);

        return new UsuarioResponseDTO(
                usuario.getId(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getCpf(),
                usuario.getTelefone(),
                usuario.getCargo(),
                usuario.getDataAdmissao(),
                usuario.getStatus()
        );
    }

    public List<UsuarioResponseDTO> buscarAllUsers(){
        List<Usuario> usuarios = this.userRepository.findAll();

        return usuarios.stream()
                .map(UsuarioResponseDTO::from)
                .toList();

    }

    public void atualizarUsuario(Integer id, UsuarioUpdateDTO usuarioUpdateDTO)  {
        Usuario usuario = buscarUsuarioPeloId(id);
        if(usuarioUpdateDTO.nome() != null){
            usuario.setNome(usuarioUpdateDTO.nome());
        }
        if(usuarioUpdateDTO.cargo() != null){
            usuario.setCargo(usuarioUpdateDTO.cargo());
        }
        if(usuarioUpdateDTO.cpf() != null){
            usuario.setCpf(usuarioUpdateDTO.cpf());
        }
        if(usuarioUpdateDTO.email() != null){
            usuario.setEmail(usuarioUpdateDTO.email());
        }
        if(usuarioUpdateDTO.senha() != null){
            usuario.setSenha(criptografarSenha(usuarioUpdateDTO.senha()));
        }
        if(usuarioUpdateDTO.status() != null){
           usuario.setStatus(usuarioUpdateDTO.status());
        }
        if(usuarioUpdateDTO.telefone() != null){
            usuario.setTelefone(usuarioUpdateDTO.telefone());
        }

        usuario.setDataAtualizacao(LocalDate.now().atStartOfDay());

        this.userRepository.save(usuario);

    }

    public void desativarUsuario(Integer id){
        Usuario usuario = buscarUsuarioPeloId(id);
        if(usuario.getStatus() == EStatus.DESATIVADO){
            throw new UsuarioDesatiovadoException("Usuário esta desativado, id: "+ id);
        }
        usuario.setStatus(EStatus.DESATIVADO);
        this.userRepository.save(usuario);
    }

    private static String criptografarSenha(String senhaPura){
        return Password.hash(senhaPura).withBcrypt().getResult();
    }

    public Usuario buscarUsuarioPeloId(Integer id){
        return this.userRepository.findById(id).orElseThrow(() -> new UsuarioNaoEncontradoException("Usuário não Encontrado, id: "+ id));
    }

}
