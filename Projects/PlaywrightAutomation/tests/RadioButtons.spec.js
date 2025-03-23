const {test, expect} = require('@playwright/test')

test('RadioButtons', async ({page}) => {
    await page.goto('https://letcode.in/radio')
    //Radio button
    await page.locator("//input[@id='yes']").check()
    await expect(page.locator("//input[@id='yes']")).toBeChecked()
    await expect(page.locator("//input[@id='yes']").isChecked()).toBeTruthy()

    await expect(page.locator("//input[@id='no']")).not.toBeChecked()

    await page.waitForTimeout(5000)
})
