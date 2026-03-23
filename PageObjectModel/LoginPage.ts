// PageObjectModel/LoginPage.ts
import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly emailInput:         Locator;
  readonly passwordInput:      Locator;
  readonly loginSubmitBtn:     Locator;
  readonly googleLoginBtn:     Locator;
  readonly githubLoginBtn:     Locator;
  readonly signupLink:         Locator;
  readonly forgotPasswordLink: Locator;
  readonly errorMessage:       Locator;
  readonly formContainer:      Locator;
  readonly pageHeading:        Locator;

  constructor(page: Page) {
    super(page);

    // Codolio login page — Next.js SPA, inputs may not have type="email"
    this.emailInput     = page.locator([
      "input[type='email']",
      "input[name='email']",
      "input[placeholder*='email' i]",
      "input[placeholder*='Email' i]",
      "input[id*='email' i]",
    ].join(", ")).first();

    this.passwordInput  = page.locator([
      "input[type='password']",
      "input[name='password']",
      "input[placeholder*='password' i]",
      "input[placeholder*='Password' i]",
      "input[id*='password' i]",
    ].join(", ")).first();

    // Submit button — Codolio uses a styled button, not input[type=submit]
    this.loginSubmitBtn = page.locator([
      "button[type='submit']",
      "button:has-text('Login')",
      "button:has-text('Log in')",
      "button:has-text('Sign in')",
      "button:has-text('Continue')",
    ].join(", ")).first();

    // Social logins — Codolio shows Google & GitHub OAuth buttons
    this.googleLoginBtn = page.locator([
      "button:has-text('Google')",
      "a:has-text('Google')",
      "[aria-label*='Google' i]",
      "button:has-text('Continue with Google')",
    ].join(", ")).first();

    this.githubLoginBtn = page.locator([
      "button:has-text('GitHub')",
      "a:has-text('GitHub')",
      "[aria-label*='GitHub' i]",
      "button:has-text('Continue with GitHub')",
    ].join(", ")).first();

    // "Don't have an account? Sign up" link at the bottom of the form
    // Codolio likely routes to /signup or /register
    this.signupLink = page.locator([
      "a[href*='/signup']",
      "a[href*='/register']",
      "a:has-text('Sign up')",
      "a:has-text('Sign Up')",
      "a:has-text('Register')",
      "a:has-text('Create account')",
    ].join(", ")).first();

    this.forgotPasswordLink = page.locator([
      "a[href*='forgot']",
      "a[href*='reset']",
      "a:has-text('Forgot')",
    ].join(", ")).first();

    this.errorMessage = page.locator([
      "[class*='error']",
      "[role='alert']",
      "[class*='alert']",
      "[class*='invalid']",
      "p[class*='text-red']",
      "span[class*='text-red']",
    ].join(", ")).first();

    this.formContainer = page.locator("form, [class*='login'], [class*='auth']").first();
    this.pageHeading   = page.locator("h1, h2").first();
  }

  // ─── Actions ───────────────────────────────────────────────────────────────

  async goto(): Promise<void> {
    await this.navigateTo("/login");
    // Wait for React to hydrate the form
    await this.page.waitForSelector("input", { timeout: 15000 });
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async submitLogin(): Promise<void> {
    await this.loginSubmitBtn.click();
    await this.page.waitForTimeout(2000);
  }

  async loginWith(email: string, password: string): Promise<void> {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.submitLogin();
  }

  async clickSignUpLink(): Promise<void> {
    await this.signupLink.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async getErrorText(): Promise<string> {
    await this.errorMessage.waitFor({ state: "visible", timeout: 6000 });
    return (await this.errorMessage.textContent()) ?? "";
  }

  // ─── Assertions ────────────────────────────────────────────────────────────

  async assertOnLoginPage(): Promise<void> {
    await this.assertUrlContains("login");
    // Wait for any input field to appear (React hydration)
    await this.page.waitForSelector("input", { timeout: 15000 });
    await expect(this.emailInput).toBeVisible({ timeout: 10000 });
    await expect(this.passwordInput).toBeVisible({ timeout: 10000 });
  }

  async assertLoginButtonVisible(): Promise<void> {
    await expect(this.loginSubmitBtn).toBeVisible({ timeout: 10000 });
  }

  async assertGoogleLoginVisible(): Promise<void> {
    await expect(this.googleLoginBtn).toBeVisible({ timeout: 10000 });
  }

  async assertGithubLoginVisible(): Promise<void> {
    await expect(this.githubLoginBtn).toBeVisible({ timeout: 10000 });
  }

  async assertSignupLinkVisible(): Promise<void> {
    await expect(this.signupLink).toBeVisible({ timeout: 10000 });
  }

  async assertErrorVisible(): Promise<void> {
    await expect(this.errorMessage).toBeVisible({ timeout: 8000 });
  }

  async assertFormVisible(): Promise<void> {
    await this.page.waitForSelector("input", { timeout: 15000 });
    await expect(this.emailInput).toBeVisible({ timeout: 10000 });
  }

  async assertPasswordFieldMasked(): Promise<void> {
    const type = await this.passwordInput.getAttribute("type");
    expect(type).toBe("password");
  }
}
