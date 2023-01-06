module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'react-app',
    'plugin:jsx-a11y/strict',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'multiline-ternary': 0,
    'no-trailing-spaces': 0,
    indent: 0,
    camelcase: 0,
    quotes: 0,
    semi: 0,
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],
  },
}
