package com.br.univesp.feriashub.repository;

import com.br.univesp.feriashub.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {
}
