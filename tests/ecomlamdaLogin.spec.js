const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {

    //await page.setViewportSize({ width: 1920, height: 1080 });

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

    await page.getByPlaceholder('E-Mail Address').fill('goodday@yopmail.com');
    await page.getByPlaceholder('Password').fill('abcd12@3');
    await page.locator("//input[@value='Login']").click();
    const verText = await page.getByText('This is a dummy website for').textContent();
    console.log(verText);


    //Validate the text after login 
    // you can use toContain 
    //and toHaveText
    expect(page.getByText('This is a dummy website for Web Automation Testing')).toContainText('dummy website');

    //Click on the Categories.
    await page.click("//a[normalize-space()='Shop by Category']");
    await page.locator("//span[normalize-space()='Phone, Tablets & Ipod']").click();

    //wait for the products in a page to load.
    await page.waitForSelector("//a[@class='text-ellipsis-2']");

    //Get all the Products from the page.
    const products = await page.locator("//a[@class='text-ellipsis-2']").allTextContents();
    console.log(products);

    //Select Product from the list and click
    for (const product of products) {

        if (product === 'iPod Nano') {

            const productLocator = page.locator("//a[@class='text-ellipsis-2'][normalize-space()='iPod Nano']");
            await productLocator.click();
            break;

        }

    };

    //Validate if the correct product is picked.
    const selectPro = await page.locator('#entry_216816').textContent();
    console.log(selectPro);

    expect(selectPro).toBeTruthy();


    //click on Add to Cart
    await page.locator("div[id='entry_216842'] button[title='Add to Cart']").click();



    //TO DO
    //when you click on add to cart a pop up message is shown
    //handle the pop up message.

    //click on the view cart button.
    await page.waitForSelector("a[class='btn btn-primary btn-block']")
    await expect(page.locator("a[class='btn btn-primary btn-block']")).toBeVisible();
    await page.locator("a[class='btn btn-primary btn-block']").click();

    //verify the product is added to the shopping cart.
    // const addedItem= page.locator("td[class='text-left'] a");
    // expect(addedItem).toBeVisible();
    await expect(page.locator("(//a[contains(text(),'iPod Nano')])[2]")).toBeVisible();

});