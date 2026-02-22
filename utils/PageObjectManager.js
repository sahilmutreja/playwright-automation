import { LoginPage } from '../pages/LoginPage';
import { LoginPractisePage } from '../pages/LoginPractisePage';
import { DashboardPage } from '../pages/DashboardPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ThankYouPage } from '../pages/ThankYouPage';
import { OrderHistoryPage } from '../pages/OrderHistoryPage';
import { OrderDetailsPage } from '../pages/OrderDetailsPage';

export class PageObjectManager {
    constructor(page) {
        this.loginPage = new LoginPage(page);
        this.loginPractisePage = new LoginPractisePage(page);
        this.dashboardPage = new DashboardPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.thankYouPage = new ThankYouPage(page);
        this.orderHistoryPage = new OrderHistoryPage(page);
        this.orderDetailsPage = new OrderDetailsPage(page);
    }
}