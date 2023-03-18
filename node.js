module.exports = {
  root: true,
  extends: ["./base.js"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": 0,
  },
};
