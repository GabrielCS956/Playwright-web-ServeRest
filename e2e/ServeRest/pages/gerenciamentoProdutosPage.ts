import { Page, Response, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import path from 'path';

export class GerenciamentoProdutosPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.goto('https://front.serverest.dev/admin/cadastrarprodutos');
    }

    async navigateToProductList() {
        await this.page.goto('https://front.serverest.dev/admin/listarprodutos');
    }

    async fillProductName(name: string) {
        await this.page.getByTestId('nome').fill(name);
    }

    async fillProductPrice(price: string) {
        await this.page.getByTestId('preco').fill(price);
    }

    async fillProductDescription(description: string) {
        await this.page.getByTestId('descricao').fill(description);
    }

    async fillProductQuantity(quantity: string) {
        await this.page.getByTestId('quantity').fill(quantity);
    }

    async attachProductImage(imagePath: string) {
        await this.page.getByTestId('imagem').setInputFiles(imagePath);
    }

    async clickRegister() {
        await this.page.getByTestId('cadastarProdutos').click();
    }

    async waitForProductCreationResponse(): Promise<Response> {
        return this.page.waitForResponse(response =>
            new URL(response.url()).pathname.endsWith('/produtos') &&
            response.request().method() === 'POST'
        );
    }

    validateProductCreationStatus(response: Response) {
        expect(response.status()).toBe(201);
    }

    async expectProductListed(name: string) {
        const productRow = this.page
            .getByRole('row')
            .filter({ has: this.page.getByRole('cell', { name: name, exact: true }) });
        await expect(productRow).toHaveCount(1);
    }

    async expectProductNotListed(name: string) {
        const productRow = this.page
            .getByRole('row')
            .filter({ has: this.page.getByRole('cell', { name: name, exact: true }) });
        await expect(productRow).toHaveCount(0);
    }

    async clickDeleteProduct(name: string) {
        const productRow = this.page
            .getByRole('row')
            .filter({ has: this.page.getByRole('cell', { name: name, exact: true }) });
        await productRow.getByRole('button', { name: 'Excluir' }).click();
    }
}