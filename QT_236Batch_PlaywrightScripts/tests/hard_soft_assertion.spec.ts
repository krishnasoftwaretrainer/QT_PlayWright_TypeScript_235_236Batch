import { test,expect } from '@playwright/test';

test('Hard', async ({ page }) => { 
    

await page.goto('https://www.saucedemo.com/');

//Hard Assertion
await expect(page).toHaveURL('https://www.saucedemo.com123/');  //Pass Fail  

console.log("Hard Assertion is Passed");  //Print this Message

});
test.only('Soft', async ({ page }) => { 
    

await page.goto('https://www.saucedemo.com/');

//Soft Assertion
await expect.soft(page).toHaveURL('https://www.saucedemo.com123/');  // Fail

console.log("Soft Assertion is Passed");  //Print this Message
console.log("Thank You");

});