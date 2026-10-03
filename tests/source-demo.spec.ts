import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.setViewportSize({ width: 1536, height: 912 });

  await page.goto('https://www.saucedemo.com/');
 await page.goto('https://playwright.dev/');

  await page.goBack();      // Returns to demoqa.com
  await page.goForward();   // Goes to playwright.dev
  await page.goBack();      // Returns to demoqa.com
  await page.reload();      // Reloads demoqa.com

  

  const pageTitleText = await page.title();
  console.log('Page title is : ' + pageTitleText);
  await expect(page).toHaveTitle('Swag Labs');
  await page.locator('//input[@id="user-name"]').click()
  await page.locator('//input[@id="user-name"]').fill('standard_user');
  await page.locator('//input[@id="password"]').click();
  await page.locator('//input[@id="password"]').fill('secret_sauce');
  await page.locator('//input[@id="login-button"]').click();
 const homePageText = await page.locator('//span[contains(text(),"Products")]');
 // Make sure it's visible first
await expect(homePageText).toBeVisible();

// Extract the string content
const actualText = await homePageText.textContent();
console.log("visible home page text is : " + actualText);

// Assert string value
expect(actualText?.trim()).toBe('Products');

const addTocard1 = await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]');
await expect(addTocard1).toBeEnabled();
addTocard1.click();
const removeTextVisible = await page.locator('//button[contains(text(),"Remove")]');
await expect(removeTextVisible).toBeVisible();
await page.locator('//a[@class="shopping_cart_link"]').click();
const checkTextVisible = await page.locator('//button[contains(text(),"Checkout")]');

await expect(checkTextVisible).toBeVisible();
checkTextVisible.click();
await page.locator('//input[@id="first-name"]').click();

await page.locator('//input[@id="first-name"]').fill('Haroon');
await page.locator('//input[@id="last-name"]').click();
await page.locator('//input[@id="last-name"]').fill('Khan');
await page.locator('//input[@id="postal-code"]').click();
await page.locator('//input[@id="postal-code"]').fill('560103');
await page.locator('//input[@id="continue"]').click();
const paymentTextVisible = await page.locator('//button[contains(text(),"Finish")]');
await expect(paymentTextVisible).toBeVisible();
paymentTextVisible.click();
const thasnkTextIsVisible = await page.locator('//h2[contains(text(),"Thank you for your order!")]');
await expect(thasnkTextIsVisible).toBeVisible();
const ActThasnkTextIsVisible = await thasnkTextIsVisible.textContent();
console.log(" Thanks text is visible  : " + ActThasnkTextIsVisible);

await page.locator('//button[@id="back-to-products"]').click();
await page.waitForTimeout(1000); 
await page.locator('//button[@id="react-burger-menu-btn"]').click();
await page.locator('//a[@id="logout_sidebar_link"]').click();
const isPwdForAllUserInLoginPage = await page.locator('//h4[contains(text(),"Password for all users:")]');
const ActualIsPwdForAllUserInLoginPage = await isPwdForAllUserInLoginPage.textContent();
console.log("visible on Login home page text is : " + ActualIsPwdForAllUserInLoginPage);








await page.waitForTimeout(3000); 
});

