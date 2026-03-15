import {test} from '@playwright/test';

test('Question 2', async ({page}) => {
    await page.goto('https://www.icc-cricket.com/rankings/batting/mens/odi');
    const viratRank = await page.locator('//tbody/descendant::div[@class="flex items-center justify-between gap-2"]/descendant::span[contains(text(),"Virat")]/ancestor::td/following-sibling::td[@class="ml-auto w-[50px] lg:w-25 text-end! pr-2 lg:pr-0"]/descendant::span').textContent();
    console.log(viratRank);
})