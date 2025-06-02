// pages/basePage.js

import { highlightElement } from '../utils/helper.js';
import { expect } from '@playwright/test';
import { ENV } from '../config/environment.js';

export class BasePage {
    constructor(page) {
        this.page = page;
    }

    // 지정한 경로로 이동 (기본은 '/')
    async goto(path = '/') {
        await this.page.goto(`${ENV.BASE_URL}${path}`);
    }

    // 요소가 표시될 때까지 대기 후 테두리 강조
    async waitAndHighlight(locator, timeout = ENV.TIMEOUT) {
        await locator.waitFor({ state: 'visible', timeout });
        await highlightElement(locator);
    }

    // 요소 입력 필드에 값 입력 (기존 내용 삭제 후 입력)
    async fill(locator, value, timeout = ENV.TIMEOUT) {
        await this.waitAndHighlight(locator, timeout);
        await locator.fill(value);
    }

    // 요소 입력 필드에 이어서 입력 (기존 내용 유지)
    async type(locator, value, timeout = ENV.TIMEOUT) {
        await this.waitAndHighlight(locator, timeout);
        await locator.type(value);
    }

    // 요소 클릭
    async click(locator, timeout = ENV.TIMEOUT) {
        await this.waitAndHighlight(locator, timeout);
        await locator.click();
    }

    // wait 포함된 클릭 (호출만으로 안정적 클릭 가능)
    async waitAndClick(locator, timeout = ENV.TIMEOUT) {
        await this.click(locator, timeout);
    }

    // 요소가 화면에 보여야 함을 검증
    async expectVisible(locator, timeout = ENV.TIMEOUT) {
        await this.waitAndHighlight(locator, timeout);
        await expect(locator).toBeVisible();
    }

    // 요소의 텍스트가 기대값과 일치하는지 검증
    async expectText(locator, expectedText, timeout = ENV.TIMEOUT) {
        await this.waitAndHighlight(locator, timeout);
        await expect(locator).toHaveText(expectedText);
    }

    // 요소의 텍스트 콘텐츠 가져오기
    async getText(locator, timeout = ENV.TIMEOUT) {
        await locator.waitFor({ state: 'visible', timeout });
        return await locator.textContent();
    }

    // 현재 페이지의 URL이 기대값과 일치하는지 검증
    async expectURL(expected) {
        await expect(this.page).toHaveURL(expected);
    }
}