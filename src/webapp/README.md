# Sistema de Férias - Front End

Este projeto é o front end de um sistema de férias desenvolvido para o RH gerenciar as férias dos funcionários. A aplicação foi criada utilizando React e Vite para uma experiência de desenvolvimento rápida e moderna, além de contar com diversas ferramentas para melhorar a produtividade e a qualidade do código.

## Recursos Utilizados

- **React** – Biblioteca para construção de interfaces de usuário.
- **Vite** – Ferramenta de bundling e desenvolvimento com Hot Module Replacement (HMR) para uma experiência ágil.
- **ESLint** – Ferramenta de linting para JavaScript, com suporte para:
  - Regras recomendadas do ESLint.
  - Regras específicas para React Hooks (através de `eslint-plugin-react-hooks`).
  - Verificação de Fast Refresh com `eslint-plugin-react-refresh`.
- **Axios** – Biblioteca para requisições HTTP, utilizada na comunicação com a API.
- **Outros** – Suporte à importação e modularização dos serviços, como a gestão de dados de histórico de férias.

## Estrutura do Projeto

- **src** – Contém o código fonte da aplicação.
  - **utils** – Configuração da API usando Axios.
  - **components/template/tables/HistoryTable** – Componente e serviços para exibição de histórico de férias.
- **vite.config.js** – Configuração do Vite com suporte para React.
- **eslint.config.js** – Configuração do ESLint para garantir a qualidade do código.

## Comandos de Inicialização

Siga os passos abaixo para inicializar o projeto:

```bash
yarn install
```

```bash
yarn dev
```

Para construir a versão de produção:

```bash
yarn build
```

E para visualizar a versão gerada localmente:

```bash
yarn preview
```
