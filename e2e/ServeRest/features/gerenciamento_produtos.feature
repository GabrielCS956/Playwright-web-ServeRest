# language: pt

Funcionalidade: Página para gerenciamento dos produtos
    Como usuário administrador
    Quero gerenciar a lista de produtos
    Para manter o estoque atualizado

Contexto: Gerenciar produtos
    Dado que estou logado no sistema com perfil de administrador
    E acesso o menu com a lista de produtos

Cenário: Listar produto cadastrado
    Quando acesso o menu com a lista de produtos
    E busco um produto cadastrado
    Então devo localizá-lo na listagem

Esquema do Cenário: Editar dados de um produto cadastrado
    Quando solicito a edição de um produto, alterando o campo "<campo>"
    Então devo visualizar uma mensagem de sucesso na edição do produto
    E o campo "<campo>" deve exibir o novo valor na lista

    Exemplos:
    | campo       |
    | nome        |
    | preço       |
    | descrição   |
    | quantidade  |

Cenário: Excluir de um produto
    Quando excluo um produto
    Então devo visualizar a mensagem de sucesso na exclusão
    E o produto não deve mais aparecer na lista