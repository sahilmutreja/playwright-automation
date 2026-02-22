export class LoginPractisePage {

    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.terms = page.locator('#terms');
        this.signInBtn = page.locator("input[value='Sign In']");
    }

    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        return this;
    }

    async login(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.terms.check();
        await this.signInBtn.click();
    }
}
