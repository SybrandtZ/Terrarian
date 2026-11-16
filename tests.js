const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { chapters } = require("./app.js");

console.log("Running template tests...");

// Test 1: Check required files exist
const requiredFiles = ["index.html", "app.js", "tests.js", "README.md"];
requiredFiles.forEach((file) => {
  assert.strictEqual(
    fs.existsSync(path.join(__dirname, file)),
    true,
    `Missing required file: ${file}`
  );
});

// Test 2: Verify default chapter data matches the template
assert.strictEqual(Array.isArray(chapters), true, "Chapters should be an array");
assert.strictEqual(chapters.length >= 1, true, "Should have at least one chapter");
assert.strictEqual(
  chapters[0].title,
  "The beginning",
  'First chapter title should be "The beginning"'
);

// Test 3: Verify HTML structure contains key elements
const htmlContent = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
assert.ok(htmlContent.includes('id="chapter-list"'), "HTML must include #chapter-list");
assert.ok(htmlContent.includes('id="chapter-title"'), "HTML must include #chapter-title");
assert.ok(htmlContent.includes('id="chapter-content"'), "HTML must include #chapter-content");
assert.ok(htmlContent.includes("Chapters"), 'HTML must include "Chapters" sidebar header');

console.log("All tests passed successfully!");
