# language: pt

Funcionalidade: Página para gerenciamento dos produtos
    Como usuário administrador
    Quero gerenciar a lista de produtos
    Para manter o estoque atualizado

Contexto: Gerenciar produtos
    Dado que estou logado com perfil de administrador
    E acesso o menu com a lista de produtos

Cenário: Cadastrar produto com sucesso
    Quando preencho todos os campos obrigatórios para cadastro de produto
    E solicito o cadastro
    Então o produto deve ser cadastrado com sucesso

Cenário: Listar produto cadastrado
    Dado que existe um produto cadastrado no sistema
    Quando busco o produto na listagem
    Então devo localizá-lo na listagem

Cenário: Excluir um produto
    Dado já que existe um produto cadastrado no sistema
    Quando solicito a exclusão do produto
    Então o produto não deve mais aparecer na lista