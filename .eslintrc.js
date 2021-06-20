/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config =  {
  plugins: [
    '@emotion',
    '@typescript-eslint',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
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
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    "@emotion/pkg-renaming": "error",
  },
};

module.exports = config
