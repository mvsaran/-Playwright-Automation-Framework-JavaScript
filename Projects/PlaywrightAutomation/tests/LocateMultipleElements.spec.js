const {test,expect} = require('@playwright/test')

test('LocateMultipleElements', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    await page.$$('a').then(async (elements) => {
        for (const element of elements) {
            console.log(await element.textContent())
        }
    })
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    await page.$$("//div[@id='tbodyid']//div//h4/a").then(async (products) => {
        for (const product of products) {
            console.log(await product.textContent())
        }
    }); // Added missing closing parenthesis and semicolon
    await page.close();
});