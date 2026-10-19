// Generated from: e2e\ServeRest\features\login.feature
import { test } from "playwright-bdd";

test.describe('Página de login de usuários', () => {

  test.beforeEach('Contexto: Acessar a tela de login', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que estou na página de login', null, { page }); 
  });
  
  test.describe('Realizar login com sucesso por perfil', () => {

    test('Exemplos: #1', async ({ When, Then, And, page }) => { 
      await When('informo as credenciais válidas do usuário "admin" com email "fulano@qa.com" e senha "teste"', null, { page }); 
      await And('solicito a entrada', null, { page }); 
      await Then('devo ser redirecionado para a tela inicial "https://front.serverest.dev/admin/home"', null, { page }); 
    });

    test('Exemplos: #2', async ({ When, Then, And, page }) => { 
      await When('informo as credenciais válidas do usuário "comum" com email "usuariocomum@email.com" e senha "123"', null, { page }); 
      await And('solicito a entrada', null, { page }); 
      await Then('devo ser redirecionado para a tela inicial "https://front.serverest.dev/home"', null, { page }); 
    });

  });

  test.describe('Tentar login com senha incorreta por perfil', () => {

    test('Exemplos: #1', async ({ When, Then, And, page }) => { 
      await When('informo o usuário "admin" com o acesso "fulano@qa.com" e uma senha incorreta', null, { page }); 
      await And('solicito a entrada', null, { page }); 
      await Then('devo visualizar uma mensagem sobre credenciais incorretas', null, { page }); 
      await And('permanecer na página de login', null, { page }); 
    });

    test('Exemplos: #2', async ({ When, Then, And, page }) => { 
      await When('informo o usuário "comum" com o acesso "usuariocomum@email.com" e uma senha incorreta', null, { page }); 
      await And('solicito a entrada', null, { page }); 
      await Then('devo visualizar uma mensagem sobre credenciais incorretas', null, { page }); 
      await And('permanecer na página de login', null, { page }); 
    });

  });

  test('Tentar login com um usuário inexistente', async ({ When, Then, And, page }) => { 
    await When('informo um usuário não cadastrado e uma senha qualquer', null, { page }); 
    await And('solicito a entrada', null, { page }); 
    await Then('devo visualizar uma mensagem sobre credenciais incorretas', null, { page }); 
    await And('permanecer na página de login', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\ServeRest\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"Quando informo as credenciais válidas do usuário \"admin\" com email \"fulano@qa.com\" e senha \"teste\"","stepMatchArguments":[{"group":{"start":42,"value":"\"admin\"","children":[{"start":43,"value":"admin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":60,"value":"\"fulano@qa.com\"","children":[{"start":61,"value":"fulano@qa.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":84,"value":"\"teste\"","children":[{"start":85,"value":"teste","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"E solicito a entrada","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Então devo ser redirecionado para a tela inicial \"https://front.serverest.dev/admin/home\"","stepMatchArguments":[{"group":{"start":43,"value":"\"https://front.serverest.dev/admin/home\"","children":[{"start":44,"value":"https://front.serverest.dev/admin/home","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"Quando informo as credenciais válidas do usuário \"comum\" com email \"usuariocomum@email.com\" e senha \"123\"","stepMatchArguments":[{"group":{"start":42,"value":"\"comum\"","children":[{"start":43,"value":"comum","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":60,"value":"\"usuariocomum@email.com\"","children":[{"start":61,"value":"usuariocomum@email.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":93,"value":"\"123\"","children":[{"start":94,"value":"123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"E solicito a entrada","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Então devo ser redirecionado para a tela inicial \"https://front.serverest.dev/home\"","stepMatchArguments":[{"group":{"start":43,"value":"\"https://front.serverest.dev/home\"","children":[{"start":44,"value":"https://front.serverest.dev/home","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"Quando informo o usuário \"admin\" com o acesso \"fulano@qa.com\" e uma senha incorreta","stepMatchArguments":[{"group":{"start":18,"value":"\"admin\"","children":[{"start":19,"value":"admin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"fulano@qa.com\"","children":[{"start":40,"value":"fulano@qa.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"E solicito a entrada","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Então devo visualizar uma mensagem sobre credenciais incorretas","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"E permanecer na página de login","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"Quando informo o usuário \"comum\" com o acesso \"usuariocomum@email.com\" e uma senha incorreta","stepMatchArguments":[{"group":{"start":18,"value":"\"comum\"","children":[{"start":19,"value":"comum","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"usuariocomum@email.com\"","children":[{"start":40,"value":"usuariocomum@email.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"E solicito a entrada","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Então devo visualizar uma mensagem sobre credenciais incorretas","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"E permanecer na página de login","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"Quando informo um usuário não cadastrado e uma senha qualquer","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"E solicito a entrada","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Então devo visualizar uma mensagem sobre credenciais incorretas","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"E permanecer na página de login","stepMatchArguments":[]}]},
]; // bdd-data-end