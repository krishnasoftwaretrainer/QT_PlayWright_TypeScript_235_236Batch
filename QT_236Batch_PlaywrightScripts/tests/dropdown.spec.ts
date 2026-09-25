import {test,expect} from '@playwright/test';

test('fill method: Clear text in textbox or text area', async ({page}) => {
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.waitForTimeout(2000); 

const countryDropdown=page.getByLabel('Country/region');

//countryDropdown.selectOption({'index':6}); //Index:5
//countryDropdown.selectOption({'value':'AU'}); //Value:AU
countryDropdown.selectOption({'label':'Bangladesh'}); //Label:Australia
await page.waitForTimeout(2000); 

});