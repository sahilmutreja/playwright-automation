import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../utils/PageObjectManager.js'
import dataSet from '../testData/loginpage-practise-data.json';

const products = JSON.parse(JSON.stringify(dataSet));

for (const data of products) {
    test(`LoginPractise: sign in and verify product present - ${data.productName}`,
        async ({ page }) => {
            const pageManager = new PageObjectManager(page);

            await pageManager.loginPractisePage.goTo();
            await pageManager.loginPractisePage.login('rahulshettyacademy', 'Learning@830$3mK2');

            await pageManager.dashboardPage.waitForPageToLoad();

            await expect(page.locator('.card-body', { hasText: data.productName })).toBeVisible();
        }
    );
}
