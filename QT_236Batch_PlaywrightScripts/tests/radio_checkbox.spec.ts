import { test, expect } from '@playwright/test';

test('Radio Button', async ({ page }) => { 

    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.pause();

    await page.getByRole('radio',{name:'Male'}).first().check();

    await page.getByRole('radio',{name:'FeMale'}).first().check();

});

test('Check Box', async ({ page }) => { 

    await page.goto('https://demo.automationtesting.in/Register.html');
   // await page.pause();
    await page.waitForTimeout(2000);
    await page.locator('//input[@id="checkbox1"]').check();  //Cricket
  await page.waitForTimeout(2000);
await page.locator('//input[@id="checkbox2"]').check();  //Movies
await page.waitForTimeout(2000);
    await page.locator('//input[@id="checkbox3"]').check();  //Hockey 
await page.waitForTimeout(2000);

await page.locator('//input[@id="checkbox1"]').uncheck();  //Cricket
await page.waitForTimeout(2000);
await page.locator('//input[@id="checkbox2"]').uncheck();  //Movies
await page.waitForTimeout(2000);
 await page.locator('//input[@id="checkbox3"]').uncheck(); //Hockey 
await page.waitForTimeout(2000);
});

test('Check Box Assertions', async ({ page }) => { 

    await page.goto('https://demo.automationtesting.in/Register.html');
   
    await page.waitForTimeout(2000);
    
  // await page.locator('//input[@id="checkbox1"]').check();  //Cricket
 // await page.waitForTimeout(3000);
    //  page.locator('//input[@id="checkbox1"]').isChecked();
    //  page.locator('//input[@id="checkbox1"]').isEnabled();
    //  page.locator('//input[@id="checkbox1"]').isVisible();

   const checkloca= page.locator('//input[@id="checkbox1"]');
     //checkloca.check();  ///True 
     await page.waitForTimeout(2000);
     await expect(checkloca).toBeChecked();
     await page.waitForTimeout(2000);
     checkloca.check(); 

    // await page.locator('//input[@id="checkbox1"]').check();  //Cricket

//     if(!await checkloca.isChecked() && await checkloca.isEnabled() &&await checkloca.isVisible())
//     {
//     await page.locator('//input[@id="checkbox1"]').check(); 
//     await page.waitForTimeout(3000);
//     }

//     else
//     {
//         console.log('Check box is laready checked');
//     }
//   await page.waitForTimeout(3000);
});

test.only('Multi Select Check Box ', async ({ page }) => { 

    await page.goto('https://demo.automationtesting.in/Register.html');
   // await page.pause();
    await page.waitForTimeout(2000);
 const checkloc= page.locator('//input[@type="checkbox"]');  //3 2 4
    //for(let i=0;i<3;i++ )
    for(let i=0;i<await checkloc.count();i++)
    {
    await checkloc.nth(i).check();
    await page.waitForTimeout(2000);
    }
await page.waitForTimeout(3000);
    


});