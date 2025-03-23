const{test,expect}= require('@playwright/test')
test('MultiSelectDropdown', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Select Multiple Options from Dropdown
    await page.selectOption('#colors',['Red','Blue','Green'])
   //Assertions
   //Check Number of Options
   const options = await page.$$('#colors option')
    console.log(options.length)

    //check the options length
    await expect(options.length).toBe(7)

    //Check presence of Options
    const content = await page.locator('#colors').textContent()
    await expect(content).toContain('Red')
    await expect(content).toContain('Blue')
    await expect(content).toContain('Green')
    
    //Check Selected Options
    const selectedOptions = await page.$$('#colors option:checked')
    console.log(selectedOptions.length)

    await page.waitForTimeout(5000)
})