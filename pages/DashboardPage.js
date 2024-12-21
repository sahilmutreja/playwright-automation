export class DashboardPage {

    constructor(page){
        this.allProducts = page.locator('.card-body');
        this.cartMenu = page.locator("[routerlink*='cart']");
    }

    async waitForPageToLoad(){
        await this.allProducts.first().waitFor();
    }

    async searchProductAndAddToCart(productName){
        for (let index = 0; index < await this.allProducts.count(); index++) {
            const product = this.allProducts.nth(index);
            if (await product.locator('h5>b').textContent() == productName)
                await product.locator('button').last().click();
        }
    }

    async goToCartPage(){
        await this.cartMenu.click()
    }
}