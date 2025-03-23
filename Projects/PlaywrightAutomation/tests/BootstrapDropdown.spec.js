const{test,expect}= require('@playwright/test')

test('BootstrapDropdown', async ({page}) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
    await page.locator('.multiselect-selected-text').click()
    //Capture the Dropdown Options
    const options = await page.locator('ul>li label input')
    await expect(options).toHaveCount(11)
    //options length
    const optionsavailable = await page.$$('ul>li label input')
    console.log(optionsavailable.length)
    //Select Multiple Options
    const multipleOptions = await page.$$('ul>li label')
    for (let value of multipleOptions) {
        const options = await value.textContent()
        console.log(options)

        if(options.includes('HTML')||options.includes('CSS')||options.includes('Java')){
            await value.click()
        }
    }

   
    await page.waitForTimeout(2000)

})