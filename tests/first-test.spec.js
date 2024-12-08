import { test, expect } from '@playwright/test';

test('open google page', async ({ page }) => {
    await page.goto('https://www.google.com/')
    const title = await page.title()
    console.log(title)
    await expect(page).toHaveTitle('Google')
});

test('open practice automation website', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/')
    // click practice tab
    await page
        .locator('li#menu-item-20>a')
        .click()
    // click login
    await page
        .locator('.wp-block-columns:nth-child(2) p:first-child>a')
        .click()
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('Password123')
    await page.locator('#submit').click()
    await expect(page.getByText('Logged In Successfully')).toBeVisible()
    console.log('test execution success')
})