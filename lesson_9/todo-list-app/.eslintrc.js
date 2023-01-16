module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "eslint-config-airbnb-base",

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": 0,
  },
};
