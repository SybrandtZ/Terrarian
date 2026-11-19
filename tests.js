const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { homeContent, chapters } = require("./app.js");

console.log("Running Terrarian template tests...");

// Test 1: Check required files exist
const requiredFiles = ["index.html", "app.js", "tests.js", "README.md"];
requiredFiles.forEach((file) => {
  assert.strictEqual(
    fs.existsSync(path.join(__dirname, file)),
    true,
    `Missing required file: ${file}`
  );
});

// Test 2: Verify home content
assert.strictEqual(homeContent.title, "Chapters", 'Home title should be "Chapters"');
assert.ok(
  homeContent.text.startsWith("Welcome to the Terraria guide, Terrarian."),
  "Home text should contain welcome message"
);

// Test 3: Verify all 10 chapters match expected titles in order
const expectedTitles = [
  "The Beginning",
  "Preparation",
  "The Dungeon",
  "The Wall to a new Beginning",
  "Rediscovery",
  "Mechanical Destruction",
  "The Restless Jungle",
  "Guardian of the Temple",
  "The Cult and the Chaos that comes after",
  "The One above it all"
];

assert.strictEqual(Array.isArray(chapters), true, "Chapters should be an array");
assert.strictEqual(chapters.length, expectedTitles.length, "Should have 10 chapters");

expectedTitles.forEach((title, index) => {
  assert.strictEqual(
    chapters[index].title,
    title,
    `Chapter ${index + 1} title should be "${title}"`
  );
  assert.ok(
    Array.isArray(chapters[index].checklist) && chapters[index].checklist.length > 0,
    `Chapter ${index + 1} should have checklist items`
  );
});

// Test 4: Verify HTML structure contains key elements
const htmlContent = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
assert.ok(htmlContent.includes('id="home-btn"'), "HTML must include #home-btn");
assert.ok(htmlContent.includes('id="chapter-list"'), "HTML must include #chapter-list");
assert.ok(htmlContent.includes('id="chapter-title"'), "HTML must include #chapter-title");
assert.ok(htmlContent.includes('id="chapter-content"'), "HTML must include #chapter-content");

console.log("All tests passed successfully!");