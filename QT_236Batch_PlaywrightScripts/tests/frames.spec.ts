import {test, expect} from '@playwright/test';

test('Single Frame', async ({page}) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
 await page.waitForTimeout(2000);

 const frame1=page.frameLocator('#singleframe');

 const textbox1=frame1.locator('//input[@type="text"]');

await textbox1.first().fill('Single Frame');
await page.waitForTimeout(2000);
console.log('Frame working Successfully');
});

test.only('Nested Frames', async ({page}) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');

 await page.waitForTimeout(2000);

 const framebutn=page.locator('a[href="#Multiple"]');
    await framebutn.click();

 const outerframe=page.frameLocator('//iframe[@src="MultipleFrames.html"]');

 const innerrframe=outerframe.frameLocator('//iframe[@src="SingleFrame.html"]');

 const textbox2=innerrframe.locator('//input[@type="text"]');

await textbox2.first().fill('Nested Frame');
await page.waitForTimeout(2000);
console.log('Frame working Successfully');
});