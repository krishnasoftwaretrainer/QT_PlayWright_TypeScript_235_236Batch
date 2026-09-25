import {test,expect} from '@playwright/test';

//1.Auto Scrolling
test('Browser Navigations', async ({page}) => {
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.pause();

await page.goto('https://demo.automationtesting.in/Register.html');


await page.goto('https://www.saucedemo.com/');

await page.goBack();


await page.goBack();


await page.goForward();


await page.reload();


await page.goForward();


});