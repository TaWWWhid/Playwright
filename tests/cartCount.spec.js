const { log } = require("console");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  //code here
    await page.goto("https://www.saucedemo.com/");
    // await page.waitForTimeout(1000);
    await page.fill("#user-name", "standard_user");
    // await page.waitForTimeout(1000);
    await page.fill("#password", "secret_sauce");
    // await page.waitForTimeout(1000);
    await page.click("#login-button");
    // await page.waitForTimeout(1000);
    



//  here will be checkout part
    await page.click('button[name = "add-to-cart-sauce-labs-bike-light"]')
    // await page.waitForTimeout(1000);

    const cartBadge = await page.$('.shopping_cart_badge');
    let numberOfItemInCart = 0;
    if(cartBadge){
        const CartBadgeText = await cartBadge.textContent();
        numberOfItemInCart=CartBadgeText; 
    } 
    console.log(`number of items : ${numberOfItemInCart}`);
    

    


})();