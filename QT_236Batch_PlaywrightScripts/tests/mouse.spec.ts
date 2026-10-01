import {test, expect} from '@playwright/test';

test('Click, double click, and right click', async ({page}) => {

   await page.goto('https://demoqa.com/buttons');
    //await page.pause();
   const dblClickButton = page.locator('#doubleClickBtn');
   dblClickButton.dblclick();
await page.waitForTimeout(2000);

   const rightClickButton = page.locator('#rightClickBtn');
    rightClickButton.click({button: 'right'});
await page.waitForTimeout(2000);

  const ClickButton = page.getByRole('button', {name: 'Click Me'});
  ClickButton.last().click();
await page.waitForTimeout(2000);

   console.log('Successfully');
});

test('Mouse Hover', async ({page}) => {

   await page.goto('https://www.browserstack.com/');
  
   const products = page.getByRole('button', {name: 'Products'});
    products.hover();
    await page.waitForTimeout(2000);

    const webTesting = page.locator('//span[text()="Web Testing"]');
    webTesting.hover();
await page.waitForTimeout(2000);

    const live = page.locator('//span[text()="Live"]');
   live.first().click();
await page.waitForTimeout(2000);

console.log(page.url());
   console.log('Successfully');
});

test('Mouse:Drag and Drop', async ({page}) => {

   await page.goto('https://demoqa.com/droppable');
  
   const source = page.locator('#draggable');
    const destination = page.locator('#droppable');
    await page.waitForTimeout(2000);

    //await source.dragTo(destination.nth(0));

  await page.dragAndDrop('#draggable', '#droppable');

    await page.waitForTimeout(2000);

   console.log('Successfully');
});

test.only('Mouse Scroll', async ({page}) => {

   await page.goto('https://www.browserstack.com/');
   
    await page.mouse.wheel(0, 600);

    await page.waitForTimeout(2000);

   console.log('Successfully');
});