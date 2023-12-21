module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["react", "react-hooks"],
  extends: ["./base.js"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/react-in-jsx-scope": 0,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  globals: {
    React: true,
    jsx: true,
  },
};
