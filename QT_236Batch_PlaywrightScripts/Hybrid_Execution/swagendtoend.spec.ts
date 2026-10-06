import { test } from '@playwright/test';
import { LoginPage } from '../Hybrid_PageLocators/swagloginpom.ts';
import { AddtoCartPage } from '../Hybrid_PageLocators/addtocartlocators';
import loginData from '../Hybrid_TestData/swaglogindata.json';
import fillformData from '../Hybrid_TestData/swagformfilldata.json';
import { CartPage } from '../Hybrid_PageLocators/cartlogo.ts';
import { CheckoutPage } from '../Hybrid_PageLocators/checkout.ts';
import { FillFormPage } from '../Hybrid_PageLocators/fillform.ts';

test('Login Scenario', async ({ page }) => {

  const loginPageInstance = new LoginPage(page);
 const cartPageInstance = new AddtoCartPage(page);
const cartLogoInstance = new CartPage(page);
const checkoutInstance = new CheckoutPage(page);
const fillFormInstance = new FillFormPage(page);

  await loginPageInstance.enterApplicationUrl(
    loginData.url
  );

  await loginPageInstance.loginToApplication(
    loginData.username,
    loginData.password
  );

  await page.pause();

  await cartPageInstance.addProductToCart();
  await cartLogoInstance.clickCartLogo();
  await checkoutInstance.clickCheckoutButton();

await fillFormInstance.fillFormDetails(
  fillformData.firstname,
  fillformData.lastname,
  fillformData.zipcode
  
);

});


