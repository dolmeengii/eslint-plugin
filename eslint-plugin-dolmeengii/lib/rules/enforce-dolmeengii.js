module.exports = {
  meta: {
    // TODO: add metadata
    type: "problem",
    docs: {
      description:
        "Enforce that a variable named `dolmeengii` can only be assigned a value of 'dolmeengii'.",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      // TODO: add callback function(s)
      // Performs action in the function on every variable declarator
      VariableDeclarator(node) {
        // Check if a `const` variable declaration
        if (node.parent.kind === "const") {
          // Check if variable name is `dolmeengii`
          if (node.id.type === "Identifier" && node.id.name === "dolmeengii") {
            // Check if value of variable is "dolmeengii"
            if (
              node.init &&
              node.init.type === "Literal" &&
              node.init.value !== "dolmeengii"
            ) {
              /*
               * Report error to ESLint. Error message uses
               * a message placeholder to include the incorrect value
               * in the error message.
               * Also includes a `fix(fixer)` function that replaces
               * any values assigned to `const dolmeengii` with "dolmeengii".
               */
              context.report({
                node,
                message:
                  'Value other than "dolmeengii" assigned to `const dolmeengii`. Unexpected value: {{ notDolmeengii }}.',
                data: {
                  notDolmeengii: node.init.value,
                },
                fix(fixer) {
                  return fixer.replaceText(node.init, '"dolmeengii"');
                },
              });
            }
          }
        }
      },
    };
  },
};
