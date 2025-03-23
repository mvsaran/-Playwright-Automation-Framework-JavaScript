const { test, expect } = require("@playwright/test")

test("Upload files", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator('#file-upload').setInputFiles('./tests/UploadFiles/SampleFile.txt')
    await page.locator('#file-submit').click()

    await expect (page.locator('#uploaded-files')).toHaveText('SampleFile.txt')
    await expect(page.locator('h3:has-text("File Uploaded!")')).toBeVisible();

    await page.waitForTimeout(5000)



})