# language: pt
@usuario
Funcionalidade: Cadastro de usuários
    Como um visitante do sistema,
    Quero preencher um formulário com meus dados básicos e senha para criar uma nova conta,
    Para que eu possa acessar as áreas restritas da plataforma.

Contexto: Cadastrar um usuário
    Dado que estou na página para cadastro de usuario

Esquema do Cenário: Realizar um cadastro com sucesso
    Quando preencho todos os campos obrigatórios para cadastro como usuário "<perfil>"
    E solicito a criação do cadastro
    Então o sistema deve salvar o usuário no banco de dados, exibir uma mensagem de sucesso e redirecioná-lo para a tela inicial conforme "<usuario>"

    Exemplos:
    | perfil  | usuario                                  |
    | admin   | https://front.serverest.dev/admin/home   |
    | comum   | https://front.serverest.dev/home         |

Cenário: Tentar cadastro com usuario existente
    Quando preencho todos os campos obrigatórios para cadastro, informando os dados de um usuário que já possui cadastro
    E solicito a criação do cadastro
    Então devo visualizar um alerta de erro informando que o usuário já existe
    E permanecer na tela de cadastro

Esquema do Cenário: Tentar cadastro sem informar o "<campo>"
    Quando preencho todos os campos obrigatórios para cadastro, exceto o campo "<campo>"
    E solicito a criação do cadastro
    Então devo visualizar um alerta de erro sobre o campo faltante
    E permanecer na tela de cadastro

    Exemplos:
    | campo     |
    | nome      |
    | email     |
    | password  |

Cenário: Tentar cadastro sem informar nenhum dos campos obrigatórios
    Quando não preencho nenhum dos campos obrigatórios para cadastro
    E solicito a criação do cadastro
    Então devo visualizar um alerta de erro sobre os campos faltantes
    E permanecer na tela de cadastro