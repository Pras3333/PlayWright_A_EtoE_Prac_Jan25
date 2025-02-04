const{test,expect}=require('@playwright/test');

test('alerthandling',async({page})=>{


     // Maximize the browser window
     const screenWidth = await page.evaluate(() => window.screen.width);
     const screenHeight = await page.evaluate(() => window.screen.height);
     await page.setViewportSize({ width: screenWidth, height: screenHeight });

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByRole('button',{name:'Simple Alert'}).click();



    await page.waitForTimeout(2000);
});




test('test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
  
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Simple Alert' }).click();
});