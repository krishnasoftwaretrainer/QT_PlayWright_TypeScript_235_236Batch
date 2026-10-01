import {test,expect} from '@playwright/test';

test('Generic Assertions', async ({page}) => {

    //expect(variable).toBe(expected);

    // let name='Krishna';
    // await expect(name).toBe('Ramesh');
    // // await expect.soft(name).toBe('Ramesh');
    // console.log("Assertion is Passed");

    //expect(value).toEqual(expected);
    // let num1=100;
    // let num2=200;
    // await expect(num1).toEqual(num2);

    //expect(value).toHaveLength(expected);

    // const mobileNumbers=['1234567890','9876543210','4567891230'];
    // await expect(mobileNumbers).toHaveLength(3);

    // const mobileNumbers=1234567890;
    // await expect(mobileNumbers).toHaveLength(10);

    const url="https://www.saucedemo.com/inventory.html";
    await expect(url).toContain('inventory');  //Partial String Match

});