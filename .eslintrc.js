module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style": "off",
    "allowImportExportEverywhere": true,
    "max-len": [2, 120, 4, {"ignoreUrls": true}],
    "no-param-reassign": [2, { "props": false }]
  },
};
