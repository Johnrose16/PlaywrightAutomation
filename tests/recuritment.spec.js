import { test, expect } from '@playwright/test';

test('test', async ({ page }) => { 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole("button",{name:'Login'}).click();
    await page.locator("//span[text()='Recruitment']").click();
    await page.locator("//div[text()='-- Select --']").nth(1).click();
    await page.locator("//div[text()='Junior Account Assistant']").click();
});