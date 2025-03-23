const{test,expect}=require('@playwright/test');

test.skip('Alert with OK', async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')

//dialogue window handler -Enabler
page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert')
    console.log(dialog.message())
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept()
})
await page.click("//button[@id='alertBtn']")
await page.waitForTimeout(3000)
})

//Confirm dialogue window handler -Enabler

test.skip('Confirmation Dialogue with OK & Cancel', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    //dialogue window handler -Enabler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        console.log(dialog.message())
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()//close by using OK button
    })
    await page.click("//button[@id='confirmBtn']")
    await expect (page.locator("//p[normalize-space()='You pressed OK!']").isVisible()).resolves.toBeTruthy()
    await page.waitForTimeout(3000)
    })

    //Prompt dialogue window handler -Enabler
    test('Prompt Dialogue ', async({page}) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
        
        //dialogue window handler -Enabler
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('prompt')
            console.log(dialog.message())
            expect(dialog.message()).toContain('Please enter your name:')
            expect(dialog.defaultValue()).toContain('Harry Potter')
            await dialog.accept('Saran')
        })
        await page.click('//button[@id="promptBtn"]')
        await expect (page.locator("//p[@id='demo']")).toHaveText('Hello Saran! How are you today?')
        await page.waitForTimeout(5000)
        })
