import {test, expect} from '@playwright/test';

test('Keyboard Enter Button', async ({page}) => {

await page.goto('https://www.saucedemo.com/');

const username= page.getByRole('textbox', { name: 'Username' });
const password= page.getByRole('textbox', { name: 'Password' });
// await page.waitForTimeout(2000);
username.focus();
//await page.keyboard.type('standard_user',{delay: 100});

await page.waitForTimeout(2000);
 await password.focus();
await page.keyboard.type('secret_sauce',{delay: 100});
await page.waitForTimeout(2000);
 await page.keyboard.press('Enter');
await page.waitForTimeout(2000);

});

test('Keyboard:Enter Capital Letters', async ({page}) => {

await page.goto('https://omayo.blogspot.com/');

await page.mouse.wheel(0,300);

const textarea1=page.locator('#ta1');
textarea1.focus();
await page.waitForTimeout(2000);
await page.keyboard.down('Shift');

// await page.keyboard.type('A',{delay: 100});
// await page.keyboard.type('B',{delay: 100});
// await page.keyboard.type('C',{delay: 100});
// await page.keyboard.type('D',{delay: 100});
// await page.keyboard.type('E',{delay: 100});

await page.keyboard.press('KeyA',{delay: 100});
await page.keyboard.press('KeyB',{delay: 100});
await page.keyboard.press('KeyC',{delay: 100});
await page.keyboard.press('KeyD',{delay: 100});
await page.keyboard.press('KeyE',{delay: 100});

await page.keyboard.up('Shift');
await page.keyboard.press('KeyF',{delay: 100});
await page.keyboard.press('KeyG',{delay: 100});
await page.keyboard.press('KeyH',{delay: 100});
await page.waitForTimeout(2000);
});

test.only('Ctrl+A Ctrl+C Ctrl+V', async ({page}) => {

await page.goto('https://omayo.blogspot.com/');

await page.mouse.wheel(0,300);

const textarea1=page.locator('#ta1');
const textarea2=page.locator('//div[@id="HTML11"]//textarea');

textarea1.focus();
await page.waitForTimeout(2000);
await page.keyboard.down('Shift');


await page.keyboard.press('KeyA',{delay: 100});
await page.keyboard.press('KeyB',{delay: 100});
await page.keyboard.press('KeyC',{delay: 100});
await page.keyboard.press('KeyD',{delay: 100});
await page.keyboard.press('KeyE',{delay: 100});

await page.keyboard.up('Shift');
await page.keyboard.press('KeyF',{delay: 100});
await page.keyboard.press('KeyG',{delay: 100});
await page.keyboard.press('KeyH',{delay: 100});
await page.waitForTimeout(2000);
await page.pause();

await page.keyboard.press('Control+KeyA') //Select All
await page.keyboard.press('Control+KeyC') //Copy

await textarea2.focus();
await page.keyboard.press('Control+KeyA') //Select All
await page.keyboard.press('Backspace') //Delete
await page.keyboard.press('Control+KeyV') //Paste
await page.waitForTimeout(3000);

});