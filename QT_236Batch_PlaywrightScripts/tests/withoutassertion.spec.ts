import { test,expect } from '@playwright/test';

test('Swag Valid Login', async ({ page }) => { 

// await page.goto('https://www.saucedemo.com/');
await page.goto('https://www.facebook.com/');

//await expect(page).toHaveURL('https://www.saucedemo.com/');  //Pass or Fail 

 await page.waitForTimeout(3000); 

 await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
 
 await page.getByRole('textbox', { name: 'Password' }).fill('gbtrjkgrtjg');

 await page.getByRole('button', { name: 'Login' }).click();

});