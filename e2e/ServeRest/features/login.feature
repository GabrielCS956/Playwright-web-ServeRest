# language: pt
@login
Funcionalidade: Página de login de usuários
  Como um usuário cadastrado
  Quero me autenticar no sistema
  Para acessar as funcionalidades restritas ao meu perfil

Contexto: Acessar a tela de inicial
  Dado que tenho um usuário cadastrado no sistema
  E que estou na página de login

Esquema do Cenário: Realizar login com sucesso por perfil
  Quando informo as credenciais válidas do usuário "<perfil>"
  E solicito a entrada
  Então devo ser redirecionado para a tela inicial para o perfil "<perfil>"

  Exemplos:
  | perfil |
  | admin  |
  | comum  |

Esquema do Cenário: Tentar login com senha incorreta por perfil
  Quando informo as credenciais válidas do usuário "<perfil>" com uma senha incorreta
  E solicito a entrada
  Então devo visualizar uma mensagem sobre credenciais incorretas
  E permanecer na página de login
        
  Exemplos:
  | perfil  |
  | admin   |
  | comum   |

Cenário: Tentar login com um usuário inexistente
  Quando informo um usuário não cadastrado e uma senha qualquer
  E solicito a entrada
  Então devo visualizar uma mensagem sobre credenciais incorretas
  E permanecer na página de login

