import { test } from '@playwright/test';

test('More validation in playwright', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // Navigation to go forward and backward
    // await page.goto('https://www.google.com/');
    // await page.goBack();
    // await page.goForward();
    // await page.goBack();

    // Handle confirm dialog boxes and accept or dismiss them
    page.on('dialog', dialog => dialog.accept()) // dialog.accept() or dialog.dismiss()
    await page.locator('#confirmbtn').click();

    // Hover a button to see tooltip or other options
    page.locator('#mousehover').hover();

    // Interact with iframe elements using frameLocator() method
    const framesPage = page.frameLocator('#courses-iframe');
    // navigate to All Access Plan page
    await framesPage.locator('li:nth-child(3)>.new-navbar-highlighter').click();
    // Fetch number of subscribers
    const subscribersCount = await framesPage.locator('.text>h2>span').textContent({ timeout: 5000 });
    console.log("Subscriber count - " + subscribersCount);
});