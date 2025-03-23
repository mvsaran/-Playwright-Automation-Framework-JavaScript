const {test,expect} = require('@playwright/test')

test('should display the homepage', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/')
  await expect(page).toHaveTitle('STORE')
  await page.close()
})