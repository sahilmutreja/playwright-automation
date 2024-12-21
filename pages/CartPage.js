export class CartPage {
    constructor(page, productName) {
        this.product = page.locator('h3', { hasText: productName });
        this.btnCheckout = page.locator('text=Checkout');
    }

    async goToCheckout() {
        await this.btnCheckout.click();
    }
}