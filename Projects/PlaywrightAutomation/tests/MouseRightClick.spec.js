const { test, expect } = require('@playwright/test');

test('Mouse Right Click', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const RightClickMe = await page.locator('.context-menu-one');
    await RightClickMe.click({ button: 'right' });

    const Edit = await page.locator('.context-menu-item:nth-child(1)');
    await Edit.click();

    const EditText = await page.locator('.context-menu-one').textContent();
    expect(EditText).toBe('right click me');
    console.log(EditText);

    await page.waitForTimeout(5000);


});