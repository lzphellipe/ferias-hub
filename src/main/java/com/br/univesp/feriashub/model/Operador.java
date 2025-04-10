package com.br.univesp.feriashub.model;

import com.br.univesp.feriashub.enums.Status;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "operador")
@Data
public class Operador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 100)
    private String nome;

    @Column(length = 14)
    private String cpf;

    @Column(length = 20)
    private String telefone;

    @Column(name = "dt_nascimento")
    private LocalDate dtNascimento;

    @Column(name = "dt_admissao")
    private LocalDate dtAdmissao;

    @Column(name = "dt_created")
    private LocalDateTime dtCreated;

    @Column(length = 20)
    private String password;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(length = 100)
    private String cargo;
}