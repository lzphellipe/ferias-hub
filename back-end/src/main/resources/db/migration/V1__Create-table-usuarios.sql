CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(15),
    cpf VARCHAR(14),
    senha VARCHAR(255),
    cargo VARCHAR(50),
    status VARCHAR(10) DEFAULT 'ATIVO',
    data_admissao DATE,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT email_unique UNIQUE(email),
    CONSTRAINT cpf_unique UNIQUE(cpf)
);

CREATE TABLE feria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    data_inicio DATE,
    data_fim DATE,
    situacao VARCHAR(50) DEFAULT 'PENDENTE',
    observacao TEXT,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_usuario FOREIGN KEY (id_user) REFERENCES usuario(id) ON DELETE CASCADE
);
