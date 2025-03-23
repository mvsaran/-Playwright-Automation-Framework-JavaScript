const{test,expect}=require('@playwright/test');

test('Keyboard actions', async({page}) => {

    await page.goto('https://gotranscript.com/text-compare')
    await page.fill('textarea[name="text1"]', 'Hello World! Welcome to Playwright Automation.')
    await page.keyboard.press('Control+KeyA')
    await page.keyboard.press('Control+KeyC')
    await page.fill('textarea[name="text2"]', '')
    await page.keyboard.press('Control+KeyV')

    await page.waitForTimeout(3000)
});