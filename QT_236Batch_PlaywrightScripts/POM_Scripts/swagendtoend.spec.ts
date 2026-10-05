import { test } from '@playwright/test';
import { LoginPage } from '../Pageobjects_Locators/loginpage_locators';
import { AddtoCartPage } from '../Pageobjects_Locators/addtocart';

test('Login Scenario', async ({ page }) => {

  const loginPageInstance = new LoginPage(page);
const cartPageInstance = new AddtoCartPage(page);

  await loginPageInstance.enterApplicationUrl('https://www.saucedemo.com/');

  await loginPageInstance.loginToApplication(
    'standard_user',
    'secret_sauce'
  );
await page.pause();
  await cartPageInstance.addProductToCart();


  await page.waitForTimeout(1000);

});