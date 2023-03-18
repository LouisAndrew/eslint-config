module.exports = {
  root: true,
  extends: [
    "./base.js",
    "plugin:vue/essential",
    "@vue/prettier",
    "@vue/typescript",
  ],
  rules: {
    "vue/no-multiple-template-root": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/no-v-model-argument": "off",
    "vue/no-v-for-template-key": "off",
    "vue/multi-word-component-names": "off",
  },
};
