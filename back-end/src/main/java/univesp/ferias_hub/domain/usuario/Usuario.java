package univesp.ferias_hub.domain.usuario;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import univesp.ferias_hub.model.usuario.ECargo;
import univesp.ferias_hub.model.usuario.EStatus;
import univesp.ferias_hub.domain.feria.Feria;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String nome;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String cpf;

    @Column
    private String telefone;

    @Column
    private String senha;

    @Enumerated(EnumType.STRING)
    @Column
    private ECargo cargo;

    @Column
    private LocalDate dataAdmissao;

    @Enumerated(EnumType.STRING)
    @Column
    private EStatus Status;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Feria> ferias = new ArrayList<>();

    @Column
    private LocalDateTime dataCadastro;

    @Column
    private LocalDateTime dataAtualizacao;
}
