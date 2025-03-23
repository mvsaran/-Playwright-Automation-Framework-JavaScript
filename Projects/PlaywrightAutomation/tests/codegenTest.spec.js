import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('S');
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('Saran');
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('SaranK');
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('SaranKumar');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});