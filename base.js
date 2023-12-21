module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "import",
    "prettier",
    "simple-import-sort",
    "@typescript-eslint",
    "prefer-arrow-functions",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        allowNamedFunctions: false,
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: "unchanged",
        singleReturnOnly: false,
      },
    ],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  ignorePatterns: ["node_modules", "**/dist/*"],
};
