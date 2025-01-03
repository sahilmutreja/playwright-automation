import { test, expect } from '@playwright/test';

test('open google page', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle('Google');
}); 