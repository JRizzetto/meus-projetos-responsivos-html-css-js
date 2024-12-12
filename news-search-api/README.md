# News Search App

O **News Search App** é um aplicativo simples que permite pesquisar por notícias usando a API da News API. Ele exibe as notícias de forma interativa, com links para as fontes originais.

## Funcionalidades
- Pesquisa de notícias em tempo real via API da News API.
- Exibição de notícias com título, descrição e imagem.
- Navegação entre as notícias, com links que abrem as páginas completas.
- Exibição de notícias aleatórias ao carregar o aplicativo.

## Tecnologias Utilizadas
- **HTML**: Estrutura do conteúdo.
- **CSS**: Estilização e responsividade.
- **JavaScript**: Funcionalidades de pesquisa e manipulação da API da News API.

## Como Rodar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seuusuario/notice-search-app.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd notice-search-app
    ```

3. Abra o arquivo `index.html` em seu navegador.

4. O app estará pronto para ser utilizado.

## Como Funciona

1. Ao abrir o aplicativo, ele exibirá as últimas notícias.
2. Você pode buscar por notícias específicas utilizando a barra de pesquisa.
3. Clique em uma notícia para ser redirecionado para a página completa.

### API da News API

Este projeto utiliza a API pública da News API para buscar as notícias. Você precisará de uma chave de acesso (API Key) para utilizar a API.

#### Substituindo a Chave de Acesso

Para utilizar sua própria chave de acesso, substitua o valor da variável `apikey` no arquivo `script.js` pela sua chave pessoal:

```js
const apikey = "SUA_CHAVE_AQUI";
``` 

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

## Contribuindo
1 - Fork este repositório.
2 - Crie uma nova branch (git checkout -b feature/nome-da-feature).
3 - Faça suas alterações.
4 - Commit suas mudanças (git commit -m 'Adicionar nova feature').
5 - Push para a branch (git push origin feature/nome-da-feature).
6 - Abra um Pull Request.