exports.createleadPage = class createleadPage {
    constructor(page) {
        this.page = page;
        this.leadSet = page.locator("//a[@id='ext-gen614']");
    }
    async navigateTocreateleadPage(url){
        await this.page.goto("http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL271546846274");
    }
    async crele(){
        await this.leadSet.click();
}
}