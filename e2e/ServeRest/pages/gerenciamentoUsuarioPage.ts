import { Page, expect } from '@playwright/test';

export class GerenciamentoUsuarioPage {
  constructor(private page: Page) {}

  async navigateListarUsuarios() {
    await this.page.goto('https://front.serverest.dev/admin/listarusuarios');
  }

  async navigateCadastrarUsuario() {
    await this.page.goto('https://front.serverest.dev/admin/cadastrarusuarios');
  }

  async clickRegister() {
    await this.page.getByRole('button', { name: 'Cadastrar', exact: true }).click();
  }

  async expectUserListedWithAdmin(email: string, isAdmin: boolean) {
    const userRow = this.page
      .getByRole('row')
      .filter({ has: this.page.getByRole('cell', { name: email, exact: true }) });
    await expect(userRow).toHaveCount(1);

    const headers = await this.page.getByRole('columnheader').allTextContents();
    const adminColumn = headers.findIndex((header) => header.trim() === 'Administrador');
    expect(adminColumn).toBeGreaterThanOrEqual(0);

    await expect(userRow.getByRole('cell').nth(adminColumn)).toHaveText(String(isAdmin));
  }

  async deleteUser(email: string) {
  const userRow = this.page
    .getByRole('row')
    .filter({ has: this.page.getByRole('cell', { name: email, exact: true }) });

  await userRow.getByRole('button', { name: 'Excluir' }).click();
}

async expectUserNotListed(email: string) {
  const userRow = this.page
    .getByRole('row')
    .filter({ has: this.page.getByRole('cell', { name: email, exact: true }) });

  await expect(userRow).toHaveCount(0);
}

}