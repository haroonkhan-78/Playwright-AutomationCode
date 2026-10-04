import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
    const pageWidth = page.viewportSize()?.width;
    const pageHeight = page.viewportSize()?.height;
    await page.setViewportSize({ width: 1536, height: 912 });
    await page.goto('https://practice-automation.com/');

    await page.goto('https://playwright.dev/');


    await page.goBack();
    await page.goForward();
    await page.goBack();
    await page.reload();

    // Expect a title "to contain" a substring.


    //const titleName = expect(page).toHaveTitle('Learn and Practice Automation | automateNow');

    const pageTitleText = await page.title();
    console.log('Page title is : ' + pageTitleText);
    await expect(page).toHaveTitle('Learn and Practice Automation | automateNow');
    await page.locator('//a[contains(text(),"Calendars")]').click();
    await page.locator('//input[@name="g1065-1-selectorenteradate"]').click();
    await page.locator('//button[contains(text(),"October")]').click();
    await page.locator('//button[contains(text(),"December")]').click();
    await page.locator('//button[contains(text(),"2026")]').click();
    await page.locator('//button[contains(text(),"2030")]').click();
    await page.locator('//button[@data-date="1924108200000"]').click();
    await page.locator('//*[@id="jp-form-d789f525b512b8c992166cfbd9a18204964b4777"]/button').click();
    const resText = page.locator('//*[@id="contact-form-success-header-d789f525b512b8c992166cfbd9a18204964b4777"]');
    console.log('response text is : ' + await resText.textContent());
    await expect(resText).toBeVisible();


    await page.waitForTimeout(3000);



});
