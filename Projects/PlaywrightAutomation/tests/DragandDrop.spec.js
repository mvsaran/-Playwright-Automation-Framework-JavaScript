const{test,expect}=require('@playwright/test');

test('Drag and Drop', async({page})=>{


    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const washington = await page.locator('#box3');
    const usa = await page.locator('#box103');

    //Approach 1
    // await washington.hover();
    // await page.mouse.down();

    // await usa.hover();
    // await page.mouse.up();  
    
    //Approach 2
    await washington.dragTo(usa);

    

    await page.waitForTimeout(3000);
})