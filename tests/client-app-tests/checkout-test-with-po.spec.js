import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../../utils/PageObjectManager.js'

test('test product checkout with pages', async ({ page }) => {
    const email = 'Woyoba4364@iminko.com';
    const productName = 'ADIDAS ORIGINAL';
    const partialCountryName = 'Ind';
    const pageManager = new PageObjectManager(page);

    await pageManager.loginPage.goTo();
    await pageManager.loginPage.login(email, email);

    await pageManager.dashboardPage.waitForPageToLoad();
    await pageManager.dashboardPage.searchProductAndAddToCart(productName);
    await pageManager.dashboardPage.goToCartPage();

    await expect(pageManager.cartPage.getProduct(productName)).toBeVisible();
    await pageManager.cartPage.goToCheckout();

    await pageManager.checkoutPage.fillCountry(partialCountryName);
    await expect(pageManager.checkoutPage.email).toHaveText(email);
    await pageManager.checkoutPage.placeOrder();

    await expect(pageManager.thankYouPage.thankYouMessage)
        .toContainText('Thankyou for the order.');
    let orderIdString = await pageManager.thankYouPage.getOrderId();
    await pageManager.thankYouPage.goToOrderHistoryPage();

    await expect(pageManager.orderHistoryPage.orderId).toHaveText(orderIdString);
    await pageManager.orderHistoryPage.viewOrderDetails();

    // Assert if our product is present on order summary page
    await expect(pageManager.orderDetailsPage.productTitle)
        .toHaveText(productName);
});