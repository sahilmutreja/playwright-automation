export class CheckoutPage{
    constructor(page){
        this.countryDropDown = page.locator('[placeholder="Select Country"]');
        this.email = page.locator('.user__name>label');
        this.dropdown = page.locator('.form-group .ta-results');
        this.btnPlaceOrder = page.locator('.action__submit');
    }

    async fillCountry(partialCountryName, fullCountryName){
        await this.countryDropDown.pressSequentially(partialCountryName);
        const options = this.dropdown.locator('button>span');
        await this.dropdown.waitFor()
        for (let i = 0; i < await options.count(); i++) {
            let countryNameInOption = await options.nth(i).textContent();
            if (countryNameInOption.trim() == fullCountryName.trim()) {
                await options.nth(i).click();
            }
        }
    }

    async placeOrder(){
        await this.btnPlaceOrder.click();
    }
}

