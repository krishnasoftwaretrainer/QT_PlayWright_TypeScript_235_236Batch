import {test, expect} from '@playwright/test';

test('Get ByRole', async ({page}) => {

await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(3000); 
await expect(page).toHaveTitle(/Swag Labs/);
 await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
 //await page.pause();
 await page.waitForTimeout(3000); 
 await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
await page.waitForTimeout(3000); 
 await page.getByRole('button', { name: 'Login' }).click();
await page.waitForTimeout(3000); 

});

test('Get ByLabel', async ({page}) => {

await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.waitForTimeout(3000); 

await page.getByLabel('First name').fill('Krishna');
await page.waitForTimeout(3000); 
 
await page.getByLabel('Last name').fill('Rao');
await page.waitForTimeout(3000); 

});

test('Get ByPlaceholder', async ({page}) => {

await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(3000); 

await page.getByPlaceholder('First Name').fill('Krishna');
await page.waitForTimeout(3000); 
 
await page.getByPlaceholder('Last Name').fill('Rao');
await page.waitForTimeout(3000); 
 
});

test('Get ByText', async ({page}) => {

await page.goto('https://www.facebook.com/');
await page.waitForTimeout(3000); 

await page.getByText('Forgotten password?').click();
await page.waitForTimeout(3000); 
});

test('Get ByAltText', async ({page}) => {

await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(3000); 

await page.getByAltText('image not displaying').click();
await page.waitForTimeout(3000); 
 
});

test('Get ByTitle', async ({page}) => {

await page.goto('https://automationtesting.in/#google_vignette');
await page.waitForTimeout(3000); 

await page.getByTitle('Selenium Webdriver Appium Complete Tutorial').nth(3).click();
await page.waitForTimeout(3000); 
 
});

test('Get ByLocator(XPath)', async ({page}) => {

await page.goto('https://www.naukri.com/registration/createAccount');
await page.waitForTimeout(3000); 

await page.locator('//input[@aria-label="Full name"]').fill('Krishna');
await page.waitForTimeout(3000); 
 
});

test('Get ByLocator(CSS-ID#)', async ({page}) => {

await page.goto('https://www.naukri.com/registration/createAccount');
await page.waitForTimeout(3000); 

await page.locator('#name').fill('Ramesh');
await page.waitForTimeout(3000); 
 
});

test.only('Get ByLocator(CSS-Attribute)', async ({page}) => {

await page.goto('https://www.naukri.com/registration/createAccount');
await page.waitForTimeout(3000); 

await page.locator('input[placeholder="What is your name?"]').fill('smdnfbskdjfbsdkj');
await page.waitForTimeout(3000); 
 
});