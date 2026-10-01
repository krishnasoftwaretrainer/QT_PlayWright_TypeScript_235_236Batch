import { test,expect } from '@playwright/test';

test('toBeVisible toBeEnabled toHaveValue', async ({ page }) => { 

await page.goto('https://www.saucedemo.com/');
//await page.goto('https://www.facebook.com/');

await expect(page).toHaveURL('https://www.saucedemo.com/');  //Pass or Fail 

 await page.waitForTimeout(3000); 

 const username= page.getByRole('textbox', { name: 'Username' });
 await expect(username).toBeVisible();
 username.fill('standard_user');
 await expect(username).toHaveValue('standard_user');
 
 const password= page.getByRole('textbox', { name: 'Password' });
 await expect(password).toBeVisible();
 password.fill('secret_sauce');
 await expect(password).toHaveValue('secret_sauce');

const loginButton= page.getByRole('button', { name: 'Login' });
 await expect(loginButton).toBeVisible();
 await expect(loginButton).toBeEnabled();
 loginButton.click();

 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test.only('toBeDisabled ', async ({ page }) => { 

await page.goto('https://www.naukri.com/registration/createAccount');
const registernow= page.locator('//button[text()="Register now"]');
await expect(registernow).toBeDisabled();
 //await expect(registernow).toBeEnabled();

 await expect(registernow).toHaveAttribute('type', 'submit');

 console.log("Register Now Button is Disabled");

 
 
 

});