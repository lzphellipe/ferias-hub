package univesp.ferias_hub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import univesp.ferias_hub.domain.feria.Feria;

import java.util.List;
import java.util.Optional;
@Repository
public interface FeriasRepository extends JpaRepository<Feria, Integer> {
    List<Feria> findAllByUsuario_Id(Integer usuarioId);

    Optional<Feria> findById(Integer id);
}