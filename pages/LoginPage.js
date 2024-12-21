export class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.btnLogin = page.locator('#login');
    }

    async goTo(url) {
        await this.page.goto('https://rahulshettyacademy.com/client/');
        return this;
    }

    async login(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.btnLogin.click();
    }
}
