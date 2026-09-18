import {test,expect} from '@playwright/test'

test('Locatots',async ({page}) =>{

    await page.goto('https://automationtesting.in/');
   // await page.getByPlaceholder('First Name').fill('fbdjhw');

//    await page.getByText('Email address or mobile number').fill('hefkjerkjer');

await page.getByTitle('Selenium Webdriver Appium Complete Tutorial').click();
await page.waitForTimeout(5000);
    
});