import { test, expect } from '@playwright/test';

//SwagLabs Valid and Valid Login
test.skip('Swag Valid Login', async ({ page }) => { 

//   await page.goto('https://www.saucedemo.com/');
await page.goto('/');
 await page.waitForTimeout(3000); 

 await expect(page).toHaveTitle(/Swag Labs/);

 await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
 //await page.pause();
 await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');

 await page.getByRole('button', { name: 'Login' }).click();

 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

//SwagLabs Invalid Login

// test.only('Swag Invalid Login', async ({ page }) => { 
test.only('Swag Invalid Login', async ({ page }) => { 
 await page.goto('https://www.saucedemo.com/');
//await page.goto('/');

 await page.waitForTimeout(3000); 

 await expect(page).toHaveTitle(/Swag Labs/);

 await page.getByRole('textbox', { name: 'Username' }).fill('invalid');
 //await page.pause();
 await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');

 await page.getByRole('button', { name: 'Login' }).click();

});

