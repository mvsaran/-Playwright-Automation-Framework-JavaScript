import {test,expect} from '@playwright/test'
test('Locators', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    //click on login button
    //await page.locator('id=login2').click()
    await page.click('id=login2')
    //enter username & password
    //await page.locator('id=loginusername').fill('admin')
    await page.fill('id=loginusername','SaranKumar')
    await page.fill('id=loginpassword','test')
    //click on login button
    await page.click("//button[normalize-space()='Log in']")
    await expect(page.locator("a#nameofuser")).toHaveText('Welcome SaranKumar')
    //click on Logout button
    await page.click('id=logout2')
    await page.close()
})