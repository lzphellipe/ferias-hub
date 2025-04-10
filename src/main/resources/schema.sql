-- Apagar tabelas se ja existirem (para testes)
DROP TABLE IF EXISTS ferias;
DROP TABLE IF EXISTS operador;

-- Criar a tabela operador
CREATE TABLE operador (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    telefone VARCHAR(20),
    dt_nascimento DATE,
    dt_admissao DATE NOT NULL,
    dt_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    password VARCHAR(20) NOT NULL,
    status ENUM('ATIVO', 'INATIVO') NOT NULL,
    cargo VARCHAR(100) NOT NULL
);

-- Criar a tabela ferias
CREATE TABLE ferias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    dt_inicio DATE NOT NULL,
    dt_fim DATE NOT NULL,
    motivo VARCHAR(255),
    status ENUM('PENDENTE', 'APROVADA', 'REJEITADA') NOT NULL,
    operador_id INT NOT NULL,
    responsavel INT,
    FOREIGN KEY (operador_id) REFERENCES operador(id) ON DELETE RESTRICT
);