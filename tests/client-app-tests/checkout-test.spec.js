import { test, expect } from '@playwright/test';


test('Print all product names test', async ({ page }) => {
    // Goto page
    await page.goto('https://rahulshettyacademy.com/client/');

    // Get required locators
    await page.locator('#userEmail').fill('Woyoba4364@iminko.com');
    await page.locator('#userPassword').fill('Woyoba4364@iminko.com');
    await page.locator('#login').click();
    
    // Wait for first product
    await page.locator('.card-body').first().waitFor();

    // Locate required product and click Add to Cart
    const allProducts = page.locator('.card-body');
    for (let index = 0; index < await allProducts.count(); index++) {
        const product = allProducts.nth(index);
        if (await product.locator('h5>b').textContent() == 'IPHONE 13 PRO')
            await product.locator('button').last().click();
    } 
    await page.pause();
    // Click on Add to Cart 
});
