import { test, expect } from '@playwright/test'; 

test('open practice automation website', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/');
    // click practice tab
    let txtUsername = page.locator('#username');
    await page
        .locator('li#menu-item-20>a')
        .click();
    // click login
    await page
        .locator('.wp-block-columns:nth-child(2) p:first-child>a')
        .click();
    await txtUsername.fill('sahil');
    await txtUsername.clear();
    await txtUsername.fill('student');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();
    await expect(page.getByText('Logged In Successfully')).toBeVisible();
    console.log('test execution success');
});