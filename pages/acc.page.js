exports.accountPage = class accountPage {
    constructor(page) {
        this.page = page;
        this.companyInput = page.locator("//input[@id='createLeadForm_companyName']");
        this.forenameInput = page.locator("//input[@id='createLeadForm_firstName']");
        this.surenameInput = page.locator("//input[@id='createLeadForm_lastName']");
        this.sourceInput = page.locator("//select[@id='createLeadForm_dataSourceId']");
        this.nameInput = page.locator("//input[@id='createLeadForm_firstNameLocal']");
        this.industryInput = page.locator("//select[@id='createLeadForm_industryEnumId']");
        this.ownershipInput = page.locator("//select[@id='createLeadForm_ownershipEnumId']");
        this.importantInput = page.locator("//textarea[@id='createLeadForm_importantNote']");
        this.currencyInput = page.locator("//select[@id='createLeadForm_currencyUomId']");
        this.submitInput = page.locator("//input[@type='submit']");
        this.homeInput = page.locator("//a[text()='My Home']");
    }
    async navigateToaccountPage(url){
        await this.page.goto("http://leaftaps.com/crmsfa/control/createLeadForm");
    }
    async enterCompanyname(companyName){
        await this.companyInput.fill(companyName);
    }

    async enterforeName(forename){
        await this.forenameInput.fill(forename);
    }

    async entersureName(surename){
        await this.surenameInput.fill(surename);
    }

    async selectsoucename(source){
        await this.sourceInput.selectOption(source);
    }

    async enterfirstname(firstNameLocal){
        await this.nameInput.fill(firstNameLocal);
    }

    async selectindustry(industry){
        await this.industryInput.selectOption(industry);
    }

    async selectownership(ownership){
        await this.ownershipInput.selectOption(ownership);
    }

    async enterimportantnote(important){
        await this.importantInput.fill(important);
    }

    async selectcurrency(currency){
        await this.currencyInput.selectOption(currency);
    }

    async clicksubmit(){
        await this.submitInput.click();
    }

    async gohome(){
        await this.homeInput.click();
    }
}