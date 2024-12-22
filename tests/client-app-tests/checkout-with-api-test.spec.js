import { test, expect } from '@playwright/test';
import { APIUtils } from '../../utils/APIUtils'

let apiUtils, loginPayload = {
    userEmail: "Woyoba4364@iminko.com",
    userPassword: "Woyoba4364@iminko.com"
}, orderPayload = {
    orders: [
        {
            "country": "Cuba",
            "productOrderedId": "6581ca979fd99c85e8ee7faf"
        }
    ]
};

test.beforeAll('token test', async ({ request }) => {
    apiUtils = new APIUtils(request);
    await apiUtils.setToken(loginPayload);
    await apiUtils.setOrderId(orderPayload);
});

test('checkout product with api login test', async ({ page }) => {
    const email = 'Woyoba4364@iminko.com';
    const productName = 'ADIDAS ORIGINAL'; 

    // Setting login token in localStorage using JS
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, apiUtils.token);
    await page.goto('https://rahulshettyacademy.com/client/');

    // Go to order history page and find the row with order id and click view details
    await page.locator('[routerlink*="myorders"]').click();
    await expect(page.locator('tbody tr:first-child>th')).toHaveText(apiUtils.orderId);
    await page.locator('tbody tr:first-child .btn-primary').click();

    // Assert if our product is present on order summary page
    await expect(page.locator('[class="title"]')).toHaveText(productName);
});
