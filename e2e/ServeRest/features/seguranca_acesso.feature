# language: pt

Funcionalidade: Controle de sessão e segurança
    Como usuário do sistema
    Quero que o acesso a páginas restritas seja bloqueado após o logout
    Para garantir a segurança dos meus dados

Esquema do Cenário: Tentar acessar página autenticada após o logout como administrador
    Dado que estou logado no sistema com perfil de administrador
    E realizo o logout da minha conta
    Quando tento acessar a página "<pagina>" diretamente pela URL
    Então devo ser redirecionado para a tela de login

    Exemplos:
    | pagina             | 
    | home               |
    | cadastrarusuarios  |
    | listarusuarios     |
    | cadastrarprodutos  |
    | listarprodutos     |
    | relatorios         |

Esquema do Cenário: Tentar acessar página autenticada após o logout como usuário comum
    Dado que estou logado no sistema com perfil de usuário comum
    E realizo o logout da minha conta
    Quando tento acessar a página "<pagina>" diretamente pela URL
    Então devo ser redirecionado para a tela de login

    Exemplos:
    | pagina                | 
    | home                  |
    | minhaListaDeProdutos  |
    | carrinho              |