import { test } from "@playwright/test";

test("test", async ({ page }) => {
  //code here
 const startTime = Date.now();
  await page.goto("https://www.saucedemo.com/");

  const loadTime = Date.now() - startTime;
  console.log(`Page loaded in ${loadTime} ms`);
  

});