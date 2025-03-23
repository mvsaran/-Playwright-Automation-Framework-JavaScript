const {test,expect}=require('@playwright/test');

test('HandleFrames', async({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    //Total number of frames
    const allframes = await page.frames()
    console.log("Total Number of Frames :",allframes.length)

    //Approcah 1 :Using Frame URL
   //const frame1 =  await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
   //await frame1.fill("input[name='mytext1']",'Saran')

   //Approach 2 : Using Frame locator
   const inputbox = await page.frameLocator('frame[src="frame_1.html"]').locator('input[name="mytext1"]')
    await inputbox.fill('Saran')

   await page.waitForTimeout(5000)
})