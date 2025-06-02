// locators/loginPageLocators.js

export const loginPageLocators = (page) => ({
    usernameInput: page.locator('//input[@data-test="username"]'),
    passwordInput: page.locator('//input[@data-test="password"]'),
    loginButton: page.locator('//input[@data-test="login-button"]'),
    loginErrorMessage: page.locator('//h3[@data-test="error"]'),
});