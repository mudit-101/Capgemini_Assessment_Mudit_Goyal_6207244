import { Page, Locator } from "@playwright/test";

export class UploadPage {
  readonly page: Page;
  readonly fileInput: Locator;
  readonly uploadBtn: Locator;
  readonly uploadedFileName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fileInput = page.locator("#file-upload");
    this.uploadBtn = page.locator("#file-submit");
    this.uploadedFileName = page.locator("#uploaded-files");
  }
  async navigate() {
    await this.page.goto("https://the-internet.herokuapp.com/upload");
  }
  async uploadFile(filePath: string) {
    await this.fileInput.setInputFiles(filePath);
  }
  async clickUpload() {
    await this.uploadBtn.click();
  }
  async getUploadedFileName(): Promise<string | null> {
    return await this.uploadedFileName.textContent();
  }
}