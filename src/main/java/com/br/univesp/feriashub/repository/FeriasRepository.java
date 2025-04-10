package com.br.univesp.feriashub.repository;

import com.br.univesp.feriashub.model.Ferias;
import com.br.univesp.feriashub.model.Operador;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface FeriasRepository extends JpaRepository<Ferias, Integer> {
    List<Ferias> findByOperador(Operador operador);
}