package univesp.ferias_hub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import univesp.ferias_hub.domain.usuario.Usuario;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Usuario, Integer> {

    Optional<Usuario> findById (Integer idUsuario);


    Optional<Usuario> findByEmail(String email);
    Optional<Usuario> findByCpf(String cpf);

}
