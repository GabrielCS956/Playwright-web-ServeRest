# language: pt

Funcionalidade: Página para gerenciamento de usuários
    Como usuário administrador
    Quero gerenciar a lista de usuários cadastrados
    Para manter o controle de acessos ao sistema

Contexto: Gerenciar usuários
    Dado que estou logado no sistema com perfil de administrador
    E acesso o menu com a lista de usuários

Esquema do Cenário: Listar usuário cadastrado
   Quando preencho todos os campos obrigatórios para cadastro como usuário "<perfil>"
    E solicito a criação do cadastro
    Então devo localizá-lo na lista

    Exemplos:
    | perfil | 
    | comum  |
    | admin  |
    
Esquema do Cenário: Editar dados básicos de um usuário cadastrado
    Quando solicito a edição do cadastro do usuário, alterando o campo "<campo>"
    Então devo visualizar uma mensagem de sucesso na edição
    E o campo "<campo>" deve exibir o novo valor

    Exemplos:
    | campo  |
    | nome   |
    | email  |

Esquema de Cenário: Alterar o tipo de permissão de usuário
    Quando mudo o tipo de perfil de um usuário "<perfil>"
    Então devo visualizar uma mensagem de sucesso na edição
    E a flag "administrador" deve aparecer como "<flag>"

    Exemplos:
    | perfil | flag  |  
    | comum  | false |
    | admin  | true  |

Cenário: Editar a senha de um usuário
    Quando altero a senha de um usuário
    Então devo visualizar uma mensagem de sucesso na edição
    E devo conseguir realizar login utilizando a nova senha

Cenário: Excluir um usuário
    Quando excluo um usuário
    Então devo visualizar uma mensagem de sucesso na exclusão
    E o usuário não deve mais aparecer na lista
