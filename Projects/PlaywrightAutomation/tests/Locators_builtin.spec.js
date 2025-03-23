const {test, expect} = require('@playwright/test');

test('Builtin_Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //getByAltText
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()
    //getByplaceholder
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    //getByRole
    await page.getByRole('button', {type: 'submit'}).click()
    //getByText
    //await expect(await page.getByText('vid k')).toBeVisible()

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
    await expect(page.getByText(name)).toBeVisible()
})