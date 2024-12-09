import { test, expect } from '@playwright/test';

test.only('UI controls test', async ({ page }) => {
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

test('Child page test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username = page.locator('#username');
    // Get domain from new page
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator("[href*='documents-request']").click()
    ]);
    let redLine = await newPage.locator('.red').first().textContent();
    let domain = redLine.split('@')[1].split(' ')[0];
    console.log('Acquired domain from newPage - ' + domain);
    
    // Now fill domain in first/parent page in username textbox 
    await username.fill(domain);
    console.log('Username - ' + await username.inputValue());
});

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
