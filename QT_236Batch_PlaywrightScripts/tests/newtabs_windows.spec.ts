import {test,expect,chromium} from '@playwright/test';

test('New Windows', async ({context,page}) => {

    const page1=await context.newPage();
    await page1.goto('https://saucedemo.com/');
 
    await page.pause();

    const page2=await context.newPage();
    await page2.goto('https://www.salesforce.com/products/free-trial/developer/');

    const page3=await context.newPage();
    await page3.goto('https://demoqa.com/webtables');

});

test.only('New Tabs', async ({page}) => {

    // Chromium Browser
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();

    const pageone = await context.newPage();
    await pageone.goto('https://demoqa.com/droppable');
    await page.pause();

    const pagetwo = await context.newPage();
    await pagetwo.goto('https://saucedemo.com/');

    const pagethree = await context.newPage();
    await pagethree.goto('https://www.salesforce.com/products/free-trial/developer/');

    await page.pause();
    const context1 = await browser.newContext();  //Tab1
    const pageNEW = await context1.newPage();
    await pageNEW.goto('https://www.facebook.com/');

});