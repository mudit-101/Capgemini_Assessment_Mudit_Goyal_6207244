import { test, expect } from "@playwright/test";
import { UploadPage } from "../../POM/task.page";
import fs from "fs";
import path from "path";
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../testdata/data4.json"), "utf-8")
);
test("E2E File Upload → Validate Uploaded File Name", async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.navigate();
  await uploadPage.uploadFile(data.filePath);
  await uploadPage.clickUpload();
  const actualFileName = await uploadPage.getUploadedFileName();
  expect(actualFileName?.trim()).toBe(data.expectedFileName);
  await page.screenshot({
    path: "screenshot/task1-successful.png",
    fullPage: true,
  });
});