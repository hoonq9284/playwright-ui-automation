// tests/inventory.test.js

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { InventoryPage } from '../pages/inventoryPage.js';

// inventoryPage 전역 변수 (Playwright 내부적으로는 테스트마다 새로 page 호출해서 무방)
let inventoryPage;

// 각 테스트케이스 실행하기 전 호출
test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    inventoryPage = new InventoryPage(page); // 로그인 성공 후 진입
});

test('TC01: A to Z 필터 옵션 선택', async () => {
    await inventoryPage.checkFilter();
    // Assertion은 BasePage 클래스에 정의됨
});