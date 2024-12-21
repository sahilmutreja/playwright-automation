import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { ThankYouPage } from '../../pages/ThankYouPage';
import { OrderHistoryPage } from '../../pages/OrderHistoryPage';
import { OrderDetailsPage } from '../../pages/OrderDetailsPage';


test('test product checkout with pages', async ({ page }) => {
    const email = 'Woyoba4364@iminko.com';
    const productName = 'ADIDAS ORIGINAL';
    const partialCountryName = 'Ind';

    const loginPage = new LoginPage(page)
    await loginPage.goTo();
    await loginPage.login(email, email);

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.waitForPageToLoad();
    await dashboardPage.searchProductAndAddToCart(productName);
    await dashboardPage.goToCartPage();

    const cartPage = new CartPage(page, productName);
    await expect(cartPage.product).toBeVisible();
    await cartPage.goToCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCountry(partialCountryName);
    await expect(checkoutPage.email).toHaveText(email);
    await checkoutPage.placeOrder();

    const thankYouPage = new ThankYouPage(page);
    await expect(thankYouPage.thankYouMessage)
                .toContainText('Thankyou for the order.');
    let orderIdString = await thankYouPage.getOrderId();
    await thankYouPage.goToOrderHistoryPage();

    const orderHistoryPage = new OrderHistoryPage(page);
    await expect(orderHistoryPage.orderId).toHaveText(orderIdString);
    await orderHistoryPage.viewOrderDetails();

    // Assert if our product is present on order summary page
    const orderDetailsPage = new OrderDetailsPage(page);
    await expect(orderDetailsPage.productTitle)
                .toHaveText(productName);
});