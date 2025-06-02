// tests/login.test.js

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';

// loginPage 전역 변수 (Playwright 내부적으로는 테스트마다 새로 page 호출해서 무방)
let loginPage;

// 각 테스트케이스 실행하기 전 호출
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
});

test('TC01: 계정 정보 입력하지 않고 로그인 절차 확인', async () => {
    await loginPage.login('', '');
    // Assertion
    await expect(loginPage.locator.loginErrorMessage).toBeVisible();
});

test('TC02: 존재하지 않는 계정으로 로그인 절차 확인', async () => {
    await loginPage.login('invalid_id', 'invalid_password');
    // Assertion
    await expect(loginPage.locator.loginErrorMessage).toBeVisible();
});

test('TC03: "locked_out_user" 계정으로 로그인 절차 확인', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    // Assertion
    await expect(loginPage.locator.loginErrorMessage).toBeVisible();
});

test('TC04: "problem_user" 계정으로 로그인 절차 확인', async ({ page }) => {
    await loginPage.login('problem_user', 'secret_sauce');
    // Assertion
    await expect(page).toHaveURL(/inventory/);
});

test('TC05: "performance_glitch_user" 계정으로 로그인 절차 확인', async ({ page }) => {
    await loginPage.login('performance_glitch_user', 'secret_sauce');
    // Assertion
    await expect(page).toHaveURL(/inventory/);
});

test('TC06: "error_user" 계정으로 로그인 절차 확인', async ({ page }) => {
    await loginPage.login('error_user', 'secret_sauce');
    // Assertion
    await expect(page).toHaveURL(/inventory/);
});

test('TC07: "visual_user" 계정으로 로그인 절차 확인', async ({ page }) => {
    await loginPage.login('visual_user', 'secret_sauce');
    // Assertion
    await expect(page).toHaveURL(/inventory/);
});

test('TC08: "standard_user" 유효한 로그인 절차 확인', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    // Assertion
    await expect(page).toHaveURL(/inventory/);
});

