// Utility/testHelpers.ts
import * as fs   from "fs";
import * as path from "path";

/**
 * Load a JSON file from the test-data directory.
 * Usage:  loadTestData<MyType>("login.json")
 */
export function loadTestData<T = Record<string, unknown>>(filename: string): T {
  const filePath = path.resolve(__dirname, "../testdata", filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`testdata file not found: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

export async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function normaliseText(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}
