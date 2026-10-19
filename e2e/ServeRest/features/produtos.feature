# language: pt

Funcionalidade: Gerenciamento de produtos
    Como um administrador do sistema
    Quero fazer o gerenciamento dos produtos
    Para manter a base atualizada

Contexto: Cadastrar um produto
    Dado que estou logado no sistema com perfil de administrador
    E acesso o menu para cadastrar produtos

Cenário: Cadastrar um produto com sucesso
    Quando preencho todos os campos obrigatórios
    E solicito a inclusão do produto
    Então devo visualizar uma mensagem de sucesso no cadastro do produto

Esquema do Cenário: Tentar criar um produto sem informar os dados obrigatórios
    Quando acesso o menu para cadastrar produtos
    E preencho todos os campos obrigatórios, exceto o campo "<campo>", confirmando a inclusão do produto
    Então devo visualizar um alerta de erro sobre o campo faltante do produto

Exemplos:
    | campo      |
    | nome       |
    | preço      |
    | descrição  |
    | quantidade |
    | imagem     |

Cenário: Tentar criar um produto sem informar nenhum dos campos obrigatórios
    Quando não preencho nenhum dos campos obrigatórios
    E solicito a inclusão do produto
    Então devo visualizar um alerta de erro sobre os campos faltantes do produto