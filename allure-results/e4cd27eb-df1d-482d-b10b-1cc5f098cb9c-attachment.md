# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: haroon-ecom.spec.ts >> has title
- Location: tests\haroon-ecom.spec.ts:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[contains(text(),"September")]')

```

# Page snapshot

```yaml
- generic [ref=f14e1]:
  - link "Skip to content" [ref=f14e2] [cursor=pointer]:
    - /url: "#main"
  - generic [ref=f14e3]:
    - generic [ref=f14e4]:
      - banner [ref=f14e6]:
        - generic [ref=f14e7]:
          - link [ref=f14e8] [cursor=pointer]:
            - /url: https://practice-automation.com/
            - img "automateNow Logo" [ref=f14e9]
          - navigation "Top Menu" [ref=f14e10]:
            - list [ref=f14e11]:
              - listitem [ref=f14e12]:
                - link "Blog" [ref=f14e13] [cursor=pointer]:
                  - /url: https://automatenow.io/
      - generic [ref=f14e15]:
        - heading "Calendars" [level=1] [ref=f14e16]
        - navigation [ref=f14e17]:
          - generic [ref=f14e18]:
            - link "Home" [ref=f14e20] [cursor=pointer]:
              - /url: https://practice-automation.com/
            - text: » Calendars
    - main [ref=f14e24]:
      - article [ref=f14e26]:
        - generic [ref=f14e27]:
          - paragraph [ref=f14e28]:
            - text: Selecting a date from a calendar can be a little bit tricky, but you will be ahead of the pack if you use the right technique. A common practice in test automation is to use pagination. Try
            - link "using pagination to select any date" [ref=f14e29] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=m7yTy2yCQzI
            - text: you choose!
          - form "Calendars" [ref=f14e31]:
            - generic [ref=f14e33]:
              - generic [ref=f14e34] [cursor=pointer]: Select or enter a date
              - textbox "Select or enter a date" [active] [ref=f14e35]
              - generic [ref=f14e36]: YYYY-MM-DD
            - paragraph
            - button "Submit" [ref=f14e42] [cursor=pointer]
            - paragraph
    - generic [ref=f14e44]:
      - contentinfo [ref=f14e45]:
        - complementary [ref=f14e48]:
          - generic [ref=f14e52]:
            - paragraph [ref=f14e54]:
              - link "Learn More" [ref=f14e55] [cursor=pointer]:
                - /url: https://linktr.ee/automateNow
            - paragraph [ref=f14e57]:
              - link "About" [ref=f14e58] [cursor=pointer]:
                - /url: https://automatenow.io/about/
      - generic [ref=f14e60]: © 2020-2026 - automateNow, LLC. All rights reserved.
  - button "Search Toggler" [expanded] [ref=f14e63] [cursor=pointer]
  - link "Go to top" [ref=f14e65] [cursor=pointer]:
    - /url: "#body"
  - generic "You are currently inside the date picker, use the arrow keys to navigate between the dates. Use tab key to jump to more controls." [ref=f14e69]:
    - banner [ref=f14e70]:
      - button "OctoberMonth picker. Use the space key to enter the month picker." [ref=f14e71] [cursor=pointer]: October
      - button "2026Year Picker. Use the space key to enter the year picker." [ref=f14e72] [cursor=pointer]: "2026"
      - button "Previous Month" [ref=f14e73] [cursor=pointer]
      - button "Next Month" [ref=f14e74] [cursor=pointer]
    - generic [ref=f14e75]:
      - generic [ref=f14e76]: Mo
      - generic [ref=f14e77]: Tu
      - generic [ref=f14e78]: We
      - generic [ref=f14e79]: Th
      - generic [ref=f14e80]: Fr
      - generic [ref=f14e81]: Sa
      - generic [ref=f14e82]: Su
      - button "Mon Sep 28 2026Use the space key to select the date." [ref=f14e83]: "28"
      - button "Tue Sep 29 2026Use the space key to select the date." [ref=f14e84]: "29"
      - button "Wed Sep 30 2026Use the space key to select the date." [ref=f14e85]: "30"
      - button "Thu Oct 01 2026Use the space key to select the date." [ref=f14e86] [cursor=pointer]: "1"
      - button "Fri Oct 02 2026Use the space key to select the date." [ref=f14e87] [cursor=pointer]: "2"
      - button "Sat Oct 03 2026Use the space key to select the date." [ref=f14e88] [cursor=pointer]: "3"
      - button "Sun Oct 04 2026Use the space key to select the date." [ref=f14e89] [cursor=pointer]: "4"
      - button "Mon Oct 05 2026Use the space key to select the date." [ref=f14e90] [cursor=pointer]: "5"
      - button "Tue Oct 06 2026Use the space key to select the date." [ref=f14e91] [cursor=pointer]: "6"
      - button "Wed Oct 07 2026Use the space key to select the date." [ref=f14e92] [cursor=pointer]: "7"
      - button "Thu Oct 08 2026Use the space key to select the date." [ref=f14e93] [cursor=pointer]: "8"
      - button "Fri Oct 09 2026Use the space key to select the date." [ref=f14e94] [cursor=pointer]: "9"
      - button "Sat Oct 10 2026Use the space key to select the date." [ref=f14e95] [cursor=pointer]: "10"
      - button "Sun Oct 11 2026Use the space key to select the date." [ref=f14e96] [cursor=pointer]: "11"
      - button "Mon Oct 12 2026Use the space key to select the date." [ref=f14e97] [cursor=pointer]: "12"
      - button "Tue Oct 13 2026Use the space key to select the date." [ref=f14e98] [cursor=pointer]: "13"
      - button "Wed Oct 14 2026Use the space key to select the date." [ref=f14e99] [cursor=pointer]: "14"
      - button "Thu Oct 15 2026Use the space key to select the date." [ref=f14e100] [cursor=pointer]: "15"
      - button "Fri Oct 16 2026Use the space key to select the date." [ref=f14e101] [cursor=pointer]: "16"
      - button "Sat Oct 17 2026Use the space key to select the date." [ref=f14e102] [cursor=pointer]: "17"
      - button "Sun Oct 18 2026Use the space key to select the date." [ref=f14e103] [cursor=pointer]: "18"
      - button "Mon Oct 19 2026Use the space key to select the date." [ref=f14e104] [cursor=pointer]: "19"
      - button "Tue Oct 20 2026Use the space key to select the date." [ref=f14e105] [cursor=pointer]: "20"
      - button "Wed Oct 21 2026Use the space key to select the date." [ref=f14e106] [cursor=pointer]: "21"
      - button "Thu Oct 22 2026Use the space key to select the date." [ref=f14e107] [cursor=pointer]: "22"
      - button "Fri Oct 23 2026Use the space key to select the date." [ref=f14e108] [cursor=pointer]: "23"
      - button "Sat Oct 24 2026Use the space key to select the date." [ref=f14e109] [cursor=pointer]: "24"
      - button "Sun Oct 25 2026Use the space key to select the date." [ref=f14e110] [cursor=pointer]: "25"
      - button "Mon Oct 26 2026Use the space key to select the date." [ref=f14e111] [cursor=pointer]: "26"
      - button "Tue Oct 27 2026Use the space key to select the date." [ref=f14e112] [cursor=pointer]: "27"
      - button "Wed Oct 28 2026Use the space key to select the date." [ref=f14e113] [cursor=pointer]: "28"
      - button "Thu Oct 29 2026Use the space key to select the date." [ref=f14e114] [cursor=pointer]: "29"
      - button "Fri Oct 30 2026Use the space key to select the date." [ref=f14e115] [cursor=pointer]: "30"
      - button "Sat Oct 31 2026Use the space key to select the date." [ref=f14e116] [cursor=pointer]: "31"
      - button "Sun Nov 01 2026Use the space key to select the date." [ref=f14e117]: "1"
      - button "Mon Nov 02 2026Use the space key to select the date." [ref=f14e118]: "2"
      - button "Tue Nov 03 2026Use the space key to select the date." [ref=f14e119]: "3"
      - button "Wed Nov 04 2026Use the space key to select the date." [ref=f14e120]: "4"
      - button "Thu Nov 05 2026Use the space key to select the date." [ref=f14e121]: "5"
      - button "Fri Nov 06 2026Use the space key to select the date." [ref=f14e122]: "6"
      - button "Sat Nov 07 2026Use the space key to select the date." [ref=f14e123]: "7"
      - button "Sun Nov 08 2026Use the space key to select the date." [ref=f14e124]: "8"
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
> 26 |     await page.locator('//button[contains(text(),"September")]').click();
     |                                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
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