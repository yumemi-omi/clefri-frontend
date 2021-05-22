/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config =  {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@emotion',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    "@emotion/pkg-renaming": "error",
  },
};

module.exports = config
