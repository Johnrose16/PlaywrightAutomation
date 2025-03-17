exports.accountcreatePage = class accountcreatePage {
    constructor(page) {
        this.page = page;
        this.accountNameInput = page.locator("//input[@id='accountName']");
        this.annualRevenueInput = page.locator("//input[@id='annualRevenue']");
        this.industryInput = page.locator("//select[@name='industryEnumId']");
        this.ownershipInput = page.locator("//select[@name='ownershipEnumId']");
        this.marketingInput = page.locator("//select[@name='marketingCampaignId']");
        this.emailInput = page.locator("//input[@id='primaryEmail']");
        this.phonenumberInput = page.locator("//input[@id='primaryPhoneNumber']");
    }
    async navigateToaccountsPage(url){
        await this.page.goto("http://leaftaps.com/crmsfa/control/createAccountForm");
    }
    async enteraccountName(accountName){
        await this.accountNameInput.fill(accountName);
    }
    async enterannualRevenue(annualRevenue){
        await this.annualRevenueInput.fill(annualRevenue);
    }
    async selectindustry(industry){
        await this.industryInput.selectOption(industry);
    }
    async selectownership(ownership){
        await this.ownershipInput.selectOption(ownership);
    }
    async selectmarketing(marketing){
        await this.marketingInput.selectOption(marketing);
    }
    async enteremail(email){
        await this.emailInput.fill(email);
    }
    async enterphoneNumber(phonenumber){
        await this.phonenumberInput.fill(phonenumber);
    }
}