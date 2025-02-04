
const {test,expect}= require('@playwright/test');

test('handlingforms',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enter Details in the fields

    await page.fill('#name','John');
    await page.getByPlaceholder('Enter EMail').fill('jandj@yopmail.com');
    await page.getByPlaceholder('Enter Phone').fill('02938402384');

    await page.locator('#textarea').fill('amazin sentence');


    //Select Radio Buttons
    await page.click ("//input[@value='female']");
    await expect(page.locator("//input[@value='female']")).toBeChecked;
    


    //Assert that the radio button is not Selected.
    const maleRadio= page.locator("//input[@id='male']");

    await expect(maleRadio).not.toBeChecked();


    //Select the check Boxes:
    //Use getByLabel methode
    await page.getByLabel("Tuesday").check();
    await page.getByLabel("Saturday").check();
    //assert
    await page.check('#thursday');
    await expect(page.locator('#thursday')).toBeChecked();

    //assert not checked.
    await expect(page.locator('#monday')).not.toBeChecked();

    await page.waitForTimeout(3000);

});