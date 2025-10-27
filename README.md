# 🚀 GitHub API Wiki (Projeto React)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Este é um projeto de estudo em React focado no consumo de dados da API pública do GitHub. A aplicação permite ao usuário buscar repositórios e exibi-los na tela, servindo como uma base para uma "Wiki" de projetos.

O principal objetivo é demonstrar a comunicação de um front-end moderno com uma API RESTful, aplicando conceitos essenciais do React e do JavaScript assíncrono.

## ✨ Conceitos Abordados e Tecnologias

Este projeto foi uma ótima oportunidade para praticar e solidificar os seguintes conceitos:

* **Consumo de API:** Utilização da `fetch()` API nativa do JavaScript para fazer requisições `GET` à API do GitHub.
* **Gerenciamento de Estado (`useState`):** Uso do hook `useState` para armazenar os dados dos repositórios que vêm da API, bem como estados de *loading* e *erro*.
* **Efeitos Colaterais (`useEffect`):** Uso do hook `useEffect` para disparar a chamada da API assim que o componente é montado ou quando uma dependência (como o nome do usuário) é alterada.
* **JavaScript Assíncrono (Promises):** Trabalho direto com `Promises`, utilizando a sintaxe `.then()` ou `async/await` para lidar com o tempo de resposta da API e a conversão dos dados para `.json()`.

## 🛠️ API Utilizada

O principal endpoint consumido neste projeto foi:

## 🚀 Como Executar o Projeto Localmente

Para rodar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [[https://github.com//andrel629/ConsulmindoApiGithub.git](https://github.com/andrel629/ConsulmindoApiGithub.git)](https://github.com//andrel629/ConsulmindoApiGithub.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    # Se você usou Create React App
    npm start
    
    # Se você usou Vite
    npm run dev
    ```

Após isso, o projeto estará disponível em `http://localhost:3000` (ou `http://localhost:5173` se for Vite).
