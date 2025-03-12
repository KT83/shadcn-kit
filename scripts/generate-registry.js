/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Get the base URL from the command line arguments (e.g., "http://localhost:3000")
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error("Usage: node scripts/generate-registry.js <baseUrl>");
  process.exit(1);
}
const baseUrl = args[0];

// Generate the registry JSON content with dynamic baseUrl substitution
const registry = {
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "docs-kit",
  "homepage": baseUrl,
  "items": [
    {
      "name": "button",
      "type": "registry:component",
      "title": "Button",
      "description": "A button component",
      "files": [
        {
          "path": "registry/button.tsx",
          "type": "registry:component"
        }
      ]
    }
    // Add your component config here
  ]
};

// Define the output file path (this example writes to the project root)
const outputPath = path.join(__dirname, '..', 'registry.json');

// Write the formatted JSON string to the file
fs.writeFileSync(outputPath, JSON.stringify(registry, null, 2), 'utf-8');
console.log(`Generated registry.json at ${outputPath}`);
