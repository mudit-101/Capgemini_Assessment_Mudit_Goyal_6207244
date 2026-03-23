// PageObjectModel/ProfilePage.ts
import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage {
  // ─── Locators ──────────────────────────────────────────────────────────────
  readonly profileUsername:    Locator;
  readonly profileAvatar:      Locator;
  readonly statsSection:       Locator;
  readonly platformCards:      Locator;
  readonly leetcodeCard:       Locator;
  readonly githubCard:         Locator;
  readonly totalSolvedCount:   Locator;
  readonly streakCount:        Locator;
  readonly heatmapSection:     Locator;
  readonly shareProfileBtn:    Locator;
  readonly editProfileBtn:     Locator;
  readonly tabButtons:         Locator;

  constructor(page: Page) {
    super(page);

    this.profileUsername  = page.locator("[class*='username'], [class*='profile-name'], h1, h2").first();
    this.profileAvatar    = page.locator("img[class*='avatar'], img[class*='profile-pic'], [class*='avatar'] img").first();
    this.statsSection     = page.locator("[class*='stats'], [class*='statistics'], [class*='summary']").first();
    this.platformCards    = page.locator("[class*='platform-card'], [class*='tracker-card'], [class*='card']");
    this.leetcodeCard     = page.locator("[class*='leetcode'], [alt*='leetcode' i]").first();
    this.githubCard       = page.locator("[class*='github'], [alt*='github' i]").first();
    this.totalSolvedCount = page.locator("[class*='total'], [class*='solved'], [class*='count']").first();
    this.streakCount      = page.locator("[class*='streak']").first();
    this.heatmapSection   = page.locator("[class*='heatmap'], [class*='calendar']").first();
    this.shareProfileBtn  = page.locator("button:has-text('Share'), a:has-text('Share')").first();
    this.editProfileBtn   = page.locator("button:has-text('Edit'), a:has-text('Edit Profile')").first();
    this.tabButtons       = page.locator("[role='tab'], [class*='tab-btn'], button[class*='tab']");
  }

  // ─── Actions ───────────────────────────────────────────────────────────────

  async gotoProfile(username: string): Promise<void> {
    await this.navigateTo(`/profile/${username}`);
  }

  async getUsernameText(): Promise<string> {
    await this.profileUsername.waitFor({ state: "visible", timeout: 10000 });
    return (await this.profileUsername.textContent()) ?? "";
  }

  async getPlatformCardCount(): Promise<number> {
    return await this.platformCards.count();
  }

  async clickShareProfile(): Promise<void> {
    await this.shareProfileBtn.click();
    await this.page.waitForTimeout(800);
  }

  async clickTab(tabName: string): Promise<void> {
    const tab = this.tabButtons.filter({ hasText: new RegExp(tabName, "i") }).first();
    await tab.click();
    await this.page.waitForTimeout(500);
  }

  // ─── Assertions ────────────────────────────────────────────────────────────

  async assertProfilePageLoaded(): Promise<void> {
    await expect(this.page.locator("body")).toBeVisible();
    await expect(this.page).not.toHaveURL(/login/);
  }

  async assertUsernameVisible(): Promise<void> {
    await expect(this.profileUsername).toBeVisible({ timeout: 12000 });
  }

  async assertStatsSectionVisible(): Promise<void> {
    await expect(this.statsSection).toBeVisible({ timeout: 12000 });
  }

  async assertPlatformCardsExist(): Promise<void> {
    const count = await this.getPlatformCardCount();
    expect(count).toBeGreaterThan(0);
  }

  async assertUrlContainsUsername(username: string): Promise<void> {
    await this.assertUrlContains(username);
  }
}
