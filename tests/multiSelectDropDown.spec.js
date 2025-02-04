const {test,expect}=require('@playwright/test');

test('multiDropDwn',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //select Multiple options. selectOption accepts array.
    await page.selectOption('select#colors',['red','yellow','white']);

    //Select using getByLabel.
    await page.getByLabel('colors').selectOption('Blue');

    //Select using ind
    await page.selectOption('select#animals',['lion','elephant','deer']);

    await page.waitForTimeout(1000);

    await page.getByLabel('Sorted List').selectOption(['cat','dog','zebra']);


    await page.waitForTimeout(3000);


})