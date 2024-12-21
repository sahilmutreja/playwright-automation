export class CartPage {
    constructor(page) {
        this.page = page;
        this.btnCheckout = page.locator('text=Checkout');
    }

    getProduct(productName) {
        return this.page.locator('h3', { hasText: productName });
    }

    async goToCheckout() {
        await this.btnCheckout.click();
    }
}