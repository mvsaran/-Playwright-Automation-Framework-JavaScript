const{test,expect}= require('@playwright/test')
test('CheckBox', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes')
    //Checkbox
    await page.locator("//input[@type='checkbox'][1]").check()
    await expect(page.locator("//input[@type='checkbox'][1]")).toBeChecked()
    await page.waitForTimeout(5000)
    await page.locator("//input[@type='checkbox'][2]").uncheck()
    await expect(page.locator("//input[@type='checkbox'][2]")).not.toBeChecked()
    await page.waitForTimeout(5000)
})