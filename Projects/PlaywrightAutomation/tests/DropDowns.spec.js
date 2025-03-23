const{test,expect}= require('@playwright/test')

test('DropDowns', async ({page}) => {

    await page.goto('https://letcode.in/dropdowns')
    //Multiways to Automate Dropdown
    //await page.locator('#fruits').selectOption({label: 'Mango'}) //label
    //await page.locator('#fruits').selectOption('Mango')//visible text
    //await page.locator('#fruits').selectOption({value:'1'})//Value
   // await page.locator('#fruits').selectOption({index:2})//Index

    // Assertions
    const options = await page.$$('#fruits')
    console.log(options.length)

    //check presence of options

    const content = await page.locator('#fruits').textContent()
    await expect(content).toContain('Apple')
    

    await page.waitForTimeout(5000)
})