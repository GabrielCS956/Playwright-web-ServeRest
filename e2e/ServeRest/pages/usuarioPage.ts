import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export type UserCredentials = {
  email: string;
  password: string;
};

export class UsuarioPage {
  constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://front.serverest.dev/cadastrarusuarios');
    }

    async fillName(name: string) {
        await this.page.getByTestId('nome').fill(name);
    }

    async fillEmail(email: string) {
        await this.page.getByTestId('email').fill(email);
    }

    async fillPassword(password: string) {
        await this.page.getByTestId('password').fill(password);
    }

    async checkAdmin() {
        const administrador = this.page.getByTestId('checkbox');
        await administrador.check();
    }

    async clickRegister() {
        await this.page.getByTestId('cadastrar').click();
    }

    async createUserCommon(): Promise<UserCredentials> {
        const name = faker.person.fullName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        await this.fillName(name);
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickRegister();
        await this.expectSuccessMessage();
        return { email, password };
    }

    async createUserAdmin(): Promise<UserCredentials> {
        const name = faker.person.fullName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        await this.fillName(name);
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.checkAdmin();
        await this.clickRegister();
        await this.expectSuccessMessage();
        return { email, password };
    }

    async expectSuccessMessage() {
        await expect(this.page.getByText('Cadastro realizado com sucesso')).toBeVisible();
            //getByRole('alert')).toHaveText('Cadastro realizado com sucesso');
    }

    async expectPageRedirected() {
        await expect(this.page).toHaveURL('https://front.serverest.dev/cadastrarusuarios');
    }

    async expectErrorMessageEmailExists() {
        await expect(this.page.getByText('Este email já está sendo usado')).toBeVisible();
    }

    async expectErrorMessageRequiredField() {
        await expect(this.page.getByText('não pode ficar em branco')).toBeVisible();
    }

    async expectErrorMessageAllFieldsRequired() {
        await expect(this.page.getByText('Nome é obrigatório')).toBeVisible();
        await expect(this.page.getByText('Email é obrigatório')).toBeVisible();
        await expect(this.page.getByText('Password é obrigatório')).toBeVisible();
    }

}