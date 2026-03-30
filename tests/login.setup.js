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

    await page.waitForURL("**/inventory.html")

    await context.storageState({path: "E:/sqa/playwright/tests/auth.json"});

    await browser.close();






})();

