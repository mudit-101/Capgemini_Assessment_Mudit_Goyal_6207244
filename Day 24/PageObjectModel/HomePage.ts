// PageObjectModel/HomePage.ts
import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly navbar:          Locator;
  readonly logo:            Locator;
  readonly loginBtn:        Locator;
  readonly signupBtn:       Locator;
  readonly heroHeading:     Locator;
  readonly footer:          Locator;
  readonly footerLinks:     Locator;
  readonly navLinks:        Locator;

  constructor(page: Page) {
    super(page);

    // Codolio uses Next.js — header is a <header> or <nav> element
    this.navbar    = page.locator("header, nav").first();
    this.logo      = page.locator("header img, nav img, a[href='/'] img, [class*='logo']").first();

    // Login / Signup buttons in the top-right header area
    this.loginBtn  = page.locator("a[href*='/login'], button:has-text('Login'), a:has-text('Login')").first();
    this.signupBtn = page.locator("a[href*='/signup'], a[href*='/register'], button:has-text('Sign Up'), a:has-text('Sign Up')").first();

    // Hero — Codolio's homepage has a large H1 above the fold
    this.heroHeading = page.locator("h1").first();

    // Footer
    this.footer      = page.locator("footer").first();
    this.footerLinks = page.locator("footer a");
    this.navLinks    = page.locator("header a, nav a");
  }

  async goto(): Promise<void> {
    await this.navigateTo("/");
  }

  async clickLogin(): Promise<void> {
    await this.loginBtn.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async clickSignUp(): Promise<void> {
    await this.signupBtn.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async getNavLinkTexts(): Promise<string[]> {
    const texts = await this.navLinks.allTextContents();
    return texts.map(t => t.trim()).filter(t => t.length > 0);
  }

  async getFooterLinkCount(): Promise<number> {
    return await this.footerLinks.count();
  }

  // ─── Assertions ────────────────────────────────────────────────────────────

  async assertHomePageLoaded(): Promise<void> {
    await this.assertTitleContains("Codolio");
  }

  async assertNavbarVisible(): Promise<void> {
    await expect(this.navbar).toBeVisible({ timeout: 10000 });
  }

  async assertHeroHeadingVisible(): Promise<void> {
    // Wait for any H1 to appear — Codolio renders via React so may need a moment
    await this.page.waitForSelector("h1", { timeout: 15000 });
    await expect(this.heroHeading).toBeVisible();
  }

  async assertLoginButtonVisible(): Promise<void> {
    await expect(this.loginBtn).toBeVisible({ timeout: 10000 });
  }

  async assertFooterVisible(): Promise<void> {
    await this.scrollToBottom();
    await expect(this.footer).toBeVisible({ timeout: 10000 });
  }

  async assertFooterHasLinks(): Promise<void> {
    const count = await this.getFooterLinkCount();
    expect(count).toBeGreaterThan(0);
  }
}
