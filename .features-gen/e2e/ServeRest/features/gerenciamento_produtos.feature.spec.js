// Generated from: e2e\ServeRest\features\gerenciamento_produtos.feature
import { test } from "playwright-bdd";

test.describe('Página para gerenciamento dos produtos', () => {

  test.beforeEach('Contexto: Gerenciar produtos', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('que estou logado com perfil de administrador', null, { page }); 
    await And('acesso o menu com a lista de produtos', null, { page }); 
  });
  
  test('Cadastrar produto com sucesso', async ({ When, Then, And, page }) => { 
    await When('preencho todos os campos obrigatórios para cadastro de produto', null, { page }); 
    await And('solicito o cadastro', null, { page }); 
    await Then('o produto deve ser cadastrado com sucesso', null, { page }); 
  });

  test('Listar produto cadastrado', async ({ Given, When, Then, page }) => { 
    await Given('que existe um produto cadastrado no sistema', null, { page }); 
    await When('busco o produto na listagem', null, { page }); 
    await Then('devo localizá-lo na listagem', null, { page }); 
  });

  test('Excluir um produto', async ({ Given, When, Then, page }) => { 
    await Given('já que existe um produto cadastrado no sistema', null, { page }); 
    await When('solicito a exclusão do produto', null, { page }); 
    await Then('o produto não deve mais aparecer na lista', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\ServeRest\\features\\gerenciamento_produtos.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou logado com perfil de administrador","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"E acesso o menu com a lista de produtos","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"Quando preencho todos os campos obrigatórios para cadastro de produto","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"E solicito o cadastro","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Então o produto deve ser cadastrado com sucesso","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou logado com perfil de administrador","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"E acesso o menu com a lista de produtos","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Dado que existe um produto cadastrado no sistema","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"Quando busco o produto na listagem","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Então devo localizá-lo na listagem","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou logado com perfil de administrador","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"E acesso o menu com a lista de produtos","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Dado já que existe um produto cadastrado no sistema","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"Quando solicito a exclusão do produto","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Então o produto não deve mais aparecer na lista","stepMatchArguments":[]}]},
]; // bdd-data-end