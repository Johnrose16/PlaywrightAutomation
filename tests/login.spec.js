import {test,expect} from '@playwright/test';
import { loginPage } from '../pages/login.page';
import { createleadPage } from '../pages/crele.page';
import { accountPage } from '../pages/acc.page';
import { accountcreatePage } from '../pages/accountcreate.page';

test('login',async({page}) => {
    const login = new loginPage(page);
    await login.navigateTologinPage();
    await login.enterUserName('DemoSalesManager');
    await login.enterPassword('crmsfa');
    await login.clicksignin();
    await login.clickimage();
    await page.waitForTimeout(3000);

    const  crele = new createleadPage(page);
    await  crele.navigateTocreateleadPage();
    await page.waitForTimeout(3000);

    const account = new accountPage(page);
    await account.navigateToaccountPage();
    await account.enterCompanyname('johnson');
    await account.enterforeName('Aravinth');
    await account.entersureName('Rose');
    await account.selectsoucename('Website');
    await account.enterfirstname('Aravinth');
    await account.selectindustry('Finance');
    await account.selectownership('Sole Proprietorship');
    await account.enterimportantnote('do without mistake');
    await account.selectcurrency('INR - Indian Rupee');
    await account.clicksubmit();
    await page.waitForTimeout(3000);
    await account.gohome();

    const accountcreate = new accountcreatePage(page);
    await accountcreate.navigateToaccountsPage();
    await accountcreate.enteraccountName('Johnson Aravinth');
    await accountcreate.enterannualRevenue('5,00,000');
    await accountcreate.selectindustry('Computer Software');
    await accountcreate.selectownership('Public Corporation');
    await accountcreate.selectmarketing('Automobile');
    await accountcreate.enteremail('1999rosejohn@gmail.com');
    await accountcreate.enterphoneNumber('7502129105');
    await page.waitForTimeout(5000);
});