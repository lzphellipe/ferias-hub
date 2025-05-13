# Ferias Hub - Sistema de Gerenciamento de Férias para RH

[![Generic badge](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow.svg)](https://shields.io/)

Bem-vindo ao Ferias Hub, um sistema desenvolvido para otimizar o processo de agendamento e manutenção de férias dos funcionários do setor de Recursos Humanos. Nosso objetivo é simplificar a gestão de férias, tornando-a mais eficiente e intuitiva para todos os envolvidos.

## Como Iniciar

Para executar este projeto, você precisará ter algumas ferramentas instaladas em seu ambiente de desenvolvimento. Siga as instruções abaixo para preparar seu ambiente e iniciar o sistema.

### Requisitos

Certifique-se de ter os seguintes softwares instalados:

* **Java Development Kit (JDK):** Versão 17 ou superior. Você pode baixar a versão mais recente para Windows em [Link](https://download.oracle.com/java/17/archive/jdk-17.0.12_windows-x64_bin.exe).
* **Maven:** Ferramenta de automação de build Java. Certifique-se de que esteja instalado e configurado em seu sistema. Você pode encontrar as instruções de instalação em [link para instalação do Maven - adicione o link aqui].
* **Node.js:** Ambiente de execução JavaScript para o frontend. Baixe a versão LTS (Long Term Support) em [Link](https://nodejs.org/dist/v18.16.1/node-v18.16.1-x64.msi).
* **npm (Node Package Manager):** Geralmente instalado com o Node.js. Verifique a instalação com o comando `npm -v` no seu terminal.
* **Docker:** Instalado no ambiente de trabalho para gerenciamento de banco de dados . Você pode baixar o Docker Desktop em [Link](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_location=module).

### Inicialização

Siga os passos abaixo para iniciar o projeto:

1.  **Backend (Java/Spring Boot):**
    * Navegue até o diretório raiz do projeto (onde o arquivo `pom.xml` está localizado).
    * Execute o comando:
        ```bash
        mvn spring-boot:run
        ```
    * O backend estará disponível (por padrão) em `http://localhost:8080`.
    * A documentação da API Swagger estará disponível no link: [http://localhost:8080/swagger-ui/index.html#/].

2.  **Frontend (React):**
    * Navegue até o diretório `frontend` (onde o arquivo `package.json` está localizado).
    * Instale as dependências do projeto:
        ```bash
        npm install
        ```
    * Inicie o servidor de desenvolvimento do frontend:
        ```bash
        npm run dev
        ```
    * O frontend estará disponível em `http://localhost:5173`.

---

## ⚙️ Backend

Esta seção detalha as tecnologias e configurações utilizadas no backend do Ferias Hub.

### Tecnologias Utilizadas

* **Java:** Linguagem de programação principal.
* **Spring Boot (versão 3.4.4):** Framework Java para desenvolvimento rápido de aplicações web.
* **Spring Data JPA:** Para persistência e acesso a dados utilizando o padrão JPA (Java Persistence API).
* **Spring Security:** Para autenticação e autorização, garantindo a segurança do sistema.
* **Flyway:** Para gerenciamento de migrações de banco de dados, facilitando a evolução do schema.
* **MySQL:** Banco de dados relacional utilizado para armazenar os dados da aplicação.
* **H2 Database:** Banco de dados em memória utilizado para testes.
* **Lombok:** Biblioteca Java para reduzir o boilerplate de código (getters, setters, construtores, etc.).
* **Spring Boot Docker Compose:** Suporte para integração com Docker Compose (opcional).
* **Password4j:** Biblioteca para hashing seguro de senhas.
* **Spring Web:** Para construção de APIs RESTful.
* **Swagger/OpenAPI (SpringDoc):** Para documentação da API REST.
* **Spring Security OAuth2 Resource Server:** Para proteger a API com OAuth2.
* **Jakarta Servlet API:** API padrão para Servlets Java.
* **JSON Web Tokens (JWT):** Para autenticação e autorização baseada em tokens.

### Requisitos

* **JDK 17**
* **Maven** (certifique-se de que esteja no seu PATH)
* **Servidor MySQL** em execução. As configurações de conexão com o banco de dados estão definidas no arquivo de configuração do Spring Boot (`application.properties` ou `application.yml`).

---

## ⚛️ Frontend

Esta seção apresenta as tecnologias e configurações utilizadas no frontend do Ferias Hub.

### Tecnologias Utilizadas

* **React (versão 19.0.0):** Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e interativas.
* **Vite:** Ferramenta de build e servidor de desenvolvimento extremamente rápido para aplicações web modernas.
* **npm:** Gerenciador de pacotes padrão para Node.js.
* **Axios:** Biblioteca para realizar requisições HTTP ao backend.
* **Bootstrap (versão 5.3.5):** Framework CSS para estilização e componentes de interface responsivos.
* **React Bootstrap:** Componentes React construídos sobre o Bootstrap.
* **React Router DOM (versão 7.5.1):** Para navegação entre as diferentes páginas da aplicação.
* **React JWT:** Para decodificar e verificar tokens JWT no frontend.
* **Font Awesome:** Biblioteca de ícones para enriquecer a interface visual.

### Requisitos

* **Node.js** (versão LTS recomendada)
* **npm** (geralmente instalado com o Node.js)

---

Este README fornece uma visão geral do projeto e instruções para iniciar tanto o backend quanto o frontend. Se tiver mais alguma dúvida ou precisar de ajuda com algum aspecto específico, me diga! 😊