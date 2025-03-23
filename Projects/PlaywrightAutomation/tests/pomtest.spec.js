import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('test',async({page})=>{
    
    // Create an instance of the LoginPage class
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('SaranKumar','test');
    await page.waitForTimeout(3000);

    

    //Home page

    const home = new HomePage(page);
    await home.addProductToCart('Samsung galaxy s6');
    await page.waitForTimeout(3000);
    await home.gotoCart();

    //Cart page
    
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const result = await cart.checkProductInCart('Samsung galaxy s6');
    expect(await result).toBe(true);
})