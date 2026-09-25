import {test, expect} from '@playwright/test';

test('Count Rows and Columns in Web Table', async ({page}) => {
  await page.goto('https://demoqa.com/webtables');
 await page.waitForTimeout(2000);

 const table1=page.locator('table');
    const header=table1.locator('thead');
    const headrows=header.locator('tr');
    const headcols=headrows.locator('th');

    console.log('Header Rows Count:',await headrows.count());  //1
    console.log('Header Columns Count:',await headcols.count()); //6

    const body=table1.locator('tbody');
    const bodyrows=body.locator('tr');
    const bodycols=bodyrows.locator('td');

    console.log('Body Rows Count:',await bodyrows.count());  //3
    console.log('Body Columns Count:',await bodycols.count()); //7

 
console.log('Web Table working Successfully');
});

test('Print Single Column data in Web Table', async ({page}) => {
  await page.goto('https://demoqa.com/webtables');
 await page.waitForTimeout(2000);

 const table1=page.locator('table');
   const body=table1.locator('tbody');
    const bodyrows=body.locator('tr');
    const bodycols=bodyrows.locator('td');

    //Print in body 2row 3rd column value
    const bodyrowvalue= bodyrows.nth(1);
    const bodycolmnvalue=await bodyrowvalue.locator('td').nth(6).textContent(); //12000
    console.log('Body Column Value:',bodycolmnvalue);  //alden@example.com	

console.log('Web Table working Successfully');
});

test('Print Single Row All Columns data in Web Table', async ({page}) => {
  await page.goto('https://demoqa.com/webtables');
 await page.waitForTimeout(2000);

 const table1=page.locator('table');
   const body=table1.locator('tbody');
    const bodyrows=body.locator('tr');
    const bodycols=bodyrows.locator('td');

    //Print in body 2row 3rd column value
    const bodyrowvalue= bodyrows.nth(1);  //2nd row 
    const bodycolmcount=await bodyrowvalue.locator('td').count();

  for(let i=0;i<bodycolmcount-1;i++)
  {
    const colValue=await bodyrowvalue.locator('td').nth(i).textContent();
    console.log(colValue);
  }

console.log('Web Table working Successfully');
});

test('Print All Rows All Columns data in Web Table', async ({page}) => {
  await page.goto('https://demoqa.com/webtables');
 await page.waitForTimeout(2000);

 const table1=page.locator('table');
   const body=table1.locator('tbody');
    const bodyrows=body.locator('tr');
    const bodycols=bodyrows.locator('td');

    //Print in body 2row 3rd column value
    const bodyrowcount=await bodyrows.count();
    
//for(let i=0;i<3;i++)
  for(let i=0;i<bodyrowcount;i++)
  {
    const bodyrowvalue=bodyrows.nth(i);
const bodycolmcount=await bodyrowvalue.locator('td').count();

//for(let i=0;i<7;i++)
  for(let i=0;i<bodycolmcount-1;i++)
  {
    const colValue=await bodyrowvalue.locator('td').nth(i).textContent();
    console.log(colValue);
  }
}

console.log('Web Table working Successfully');
});

test.only('Create New Record', async ({page}) => {
  await page.goto('https://demoqa.com/webtables');
 await page.waitForTimeout(2000);

 const addbtn=page.locator('#addNewRecordButton');
 await addbtn.click();
 await page.pause();

console.log('Web Table working Successfully');
});

//CRUD:Create New Record, Retrive/Print/View, Update, Delete 
 