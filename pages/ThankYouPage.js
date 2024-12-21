export class ThankYouPage {
    constructor(page) {
        this.thankYouMessage = page.locator('.hero-primary');
        this.orderId = page.locator("label[class='ng-star-inserted']");
        this.ordersMenu = page.locator('label[routerlink*="myorders"]');
    }

    async getOrderId(){
        let orderId = await this.orderId.textContent();
        orderId = orderId.split(' ')[2];
        console.log('Order Id = ' + orderId);
        return orderId;
    }

    async goToOrderHistoryPage(){
        await this.ordersMenu.click();
    }
}