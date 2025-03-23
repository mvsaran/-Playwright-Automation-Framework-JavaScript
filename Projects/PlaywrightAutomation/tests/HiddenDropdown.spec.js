const{test,expect}=require('@playwright/test');
test('HiddenDropdown', async({page}) => {
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 await page.locator("//input[@placeholder='Username']").fill('Admin')
 await page.locator("//input[@placeholder='Password']").fill('admin123')
 await page.locator("//button[normalize-space()='Login']").click()
 //Navigate to PIM
await page.locator("//span[normalize-space()='PIM']").click()
//click on Job Title dropdown
await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click()
//Wait for the dropdown to appear
await page.waitForTimeout(3000)
 
const options = await page.$$("//div[@role ='listbox']//span")

for(let option of options){
    const jobTitle = await option.textContent()
    console.log(jobTitle)
    if(jobTitle.includes('Software Architect')){
        await option.click()
        break
    }
    }

    await page.waitForTimeout(5000)

})