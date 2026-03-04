# 🛍️ Fashion Store - Atividade Prática (Consumo de API REST)

Este projeto consiste na implementação da lógica JavaScript para uma loja virtual de moda, consumindo dados reais da **Platzi Fake Store API**. O foco da atividade foi transformar uma interface estática em uma aplicação dinâmica e funcional utilizando requisições assíncronas.

## 🎯 Objetivos Concluídos

O arquivo `app.js` foi desenvolvido para gerenciar as três páginas do ecossistema, garantindo que cada uma carregue apenas os recursos necessários através de verificações de presença de elementos no DOM.

### 1. 🏠 Página Inicial (`index.html`)

* **Destaques Dinâmicos:** Realiza o consumo do endpoint `/products`.
* **Limitação de Exibição:** Utiliza o método `.slice(0, 3)` para exibir apenas os 3 primeiros produtos na seção de destaques.
* **Renderização:** Substitui os placeholders estáticos por cards gerados dinamicamente com imagem, título e preço vindos da API.

### 2. 👗 Catálogo e Filtros (`menu.html`)

* **Listagem Completa:** Carrega todos os produtos disponíveis no grid principal ao abrir a página.
* **Categorias Dinâmicas:** Busca a lista de categorias no endpoint `/categories` para preencher o elemento `<select>` de filtro.
* **Lógica de Filtro Inteligente:** Implementa um ouvinte de evento `change` que reconstrói a URL de busca utilizando o parâmetro `?categoryId={id}` para filtrar os produtos em tempo real.

### 3. 🔍 Detalhes do Produto (`detail.html`)

* **Persistência de Dados via URL:** Os links de "Ver Detalhes" carregam o ID do produto como um parâmetro de consulta (`?id=ID`).
* **Captura de Parâmetros:** Utiliza a interface `URLSearchParams` para recuperar o ID do produto diretamente da barra de endereço do navegador.
* **Busca Específica:** Realiza uma requisição ao endpoint de produto único (`/products/{id}`) e preenche a página com informações detalhadas, incluindo descrição e categoria.

### 4. 🌓 Modo Claro / Escuro (Alternar Tema)

* **Persistência com LocalStorage:** Implementa a lógica para alternar o atributo `data-theme` na tag `<html>`.
* **Sincronização:** Garante que a preferência do usuário (Light ou Dark) seja salva e aplicada automaticamente ao navegar entre as diferentes páginas do site.

## 📚 Endpoints Utilizados

A aplicação consome a Base URL: `https://api.escuelajs.co/api/v1`

* **Lista de Produtos:** `GET /products`
* **Produto Único:** `GET /products/{id}`
* **Lista de Categorias:** `GET /categories`
* **Produtos por Categoria:** `GET /products/?categoryId={id}`



## 🛠️ Tecnologias e Conceitos Aplicados

* **JavaScript ES6+:** Uso de `async/await` para operações assíncronas.
* **Fetch API:** Para comunicação com o servidor REST.
* **Manipulação de DOM:** Criação de elementos via *Template Literals* para manter o código limpo e legível.
* **Tratamento de Erros:** Blocos `try/catch` para garantir a estabilidade da aplicação em caso de falhas na rede ou na API.

---
*Este projeto foi desenvolvido para estudo e revisão para uma avaliação prática de Front-End.*
