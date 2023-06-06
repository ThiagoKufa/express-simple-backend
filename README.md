# simples API de cadastro de cliente

Descrição breve do projeto.

## Arquitetura em Camadas

O projeto utiliza uma arquitetura em camadas, separando as responsabilidades em diferentes módulos:

- `src/features/user/user-controller.ts`: Lida com a interação do usuário.
- `src/features/user/user-repository.ts`: Lida com a persistência e acesso aos dados.
- `src/features/user/user-service.ts`: Contém a lógica de negócios da aplicação.

## Configuração

Para rodar o projeto corretamente, siga as etapas abaixo:

1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione as variáveis de ambiente necessárias no arquivo `.env`, incluindo as credenciais do Firebase Admin e a porta a ser utilizada.
3. Copie o conteúdo do arquivo `.exemple.env` e cole no arquivo `.env`.
4. Preencha as informações necessárias nas variáveis de ambiente do arquivo `.env`.

## Dependências

O projeto possui as seguintes dependências:

- `dotenv`: ^16.1.4
- `express`: ^4.18.2
- `firebase-admin`: ^11.9.0
- `nodemon`: ^2.0.22
- `zod`: ^3.21.4

## Dependências de Desenvolvimento

O projeto possui as seguintes dependências de desenvolvimento:

- `@types/express`: ^4.17.17
- `@types/node`: ^20.2.5
- `ts-node`: ^10.9.1
- `typescript`: ^5.1.3

## Comandos Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

- `npm run dev`: Inicia o servidor em modo de desenvolvimento utilizando o Nodemon e o arquivo `src/main/server.ts`.

## Licença

Este projeto está licenciado sob a Licença ISC. Consulte o arquivo `LICENSE` para obter mais informações.
