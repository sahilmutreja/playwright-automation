import { expect, test } from '@playwright/test';
test('using getBy locators', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    // getByLabel
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Student').check();
    await page.getByLabel('Gender').selectOption('Female');
    // getByPlaceholder
    await page.getByPlaceholder('Password').fill('dummypassword');
    // getByRole
    await page.getByRole('button', { name: 'Submit' }).click();
    // getByText
    await expect(page.getByText('Success! The Form has been submitted successfully!.'))
        .toBeVisible();
    await page.getByRole('link', { name: 'Shop' }).click();
    // getByRole (without filter)
    await page.locator('app-card')
        .filter({ hasText: 'Nokia Edge' })
        .getByRole('button')
        .click();
    await page.locator('.nav-link')
        .filter({ hasText: 'Checkout' })
        .click();
});