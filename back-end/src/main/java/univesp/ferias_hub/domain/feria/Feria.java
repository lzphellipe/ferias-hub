package univesp.ferias_hub.domain.feria;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import univesp.ferias_hub.model.feria.ESituacao;
import univesp.ferias_hub.domain.usuario.Usuario;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "feria")
public class Feria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_user", nullable = false)
    private Usuario usuario;

    @Column
    private LocalDate dataInicio;

    @Column
    private LocalDate dataFim;

    @Enumerated(EnumType.STRING)
    @Column
    private ESituacao situacao;

    @Column
    private String observacao;

    @Column
    private LocalDateTime dataCadastro;

    @Column
    private LocalDateTime dataAtualizacao;
}
