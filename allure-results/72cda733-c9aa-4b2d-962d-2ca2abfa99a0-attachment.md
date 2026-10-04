# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: haroon-ecom.spec.ts >> has title
- Location: tests\haroon-ecom.spec.ts:2:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[contains(text(),"October")]')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test('has title', async ({ page }) => {
  3  |     const pageWidth = page.viewportSize()?.width;
  4  |     const pageHeight = page.viewportSize()?.height;
  5  |     await page.setViewportSize({ width: 1536, height: 912 });
  6  |     await page.goto('https://practice-automation.com/');
  7  | 
  8  |     await page.goto('https://playwright.dev/');
  9  | 
  10 | 
  11 |     await page.goBack();
  12 |     await page.goForward();
  13 |     await page.goBack();
  14 |     await page.reload();
  15 | 
  16 |     // Expect a title "to contain" a substring.
  17 | 
  18 | 
  19 |     //const titleName = expect(page).toHaveTitle('Learn and Practice Automation | automateNow');
  20 | 
  21 |     const pageTitleText = await page.title();
  22 |     console.log('Page title is : ' + pageTitleText);
  23 |     await expect(page).toHaveTitle('Learn and Practice Automation | automateNow');
  24 |     await page.locator('//a[contains(text(),"Calendars")]').click();
  25 |     await page.locator('//input[@id="g1065-1-selectorenteradate"]').click();
> 26 |     await page.locator('//button[contains(text(),"October")]').click();
     |                                                                ^ Error: locator.click: Target page, context or browser has been closed
  27 |     await page.locator('//button[contains(text(),"December")]').click();
  28 |     await page.locator('//button[contains(text(),"2026")]').click();
  29 |     await page.locator('//button[contains(text(),"2030")]').click();
  30 |     await page.locator('//button[@data-date="1924108200000"]').click();
  31 |     await page.locator('//*[@id="jp-form-d789f525b512b8c992166cfbd9a18204964b4777"]/button').click();
  32 |     const resText = page.locator('//*[@id="contact-form-success-header-d789f525b512b8c992166cfbd9a18204964b4777"]');
  33 |     console.log('response text is : ' + await resText.textContent());
  34 |     await expect(resText).toBeVisible();
  35 | 
  36 | 
  37 |     await page.waitForTimeout(3000);
  38 | 
  39 | 
  40 | 
  41 | });
  42 | 
```