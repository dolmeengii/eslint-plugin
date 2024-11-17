// eslint.config.js
"use strict";

// Import the ESLint plugin locally
const eslintPluginDolmeengii = require("./lib/index");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    // Using the eslint-plugin-dolmeengii plugin defined locally
    plugins: { dolmeengii: eslintPluginDolmeengii },
    rules: {
      "dolmeengii/enforce-dolmeengii": "error",
    },
  },
];
