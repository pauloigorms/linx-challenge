# **DESAFIO LINX Digital | Desenvolvedor FullStack**

O desafio visa avaliar a capacidade para implementação de um sistema contendo mais de uma camada, duas de backend e uma de frontend. A aplicação a ser desenvolvida, é um sistema para exibir as vitrines de recomendação em um site, o sistema deverá conter 3 camadas: 1. **API Catálogo**; 2. **API Recomendação**; e **3. API FrontEnd**. O Projeto deve seguir as seguintes diretrizes.

### **ESPECIFICAÇÕES GERAIS**
- *Queremos avaliar aquilo que você conseguir produzir do desafio, então mesmo que você não consiga desenvolver tudo, envie o resultado para que possamos analisar;* e
- *Procure desenvolver primeiro os itens obrigatórios e fechar o escopo do projeto, e só então partir para os opcionais.*

### **PONTOS AVALIADOS**
- [x] *Funcionamento do sistema;*
- [x] *Utilização de boas práticas na definição das rotas e parâmetros da api;*
- [x] *Organização do projeto e estilo de código;*
- [x] *Boas práticas de qualidade e performance do HTML e CSS;*
- [x] *Otimização do projeto frontend;* e
- [x] *Tecnologias/ferramentas utilizadas no desenvolvimento do projeto.*

---

## **TECNOLOGIAS**

As tecnologias aplicadas para o desenvolvimento desde desafio, são:

| Descrição | Versão |          |
|-----------|--------|----------|
| Node JS   |v12.16.1 | [Leia +](https://nodejs.org/en/)    |
| Mongo DB  |v4.2 | [Leia +](https://www.mongodb.com/)  |
| Postman  |v7.28.0 | [Leia +](https://www.postman.com/)  |

Tenha todas essas ferramentas instaladas em seu computador para os teste.

## **RESOLUÇÃO**

#### **MICROARQUITETURA DE COMUNICAÇÃO**

A imagem seguinte apresenta, de forma simples, o padrão de comunicação entre as APIs propostas no desafio. Primeiro recebemos uma entrada do usuário, essa requisição é feita no *clientserver*, neste caso API-FrontEnd, em seguinda esse serviço dispara uma chamada a segunda camada, a API-Recommender que por sua vez abre uma conexão com uma API externa disponibilizada pela Linx. O retorno disso resulta em uma lista de ID, essa lista é encaminhada para a camada 3 ou API-Catalog. Quando essa recebe a lista com os IDs abre o processo de importação dos dados, chamando da base de dados MongoDB, feito isso, o retorno é imediato e entregue camada-a-camada até que chegue para o usuário em forma de carousel. Segue imagem.

<img src="design.png">

#### **SERVIÇOS POR API**

- **API -CATALOG**

    Está API é responsável por importar dos dados do catalog.JSON e devolver os dados de acordo com a chamada da camada posterior. Tomei a liberdade de criar uma camada de segurança de acesso aos dados, para isso, criei um método para construir *tokens* de acesso que possuem uma hora de ciclo de vida. Os EndPoints são:

  - **/catalog/get-token** -> recebe um JSON de retorno contendo o toke gerado;
  - **/catalog/import-data** -> executa o método de importação dos dados e envia para o banco de dados - para essa tarefa ser concluída com êxido, o arquivo 'catalog.json' precisa estar alocado no diretório denominado *craw_data* interno à *API-Catalog*;
  - **/catalog/get-infos-item/?size=<tam_retorno>&ids=[]** -> neste, temos o endpoint que consulta à base dados, nele são passados dois parâmetros via query. O primeiro, chamado *size*, é referente ao escopo dos dados de retorno: completo, com o JSON integral; filtrado - apenas com: a) name; b) price; c) status; e d) categories. O segundo, *ids*, é restrito à lista contendo os identificadores dos produtos.
  
  ##### Para os dois últimos EndPoints o TOKEN deve ser passado via header do tipo: Bearer Token.

- **API -RECOMMENDER**

    Essa API é responsável pelo middleware de dados requeridos do *client*. É nela que definimos o tipo de dados que iremos retornar, se serão dados com os produtos mais vendidos ou com produtos em oferta. Há apenas um endpoint com três parâmeteos distintos. Veja.

    - **/recommender/showcase/?maxProducts=X&sizeReturn=<tam_retorno>&listRecom=<algorit_coleta>** -> o primeiro parâmetro é para indicar a quantidade de itens que serão apresentados na interface; o segundo, é para indicar o filtro de campos internos aos JSON de retorno, este equivale ao parâmetro *size* descrito na API anterior; e, por último, temos o *listRecom* que define qual algoritmo será encaminhado à API-Linx, este por sua vez retorna a lista de IDs contendo os produtos mais vendidos ou em promoção.

  ##### Para este EndPoints o TOKEN deve ser passado via header do tipo: Bearer Token.

- **API -FRONTEND**

    Aqui, ao iniciar o servidor, teremos uma primeira tela conforme, imagem.

    <img src="front_1.PNG">

    Os *inputs* são para facilitar o teste. O primeiro item do formulário trata-se da quantidade de resultados carregados em tela. O próximo é direcionado ao escopo do algoritmo. Por fim, indicamos o tamanho das instâncias. Uma vez feito isso, ao clicar em LOADING, os dados são trazidos. Conforme imagens.

    <img src="front_2.PNG">
    <img src="front_3.PNG">

#### **EXECUTANDO O PROJETO**

  O projeto foi desenvolvido completamente em **NodeJS**, isso facilita sua execução. Entretanto, antes de tudo precisamos instalar todas as dependências por API, isso pode ser feito usando o seguinte comando:

  - Calma, não esqueça de acessar o diretório de cada API via terminal/cmd.
  ````
  cd /caminho/para/diretorio
  ````
  - Pronto. Agora execute.
  ````
  npm install --save
  ````
  Espere até que tudo seja instalado, uma vez concluído basta executar o comando seguinte para iniciar o projeto.
   ````
  npm start
  ````
  Faça isso para todas as APIs e o projeto funcionará perfeitamente... Ops, ia esquecendo. Favor, gere o arquivo **.env** na raíz de todos os diretórios. Para ajudar, segue as informações que precisa conter em cada uma:
  - API-CATALOG:
    ````
    PORT=5001
    SECRET=#L1nX@2020
    ````
  - API-RECOMMENDER:
    ````
    PORT=6001
    ````
  - API-FRONT:
    ````
    PORT=80
    ````

---
Desenvolvidor por [Paulo Moraes](http://www.paulomoraes.me/) com ❤️