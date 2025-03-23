const{test,expect}=require('@playwright/test');
test('Home Page Test',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.click('#login2');
    await page.locator('#loginusername').fill('SaranKumar');
    await page.locator('#loginpassword').fill('test');
    await page.locator('//button[normalize-space(.)="Log in"]').click();

    //Home Page
     const products = await page.$$('.hrefch')
     expect(products).toHaveLength(9)

     //Logout
        await page.click('#logout2');


        await page.waitForTimeout(5000);
    });
    
    // Separate the two test blocks
    test.only('Add a product to cart',async({page})=>{
        //Login
        await page.goto('https://www.demoblaze.com/index.html');
    await page.click('#login2');
    await page.locator('#loginusername').fill('SaranKumar');
    await page.locator('#loginpassword').fill('test');
    await page.locator('//button[normalize-space(.)="Log in"]').click();

    //Add a product to cart

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[@class='btn btn-success btn-lg']").click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });




    //Logout
    await page.click('#logout2');

})