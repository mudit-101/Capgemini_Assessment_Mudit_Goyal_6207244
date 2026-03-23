// PageObjectModel/BasePage.ts
import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ─── Navigation ────────────────────────────────────────────────────────────

  async navigateTo(path: string = "/"): Promise<void> {
    const url = path.startsWith("http")
      ? path
      : `https://codolio.com${path}`;
    await this.page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await this.page.waitForTimeout(800);
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  // ─── Helpers ───────────────────────────────────────────────────────────────

  async waitForElement(locator: Locator, timeout = 10000): Promise<void> {
    await locator.waitFor({ state: "visible", timeout });
  }

  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await this.page.waitForTimeout(500);
  }

  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
    await this.page.waitForTimeout(300);
  }

  // ─── Assertions ────────────────────────────────────────────────────────────

  async assertUrlContains(text: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(text, "i"));
  }

  async assertTitleContains(text: string): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(text, "i"), { timeout: 15000 });
  }
}
