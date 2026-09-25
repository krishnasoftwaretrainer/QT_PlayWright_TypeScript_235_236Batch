import { test, expect } from '@playwright/test';


test('Video Recording', async ({ page }) => { 

await page.goto('https://www.saucedemo.com/');
 await page.waitForTimeout(3000); 

 await expect(page).toHaveTitle(/Swag Labs/);

 await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
 //await page.pause();
 await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');

 await page.getByRole('button', { name: 'Login' }).click();
await page.waitForTimeout(2000); 

 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.waitForTimeout(3000); 

});
