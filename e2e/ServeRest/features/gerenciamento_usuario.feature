# language: pt

Funcionalidade: Página para gerenciamento de usuários
    Como usuário administrador
    Quero gerenciar a lista de usuários cadastrados
    Para manter o controle de acessos ao sistema

Contexto: Gerenciar usuários
    Dado que estou logado com perfil de administrador

Esquema do Cenário: Listar usuário cadastrado
    Quando cadastro um novo usuário com perfil "<perfil>"
    E acesso o menu com a lista de usuários
    Então devo localizar o usuário na lista com Administrador igual a "<flag>"

    Exemplos:
    | perfil | flag  |
    | comum  | false |
    | admin  | true  |

Esquema do Cenário: Excluir um usuário
    Quando cadastro um novo usuário com perfil "<perfil>"
    E acesso o menu com a lista de usuários
    E excluo um usuário
    Então o usuário não deve mais aparecer na lista

    Exemplos:
    | perfil | flag  |
    | comum  | false |
    | admin  | true  |
