// Generated from: e2e\ServeRest\features\usuario.feature
import { test } from "playwright-bdd";

test.describe.only('Cadastro de usuários', () => {

  test.beforeEach('Contexto: Cadastrar um usuário', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que estou na página para cadastro de usuario', null, { page }); 
  });
  
  test.describe('Realizar um cadastro com sucesso', () => {

    test('Exemplos: #1', { tag: ['@only'] }, async ({ When, Then, And, page }) => { 
      await When('preencho todos os campos obrigatórios para cadastro como usuário "admin"', null, { page }); 
      await And('solicito a criação do cadastro', null, { page }); 
      await Then('o sistema deve salvar o usuário no banco de dados, exibir uma mensagem de sucesso e redirecioná-lo para a tela inicial conforme "https://front.serverest.dev/admin/home"', null, { page }); 
    });

    test('Exemplos: #2', { tag: ['@only'] }, async ({ When, Then, And, page }) => { 
      await When('preencho todos os campos obrigatórios para cadastro como usuário "comum"', null, { page }); 
      await And('solicito a criação do cadastro', null, { page }); 
      await Then('o sistema deve salvar o usuário no banco de dados, exibir uma mensagem de sucesso e redirecioná-lo para a tela inicial conforme "https://front.serverest.dev/home"', null, { page }); 
    });

  });

  test('Tentar cadastro com usuario existente', { tag: ['@only'] }, async ({ When, Then, And, page }) => { 
    await When('preencho todos os campos obrigatórios para cadastro, informando os dados de um usuário que já possui cadastro', null, { page }); 
    await And('solicito a criação do cadastro', null, { page }); 
    await Then('devo visualizar um alerta de erro informando que o usuário já existe', null, { page }); 
    await And('permanecer na tela de cadastro', null, { page }); 
  });

  test.describe('Tentar cadastro sem informar o "<campo>"', () => {

    test('Tentar cadastro sem informar o "nome"', { tag: ['@only'] }, async ({ When, Then, And, page }) => { 
      await When('preencho todos os campos obrigatórios para cadastro, exceto o campo "nome"', null, { page }); 
      await And('solicito a criação do cadastro', null, { page }); 
      await Then('devo visualizar um alerta de erro sobre os campos faltantes', null, { page }); 
      await And('permanecer na tela de cadastro', null, { page }); 
    });

    test('Tentar cadastro sem informar o "email"', { tag: ['@only'] }, async ({ When, Then, And, page }) => { 
      await When('preencho todos os campos obrigatórios para cadastro, exceto o campo "email"', null, { page }); 
      await And('solicito a criação do cadastro', null, { page }); 
      await Then('devo visualizar um alerta de erro sobre os campos faltantes', null, { page }); 
      await And('permanecer na tela de cadastro', null, { page }); 
    });

    test('Tentar cadastro sem informar o "password"', { tag: ['@only'] }, async ({ When, Then, And, page }) => { 
      await When('preencho todos os campos obrigatórios para cadastro, exceto o campo "password"', null, { page }); 
      await And('solicito a criação do cadastro', null, { page }); 
      await Then('devo visualizar um alerta de erro sobre os campos faltantes', null, { page }); 
      await And('permanecer na tela de cadastro', null, { page }); 
    });

  });

  test('Tentar cadastro sem informar nenhum dos campos obrigatórios', { tag: ['@only'] }, async ({ When, Then, And, page }) => { 
    await When('não preencho nenhum dos campos obrigatórios para cadastro', null, { page }); 
    await And('solicito a criação do cadastro', null, { page }); 
    await Then('devo visualizar um alerta de erro sobre os campos faltantes', null, { page }); 
    await And('permanecer na tela de cadastro', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\ServeRest\\features\\usuario.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":18,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página para cadastro de usuario","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"Quando preencho todos os campos obrigatórios para cadastro como usuário \"admin\"","stepMatchArguments":[{"group":{"start":65,"value":"\"admin\"","children":[{"start":66,"value":"admin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"E solicito a criação do cadastro","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Então o sistema deve salvar o usuário no banco de dados, exibir uma mensagem de sucesso e redirecioná-lo para a tela inicial conforme \"https://front.serverest.dev/admin/home\"","stepMatchArguments":[{"group":{"start":128,"value":"\"https://front.serverest.dev/admin/home\"","children":[{"start":129,"value":"https://front.serverest.dev/admin/home","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":19,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página para cadastro de usuario","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"Quando preencho todos os campos obrigatórios para cadastro como usuário \"comum\"","stepMatchArguments":[{"group":{"start":65,"value":"\"comum\"","children":[{"start":66,"value":"comum","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"E solicito a criação do cadastro","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Então o sistema deve salvar o usuário no banco de dados, exibir uma mensagem de sucesso e redirecioná-lo para a tela inicial conforme \"https://front.serverest.dev/home\"","stepMatchArguments":[{"group":{"start":128,"value":"\"https://front.serverest.dev/home\"","children":[{"start":129,"value":"https://front.serverest.dev/home","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":21,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página para cadastro de usuario","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"Quando preencho todos os campos obrigatórios para cadastro, informando os dados de um usuário que já possui cadastro","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"E solicito a criação do cadastro","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Então devo visualizar um alerta de erro informando que o usuário já existe","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"E permanecer na tela de cadastro","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":35,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página para cadastro de usuario","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"Quando preencho todos os campos obrigatórios para cadastro, exceto o campo \"nome\"","stepMatchArguments":[{"group":{"start":68,"value":"\"nome\"","children":[{"start":69,"value":"nome","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"E solicito a criação do cadastro","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Então devo visualizar um alerta de erro sobre os campos faltantes","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"E permanecer na tela de cadastro","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":36,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página para cadastro de usuario","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"Quando preencho todos os campos obrigatórios para cadastro, exceto o campo \"email\"","stepMatchArguments":[{"group":{"start":68,"value":"\"email\"","children":[{"start":69,"value":"email","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"E solicito a criação do cadastro","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Então devo visualizar um alerta de erro sobre os campos faltantes","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"E permanecer na tela de cadastro","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":37,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página para cadastro de usuario","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"Quando preencho todos os campos obrigatórios para cadastro, exceto o campo \"password\"","stepMatchArguments":[{"group":{"start":68,"value":"\"password\"","children":[{"start":69,"value":"password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"E solicito a criação do cadastro","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Então devo visualizar um alerta de erro sobre os campos faltantes","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"E permanecer na tela de cadastro","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":39,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página para cadastro de usuario","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"Quando não preencho nenhum dos campos obrigatórios para cadastro","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"E solicito a criação do cadastro","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Então devo visualizar um alerta de erro sobre os campos faltantes","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"E permanecer na tela de cadastro","stepMatchArguments":[]}]},
]; // bdd-data-end