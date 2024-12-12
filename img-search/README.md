# Image Search App

O **Image Search App** é um aplicativo simples para pesquisa de imagens usando a API do Unsplash. Você pode pesquisar por imagens, visualizar os resultados e ver mais imagens à medida que navega pelas páginas de resultados.

## Funcionalidades
- Pesquisa de imagens em tempo real via API do Unsplash.
- Exibição de imagens com links para as páginas originais.
- Suporte para navegação entre páginas de resultados com o botão "Show More".
- Responsivo e estilizado com CSS.

## Tecnologias Utilizadas
- **HTML**: Estrutura do conteúdo.
- **CSS**: Estilização e responsividade.
- **JavaScript**: Funcionalidades de pesquisa e manipulação da API do Unsplash.

## Como Rodar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seuusuario/image-search-app.git
    ```
    
2. Navegue até o diretório do projeto:
    ```bash
    cd image-search-app
    ```

3. Abra o arquivo `index.html` em seu navegador.

4. O app estará pronto para ser utilizado.

## Como Funciona

1. Digite uma palavra-chave no campo de busca.
2. Clique em "Search" para visualizar as imagens relacionadas à sua pesquisa.
3. O botão "Show More" aparecerá após a primeira pesquisa, permitindo que você veja mais resultados.

## API do Unsplash

Este projeto utiliza a API pública do Unsplash para buscar imagens. A API requer uma chave de acesso, que você pode obter ao se cadastrar em [Unsplash Developers](https://unsplash.com/developers). A chave de acesso foi configurada diretamente no código.

### Substituindo a Chave de Acesso
Se você quiser usar sua própria chave de acesso, substitua o valor da variável `accessKey` no arquivo `script.js` pela sua chave pessoal:

```js
const accessKey = "SUA_CHAVE_AQUI"
