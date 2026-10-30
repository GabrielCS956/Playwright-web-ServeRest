import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { SegurancaAcessoPage } from '../pages/segurancaAcessoPage';
import { LoginPage } from '../pages/loginPage';
import { UserCredentials, UsuarioPage } from '../pages/usuarioPage';

const { Given, When, Then } = createBdd();

// Tentar acessar página autenticada após o logout como administrador
Given('que estou logado no sistema com perfil de administrador', async ({ page }) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.navigate();
    const adminCredentials: UserCredentials = await usuarioPage.createUserAdmin();
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fillEmail(adminCredentials.email);
    await loginPage.fillPassword(adminCredentials.password);
    await loginPage.clickLogin();

});

Given('realizo o logout da minha conta', async ({ page }) => {
    const segurancaAcessoPage = new SegurancaAcessoPage(page);
    await segurancaAcessoPage.logoutButton();
});

When('tento acessar a página de admin {string} diretamente pela URL', async ({ page }, pagina: string) => {
    const segurancaAcessoPage = new SegurancaAcessoPage(page);
    await segurancaAcessoPage.navigateAdminPage(pagina);
});

Then('devo ser redirecionado para a página de login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.expectLoginPage();
});

// Tentar acessar página autenticada após o logout como usuário comum
Given('que estou logado no sistema com perfil de usuário comum', async ({ page }) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.navigate();
    const commonCredentials: UserCredentials = await usuarioPage.createUserCommon();
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fillEmail(commonCredentials.email);
    await loginPage.fillPassword(commonCredentials.password);
    await loginPage.clickLogin();
});

When('tento acessar a página {string} diretamente pela URL', async ({ page }, pagina: string) => {
    const segurancaAcessoPage = new SegurancaAcessoPage(page);
    await segurancaAcessoPage.navigatePage(pagina);
});