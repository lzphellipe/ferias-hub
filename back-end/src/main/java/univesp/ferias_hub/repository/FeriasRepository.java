package univesp.ferias_hub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import univesp.ferias_hub.domain.feria.Feria;
import univesp.ferias_hub.model.feria.ESituacao;

import java.util.List;
import java.util.Optional;
@Repository
public interface FeriasRepository extends JpaRepository<Feria, Integer> {
    List<Feria> findAllByUsuario_Id(Integer usuarioId);

    @Query(
            "select s from Feria s "
                    + "where s.situacao = :status "
                    + "and s.usuario.id = :usuarioId"
    )
    List<Feria> findAllByUsuario_IdAndSituacao(Integer usuarioId, ESituacao status);

    List<Feria> findBySituacao(ESituacao status);

    //List<Feria> findByIdAndUsuario_IdAndSituacao(Integer id, Integer usuarioId, ESituacao status);


    Optional<Feria> findById(Integer id);

    Optional<Feria> findByIdAndSituacao(Integer id, ESituacao status);
}