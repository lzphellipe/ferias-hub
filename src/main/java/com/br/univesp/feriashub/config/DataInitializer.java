package com.br.univesp.feriashub.config;

import com.br.univesp.feriashub.enums.Status;
import com.br.univesp.feriashub.model.Ferias;
import com.br.univesp.feriashub.model.Operador;
import com.br.univesp.feriashub.repository.FeriasRepository;
import com.br.univesp.feriashub.repository.OperadorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(OperadorRepository operadorRepository, FeriasRepository feriasRepository) {
        return args -> {

            Operador joao = new Operador();
            joao.setNome("João Silva");
            joao.setCpf("123.456.789-00");
            joao.setTelefone("(11) 91234-5678");
            joao.setDtNascimento(LocalDate.of(1990, 5, 15));
            joao.setDtAdmissao(LocalDate.of(2020, 1, 10));
            joao.setDtCreated(LocalDateTime.of(2025, 4, 9, 10, 0));
            joao.setPassword("senha123");
            joao.setStatus(Status.ATIVO);
            joao.setCargo("Desenvolvedor");
            operadorRepository.save(joao);

            Operador maria = new Operador();
            maria.setNome("Maria Oliveira");
            maria.setCpf("987.654.321-00");
            maria.setTelefone("(21) 99876-5432");
            maria.setDtNascimento(LocalDate.of(1985, 8, 22));
            maria.setDtAdmissao(LocalDate.of(2019, 3, 15));
            maria.setDtCreated(LocalDateTime.of(2025, 4, 9, 10, 0));
            maria.setPassword("senha456");
            maria.setStatus(Status.ATIVO);
            maria.setCargo("Analista");
            operadorRepository.save(maria);

            Operador carlos = new Operador();
            carlos.setNome("Carlos Souza");
            carlos.setCpf("111.222.333-44");
            carlos.setTelefone("(31) 98765-4321");
            carlos.setDtNascimento(LocalDate.of(1978, 11, 30));
            carlos.setDtAdmissao(LocalDate.of(2018, 7, 1));
            carlos.setDtCreated(LocalDateTime.of(2025, 4, 9, 10, 0));
            carlos.setPassword("senha789");
            carlos.setStatus(Status.INATIVO);
            carlos.setCargo("Gerente");
            operadorRepository.save(carlos);

            // Inserir férias
            Ferias ferias1 = new Ferias();
            ferias1.setDtInicio(LocalDate.of(2025, 6, 1));
            ferias1.setDtFim(LocalDate.of(2025, 6, 15));
            ferias1.setMotivo("Férias anuais");
            Object FeriasStatus;
            ferias1.setStatus(Status.PENDENTE);
            ferias1.setOperador(joao);
            ferias1.setResponsavel(null);
            feriasRepository.save(ferias1);

            Ferias ferias2 = new Ferias();
            ferias2.setDtInicio(LocalDate.of(2025, 7, 1));
            ferias2.setDtFim(LocalDate.of(2025, 7, 10));
            ferias2.setMotivo("Descanso");
            ferias2.setStatus(Status.APROVADA);
            ferias2.setOperador(joao);
            ferias2.setResponsavel(maria.getId());
            feriasRepository.save(ferias2);

            Ferias ferias3 = new Ferias();
            ferias3.setDtInicio(LocalDate.of(2025, 8, 1));
            ferias3.setDtFim(LocalDate.of(2025, 8, 20));
            ferias3.setMotivo("Viagem");
            ferias3.setStatus(Status.PENDENTE);
            ferias3.setOperador(maria);
            ferias3.setResponsavel(null);
            feriasRepository.save(ferias3);

            Ferias ferias4 = new Ferias();
            ferias4.setDtInicio(LocalDate.of(2025, 9, 1));
            ferias4.setDtFim(LocalDate.of(2025, 9, 5));
            ferias4.setMotivo("Motivo pessoal");
            ferias4.setStatus(Status.REJEITADA);
            ferias4.setOperador(maria);
            ferias4.setResponsavel(joao.getId());
            feriasRepository.save(ferias4);
        };
    }
}