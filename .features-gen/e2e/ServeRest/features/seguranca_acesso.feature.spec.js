// Generated from: e2e\ServeRest\features\seguranca_acesso.feature
import { test } from "playwright-bdd";

test.describe('Controle de sessão e segurança', () => {

  test.describe('Tentar acessar página autenticada após o logout como administrador', () => {

    test('Exemplos: #1', async ({ Given, When, Then, And, page }) => { 
      await Given('que estou logado no sistema com perfil de administrador', null, { page }); 
      await And('realizo o logout da minha conta', null, { page }); 
      await When('tento acessar a página de admin "home" diretamente pela URL', null, { page }); 
      await Then('devo ser redirecionado para a página de login', null, { page }); 
    });

    test('Exemplos: #2', async ({ Given, When, Then, And, page }) => { 
      await Given('que estou logado no sistema com perfil de administrador', null, { page }); 
      await And('realizo o logout da minha conta', null, { page }); 
      await When('tento acessar a página de admin "cadastrarusuarios" diretamente pela URL', null, { page }); 
      await Then('devo ser redirecionado para a página de login', null, { page }); 
    });

    test('Exemplos: #3', async ({ Given, When, Then, And, page }) => { 
      await Given('que estou logado no sistema com perfil de administrador', null, { page }); 
      await And('realizo o logout da minha conta', null, { page }); 
      await When('tento acessar a página de admin "listarusuarios" diretamente pela URL', null, { page }); 
      await Then('devo ser redirecionado para a página de login', null, { page }); 
    });

    test('Exemplos: #4', async ({ Given, When, Then, And, page }) => { 
      await Given('que estou logado no sistema com perfil de administrador', null, { page }); 
      await And('realizo o logout da minha conta', null, { page }); 
      await When('tento acessar a página de admin "cadastrarprodutos" diretamente pela URL', null, { page }); 
      await Then('devo ser redirecionado para a página de login', null, { page }); 
    });

    test('Exemplos: #5', async ({ Given, When, Then, And, page }) => { 
      await Given('que estou logado no sistema com perfil de administrador', null, { page }); 
      await And('realizo o logout da minha conta', null, { page }); 
      await When('tento acessar a página de admin "listarprodutos" diretamente pela URL', null, { page }); 
      await Then('devo ser redirecionado para a página de login', null, { page }); 
    });

    test('Exemplos: #6', async ({ Given, When, Then, And, page }) => { 
      await Given('que estou logado no sistema com perfil de administrador', null, { page }); 
      await And('realizo o logout da minha conta', null, { page }); 
      await When('tento acessar a página de admin "relatorios" diretamente pela URL', null, { page }); 
      await Then('devo ser redirecionado para a página de login', null, { page }); 
    });

  });

  test.describe('Tentar acessar página autenticada após o logout como usuário comum', () => {

    test('Exemplos: #1', async ({ Given, When, Then, And, page }) => { 
      await Given('que estou logado no sistema com perfil de usuário comum', null, { page }); 
      await And('realizo o logout da minha conta', null, { page }); 
      await When('tento acessar a página "home" diretamente pela URL', null, { page }); 
      await Then('devo ser redirecionado para a página de login', null, { page }); 
    });

    test('Exemplos: #2', async ({ Given, When, Then, And, page }) => { 
      await Given('que estou logado no sistema com perfil de usuário comum', null, { page }); 
      await And('realizo o logout da minha conta', null, { page }); 
      await When('tento acessar a página "minhaListaDeProdutos" diretamente pela URL', null, { page }); 
      await Then('devo ser redirecionado para a página de login', null, { page }); 
    });

    test('Exemplos: #3', async ({ Given, When, Then, And, page }) => { 
      await Given('que estou logado no sistema com perfil de usuário comum', null, { page }); 
      await And('realizo o logout da minha conta', null, { page }); 
      await When('tento acessar a página "carrinho" diretamente pela URL', null, { page }); 
      await Then('devo ser redirecionado para a página de login', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\ServeRest\\features\\seguranca_acesso.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou logado no sistema com perfil de administrador","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"E realizo o logout da minha conta","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Quando tento acessar a página de admin \"home\" diretamente pela URL","stepMatchArguments":[{"group":{"start":32,"value":"\"home\"","children":[{"start":33,"value":"home","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Então devo ser redirecionado para a página de login","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou logado no sistema com perfil de administrador","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"E realizo o logout da minha conta","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Quando tento acessar a página de admin \"cadastrarusuarios\" diretamente pela URL","stepMatchArguments":[{"group":{"start":32,"value":"\"cadastrarusuarios\"","children":[{"start":33,"value":"cadastrarusuarios","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Então devo ser redirecionado para a página de login","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou logado no sistema com perfil de administrador","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"E realizo o logout da minha conta","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Quando tento acessar a página de admin \"listarusuarios\" diretamente pela URL","stepMatchArguments":[{"group":{"start":32,"value":"\"listarusuarios\"","children":[{"start":33,"value":"listarusuarios","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Então devo ser redirecionado para a página de login","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":30,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou logado no sistema com perfil de administrador","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"E realizo o logout da minha conta","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Quando tento acessar a página de admin \"cadastrarprodutos\" diretamente pela URL","stepMatchArguments":[{"group":{"start":32,"value":"\"cadastrarprodutos\"","children":[{"start":33,"value":"cadastrarprodutos","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Então devo ser redirecionado para a página de login","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou logado no sistema com perfil de administrador","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"E realizo o logout da minha conta","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Quando tento acessar a página de admin \"listarprodutos\" diretamente pela URL","stepMatchArguments":[{"group":{"start":32,"value":"\"listarprodutos\"","children":[{"start":33,"value":"listarprodutos","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Então devo ser redirecionado para a página de login","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":44,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que estou logado no sistema com perfil de administrador","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"E realizo o logout da minha conta","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Quando tento acessar a página de admin \"relatorios\" diretamente pela URL","stepMatchArguments":[{"group":{"start":32,"value":"\"relatorios\"","children":[{"start":33,"value":"relatorios","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Então devo ser redirecionado para a página de login","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":55,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Dado que estou logado no sistema com perfil de usuário comum","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"E realizo o logout da minha conta","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"Quando tento acessar a página \"home\" diretamente pela URL","stepMatchArguments":[{"group":{"start":23,"value":"\"home\"","children":[{"start":24,"value":"home","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":58,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Então devo ser redirecionado para a página de login","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":62,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Dado que estou logado no sistema com perfil de usuário comum","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"E realizo o logout da minha conta","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"Quando tento acessar a página \"minhaListaDeProdutos\" diretamente pela URL","stepMatchArguments":[{"group":{"start":23,"value":"\"minhaListaDeProdutos\"","children":[{"start":24,"value":"minhaListaDeProdutos","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Então devo ser redirecionado para a página de login","stepMatchArguments":[]}]},
  {"pwTestLine":68,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":69,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Dado que estou logado no sistema com perfil de usuário comum","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"E realizo o logout da minha conta","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"Quando tento acessar a página \"carrinho\" diretamente pela URL","stepMatchArguments":[{"group":{"start":23,"value":"\"carrinho\"","children":[{"start":24,"value":"carrinho","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":72,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Então devo ser redirecionado para a página de login","stepMatchArguments":[]}]},
]; // bdd-data-end