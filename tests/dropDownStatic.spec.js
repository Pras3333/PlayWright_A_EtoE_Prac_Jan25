const{test,expect}=require('@playwright/test');

test('dropDown',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//Select the option from the Country.
await page.getByLabel("Country").selectOption({label:'Brazil'});
   //alternate
   //await page.getByLabel("Country").selectOption('India');
   //await page.locator('#country').selectOption('India');


//Select another country
await page.selectOption('select#country',{label:'China'}); //Alternative way of writing selectOption

//Select by Index
await page.selectOption('select#country',{index:5});

//Select by Value

await page.selectOption('select#country',{value:'india'});

await page.waitForTimeout(3000);



});