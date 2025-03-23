const { test, expect } = require('@playwright/test');

test('Date Picker', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.fill('#datepicker','03/30/2025');

    //date picker
    const Year = '2025';
    const Month = 'December';
    const Day = '31';

    await page.click('#datepicker'); // opens calendar

    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentYear.trim() === Year && currentMonth.trim() === Month) {
            break;
        }

        await page.locator('[title="Next"]').click();
        await page.waitForTimeout(500); // Add a small delay to avoid rapid clicks
    }

    const Dates = await page.$$('//a[@class="ui-state-default"]');
    for (const date of Dates) {
        const dateText = await date.textContent();
        if (dateText.trim() === Day) {
            await date.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
});