// formate-01
const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    //code here
    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(1000);
    await page.fill("#user-name", "standard_user");
    await page.waitForTimeout(1000);
    //  const username = await page.textContent('#user-name',"standard_user");
    // console.log(username); 
    await page.fill("#password", "secret_sauce");
    await page.waitForTimeout(1000);
    await page.click("#login-button");
    await page.waitForTimeout(1000);


   




    //  here will be checkout part
    await page.click('button[name = "add-to-cart-sauce-labs-bike-light"]')
    await page.waitForTimeout(1000);
    await page.click(".shopping_cart_link");
    await page.waitForTimeout(1000);
    await page.click('button[name ="checkout"]');
    await page.waitForTimeout(1000);

    // here willbe confirm page

    await page.fill("#first-name", "firuz");
    await page.waitForTimeout(1000);
    await page.fill("#last-name", "shameha");
    await page.waitForTimeout(1000);
    await page.fill("#postal-code", "1212");
    await page.waitForTimeout(1000);
    await page.click("#continue");
    await page.waitForTimeout(1000);
    await page.click('button[name= "finish"]');
    await page.waitForTimeout(1000);

    await page.waitForSelector(".complete-header");
    const conformationMessage = await page.textContent(".complete-header");
    console.assert(
        conformationMessage === "Thank you for your order!", "Order not completed as expected"
    );
    console.log("order completed successfully");
    await page.click("#react-burger-menu-btn");
    await page.waitForTimeout(1000);
    await page.click("#logout_sidebar_link");
    await page.waitForTimeout(1000);





})();