module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "plugins": ["react"],
  "parser": "babel-eslint",
  "extends": ["eslint:recommended",  "standard-preact"],
  "parserOptions": {
      "sourceType": "module",
      "allowImportExportEverywhere": true,
      "ecmaFeatures": {
          "jsx": true,
      }
  },
  "rules": {
    "comma-dangle": 0,
    "indent": [
      "error",
      4,
    ],
    "react/jsx-indent": 0,
    "linebreak-style": [
      "error",
      "unix",
    ],
    "quotes": [
      "error",
      "single",
    ],
    "semi": [
      "error",
      "always",
    ],
    "no-unused-vars": [
      "warn",
    ],
    "no-console": 0,
  },
};