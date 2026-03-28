# Netflix Clone - Projeto de Streaming

Este projeto é um clone simplificado da interface da Netflix, desenvolvido para fins educacionais durante a Imersão Front-End da Alura.

## Funcionalidades
- Seleção de perfis com armazenamento do perfil ativo (nome e imagem) usando LocalStorage
- Página de catálogo dinâmica com exibição do perfil ativo
- Carrosséis de filmes/séries (mockados)
- Layout responsivo e visual moderno

## Estrutura de Pastas
```
index.html
style.css
assets/
catalogo/
  catalogo.html
  catalogo.css
  js/
    data.js
    main.js
    utils.js
    components/
      Card.js
      Carousel.js
js/
  index.js
```

## Como funciona
- **index.html**: Página inicial para seleção de perfil. Ao clicar em um perfil, o nome e a imagem são salvos no LocalStorage.
- **catalogo/catalogo.html**: Página principal do catálogo, que lê o perfil ativo do LocalStorage e exibe na navbar.
- **js/index.js**: Script responsável por armazenar o perfil ativo ao clicar em um perfil.
- **catalogo/js/main.js**: Script que lê o perfil ativo e atualiza a interface do catálogo.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)

## Créditos
- Projeto desenvolvido por Giovanna Rodrigues durante a Imersão Front-End da Alura.
- Imagens e logos são de uso fictício e educacional.

---

Este projeto não possui backend e não armazena dados sensíveis. Uso exclusivo para fins de aprendizado.