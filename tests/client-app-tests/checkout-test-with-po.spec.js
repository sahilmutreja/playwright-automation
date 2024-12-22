import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../../utils/PageObjectManager.js'
import { customTest } from '../../utils/base-test.js'
import dataSet from '../../testData/checkout-test-with-po-data.json';

const dataSetJSON = JSON.parse(JSON.stringify(dataSet));

for (const data of dataSetJSON) {
 
    test(`checkout product ${data.productName} with page object and test data`, async ({ page }) => {
        const user = data.email;
        const pass = data.pass;
        const productName = data.productName;
        const partialCountryName = data.partialCountryName;
        const fullCountryName = data.fullCountryName;

        const pageManager = new PageObjectManager(page);

        await pageManager.loginPage.goTo();
        await pageManager.loginPage.login(user, pass);

        await pageManager.dashboardPage.waitForPageToLoad();
        await pageManager.dashboardPage.searchProductAndAddToCart(productName);
        await pageManager.dashboardPage.goToCartPage();

        await expect(pageManager.cartPage.getProduct(productName)).toBeVisible();
        await pageManager.cartPage.goToCheckout();

        await pageManager.checkoutPage.fillCountry(partialCountryName, fullCountryName);
        await expect(pageManager.checkoutPage.email).toHaveText(user);
        await pageManager.checkoutPage.placeOrder();

        await expect(pageManager.thankYouPage.thankYouMessage)
            .toContainText('Thankyou for the order.');
        let orderIdString = await pageManager.thankYouPage.getOrderId();
        await pageManager.thankYouPage.goToOrderHistoryPage();

        await expect(pageManager.orderHistoryPage.orderId).toHaveText(orderIdString);
        await pageManager.orderHistoryPage.viewOrderDetails();

        await expect(pageManager.orderDetailsPage.productTitle)
            .toHaveText(productName);
    });

}

customTest.only(`checkout product with page object and test data fixture`, async ({ page, testDataForCheckout }) => {
    const user = testDataForCheckout.email;
    const pass = testDataForCheckout.pass;
    const productName = testDataForCheckout.productName;
    const pageManager = new PageObjectManager(page);

    await pageManager.loginPage.goTo();
    await pageManager.loginPage.login(user, pass);

    await pageManager.dashboardPage.waitForPageToLoad();
    await pageManager.dashboardPage.searchProductAndAddToCart(productName);
    await pageManager.dashboardPage.goToCartPage();

    await expect(pageManager.cartPage.getProduct(productName)).toBeVisible();
    await pageManager.cartPage.goToCheckout();
});