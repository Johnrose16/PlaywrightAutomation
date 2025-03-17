import { test, expect } from '@playwright/test';
    let page;
    test.beforeEach(async({browser}) => {
        page =await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole("button",{name:'Login'}).click();
}); 
test.only('Recruitment', async() => {
    await page.locator("//span[text()='Recruitment']").click();
    await page.locator("//div[text()='-- Select --']").nth(0).click();
    await expect(page.getByText('Account Assistant')).toBeVisible();
    await page.getByText('Account Assistant').click();
    await page.locator("//div[text()='-- Select --']").nth(2).click();
    await expect(page.getByText('Interview Scheduled')).toBeVisible();
    await page.getByText('Interview Scheduled').click();
    await page.waitForTimeout(5000);
});
test.only('My Info', async() => {
    await page.locator("//span[text()='My Info']").click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').click();
    await page.getByPlaceholder('Last Name').fill('S');
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input').click();
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input').fill('4818');
    await page.locator("//button[@type='submit']").nth(0).click();
    await page.waitForTimeout(3000);
});
test.only('PIM', async() => {
    await page.locator("//span[text()='PIM']").click();
    await page.getByPlaceholder("Type for hints...").nth(0).click();
    await page.getByPlaceholder("Type for hints...").nth(0).fill('jackie  john');
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(3000);
});