import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}
    
    async navigate() {
        await this.page.goto('https://front.serverest.dev/login');
    }

    async fillEmail(email: string) {
        await this.page.getByTestId('email').fill(email);
    }

    async fillPassword(senha: string) {
        await this.page.getByTestId('senha').fill(senha);
    }

    async clickLogin() {
        await this.page.getByTestId('entrar').click();
    }

    async expectHomePageCommon() {
        await expect(this.page).toHaveURL('https://front.serverest.dev/home');
    }

    async expectHomePageAdmin() {
        await expect(this.page).toHaveURL('https://front.serverest.dev/admin/home');
    }

    async expectLoginError() {
        await expect(this.page.getByRole('alert')).toHaveText('×Email e/ou senha inválidos');
    }

    async expectLoginPage() {
        await expect(this.page).toHaveURL('https://front.serverest.dev/login');
    }

    async registerButton() {
        await this.page.getByTestId('cadastrar').click();
    }

    async expectRegisterPage() {
        await expect(this.page).toHaveURL('https://front.serverest.dev/cadastrarusuarios');
    }
}