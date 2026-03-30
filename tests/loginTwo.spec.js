import { test } from "@playwright/test";

test("test", async ({ page }) => {
  //code here
  await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(1000);
    await page.fill("#user-name", "standard_user");
    await page.waitForTimeout(1000);
    await page.fill("#password", "secret_sauce");
    await page.waitForTimeout(1000);
    await page.click("#login-button");
    await page.waitForTimeout(1000);
    
});