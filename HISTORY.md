# HISTORY

Iniciei o projeto com o create-react-app, o primero passo foi remover alguns codigos que não vão ser utilizados.

Depois instalei algumas lib que vão ser usadas no projeto como (styled-components e o react-router-dom).

Finalizando criei os diretorios de pastas components, pages, service e utils.

Adicionei um reset.css para facilicar o desenvolvimento. 

Como só vamos ter uma pagina mantive as rotas dentro do APP.js se tivesse mais de uma iria separar em um arquivo route.js.

Criei o folder da pagina de artigos contendo o index e o styles.

No incio da criação do componente Header utilizei a configuração de themeprovider do styled components.

Para fazer a requisição para o back end estou usando o axios.

Lendo a documentação do algolia vi que não era necessario fazer as requisições para search, hits e paginação na mão, vou modificar os componentes para usar está lib.



