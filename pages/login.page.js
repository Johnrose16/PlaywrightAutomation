exports.loginPage = class loginPage {
    constructor(page) {
        this.page = page;
        this.userInput = page.locator("//input[@id='username']");
        this.passwordInput = page.locator("//input[@id='password']");
        this.signInput = page.locator("//input[@type='submit']");
        this.image = page.locator('//*[@id="button"]/a/img')
    }
    async navigateTologinPage(url){
        await this.page.goto("http://leaftaps.com/opentaps/control/main");
    }
    async enterUserName(username){
        await this.userInput.fill(username);
    }

    async enterPassword(password){
        await this.passwordInput.fill(password);
    }

    async clicksignin(){
        await this.signInput.click();
    }
    async clickimage(image){
        await this.image.click();
    }
}