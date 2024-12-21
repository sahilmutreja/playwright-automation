export class OrderHistoryPage{
    constructor(page){
        this.orderId = page.locator('tbody tr:first-child>th')
        this.btnViewOrderDetails = page.locator('tbody tr:first-child .btn-primary');
    }

    async viewOrderDetails(){
        await this.btnViewOrderDetails.click()
    }
}