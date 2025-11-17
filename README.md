--- Trabalhando Aplicações Serverless na Azure
Este projeto implementa uma API de produtos utilizando Azure Functions e MongoDB, seguindo a proposta do desafio da DIO.
A arquitetura é totalmente serverless, garantindo escalabilidade, baixo custo e facilidade de manutenção.

--- Funcionalidades
- POST /products → cria um novo produto  
- GET /products → lista todos os produtos  
- GET /products/{id) → busca produto por ID  
- PUT /products/{id} → atualiza produto existente  
- DELETE /products/{id} → remove produto  

--- Arquitetura
- HTTP Trigger - recebe requisições externas.  
- Service Bus (opcional) - fila para mensageria e desacoplamento.  
- Azure Functions - executa o código de CRUD.  
- MongoDB - armazena os dados de forma persistente.  
- Logic Apps (opcional) - orquestra integrações, como envio de notificações.  

--- Tecnologias
- Azure Functions  
- MongoDB  
- Service Bus (mensageria)  
- Logic Apps (orquestração)  

--- Quesitos de Segurança Adotados
-- Para garantir a segurança da aplicação e dos dados, foram aplicadas as seguintes práticas:
- Variáveis de ambiente - a string de conexão com o MongoDB (MONGO_URI) não é exposta no código, sendo configurada via ambiente seguro.  
- AuthLevel configurado - todas as funções usam authLevel: "function" ou superior, evitando acesso público sem chave.  
- Controle de entrada - validação dos dados recebidos via requisições HTTP antes de inserir no banco.  
- Tratamento de erros - respostas claras em caso de falha, sem expor detalhes internos da aplicação.  
- Isolamento de responsabilidades - conexão com banco centralizada em shared/mongoClient.js, evitando duplicação e falhas de segurança.  
- Logs monitorados - uso de Application Insights para rastrear acessos e detectar comportamentos suspeitos.  
- Princípio do menor privilégio - permissões mínimas configuradas para a Function App e para o banco de dados.  
- Sem dados sensíveis no repositório -  por motivos de segurança, nenhuma credencial, string de conexão ou informação privada foi publicada.

--- Status da Aplicação
-- A aplicação está funcional:
- O código das funções CRUD está implementado.
- Os arquivos de configuração (function.json, host.json, package.json) estão prontos.
- Basta configurar corretamente o MONGO_URI e rodar com func start para ter a API ativa.
