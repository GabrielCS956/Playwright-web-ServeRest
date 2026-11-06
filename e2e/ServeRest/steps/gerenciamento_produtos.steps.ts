import type { Page, Response } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { GerenciamentoProdutosPage } from '../pages/gerenciamentoProdutosPage';
import path from 'path';
import { faker } from '@faker-js/faker';

const { Given, When, Then } = createBdd();
const productNameByPage = new WeakMap<Page, string>();
const productCreationResponseByPage = new WeakMap<Page, Response>();

function getProductName(page: Page): string {
    const name = productNameByPage.get(page);
    if (!name) {
        throw new Error('O nome do produto não foi definido neste cenário.');
    }
    return name;
}

async function fillProductForm(page: Page, name: string) {
    const gerenciamentoProdutosPage = new GerenciamentoProdutosPage(page);
    await gerenciamentoProdutosPage.fillProductName(name);
    await gerenciamentoProdutosPage.fillProductPrice(faker.number.int({ min: 1, max: 500 }).toString());
    await gerenciamentoProdutosPage.fillProductDescription(faker.commerce.productDescription());
    await gerenciamentoProdutosPage.fillProductQuantity(faker.number.int({ min: 1, max: 100 }).toString());
    await gerenciamentoProdutosPage.attachProductImage(path.join(__dirname, '../assets/productImageTest.png'));
}

async function registerProduct(page: Page): Promise<Response> {
    const gerenciamentoProdutosPage = new GerenciamentoProdutosPage(page);
    const responsePromise = gerenciamentoProdutosPage.waitForProductCreationResponse();
    await gerenciamentoProdutosPage.clickRegister();
    const response = await responsePromise;
    productCreationResponseByPage.set(page, response);
    return response;
}

Given('acesso o menu com a lista de produtos', async ({ page }) => {
    const gerenciamentoProdutosPage = new GerenciamentoProdutosPage(page);
    await gerenciamentoProdutosPage.navigate();
});

When('preencho todos os campos obrigatórios para cadastro de produto', async ({ page }) => {
    const name = `${faker.commerce.productName()} ${faker.string.alphanumeric(8)}`;
    productNameByPage.set(page, name);
    await fillProductForm(page, name);
});

When('solicito o cadastro', async ({ page }) => {
    const gerenciamentoProdutosPage = new GerenciamentoProdutosPage(page);
    await registerProduct(page);
});

Then('o produto deve ser cadastrado com sucesso', async ({ page }) => {
    const gerenciamentoProdutosPage = new GerenciamentoProdutosPage(page);
    const response = productCreationResponseByPage.get(page);
    if (!response) {
        throw new Error('A resposta do cadastro do produto não foi armazenada neste cenário.');
    }
    gerenciamentoProdutosPage.validateProductCreationStatus(response);
});

/*
Esquema do Cenário: Editar dados de um produto cadastrado
    Quando solicito a edição de um produto, alterando o campo "<campo>"
    Então devo visualizar uma mensagem de sucesso na edição do produto
    E o campo "<campo>" deve exibir o novo valor na lista

    Exemplos:
    | campo       |
    | nome        |
    | preço       |
    | descrição   |
    | quantidade  |

*/

Given('que existe um produto cadastrado no sistema', async ({ page }) => {
    const name = `${faker.commerce.productName()} ${faker.string.alphanumeric(8)}`;
    productNameByPage.set(page, name);
    await fillProductForm(page, name);
    const response = await registerProduct(page);
    const gerenciamentoProdutosPage = new GerenciamentoProdutosPage(page);
    gerenciamentoProdutosPage.validateProductCreationStatus(response);
});

When('busco o produto na listagem', async ({ page }) => {
    const gerenciamentoProdutosPage = new GerenciamentoProdutosPage(page);
    await gerenciamentoProdutosPage.navigateToProductList();
});

Then('devo localizá-lo na listagem', async ({ page }) => {
    const gerenciamentoProdutosPage = new GerenciamentoProdutosPage(page);
    await gerenciamentoProdutosPage.expectProductListed(getProductName(page));
});

Given('já que existe um produto cadastrado no sistema', async ({ page }) => {
    const name = `${faker.commerce.productName()} ${faker.string.alphanumeric(8)}`;
    productNameByPage.set(page, name);
    await fillProductForm(page, name);
    const response = await registerProduct(page);
    const gerenciamentoProdutosPage = new GerenciamentoProdutosPage(page);
    gerenciamentoProdutosPage.validateProductCreationStatus(response);
});

When('solicito a exclusão do produto', async ({ page }) => {
    const gerenciamentoProdutosPage = new GerenciamentoProdutosPage(page);
    await gerenciamentoProdutosPage.navigateToProductList();
    await gerenciamentoProdutosPage.clickDeleteProduct(getProductName(page));
});

Then('o produto não deve mais aparecer na lista', async ({ page }) => {
    const gerenciamentoProdutosPage = new GerenciamentoProdutosPage(page);
    await gerenciamentoProdutosPage.expectProductNotListed(getProductName(page));
});
