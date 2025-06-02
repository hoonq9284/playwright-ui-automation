// pages/loginPage.js

import { BasePage } from './basePage.js';
import { loginPageLocators } from '../locators/loginPageLocators.js';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.locator = loginPageLocators(page);
    }

    async goto() {
        await super.goto();
    }

    async login(username, password) {
        await this.fill(this.locator.usernameInput, username);
        await this.fill(this.locator.passwordInput, password);
        await this.click(this.locator.loginButton);
    }
}