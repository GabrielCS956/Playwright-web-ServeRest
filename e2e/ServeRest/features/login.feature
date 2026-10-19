# language: pt

Funcionalidade: Página de login de usuários
  Como um usuário cadastrado
  Quero me autenticar no sistema
  Para acessar as funcionalidades restritas ao meu perfil

Contexto: Acessar a tela de login
  Dado que estou na página de login

Esquema do Cenário: Realizar login com sucesso por perfil
  Quando informo as credenciais válidas do usuário "<perfil>" com email "<email>" e senha "<senha>"
  E solicito a entrada
  Então devo ser redirecionado para a tela inicial "<usuario>"

  Exemplos:
  | perfil | email                  | senha  |  usuario                                 |
  | admin  | fulano@qa.com          | teste  |  https://front.serverest.dev/admin/home  |
  | comum  | usuariocomum@email.com | 123    |  https://front.serverest.dev/home        |

Esquema do Cenário: Tentar login com senha incorreta por perfil
  Quando informo o usuário "<perfil>" com o acesso "<email>" e uma senha incorreta
  E solicito a entrada
  Então devo visualizar uma mensagem sobre credenciais incorretas
  E permanecer na página de login
        
  Exemplos:
  | perfil  | email                    |
  | admin   | fulano@qa.com            |
  | comum   | usuariocomum@email.com   |

Cenário: Tentar login com um usuário inexistente
  Quando informo um usuário não cadastrado e uma senha qualquer
  E solicito a entrada
  Então devo visualizar uma mensagem sobre credenciais incorretas
  E permanecer na página de login
