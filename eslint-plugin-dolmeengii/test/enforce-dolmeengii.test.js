const { RuleTester } = require("eslint");
const dolmeengiiRule = require("../lib/rules/enforce-dolmeengii");

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  languageOptions: { ecmaVersion: 2015 },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "enforce-dolmeengii", // rule name
  dolmeengiiRule, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        code: "const dolmeengii = 'dolmeengii';",
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: "const dolmeengii = 'dola';",
        output: 'const dolmeengii = "dolmeengii";',
        errors: 1,
      },
    ],
  }
);

console.log("All tests passed!");
