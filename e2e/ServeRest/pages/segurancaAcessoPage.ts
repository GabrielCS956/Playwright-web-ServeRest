import { Page, expect } from '@playwright/test';

export class SegurancaAcessoPage {
  constructor(private page: Page) { }

  async navigateAdminHome() {
    await this.page.goto('https://front.serverest.dev/admin/home');
  }

  async navigateAdminCadastroUsuario() {
    await this.page.goto('https://front.serverest.dev/admin/cadastrarusuarios');
  }

  async navigateListarUsuarios() {
    await this.page.goto('https://front.serverest.dev/admin/listarusuarios');
  }

  async navigateAdminCadastroProduto() {
    await this.page.goto('https://front.serverest.dev/admin/cadastrarprodutos');
  }

  async navigateListarProdutos() {
    await this.page.goto('https://front.serverest.dev/admin/listarprodutos');
  }

  async navigateAdminRelatorios() {
    await this.page.goto('https://front.serverest.dev/admin/relatorios');
  }

  async navigateHome() {
    await this.page.goto('https://front.serverest.dev/home');
  }

  async navigateListaProdutos() {
    await this.page.goto('https://front.serverest.dev/minhaListaDeProdutos');
  }

  async navigateCarrinho() {
    await this.page.goto('https://front.serverest.dev/carrinho');
  }

  async logoutButton() {
    await this.page.getByTestId('logout').click();
  }

  async navigateAdminPage(pagina: string) {
    const pages: Record<string, () => Promise<void>> = {
      home: () => this.navigateAdminHome(),
      cadastrarusuarios: () => this.navigateAdminCadastroUsuario(),
      listarusuarios: () => this.navigateListarUsuarios(),
      cadastrarprodutos: () => this.navigateAdminCadastroProduto(),
      listarprodutos: () => this.navigateListarProdutos(),
      relatorios: () => this.navigateAdminRelatorios(),
    };

    const navigate = pages[pagina];

    if (!navigate) {
      throw new Error(`Página de admin não cadastrada: ${pagina}`);
    }

    await navigate();
  }

  async navigatePage(pagina: string) {
    const pages: Record<string, () => Promise<void>> = {
      home: () => this.navigateHome(),
      minhaListaDeProdutos: () => this.navigateListaProdutos(),
      carrinho: () => this.navigateCarrinho(),
    };

    const navigate = pages[pagina];

    if (!navigate) {
      throw new Error(`Página de admin não cadastrada: ${pagina}`);
    }

    await navigate();
  }

}