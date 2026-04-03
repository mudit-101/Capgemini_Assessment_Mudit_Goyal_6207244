// PageObjectModel/NavigationPage.ts
import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class NavigationPage extends BasePage {
  // ─── Locators ──────────────────────────────────────────────────────────────
  readonly navbar:        Locator;
  readonly logo:          Locator;
  readonly footer:        Locator;
  readonly footerLinks:   Locator;
  readonly allNavLinks:   Locator;

  constructor(page: Page) {
    super(page);

    this.navbar      = page.locator("nav, header, [class*='navbar']").first();
    this.logo        = page.locator("nav img, header img, a[href='/'] img, [class*='logo']").first();
    this.footer      = page.locator("footer").first();
    this.footerLinks = page.locator("footer a");
    this.allNavLinks = page.locator("nav a, header a");
  }

  // ─── Actions ───────────────────────────────────────────────────────────────

  async clickNavLink(text: string): Promise<void> {
    const link = this.allNavLinks
      .filter({ hasText: new RegExp(text, "i") })
      .first();
    await link.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async scrollToFooter(): Promise<void> {
    await this.footer.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500);
  }

  async getFooterLinkCount(): Promise<number> {
    return await this.footerLinks.count();
  }

  async getNavLinkTexts(): Promise<string[]> {
    const texts = await this.allNavLinks.allTextContents();
    return texts.map(t => t.trim()).filter(t => t.length > 0);
  }

  async clickLogoGoHome(): Promise<void> {
    await this.logo.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  // ─── Assertions ────────────────────────────────────────────────────────────

  async assertNavbarVisible(): Promise<void> {
    await expect(this.navbar).toBeVisible();
  }

  async assertLogoVisible(): Promise<void> {
    await expect(this.logo).toBeVisible({ timeout: 10000 });
  }

  async assertFooterVisible(): Promise<void> {
    await this.scrollToFooter();
    await expect(this.footer).toBeVisible({ timeout: 10000 });
  }

  async assertFooterHasLinks(): Promise<void> {
    const count = await this.getFooterLinkCount();
    expect(count).toBeGreaterThan(0);
  }

  async assertNavLinkExists(text: string): Promise<void> {
    const link = this.allNavLinks
      .filter({ hasText: new RegExp(text, "i") })
      .first();
    await expect(link).toBeVisible({ timeout: 10000 });
  }

  async assertLogoNavigatesToHome(): Promise<void> {
    await this.clickLogoGoHome();
    await this.assertUrlContains("codolio.com");
  }
}
