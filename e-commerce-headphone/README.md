# Soundbox Website

Este é um projeto de um site responsivo para uma loja chamada **Soundbox**, focado em apresentar produtos com um layout moderno e interativo.

## Funcionalidades

- Navegação pelo menu superior fixo.
- Botões interativos para trocar a imagem principal do produto.
- Design responsivo utilizando CSS Grid e flexbox.
- Estilo moderno com transições suaves.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do site.
- **CSS3**: Estilização e responsividade.
- **JavaScript**: Interatividade para troca dinâmica das imagens.

## Estrutura de Arquivos

```
/
|-- index.html    # Arquivo principal da página
|-- style.css     # Estilo do site
|-- script.js     # Código JavaScript para interatividade
|-- img/          # Pasta com as imagens utilizadas
```

## Como Funciona

### Navegação
O site possui um menu fixo na parte superior para facilitar a navegação, permitindo acessar diferentes seções (ainda estáticas neste protótipo).

### Troca de Imagem
Ao clicar em uma das miniaturas de produto, a imagem principal é substituída dinamicamente pelo JavaScript, de acordo com a miniatura selecionada.

#### Código-resumo
```javascript
const row = document.querySelector('.row');
const row2 = document.querySelector('.row2');
const row3 = document.querySelector('.row3');
const one = document.querySelector('.one');

row.addEventListener("click", () => {
    one.src = "./img/product1.png";
});

row2.addEventListener("click", () => {
    one.src = "./img/product2.png";
});

row3.addEventListener("click", () => {
    one.src = "./img/product3.png";
});
```

## Como Utilizar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/soundbox-website.git
   ```

2. **Acesse o projeto**:
   ```bash
   cd soundbox-website
   ```

3. **Abra o arquivo `index.html`** no navegador de sua preferência.

4. Interaja com os botões para visualizar a funcionalidade de troca de imagens.

## Prévia do Projeto

![Soundbox Preview](./img/project-preview.png) <!-- Insira aqui o caminho para uma imagem de demonstração, caso tenha -->

## Melhorias Futuras

- Implementação de um carrinho de compras funcional.
- Adição de páginas para cada seção do menu.
- Integração com backend para armazenar dados.
- Otimização para SEO.

## Contribuições
Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades para o projeto. Faça um **fork** e envie suas sugestões através de um **pull request**.

---
Criado com ❤️ por Jefferson Rizzetto
