import {test,expect} from '@playwright/test';

test('getText and getattribute', async ({page}) => {

await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);

const loginButton=page.locator('#login-button');
await loginButton.click();
await page.waitForTimeout(2000);

const attributeValue=await loginButton.getAttribute('class'); //login-button
console.log('Attribute Value:', attributeValue);

const errorMessage=page.locator('[data-test="error"]');
const errorText=await errorMessage.innerText();
console.log('Error Message:', errorText);



});