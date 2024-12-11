import { test, expect } from '@playwright/test';

test('checkout product test', async ({ page }) => {
    const email = 'Woyoba4364@iminko.com';
    const productName = 'IPHONE 13 PRO';
    // Goto page
    await page.goto('https://rahulshettyacademy.com/client/');

    // Get required locators
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill(email);
    await page.locator('#login').click();

    // Wait for first product
    await page.locator('.card-body').first().waitFor();

    // Locate required product and click Add to Cart
    const allProducts = page.locator('.card-body');
    for (let index = 0; index < await allProducts.count(); index++) {
        const product = allProducts.nth(index);
        if (await product.locator('h5>b').textContent() == productName)
            await product.locator('button').last().click();
    }
    // Go to cart and verify if product is added and checkout
    await page.locator("[routerlink*='cart']").click()
    await expect(page.locator('h3', { hasText: productName })).toBeVisible();
    await page.locator('text=Checkout').click();

    // Enter India as country and choose correct option from the dynamic options
    await page.locator('[placeholder="Select Country"]').pressSequentially('Ind');
    // await page.getByText('India', { exact: true }).waitFor();
    // await page.getByRole('India', { exact: true }).click();
    const dropdown = page.locator('.form-group .ta-results');
    await dropdown.waitFor()
    dropdown.getByText('India', { exact: true }).click();

    // Verify if logged in email is shown on checkout
    await expect(page.locator('.user__name>label')).toHaveText(email);

    // Click checkout verify success message and save order id
    await page.locator('.action__submit').click();
    await expect(page.locator('.hero-primary'))
        .toHaveText(' Thankyou for the order. ');
    const orderId = await page.locator("label[class='ng-star-inserted']").textContent();
    
    // Go to order history page and check if order id is present 
    await page.locator('label[routerlink*="myorders"]').click();
    const rowWithOrderId = page.getByRole('row', { name: '6758cba6e2b5443b1fee67b8' });
    await expect(rowWithOrderId).toBeVisible();

    // Click view button in the row for our order id
    await rowWithOrderId.locator('.btn-primary').click();
    
    // Asser if our product is present on order summary page
    await expect(page.locator('[class="title"]')).toHaveText(productName);
});
