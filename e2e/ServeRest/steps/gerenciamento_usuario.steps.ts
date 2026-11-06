import type { Page } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/loginPage';
import { UsuarioPage } from '../pages/usuarioPage';
import type { UserCredentials } from '../pages/usuarioPage';
import { GerenciamentoUsuarioPage } from '../pages/gerenciamentoUsuarioPage';

const { Given, When, Then } = createBdd();
const createdUserEmailByPage = new WeakMap<Page, string>();

// Listar usuário cadastrado
Given('que estou logado com perfil de administrador', async ({ page }) => {
    const usuarioPage = new UsuarioPage(page);
    await usuarioPage.navigate();
    const adminCredentials: UserCredentials = await usuarioPage.createUserAdmin();
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fillEmail(adminCredentials.email);
    await loginPage.fillPassword(adminCredentials.password);
    await loginPage.clickLogin();
    await loginPage.expectHomePageAdmin();
});

When('acesso o menu com a lista de usuários', async ({ page }) => {
    const gerenciamentoUsuarioPage = new GerenciamentoUsuarioPage(page);
    await gerenciamentoUsuarioPage.navigateListarUsuarios();
});

When('cadastro um novo usuário com perfil {string}', async ({ page }, perfil: string) => {
    if (perfil !== 'comum' && perfil !== 'admin') {
        throw new Error(`Perfil de usuário desconhecido: ${perfil}`);
    }

    const usuarioPage = new UsuarioPage(page);
    const gerenciamentoUsuarioPage = new GerenciamentoUsuarioPage(page);
    const email = faker.internet.email();

    await gerenciamentoUsuarioPage.navigateCadastrarUsuario();
    await usuarioPage.fillName(faker.person.fullName());
    await usuarioPage.fillEmail(email);
    await usuarioPage.fillPassword(faker.internet.password());
    if (perfil === 'admin') {
        await usuarioPage.checkAdmin();
    }
    await gerenciamentoUsuarioPage.clickRegister();
    await gerenciamentoUsuarioPage.expectUserListedWithAdmin(email, perfil === 'admin');
    createdUserEmailByPage.set(page, email);
});

Then('devo localizar o usuário na lista com Administrador igual a {string}', async ({ page }, flag: string) => {
    if (flag !== 'true' && flag !== 'false') {
        throw new Error(`Valor inválido para Administrador: ${flag}`);
    }

    const email = createdUserEmailByPage.get(page);
    if (!email) {
        throw new Error('O e-mail do usuário criado não foi armazenado neste cenário.');
    }

    const gerenciamentoUsuarioPage = new GerenciamentoUsuarioPage(page);
    await gerenciamentoUsuarioPage.expectUserListedWithAdmin(email, flag === 'true');
});

/*
    Cenários de edição, não funcionam no site

Esquema do Cenário: Editar dados básicos de um usuário cadastrado
    Quando solicito a edição do cadastro do usuário, alterando o campo "<campo>"
    Então devo visualizar uma mensagem de sucesso na edição
    E o campo "<campo>" deve exibir o novo valor

    Exemplos:
    | campo  |
    | nome   |
    | email  |

Esquema do Cenário: Alterar o tipo de permissão de usuário
    Quando mudo o tipo de perfil de um usuário "<perfil>"
    Então devo visualizar uma mensagem de sucesso na edição
    E a flag "administrador" deve aparecer como "<flag>"

    Exemplos:
    | perfil | flag  |  
    | comum  | false |
    | admin  | true  |

Cenário: Editar a senha de um usuário
    Quando altero a senha de um usuário
    Então devo visualizar uma mensagem de sucesso na edição
    E devo conseguir realizar login utilizando a nova senha

*/
When('excluo um usuário', async ({ page }) => {
    const email = createdUserEmailByPage.get(page);
    if (!email) {
        throw new Error('O e-mail do usuário a excluir não foi armazenado neste cenário.');
    }

    const gerenciamentoUsuarioPage = new GerenciamentoUsuarioPage(page);
    await gerenciamentoUsuarioPage.deleteUser(email);
});

Then('o usuário não deve mais aparecer na lista', async ({ page }) => {
    const email = createdUserEmailByPage.get(page);
    if (!email) {
        throw new Error('O e-mail do usuário excluído não foi armazenado neste cenário.');
    }

    const gerenciamentoUsuarioPage = new GerenciamentoUsuarioPage(page);
    await gerenciamentoUsuarioPage.expectUserNotListed(email);
});