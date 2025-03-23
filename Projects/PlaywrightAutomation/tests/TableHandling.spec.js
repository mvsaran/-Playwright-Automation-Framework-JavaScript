const {test,expect}=require('@playwright/test');

test('Handling Tables', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const table = await page.locator('#productTable')
    
    //Get the number of rows & Columns
    const columns = await table.locator('thead tr th')
    console.log("Number of Columns : ",await columns.count())

    const rows = await table.locator('tbody tr')
    console.log("Number of Rows : ",await rows.count()) 

    //Select checkbox based on the product name
    // const matchedRow = await rows.filter({
    //     has:page.locator('td'),
    //     hasText:'Smartwatch'
    // })
    //  await matchedRow.locator('input').check()


    //Select Multiple Checkboxes
    // await selectProduct(rows,page,'Smartwatch')
    // await selectProduct(rows,page,'Laptop')
    // await selectProduct(rows,page,'Tablet')

    //Print the Product Details
    // for(let i=0;i<await rows.count();i++)
    // {
    //     const row = await rows.nth(i)
    //     const tds = await row.locator('td')

    //     for(let j=0;j<await tds.count()-1;j++)
    //     {
    //         console.log(await tds.nth(j).textContent())
    //     }

    //Read Data from all the pages
    const pages = await page.locator('.pagination li a')
    console.log("Number of Pages : ",await pages.count())

    for(let p=0;p<await pages.count();p++)
    {
     if(p>0)
     {
        await pages.nth(p).click()

     }
        for(let i=0;i<await rows.count();i++)
            {
                const row = await rows.nth(i)
                const tds = await row.locator('td')
        
                for(let j=0;j<await tds.count()-1;j++)
                {
                    console.log(await tds.nth(j).textContent())
                }
    }
    
     await page.waitForTimeout(5000)
        
    }
})

 async function selectProduct(rows,page,name)
 {
    const matchedRow = rows.filter({

        has:page.locator('td'),
        hasText:name
    })
        await matchedRow.locator('input').check()   
 }