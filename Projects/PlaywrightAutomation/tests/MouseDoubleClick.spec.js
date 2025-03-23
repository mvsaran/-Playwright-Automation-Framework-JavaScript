const {test ,expect} = require('@playwright/test');

test('Mouse Double Click', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const buttonCopy = await page.locator("//button[normalize-space()='Copy Text']")
    // Double click on the button
    await buttonCopy.dblclick()
    
    const f2 =await page.locator('#field2')
    // Get the text from the field2 element
    await expect(f2).toHaveValue('Hello World!')
    console.log(await f2.textContent())


    await page.waitForTimeout(5000)
})