const { test, expect } = require('@playwright/test');

test('Mouse Hover', async ({ page }) => {

    await page.goto('https://demo.opencart.com.gr/')
 
     const Desktops = await page.locator("//a[normalize-space()='Desktops']");
     const mac = await page.locator("//a[normalize-space()='Mac (1)']");

     // Mouse Hover
        await Desktops.hover();
        await mac.hover();

        await page.waitForTimeout(5000);

})