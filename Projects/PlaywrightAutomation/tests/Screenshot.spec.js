import {test,expect} from '@playwright/test'

test('Page Screenshot',async({page})=>{
 await page.goto('https://www.guru99.com/')
 await page.screenshot({path:'tests/Screenshots/'
    +Date.now()
    +'HomePage.png'})

})

test('Full Page Screenshot',async({page})=>{
    await page.goto('https://www.guru99.com/', { waitUntil: 'networkidle' }); // Wait for network to be idle
    await page.waitForTimeout(1000); // Optional: Add a short delay to ensure stability
    await page.screenshot({path:'tests/Screenshots/'
       +Date.now()
       +'FullPage.png',fullPage:true});
   
})

test.only('Element Screenshot',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    const element = await page.locator("//div[@id='tbodyid']//div[1]//div[1]//a[1]//img[1]"); // Select the element (e.g., navbar)
    await element.screenshot({path:'tests/Screenshots/'
       +Date.now()
       +'Element.png'});
});