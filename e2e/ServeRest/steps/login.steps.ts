import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/loginPage';
import { UsuarioPage } from '../pages/usuarioPage';
import type { UserCredentials } from '../pages/usuarioPage';

const { Given, When, Then } = createBdd();
type UserProfile = 'admin' | 'comum';

const credentialsByPage = new WeakMap<Page, Record<UserProfile, UserCredentials>>();

Given('que sou um usuário sem cadastro no sistema', async ({ page }) => {
    // Nenhuma ação necessária, pois o usuário não está cadastrado
});

When('clico no botão para cadastro', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.registerButton();
});

Then('devo ser direcionado para a página de cadastro', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.expectRegisterPage();
});

Given('que tenho um usuário cadastrado no sistema', async ({ page }) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.navigate();
    const comum = await usuarioPage.createUserCommon();
    await usuarioPage.navigate();
    const admin = await usuarioPage.createUserAdmin();
    credentialsByPage.set(page, { comum: comum, admin });
});

Given('que estou na página de login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
});

When('informo as credenciais válidas do usuário {string}', async ({ page }, perfil: string) => {
    if (perfil !== 'admin' && perfil !== 'comum') {
        throw new Error(`Perfil de usuário desconhecido: ${perfil}`);
    }

    const credentials = credentialsByPage.get(page)?.[perfil];
    if (!credentials) {
        throw new Error('As credenciais do usuário não foram criadas neste cenário.');
    }

    const loginPage = new LoginPage(page);
    await loginPage.fillEmail(credentials.email);
    await loginPage.fillPassword(credentials.password);
});

When('solicito a entrada', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickLogin();
});

Then('devo ser redirecionado para a tela inicial para o perfil {string}', async ({ page }, perfil:string) => {
    const loginPage = new LoginPage(page);
     
    if (perfil === 'admin') {
        await loginPage.expectHomePageAdmin();
    } else {
        await loginPage.expectHomePageCommon();
    }
});

// Cenário de senha incorreta
When('informo as credenciais válidas do usuário {string} com uma senha incorreta', async ({ page }, perfil: string) => {
     if (perfil !== 'admin' && perfil !== 'comum') {
        throw new Error(`Perfil de usuário desconhecido: ${perfil}`);
    }

    const credentials = credentialsByPage.get(page)?.[perfil];
    if (!credentials) {
        throw new Error('As credenciais do usuário não foram criadas neste cenário.');
    }

    const loginPage = new LoginPage(page);
    await loginPage.fillEmail(credentials.email);
    await loginPage.fillPassword('Senha_incorreta123');
});

Then('devo visualizar uma mensagem sobre credenciais incorretas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.expectLoginError();
});

Then('permanecer na página de login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.expectLoginPage();
});

// Cenário de usuário não cadastrado
When('informo um usuário não cadastrado e uma senha qualquer', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillEmail('Email_inexistente123@email.com');
    await loginPage.fillPassword('Senha_inexistente123');
});
