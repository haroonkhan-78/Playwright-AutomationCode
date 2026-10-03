import { test, expect } from '@playwright/test';

test('has title and performs login/logout', async ({ page }) => {

const pageWidth = page.viewportSize()?.width;
 const pageHeight = page.viewportSize()?.height;
 await page.setViewportSize({ width: 1536, height: 912 });
await page.goto('https://practice.qabrains.com/');

  await page.goto('https://playwright.dev/');


  await page.goBack();
  await page.goForward();
  await page.goBack();  
  await page.reload();
  
  //await expect(page).toHaveTitle(/QA Practice Site/);

  // Fill in login credentials
  await page.locator('//input[@id="email"]').fill('qa_testers@qabrains.com');
  await page.locator('//input[@id="password"]').fill('Password123');
  await page.locator('//button[contains(text(),"Login")]').click();

  // Define element locators
  const loginHeader = page.locator('//h2[contains(text(),"Login Successful")]');
  
  // Assert visibility directly on the locator
  //await expect(loginHeader).toBeVisible();

  await expect(loginHeader).toBeVisible({ timeout: 10000 }); 

  // Retrieve text content after asserting visibility
  const loginStatusText = await loginHeader.textContent();
  console.log("Login text visible is : " + loginStatusText);


  // Perform logout
  await page.locator('//button[contains(text(),"Logout")]').click();

  const logoutHeader = page.locator('//h2[contains(text(),"User Authentication")]');
  await expect(logoutHeader).toBeVisible();
  const logoutStatusText = await logoutHeader.textContent();
  console.log("Logout text visible is : " + logoutStatusText);
});


/*

test('get started link', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/