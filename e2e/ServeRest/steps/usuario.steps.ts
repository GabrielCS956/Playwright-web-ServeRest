import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { UsuarioPage } from '../pages/usuarioPage';
import { faker } from '@faker-js/faker';

const { Given, When, Then } = createBdd();

Given('que estou na página para cadastro de usuario', async ({ page }) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.navigate();
});

// Cadastro com sucesso para usuário comum e administrador
When('preencho todos os campos obrigatórios para cadastro como usuário {string}', async ({ page }, perfil:string) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.fillName(faker.person.fullName());
    await usuarioPage.fillEmail(faker.internet.email());
    await usuarioPage.fillPassword(faker.internet.password());

    if (perfil === 'admin') {
        await usuarioPage.checkAdmin();
    }
});

When('solicito a criação do cadastro', async ({ page }) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.clickRegister();
});

Then('o sistema deve salvar o usuário no banco de dados, exibir uma mensagem de sucesso e redirecioná-lo para a tela inicial conforme {string}', async ({ page }, usuario:string) => {

    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.expectSuccessMessage();
    await expect(page).toHaveURL(usuario);
});

// Cadastro com email já existente
When('preencho todos os campos obrigatórios para cadastro, informando os dados de um usuário que já possui cadastro', async ({ page }) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.fillName(faker.person.fullName());
    await usuarioPage.fillEmail('fulano@qa.com');
    await usuarioPage.fillPassword(faker.internet.password());
});

Then('devo visualizar um alerta de erro informando que o usuário já existe', async ({ page }) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.expectErrorMessageEmailExists();
});

Then('permanecer na tela de cadastro', async ({ page }) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.expectPageRedirected();
});

// Cadastro com campos obrigatórios não preenchidos
When('preencho todos os campos obrigatórios para cadastro, exceto o campo {string}', async ({ page }, campo: string) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.fillName(faker.person.fullName());
    await usuarioPage.fillEmail(faker.internet.email());
    await usuarioPage.fillPassword(faker.internet.password());

  switch (campo.toLowerCase()) {
    case 'nome':
      await page.getByTestId('nome').fill('');
      break;
    case 'email':
      await page.getByTestId('email').fill('');
      break;
    case 'password':
      await page.getByTestId('password').fill('');
      break;
    default:
      throw new Error(`Campo desconhecido: ${campo}`);
  }
});

Then('devo visualizar um alerta de erro sobre o campo faltante', async ({ page }) => {
  const usuarioPage = new UsuarioPage(page);
  await usuarioPage.expectErrorMessageRequiredField();
});

// Cadastro sem preencher nenhum campo obrigatório
When('não preencho nenhum dos campos obrigatórios para cadastro', async ({ page }) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.clickRegister();
});

Then('devo visualizar um alerta de erro sobre os campos faltantes', async ({ page }) => {
  const usuarioPage = new UsuarioPage(page);
  await usuarioPage.expectErrorMessageAllFieldsRequired();
});
