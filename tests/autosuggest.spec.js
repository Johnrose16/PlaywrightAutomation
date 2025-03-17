import { test, expect } from '@playwright/test';

test('test', async ({ page }) => { 
    await page.goto("https://www.google.co.in/");
    await page.locator("textarea[name='q']").type["playwright"];
    await page.waitForSelector("//Li[@role='presentation']");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
});