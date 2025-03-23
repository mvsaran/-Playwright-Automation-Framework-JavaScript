const{test,expect}=require('@playwright/test');
let page;
test.beforeEach(async({browser})=>{
    page=await browser.newPage();
    //Login
    await page.goto('https://www.demoblaze.com/index.html');
    await page.click('#login2');
    await page.locator('#loginusername').fill('SaranKumar');
    await page.locator('#loginpassword').fill('test');
    await page.locator('//button[normalize-space(.)="Log in"]').click();

})
  test.afterEach(async()=>{
    await page.click('#logout2');
    await page.close();
})

    //Home Page
test('Home Page Test',async()=>{
     const products = await page.$$('.hrefch')
     expect(products).toHaveLength(9)
    });
    
    //Add a product to cart
    test('Add a product to cart',async()=>{
      
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[@class='btn btn-success btn-lg']").click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });




    
})