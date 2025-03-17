import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.douglas.de/de');
    await page.getByRole('button',{name:'NUR UNBEDINGT ERFORDERLICH'}).click();
    await page.locator("//a[text()='PARFUM']").click();
    await page.locator("//div[@data-testid= 'classificationClassName']").click();
    await page.getByLabel('Produktart').click();
    await page.getByPlaceholder('Produktart suchen').fill('Bodylotion');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
});