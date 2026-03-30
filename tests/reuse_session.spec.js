const { test, expect} = require("@playwright/test");
test.use({storageState : 'E:/sqa/playwright/tests/auth.json'});
// import { test } from "@playwright/test";

test("test for session", async ({ page }) => {
     await page.goto("https://www.saucedemo.com/inventory.html");
    await page.click('button[name = "add-to-cart-sauce-labs-bike-light"]')
    // await page2.waitForTimeout(1000);
    await page.click(".shopping_cart_link");
    // await page2.waitForTimeout(1000);
    await page.click('button[name ="checkout"]');
    // await page2.waitForTimeout(1000);
});