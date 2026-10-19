import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('que estou na página de login', async ({ page }) => {
    await page.goto('https://front.serverest.dev/login')
});

When('informo as credenciais válidas do usuário {string} com email {string} e senha {string}', async ({ page }, perfil:string, email:string, senha:string) => {
    await page.getByTestId('email').fill(email);
    await page.getByTestId('senha').fill(senha);
});

When('solicito a entrada', async ({ page }) => {
    await page.getByTestId('entrar').click();
});

Then('devo ser redirecionado para a tela inicial {string}', async ({ page }, usuario:string) => {
    await expect(page).toHaveURL(usuario);
});

// Cenário de senha incorreta
When('informo o usuário {string} com o acesso {string} e uma senha incorreta', async ({ page }, perfil:string, email:string) => {
    await page.getByTestId('email').fill(email);
    await page.getByTestId('senha').fill('Senha_incorreta123');
});

Then('devo visualizar uma mensagem sobre credenciais incorretas', async ({ page }) => {
    await expect(page.getByRole('alert')).toHaveText('×Email e/ou senha inválidos');
});

Then('permanecer na página de login', async ({ page }) => {
    await expect(page).toHaveURL('https://front.serverest.dev/login');
});

// Cenário de usuário não cadastrado
When('informo um usuário não cadastrado e uma senha qualquer', async ({ page }) => {
    await page.getByTestId('email').fill('Email_inexistente123@email.com');
    await page.getByTestId('senha').fill('Senha_inexistente123');
});
