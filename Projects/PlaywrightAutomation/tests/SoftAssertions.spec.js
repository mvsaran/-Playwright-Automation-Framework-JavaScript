const {test,expect} = require('@playwright/test')

test("SoftAssertions", async ({page}) => {
    await page.goto('https://www.demoblaze.com/')
    //soft assertion
    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveText('a#nava', 'Home')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
    await page.close()

})