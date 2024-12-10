import { test, expect } from '@playwright/test';

test('Print all product names test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill('Woyoba4364@iminko.com');
    await page.locator('#userPassword').fill('Woyoba4364@iminko.com');
    await page.locator('#login').click();

    // Three ways to wait for all the products to be fully loaded

    // 1. Wait until the first product content is retrieved 
    // because playwright provides an auto wait for textContent() method
    // await page.locator('.card-body b').nth(1).textContent()

    // 2. Wait until network calls have been loaded
    // await page.waitForLoadState('networkidle'); 

    // 3. Wait for the specific locator 
    const products = page.locator('.card-body b');
    await products.first().waitFor('visible', 7000); // we can also pass any value - "attached" | "detached" | "visible" | "hidden"

    console.log(await products.allTextContents());
});