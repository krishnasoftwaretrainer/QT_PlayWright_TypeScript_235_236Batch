import { test, expect } from '@playwright/test';

test('Diff Fill and Type', async ({ page }) => { 

  await page.goto('https://www.saucedemo.com/');

 await page.waitForTimeout(3000); 

 await expect(page).toHaveTitle(/Swag Labs/);
await page.pause();
 await page.getByRole('textbox', { name: 'Username' }).fill('Krishna');
 //await page.getByRole('textbox', { name: 'Username' }).type('Krishna');
await page.waitForTimeout(3000); 
 await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
//await page.getByRole('textbox', { name: 'Username' }).type('standard_user');
 await page.waitForTimeout(3000);

});