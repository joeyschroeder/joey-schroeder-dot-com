module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "plugins": ["react"],
  "parser": "babel-eslint",
  "extends": ["eslint:recommended",  "standard-react"],
  "parserOptions": {
      "allowImportExportEverywhere": true,
      "ecmaFeatures": { "jsx": true },
      "sourceType": "module"
  },
  "rules": {
    "comma-dangle": 0,
    "indent": [ "warn", 4 ],
    "linebreak-style": [ "error", "unix" ],
    "no-console": 0,
    "no-unused-vars": [ "warn" ],
    "quotes": [ "error", "single" ],
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,
    "react/no-unused-prop-types": 1,
    "semi": [ "error", "always" ]
  },
};
