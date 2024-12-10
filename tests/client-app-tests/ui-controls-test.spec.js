import { test, expect } from '@playwright/test';

test('UI controls test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('test-user');
    await page.locator('#password').fill('test-password');
    await page.locator('.radiotextsty').nth(1).click(); // Click User radio button
    await page.locator('#okayBtn').click(); // click okay in prompt 
    const dropdown = page.locator("[data-style='btn-info']")
    await dropdown.selectOption('teach');
    console.log('Get Dropdown value - ' + await dropdown.inputValue())
    await page.locator('#terms').check()
    await expect(page.locator("[href*='documents-request']"))
        .toHaveAttribute('class', 'blinkingText');
});
