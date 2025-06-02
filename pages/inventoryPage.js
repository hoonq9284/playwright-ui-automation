// pages/inventoryPage.js

import { BasePage } from './basePage.js';
import { inventoryPageLocators } from '../locators/inventoryPageLocators.js';

export class InventoryPage extends BasePage {
    constructor(page) {
        super(page);
        this.locator = inventoryPageLocators(page);
    }

    async checkFilter() {
        await this.expectVisible(this.locator.filterSelectMenu);
    }
}
