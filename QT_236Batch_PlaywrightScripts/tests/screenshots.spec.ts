import {test,expect} from '@playwright/test';

//1.ScreenShots Visible Page
test('ScreenShots Visible Page', async ({page}) => {
//await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.goto('https://www.saucedemo.com/');

//await page.pause();

await page.screenshot({path:'tests/screnshots/sauce.jpeg'});


});

//2.ScreenShots Visible Page Use Date
test('ScreenShots Visible Page Use Date', async ({page}) => {
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.screenshot({path:'tests/screnshots/img_'+Date.now()+'.jpeg'});

await page.goto('https://www.saucedemo.com/');
await page.screenshot({path:'tests/screnshots/img_'+Date.now()+'.jpeg'});


});

//3.ScreenShot Specific Web Element
test('ScreenShot Specific Web Element', async ({page}) => {

await page.goto('https://www.saucedemo.com/');
const username=page.getByRole('textbox', {name:'Username'});
await username.screenshot({path:'tests/screnshots/img_'+Date.now()+'.jpeg'});

username.fill('standard_user');

await username.screenshot({path:'tests/screnshots/img_'+Date.now()+'.jpeg'});

});

test('ScreenShots Full Page', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(3000);
await page.screenshot({path:'tests/screnshots/demo_'+Date.now()+'.jpeg', fullPage:true});   
});

test.only('ScreenShots using confg.js', async ({page}) => {
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.waitForTimeout(3000);
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(3000);


});