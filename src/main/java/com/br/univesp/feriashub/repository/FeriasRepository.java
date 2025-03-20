package com.br.univesp.feriashub.repository;

import com.br.univesp.feriashub.model.Ferias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeriasRepository extends JpaRepository<Ferias, Long> {
}