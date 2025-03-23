const {test,expect} = require('@playwright/test')

test('handle inputbox', async ({ page }) => {
   await page.goto('https://www.demoblaze.com/')
   await page.locator('#login2').click()

   await expect (await page.locator('#loginusername')).toBeVisible()
   await expect (await page.locator('#loginusername')).toBeEmpty()
   await expect (await page.locator('#loginusername')).toBeEditable()
   await expect (await page.locator('#loginusername')).toBeEnabled()
   //await expect (await page.locator('#loginpassword')).toBeVisible()
    await page.locator('#loginusername').fill('SaranKumar')

    await page.waitForTimeout(2000)
   

})