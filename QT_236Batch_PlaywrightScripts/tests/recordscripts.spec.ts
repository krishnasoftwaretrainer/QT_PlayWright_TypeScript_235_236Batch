import { test, expect } from '@playwright/test';

test('Record Scripts', async ({ page }) => { 

//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();

await page.goto('https://demo.automationtesting.in/Register.html');
await page.pause();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Krishna');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Rao');
  await page.locator('textarea').fill('Hyd, 50006');
   await page.locator('input[type="email"]').fill('krishna@gmail.com');
   await page.locator('input[type="tel"]').fill('1234567890');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.locator('#checkbox1').check();
  await page.locator('#checkbox3').check();
  await page.locator('#msdd').click();
  await page.getByText('English').click();
  await page.locator('#msdd').click();
  await page.getByText('Skills Select Skills Adobe').click();
  await page.locator('#Skills').selectOption('Adobe Photoshop');
    await page.locator('#yearbox').selectOption('1984');
  await page.getByRole('combobox').nth(4).selectOption('January');
  await page.locator('#daybox').selectOption('4');
  await page.locator('#firstpassword').fill('123456');
   await page.locator('#secondpassword').fill('123456');
  await page.getByRole('button', { name: 'Submit' }).click();
});