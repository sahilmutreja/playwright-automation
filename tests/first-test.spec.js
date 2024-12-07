import { test, expect } from '@playwright/test';

test('open google page', async ({ page }) => {
    await page.goto('https://www.google.com/')
    const title = await page.title()
    console.log(title)
    await expect(page).toHaveTitle(title)   
});