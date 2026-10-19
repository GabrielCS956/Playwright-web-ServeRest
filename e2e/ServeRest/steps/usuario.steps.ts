import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { faker } from '@faker-js/faker';

const { Given, When, Then } = createBdd();

Given('que estou na página para cadastro de usuario', async ({ page }) => {
    await page.goto('https://front.serverest.dev/cadastrarusuarios')
});

// Cadastro com sucesso para usuário comum e administrador
When('preencho todos os campos obrigatórios para cadastro como usuário {string}', async ({ page }, perfil:string) => {
    await page.getByTestId('nome').fill(faker.person.fullName());
    await page.getByTestId('email').fill(faker.internet.email());
    await page.getByTestId('password').fill(faker.internet.password());

    const administrador = page.getByTestId('checkbox');

    if (perfil === 'admin') {
        await administrador.check();
    } else {
        await administrador.uncheck();
    }
});

When('solicito a criação do cadastro', async ({ page }) => {
    await page.getByTestId('cadastrar').click();
});

Then('o sistema deve salvar o usuário no banco de dados, exibir uma mensagem de sucesso e redirecioná-lo para a tela inicial conforme {string}', async ({ page }, usuario:string) => {

await expect(page.getByText('Cadastro realizado com sucesso')).toBeVisible();
    await expect(page).toHaveURL(usuario);
});

// Cadastro com email já existente
When('preencho todos os campos obrigatórios para cadastro, informando os dados de um usuário que já possui cadastro', async ({ page }) => {
    await page.getByTestId('nome').fill(faker.person.fullName());
    await page.getByTestId('email').fill('fulano@qa.com ');
    await page.getByTestId('password').fill(faker.internet.password());
}); 

Then('devo visualizar um alerta de erro informando que o usuário já existe', async ({ page }) => {
    await expect(page.getByText('Este email já está sendo usado')).toBeVisible();
});

Then('permanecer na tela de cadastro', async ({ page }) => {
    await expect(page).toHaveURL('https://front.serverest.dev/cadastrarusuarios');
});

// Cadastro com campos obrigatórios não preenchidos
When('preencho todos os campos obrigatórios para cadastro, exceto o campo {string}', async ({ page }, campo: string) => {
    await page.getByTestId('nome').fill(faker.person.fullName());
    await page.getByTestId('email').fill(faker.internet.email());
    await page.getByTestId('password').fill(faker.internet.password());

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
  await expect(page.getByText('não pode ficar em branco')).toBeVisible();
});

// Cadastro sem preencher nenhum campo obrigatório
When('não preencho nenhum dos campos obrigatórios para cadastro', async ({ page }) => {
    await page.getByTestId('cadastrar').click();
});

Then('devo visualizar um alerta de erro sobre os campos faltantes', async ({ page }) => {
  await expect(page.getByText('Nome é obrigatório')).toBeVisible();
  await expect(page.getByText('Email é obrigatório')).toBeVisible();
  await expect(page.getByText('Password é obrigatório')).toBeVisible();
});
