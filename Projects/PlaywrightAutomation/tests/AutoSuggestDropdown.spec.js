const{test,expect}=require('@playwright/test');
test('AutoSuggestDropdown', async({page}) => {

    await page.goto('https://redbus.in/');
    await page.locator('#src').fill('Bangalore');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    const FromCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
     for (let option of FromCityOptions) {
        const value = await option.textContent()
        console.log(value)
        if(value.includes('Bangalore')){
            await option.click()
            break
        }
     }

    // Locator and logic for "To City"
    await page.locator('#dest').fill('Mumbai');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
    const ToCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
    for (let option of ToCityOptions) {
        const value = await option.textContent();
        console.log(value);
        if (value.includes('Mumbai')) {
            await option.click();
            break;
        }
    }

    // Select a future date from the calendar
    await page.locator('.sc-cSHVUG.NyvQv.icon.icon-datev2').click(); // Replace with the actual calendar trigger locator
    //await page.waitForSelector('.future-date-class'); // Replace with the actual future date locator
    //await page.locator('.future-date-class').click(); // Replace with the actual future date locator

     await page.waitForTimeout(5000)
});