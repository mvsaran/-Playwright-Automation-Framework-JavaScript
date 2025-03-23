const{test,expect} = require('@playwright/test')

test('AssertionsTest', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register')
    //expect the title of the page
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    //expect the page to have url
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    //expect the locator to be visible
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
     //expect the locator to be visible
     await expect(page.locator('.header-logo')).toBeVisible()
   //expect the locator to be enabled
   const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()
     //expect the locator to be checked
    const maleRadioButton =  await page.locator('#gender-male')
    maleRadioButton.check()
    await expect(maleRadioButton).toBeChecked()

    //check box
    const newsletterCheckBox = await page.locator('input#Newsletter')
    await expect(newsletterCheckBox).toBeChecked()

    //expect the locator haveattribute
    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type','submit')

    //expect locator contain text
    await expect (await page.locator('.page-title h1')).toContainText('Regi')

    //expect locator to contain text
    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    //expect locator to have value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('testdemo@gamil.com')
    await expect(emailInput).toHaveValue('testdemo@gamil.com')
   
    //expect loactor to have count
    const links = await page.locator('a')
    await expect(links).toHaveCount(62)
})
