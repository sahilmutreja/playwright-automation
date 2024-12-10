import { test, expect } from '@playwright/test';

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

