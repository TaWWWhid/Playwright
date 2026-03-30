const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // 1. Go to the site
  await page.goto("https://www.saucedemo.com/");

  // 2. Log in
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
  await page.waitForSelector(".inventory_list");
  console.log("Login successful");

  // 3. Add items to cart
  await page.click('button[name="add-to-cart-sauce-labs-backpack"]');
  await page.click('button[name="add-to-cart-sauce-labs-bike-light"]');
  console.log("Items added to cart");

  // 4. Open cart and verify items
  await page.click(".shopping_cart_link");
  await page.waitForSelector(".cart_list");
  const items = await page.$$eval(".inventory_item_name", (items) =>
    items.map((item) => item.textContent)
  );
  console.log("Items in cart:", items);

  console.assert(
    items.includes("Sauce Labs Backpack"),
    "Backpack is missing in the cart"
  );
  console.assert(
    items.includes("Sauce Labs Bike Light"),
    "Bike Light is missing in the cart"
  );

  // 5. Checkout
  await page.click('button[name="checkout"]');
  await page.fill("#first-name", "John");
  await page.fill("#last-name", "Doe");
  await page.fill("#postal-code", "12345");
  await page.click("#continue");

  // 6. Verify items on the overview page
  const overviewItems = await page.$$eval(".inventory_item_name", (items) =>
    items.map((item) => item.textContent)
  );
  console.assert(
    overviewItems.includes("Sauce Labs Backpack"),
    "Backpack is missing in the overview"
  );
  console.assert(
    overviewItems.includes("Sauce Labs Bike Light"),
    "Bike Light is missing in the overview"
  );

  // 7. Finish order
  await page.click("#finish");
  await page.waitForSelector(".complete-header");
  const confirmationMessage = await page.textContent(".complete-header");
  console.assert(
    confirmationMessage === "Thank Yor For Your Order!",
    "Order not completed as expected"
  );

  console.log("Order completed successfully");

  //8. Log Out
  // Step 1: Click the menu button to open the navigation menu
  await page.click("#react-burger-menu-btn"); 
  await page.waitForTimeout(1000); 

  // Step 2: Click the logout button
  await page.click("#logout_sidebar_link"); 
  await page.waitForTimeout(1000); 

  console.log("Successfully logged out");

  await browser.close();
})();