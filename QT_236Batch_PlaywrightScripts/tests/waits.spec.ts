import {test, expect} from '@playwright/test';

test('Auto Waiting', async ({page}) => {

   await page.goto('http://www.uitestingplayground.com/ajax');

   const ajaxButton= page.getByRole('button',{name: 'Button Triggering AJAX Request'});
    ajaxButton.click();

    await page.waitForTimeout(20000); //Hard Wait 
    const ajaxText=page.locator('.bg-success');
    console.log(await ajaxText.textContent());

    console.log('Successfully');

});

test.only('Explicit Wait', async ({page}) => {

   await page.goto('http://www.uitestingplayground.com/ajax');

   await page.waitForURL('http://www.uitestingplayground.com/ajax');  //Explict Wait

   const ajaxButton=page.getByRole('button',{name: 'Button Triggering AJAX Request'});
    ajaxButton.click();

    await page.waitForTimeout(20000);
    const ajaxText=page.locator('.bg-success');
    console.log(await ajaxText.textContent());

    console.log('Successfully');

});