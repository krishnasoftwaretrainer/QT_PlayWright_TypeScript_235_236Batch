import { test, expect } from '@playwright/test';

test('Title and URL Verification', async ({ page }) => { 

  //await page.goto('https://www.saucedemo.com/');

  await page.goto('https://www.facebook.com/');

 await page.waitForTimeout(3000); 

 //await expect(page).toHaveTitle(/Swag Labs/);  //Title Verifcation

 await expect(page).toHaveURL('https://www.saucedemo.com/');

// const actualURL=await page.url();
// console.log('URL:',actualURL);
 //   const actualTitle=await page.title();
//   console.log('Title:',actualTitle);
 
//   const expectedTitle='Swag Labs';
  
//   if(actualTitle==expectedTitle)  //True
//   {
//     console.log('Smoke Testing is Passed');
//   }
//   else  //False
//   {
//     console.log('Smoke Testing is Failed');
//   }

});