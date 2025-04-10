-- Inserir dados na tabela operador
INSERT INTO operador (nome, cpf, telefone, dt_nascimento, dt_admissao, dt_created, password, status, cargo)
VALUES
    ('Joao Silva', '123.456.789-00', '(11) 91234-5678', '1990-05-15', '2020-01-10', '2025-04-09 10:00:00', 'senha123', 'ATIVO', 'Desenvolvedor'),
    ('Maria Oliveira', '987.654.321-00', '(21) 99876-5432', '1985-08-22', '2019-03-15', '2025-04-09 10:00:00', 'senha456', 'ATIVO', 'Analista'),
    ('Carlos Souza', '111.222.333-44', '(31) 98765-4321', '1978-11-30', '2018-07-01', '2025-04-09 10:00:00', 'senha789', 'INATIVO', 'Gerente');

-- Inserir dados na tabela ferias
INSERT INTO ferias (dt_inicio, dt_fim, motivo, status, operador_id, responsavel)
VALUES
    ('2025-06-01', '2025-06-15', 'Ferias anuais', 'PENDENTE', 1, NULL),
    ('2025-07-01', '2025-07-10', 'Descanso', 'APROVADA', 1, 2),
    ('2025-08-01', '2025-08-20', 'Viagem', 'PENDENTE', 2, NULL),
    ('2025-09-01', '2025-09-05', 'Motivo pessoal', 'REJEITADA', 2, 1);