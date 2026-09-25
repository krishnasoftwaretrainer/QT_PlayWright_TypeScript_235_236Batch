import {test,expect} from '@playwright/test';

//1.Auto Scrolling
test('Auto Scrolling', async ({page}) => {
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.waitForTimeout(2000); 

const Signmeup=page.getByText('Sign me up');
Signmeup.click();

await page.waitForTimeout(2000); 

});

//2.Scroll by pixels or Manual Scrolling or Mouse Scrolling
test('Scroll by pixels', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(2000); 

await page.mouse.wheel(0, 400); // Scroll down by 400 pixels top to down
await page.waitForTimeout(2000); 

await page.mouse.wheel(0, -400); // Scroll down by 400 pixels down to top
await page.waitForTimeout(2000); 

await page.mouse.wheel(400, 0); // Scroll down by 400 pixels Left to Right
await page.waitForTimeout(2000); 

await page.mouse.wheel(-400, 0); // Scroll down by 400 pixels Right to Left
await page.waitForTimeout(2000); 

await page.mouse.wheel(400, 400); // Scroll down by 400 pixels diagonally
await page.waitForTimeout(2000); 

});

//3.Keyboard Scrolling
test('Keyboard Scrolling', async ({page}) => {
//await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.goto('https://www.amazon.in/');
await page.waitForTimeout(2000); 

await page.keyboard.press('PageDown'); // Scroll down by PageDown
await page.waitForTimeout(2000); 

await page.keyboard.press('PageUp'); // Scroll up by PageUp
await page.waitForTimeout(2000);

await page.keyboard.press('End'); // Scroll down by End
await page.waitForTimeout(2000);

await page.keyboard.press('Home'); // Scroll up by Home
await page.waitForTimeout(2000);
});

//4.Scroll to Element
test.only('Scroll to Element', async ({page}) => {
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.waitForTimeout(2000);    
const Signmeup=page.getByText('Sign me up');
await Signmeup.scrollIntoViewIfNeeded();
await page.waitForTimeout(2000);
});
